<?php
namespace Modules\Dynamicfield\Library\Options;

use DB;
use Modules\Dynamicfield\Entities\Entity;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Entities\Option;
use Modules\Dynamicfield\Library\Data\SortDataFields;
use Modules\Dynamicfield\Library\Entity\GetEntityModel;

trait GetOptions {

    /**
     * fieldByTranslationParentLayout
     *
     * get fields where the fieldTranslation relationship's
     * parent layout equals
     *
     * @param $parentLayout
     *
     * @return mixed
     */
    function optionByUniqueIdTranslationUniqueId($fieldUniqueId, $fieldTranslationUniqueId, $toArray = true, $getFieldTranslationData)
    {
        $fieldValue = Option::where('unique_id', $fieldUniqueId)
            ->with(['fieldTranslation' => function ($query) use($fieldUniqueId, $fieldTranslationUniqueId) {
                $query->where('unique_id', $fieldTranslationUniqueId);
            }])
            ->orderBy('order','asc')
            ->get();

        if($toArray == true) {
            return (null !== $fieldValue) ? SortDataFields::extractAndSortDataProperty($fieldValue->toArray(), $getFieldTranslationData) : [];
        }

        return (null !== $fieldValue) ? $fieldValue : [];
    }

    /**
     * fieldByParent
     *
     * get fields where the field's
     * parent equals
     *
     * @param $parentLayout
     *
     * @return mixed
     */
    function fieldsByParent($parent, $toArray = true, $single = false)
    {
        $fieldValue = Option::where('unique_id', $parent)
            ->where('type','repeater')
            ->orderBy('order','asc')
            ->get();

        if($single == true) {
            $fieldValue = $fieldValue->first();
        }

        if($toArray == true) {
            return (null !== $fieldValue) ? $fieldValue->toArray() : [];
        }

        return (null !== $fieldValue) ? $fieldValue : [];
    }

    /**
     * fieldByParentLayout
     *
     * get fields where the field's
     * parent layout equals
     *
     * @param $parentLayout
     *
     * @return mixed
     */
    function fieldByParentLayout($parentLayout, $toArray = true)
    {

        $fieldValue = Option::where('parent_layout', $parentLayout)
            ->orderBy('order','asc')
            ->get();

        //dd($parentLayout,$fieldValue);
        if($toArray == true) {
            return (null !== $fieldValue) ? $fieldValue->toArray() : [];
        }

        return (null !== $fieldValue) ? $fieldValue : [];
    }


    /**
     * fieldByTranslationParentLayout
     *
     * get fields where the fieldTranslation relationship's
     * parent layout equals
     *
     * @param $parentLayout
     *
     * @return mixed
     */
    function fieldByTranslationParentLayout($parentLayout, $toArray = true)
    {

        $fieldValue = Option::whereHas('fieldTranslation', function ($query) use($parentLayout) {
            $query->where('parent_layout', $parentLayout);
        })
            ->with(['fieldTranslation' => function ($query) use($parentLayout) {
                $query->where('parent_layout', $parentLayout);
            }])
            ->orderBy('order','asc')
            ->get();


        if($toArray == true) {
            return (null !== $fieldValue) ? $fieldValue->toArray() : [];
        }

        return (null !== $fieldValue) ? $fieldValue : [];
    }

    /**
     * getEmptyParentLayoutFields
     *
     * @return mixed
     */
    function getEmptyParentLayoutFields(){
        return Option::where('parent_layout','')->orderBy('order','asc')->get();
    }
}