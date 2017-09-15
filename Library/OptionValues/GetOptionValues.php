<?php
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 21/09/2016
 * Time: 10:29
 */

namespace Modules\Dynamicfield\Library\OptionValues;

use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Entities\OptionValue;
use Modules\Dynamicfield\Library\Data\UniqueId;

trait GetOptionValues
{

    /**
     * getFieldTranslation
     *
     * @param $fieldId
     * @param $uniqueId
     *
     * @return array
     */
    function getFieldTranslationByFieldId($fieldId, $toArray = true, $single = false)
    {
        $fieldValue = OptionValue::where('field_id','=',$fieldId)
            ->get();

        if($single == true) {
            $fieldValue = $fieldValue->first();
        }

        $val = (null !== $fieldValue) ? $fieldValue : [];

        if($toArray == true) {
            $val = $val->toArray();
        }
        return $val;
    }



    /**
     * getFieldTranslation
     *
     * @param $fieldId
     * @param $uniqueId
     *
     * @return array
     */
    function getOptionValue($fieldId, $uniqueId, $toArray = true)
    {
        $fieldValue = OptionValue::where('field_id','=',$fieldId)
            ->where('unique_id','=',$uniqueId)
            ->get()
            ->first();
        $val = (null !== $fieldValue) ? $fieldValue : [];

        if($toArray == true) {
            $val = $val->toArray();
            unset($val['field']);
        }
        return $val;
    }




    /**
     * fieldTranslationsByParentLayout
     *
     * get field translations by parent layout
     *
     * @param $parentLayout
     *
     * @return array
     */
    function fieldTranslationsByParentLayout($parentLayout, $toArray = true)
    {
        $fieldValue = OptionValue::where('parent_layout','=',$parentLayout)
            ->get();
            //->first();

        if($toArray == true) {
            return (null !== $fieldValue) ? $fieldValue->toArray() : [];
        }

        return (null !== $fieldValue) ? $fieldValue : [];

    }

    /**
     * getFieldTranslation
     *
     * @param $fieldId
     * @param $uniqueId
     *
     * @return array
     */
    function getFlexibleFieldTranslation($fieldId, $uniqueId, $toArray = true)
    {
        $fieldValue = OptionValue::where('field_id','=',$fieldId)
            ->where('unique_id','=',$uniqueId)
            ->get()
            ->first();
        $val = (null !== $fieldValue) ? $fieldValue : [];

        if($toArray == true) {
            $val = $val->toArray();
            unset($val['field']);
        }
        return $val;
    }

    /**
     * getWysiwygFieldTranslations
     *
     * @return array
     */
    function getWysiwygFieldTranslations()
    {
        $flexibleFields = OptionValue::whereHas('field',function($query){
            $query->where('type','wysiwyg');
        })->get();

        return $flexibleFields;
    }

    /**
     * getEmptyParentLayoutFieldTranslations
     *
     * @return mixed
     */
    function getEmptyParentLayoutFieldTranslations(){
        return OptionValue::where('parent_layout','')->get();
    }


}