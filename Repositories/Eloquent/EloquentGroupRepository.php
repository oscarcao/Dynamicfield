<?php

namespace Modules\Dynamicfield\Repositories\Eloquent;

use DB;
//use Illuminate\Support\Facades\DB;
use Modules\Core\Repositories\Eloquent\EloquentBaseRepository;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Entities\FlexiblecontentField;
use Modules\Dynamicfield\Entities\RepeaterField;
use Modules\Dynamicfield\Entities\Rule;
use Modules\Dynamicfield\Library\Data\ParseChoices;
use Modules\Dynamicfield\Library\Repeaters\RepeaterFieldTranslations;
use Modules\Dynamicfield\Repositories\GroupRepository;

class EloquentGroupRepository extends EloquentBaseRepository implements GroupRepository
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
     * @return \Illuminate\Database\Eloquent\Model|\Modules\Core\Repositories\Eloquent\Model
     */
    public function getGroup()
    {
        return $this->model;
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
    public function saveData($group, $fields, $rules, $isEdit)
    {
        //dd($group, $fields, $rules);
        $bResult      = false;
        $groupId      = !empty($group['id']) ? $group['id'] : 0;

        DB::beginTransaction();

        try {
            $groupModel       = $this->model->firstOrNew(['id' => $groupId]);
            $groupModel->name = $group['name'];
            //$groupModel->template = $group['template'];
            $groupModel->save();
            $groupId = $groupModel->id;

            $this->saveFields($groupId, $fields, $isEdit);
            $this->saveRules($groupId, $rules);

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
    public function saveFields($groupId, $fields, $isEdit)
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
                $fieldModel = Field::firstOrNew(['unique_id' => $field['key']]);

                //dd($fieldModel, $field);

                $fieldModel->group_id      = $groupId;
                $fieldModel->name          = $field['name'];
                $fieldModel->slug          = $field['slug'];
                $fieldModel->type          = $field['type'];
                $fieldModel->order         = $field['order'];
                $fieldModel->parent        = $field['parent'];
                $fieldModel->parent_layout = (isset($field['parent_layout']) ? $field['parent_layout'] : 0);
                $fieldModel->unique_id     = $field['key'];
                $fieldModel->data          = $this->getFieldsForSerializationData($field);
                $fieldModel->save();
                //dd($fieldModel);

            }
        }



        return true;
    }



    /**
     * Save the rules of the dynamic Fields
     *
     * @param $groupId
     * @param $rules
     *
     * @return null
     */
    public function saveRules($groupId, $rules)
    {
        Rule::where('group_id', '=', $groupId)->delete();

        if (count($rules)) {
            foreach ($rules as $rule) {
                $ruleModel = new Rule();
                $strResult = serialize($rule);
                $ruleModel->group_id = $groupId;
                $ruleModel->rule = $strResult;
                $ruleModel->save();
            }
        }
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

            Field::destroy($pluckedIds->toArray());

            //dd($deletedFields,$pluckedIds->toArray(),$pluckedFieldIds->toArray());
            /*
             * so we succeeded deleting fields, now we must go off
             * and find all associated Field Values
             */
            //$this->deleteFieldValues($pluckedFieldIds->toArray());
            $this->deleteFieldValues($deletedFields);

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
    public function deleteFieldValues($fieldUniqueIds)
    {
        DB::beginTransaction();

        $deletedRows = [];

        try {

            array_walk($fieldUniqueIds,function($value, $key){
                //dd('deleteFieldValues array_walk',$key, $value);
                if(RepeaterFieldTranslations::DoWeNeedToUpdate($value) === true){
                    RepeaterFieldTranslations::UpdateFieldTranslations($value);
                }
                $deletedRows[$key][] = FieldTranslation::where('field_id', $value['unique_id'])->delete();
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
                $layoutsToUpdate = FieldTranslation::where('field_id', $value['parentId'])->get();
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
     * get field dat
     *
     * @param $field
     *
     * @return string
     */
    private function getFieldsForSerializationData($field)
    {
        //dd('getFieldsForSerializationData',$field);
        $type        = $field['type'];
        $optionClass = "Modules\Dynamicfield\Library\Enum\Options\\" . ucfirst($type);

        $options        = $optionClass::getKeys();
        $mapped         = $this->mapDataToOptions($options, $field);
        $serializedData = serialize($mapped);

        return $serializedData;
    }

    /**
     * This method maps the incoming field data to the
     * fields of the field type
     *
     * @param $options
     *
     * @return array
     */
    private function mapDataToOptions($options, $field)
    {
        $data = [];

        foreach ($options as $k => $v)
        {
            //$data[$v] = (isset($field[$v])) ? $this->formatOption($field[$v], $v, $field) : '';
            $data[$v] = (isset($field[$v])) ? $field[$v] : '';
        }

        return $data;
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
