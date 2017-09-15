<?php

namespace Modules\Dynamicfield\Repositories\Eloquent;

use DB;
use Modules\Core\Repositories\Eloquent\EloquentBaseRepository;
use Modules\Dynamicfield\Entities\Entity;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Entities\Option;
use Modules\Dynamicfield\Entities\OptionValue;
use Modules\Dynamicfield\Library\Contracts\Data\WysiwygDataContract;
use Modules\Dynamicfield\Library\Data\FormatFieldValueToSave;
use Modules\Dynamicfield\Library\Data\WysiwygData;
use Modules\Dynamicfield\Library\FieldTranslations\SortForFront;
use Modules\Dynamicfield\Repositories\OptionValuesRepository;
use Modules\Media\Entities\File;

class EloquentOptionValuesRepository extends EloquentBaseRepository implements OptionValuesRepository
{

    private $entityModel;

    /**
     * @param int $id
     *
     * @return object
     */
    public function find($id)
    {
        return $this->model->find($id);
    }


    public function modelCreate($model, $data)
    {
        // TODO: Implement modelCreate() method.
    }


    /**
     * Field Values data we need to delete/remove
     *
     * @param $data
     */
    public function deleteFieldValuesData($data)
    {
        //dd($data,$data['cdf-deleted']);
        if( !isset($data['cdf-deleted']) || count($data['cdf-deleted']) === 0 )
        {
            return;
        }

        DB::beginTransaction();

        try {
            $deleted = [];

            foreach($data['cdf-deleted'] as $key => $value)
            {
                $deleted[] = OptionValue::where('unique_id', $key)->delete();
            }

            DB::commit();

            return [
                'success'  => true,
                'message'  => 'We have successfully deleted those fields',
                'data'     => $deleted
            ];

        } catch (\Exception $e) {
            DB::rollback();
            return [
                'success'  => false,
                'message'  => 'whoops: ' . $e->getMessage() . ' ' . $e->getLine()  . ' ' .  $e->getFile(),
                'data'     => null
            ];
        }

    }


    /**
     * When saving specific field values (field_translations)
     * we also can delete here
     *
     * @param $entity
     * @param $data
     */
    public function saveFieldsData($data)
    {
        //dd('saveFieldsData', $data);
        if( !isset($data['cdf']) || count($data['cdf']) === 0 )
        {
            return null;
        }

        DB::beginTransaction();

        try {
            /*
             * remember look for form fields in page with name="cdf[]"
             */
            foreach ($data['cdf'] as $k => $v) {

                /*
                 * if nowt is set then let it be
                 */
                if (false === FormatFieldValueToSave::weCanNotSaveThisFieldValueToDb($k,$v)) {
                    continue;
                }

                $field = $this->getField($k, $v['type']);

                $this->updateFieldTranslation($field, $k, $v);
            }

            DB::commit();

            return [
                'success'  => true,
                'message'  => 'We have successfully updated/added those fields',
                'data'     => null
            ];

        } catch (\Exception $e) {
            DB::rollback();
            //dd('exception!',$e);
            return [
                'success'  => false,
                'message'  => 'whoops: ' . $e->getMessage() . ' ' . $e->getLine()  . ' ' .  $e->getFile(),
                'data'     => null
            ];
        }

    }

    /**
     * update FieldTranslation entity
     *
     * @param $field
     * @param $entity
     * @param $k
     * @param $v
     */
    public function updateFieldTranslation($field, $k, $v)
    {
        /*
         * laravel can create it or get it
         */
        $fieldTranslation = OptionValue::firstOrNew(['unique_id' => $k]);
        $fieldTranslation->locale           = locale();
        $fieldTranslation->value            = FormatFieldValueToSave::formatSavedValue($v);
        $fieldTranslation->unique_id        = $k;
        $fieldTranslation->field_id         = $v['field_id'];
        $fieldTranslation->parent_layout    = $v['parent_layout'];
        $fieldTranslation->parent           = $v['parent'];
        //dd($this->model);
        $fieldTranslation->save();

    }



    /**
     * Get the field data of what we are inputting
     *
     * @param $k
     * @param $type
     *
     * @return mixed
     */
    private function getField($k, $type)
    {
        return Option::where(['unique_id' => $k, 'type' => $type])->get()->first();
    }


    /**
     * When getting field values for front end page
     *
     * @param $page
     * @param $locale
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getFieldValues($entity, $locale)
    {
        $entityType   = get_class($entity);
        return $this->entityModel = Entity::getByEntityId($entity->id,$entityType, $locale);
    }

    /**
     * sort the Fields For what will be used on Front template into format similar to ACF uses
     *
     * @param null $fields
     *
     * @return null
     */
    public function sortFieldsForFront($fields = null)
    {
        if($fields == null){
            return [];
        }

        return SortForFront::collect($fields);
    }








}