<?php
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 21/09/2016
 * Time: 10:29
 */

namespace Modules\Dynamicfield\Library\FieldTranslations;

use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Library\Data\UniqueId;

trait GetFieldTranslation
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
        $fieldValue = FieldTranslation::where('field_id','=',$fieldId)
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
     * getFieldTranslationByFieldIdEntityId
     *
     * @param $fieldId
     * @param $entityId
     * @param $uniqueId
     *
     * @return array
     */
    function getFieldTranslationByFieldIdEntityId($fieldId, $entityId, $toArray = true, $single = false)
    {
        $fieldValue = FieldTranslation::where('field_id',$fieldId)
            ->where('entity_field_id',$entityId)
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
    function getFieldTranslation($fieldId, $uniqueId, $toArray = true)
    {
        $fieldValue = FieldTranslation::where('field_id','=',$fieldId)
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
        $fieldValue = FieldTranslation::where('parent_layout','=',$parentLayout)
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
        $fieldValue = FieldTranslation::where('field_id','=',$fieldId)
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
        $flexibleFields = FieldTranslation::whereHas('field',function($query){
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
        return FieldTranslation::where('parent_layout','')->get();
    }


}