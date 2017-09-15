<?php
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 24/09/2016
 * Time: 17:18
 */

namespace Modules\Dynamicfield\Library\Repeaters;

use DB;
use Modules\Dynamicfield\Library\Contracts\Repeaters\RepeaterValuesContract;
use Modules\Dynamicfield\Library\Fields\GetFields;
use Modules\Dynamicfield\Library\FieldTranslations\GetFieldTranslation;

class RepeaterFieldTranslations implements RepeaterValuesContract
{
    use GetFieldTranslation, GetFields;

    /**
     * DoWeNeedToUpdate
     *
     * Can we proceed?
     *
     * @param $field
     * @param $isEdit
     *
     * @return bool
     */
    public static function DoWeNeedToUpdate($field)
    {
        if($field['type'] !== 'repeater')
        {
            return false;
        }

        if($field['parent'] != 0 || $field['parent'] != '')
        {
            return true;
        }

        return false;
    }

    /**
     * UpdateFieldTranslations
     * @param $field
     *
     * @return null
     */
    public static function UpdateFieldTranslations($field)
    {
        return (new static)->handle($field);
    }


    /**
     * handle
     *
     * handle this
     *
     * @return mixed
     */
    public function handle($field)
    {
        $repeaterField = $this->fieldsByParent($field, $toArray = true, $single = true);

        if(is_null($repeaterField) || empty($repeaterField)){
            return null;
        }

        //dd($repeaterField);
        $repeaterFieldTranslations = $this->getFieldTranslationByFieldId($repeaterField['unique_id'], $toArray = false, $single = true);
        //dd('$field',$field, '$repeaterField',$repeaterField, '$repeaterFieldTranslations',$repeaterFieldTranslations);

        $rows    = json_decode($repeaterFieldTranslations['value']);
        $rowsPre = $rows;
        $rowsNew = [];

        foreach($rows as $row)
        {
            $newRow = [];
            foreach($row as $key => $column)
            {
                if($column->unique_id !== $field['unique_id']){
                    array_push($newRow, $row[$key]);
                }
            }
            array_push($rowsNew, $newRow);
        }
        //dd($field, $rows,$rowsPre, $rowsNew);

        $repeaterFieldTranslations['value'] = json_encode($rowsNew);

        $repeaterFieldTranslations->save();

        return true;
    }
}