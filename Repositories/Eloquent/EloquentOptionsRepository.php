<?php

namespace Modules\Dynamicfield\Repositories\Eloquent;

use DB;
//use Illuminate\Support\Facades\DB;
use Modules\Core\Repositories\Eloquent\EloquentBaseRepository;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Entities\FlexiblecontentField;
use Modules\Dynamicfield\Entities\Option;
use Modules\Dynamicfield\Entities\OptionValue;
use Modules\Dynamicfield\Entities\RepeaterField;
use Modules\Dynamicfield\Entities\Rule;
use Modules\Dynamicfield\Library\Data\ParseChoices;
use Modules\Dynamicfield\Library\Fields\FieldsForSerialization;
use Modules\Dynamicfield\Library\Repeaters\RepeaterFieldTranslations;
use Modules\Dynamicfield\Library\Repeaters\RepeaterOptionValues;
use Modules\Dynamicfield\Repositories\OptionsRepository;

class EloquentOptionsRepository extends EloquentBaseRepository implements OptionsRepository
{

    use ParseChoices;

    /**
     * @param int $id
     *
     * @return object
     */
    public function find($id)
    {
        return $this->model->find($id);
    }



    /**
     * @return \Illuminate\Support\Collection|mixed|static
     */
    public function getFields()
    {
        return $this->model->Fields;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function all()
    {
        return $this->model->orderBy('id', 'DESC')->get();
    }

    /**
     * So we wish to save data, the data is split out to go into
     * group, fields and rules
     *
     * @param $group
     * @param $fields
     * @param $rules
     * @param $isEdit
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function saveData($fields, $isEdit)
    {
        //dd( $fields, $rules);
        $bResult      = false;

        DB::beginTransaction();

        try {
            $this->saveFields( $fields, $isEdit);

            DB::commit();
            $bResult = true;

        } catch (\Exception $ex) {
            DB::rollback();
            //dd('exception!',$ex);
            $bResult = false;
        }

        return $bResult;
    }

    /**
     * Save the fields
     *
     * @param $groupId
     * @param $fields
     * @param $isEdit
     *
     * @return null
     */
    public function saveFields( $fields, $isEdit)
    {
        unset($fields['field_clone']);
        $flexibleContentFields = [];
        $this->fieldsToSave = $fields;
        //dd($fields, $groupId);
        if (count($fields)) {
            foreach ($fields as $field) {

                /*
                 * if the field has not been updated no need to save it
                 * will also change js to not save but this is sense
                 * checking to ensure it does not save again
                 */
                $optionFieldModel = Option::firstOrNew(['unique_id' => $field['key']]);

                //dd($fieldModel, $field);

                $optionFieldModel->name          = $field['name'];
                $optionFieldModel->slug          = $field['slug'];
                $optionFieldModel->type          = $field['type'];
                $optionFieldModel->order         = $field['order'];
                $optionFieldModel->parent        = $field['parent'];
                $optionFieldModel->parent_layout = (isset($field['parent_layout']) ? $field['parent_layout'] : 0);
                $optionFieldModel->unique_id     = $field['key'];
                $optionFieldModel->data          = FieldsForSerialization::getFieldsForSerializationData($field);
                $optionFieldModel->save();
                //dd($optionFieldModel);

            }
        }
        return true;
    }




    /**
     * delete fields
     *
     * @param $strList
     *
     * @return int
     */
    public function deleteFields($deletedFields)
    {
        DB::beginTransaction();

        try {

            //dd($deletedFields);
            $collection = collect($deletedFields);

            $pluckedIds = $collection->pluck('id');
            $pluckedIds->all();

            $pluckedFieldIds = $collection->pluck('unique_id');
            $pluckedFieldIds->all();

            Option::destroy($pluckedIds->toArray());

            /*
             * so we succeeded deleting fields, now we must go off
             * and find all associated Field Values
             */
            $this->deleteOptionValues($deletedFields);

            DB::commit();
            $deletedResult = true;

        } catch (\Exception $ex) {
            DB::rollback();
            //dd('exception!',$ex);
            $deletedResult = false;
        }

        return $deletedResult;
    }

    /**
     * delete field values associated with the field
     * we do not wish to keep this data as their is no way to
     * get it in future if the field no longer exists
     *
     * @param $strList
     *
     * @return int
     */
    public function deleteOptionValues($fieldUniqueIds)
    {
        DB::beginTransaction();

        $deletedRows = [];

        try {

            array_walk($fieldUniqueIds,function($value, $key){
                //dd('deleteFieldValues array_walk',$key, $value);
                if(RepeaterOptionValues::DoWeNeedToUpdate($value) == true){
                    RepeaterOptionValues::UpdateFieldTranslations($value);
                }
                $deletedRows[$key][] = OptionValue::where('field_id', $value['unique_id'])->delete();
            });

            DB::commit();
            $deletedResult = true;

        } catch (\Exception $ex) {
            DB::rollback();
            //dd('exception!',$ex);
            $deletedResult = false;
        }

        $deletedRows['result'] = $deletedResult;

        return $deletedRows;
    }


    /**
     * updateLayoutFieldValues
     *
     * so if a layout has been updated/deleted then we need to go find
     * all field values and update them
     *
     * @param $layouts
     *
     * @return array
     */
    public function updateLayoutFieldValues($layouts)
    {
        DB::beginTransaction();

        $updatedRows = [];

        try {
            // get the fields of the layout values to update
            array_walk($layouts,function($value, $key){
                $layoutsToUpdate = OptionValue::where('field_id', $value['parentId'])->get();
                // loop through the data value layout
                $updatedRows[$key][] = $this->loopThroughFlexResults($layoutsToUpdate,$value);
            });

            DB::commit();
            $deletedResult = true;

        } catch (\Exception $ex) {
            DB::rollback();
            //dd('exception!',$ex);
            $deletedResult = false;
        }

        $updatedRows['result'] = $deletedResult;

        return $updatedRows;
    }







    /**
     * loopThroughFlexResults
     *
     * @param $layoutsToUpdate
     * @param $layout
     *
     * @return mixed
     */
    protected function loopThroughFlexResults($layoutsToUpdate,$layout)
    {
        // remove the now delete layout and update
        $updated = $layoutsToUpdate->map(function ($item, $key) use($layout) {

            // json_decode to get field layouts we need to loop through
            $fieldValue = json_decode($item['value']);
            //dd('loopThroughUpdateLayoutData array_walk',$key, $item, $fieldValue,$layout);

            // loop through the data value layout
            $newFieldValue = $this->loopThroughLayoutsDeleteFields($fieldValue,$layout);

            // json_encode it once again
            $item['value'] = json_encode($newFieldValue);

            // save the updated model
            $item->save();

            return $item;
        });

        return $updated;
    }



    /**
     * loopThroughUpdateLayoutData
     *
     * @param $fieldValueLayouts
     * @param $layout
     *
     * @return mixed
     */
    protected function loopThroughLayoutsDeleteFields($fieldValueLayouts,$layout)
    {
        // remove the now deleted layout and update
        $newFieldValue = array_filter($fieldValueLayouts,function($value) use($layout){
            return ($value->layoutParentKey != $layout['key']);
        });

        return $newFieldValue;
    }
}
