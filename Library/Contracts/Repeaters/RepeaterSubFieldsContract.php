<?php

namespace Modules\Dynamicfield\Library\Contracts\Repeaters;
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 13/10/2016
 * Time: 13:52
 */
interface RepeaterSubFieldsContract
{

    /**
     * collect
     *
     * go collect the fields
     *
     * @param $subField
     * @param $options
     * @param $getFieldTranslationData
     *
     * @return mixed
     */
    public static function collect($subField, $getFieldTranslationData, $options, $key);

    /**
     * FieldTypeSorter constructor.
     *
     * @param $getFieldTranslationData
     * @param $options
     */
    public function __construct($getFieldTranslationData, $options, $key);

    /**
     * handle
     *
     * handle this action
     *
     * @param $subField
     * @param $options
     * @param $getFieldTranslationData
     *
     * @return Array
     */
    public function handle($subField);

    /**
     * sortRepeaterSubFieldsIntoRows
     *
     * We want the sub repeater fields in a
     * row format to make it easier for
     * Vue entities page to work
     *
     * @param $field
     * @param $fieldCollection
     *
     * @return Array
     */
    function sortRepeaterSubFieldsIntoRows($field, $getFieldTranslationData);


    /**
     * collectFieldsInRows
     *
     * so we now need to run the whole process again!
     * for each row in rows we can handle via FieldTypeSorter
     *
     * @uses FieldTypeSorter
     *
     * @param $rows
     *
     * @return array
     */
    public function collectFieldsInRows($rows);

    /**
     * sortThroughChildrenFields
     *
     * we wish to sort through the repeaters children and
     * put them into order in our parent field
     *
     * @param $fieldCollection
     *
     * @return array|mixed
     */
    public function sortThroughChildrenFields($fieldCollection);

    /**
     * getRepeaterFieldCollection
     *
     * get the repeater fields collection
     * and wether we get them with the field Translation Data
     *
     * @param $field
     * @param $options
     *
     * @return null
     */
    public function getRepeaterChildren($field);
}