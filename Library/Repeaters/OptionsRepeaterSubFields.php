<?php
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 21/09/2016
 * Time: 10:29
 */

namespace Modules\Dynamicfield\Library\Repeaters;

use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Entities\Option;
use Modules\Dynamicfield\Library\Contracts\Repeaters\RepeaterSubFieldsContract;
use Modules\Dynamicfield\Library\Data\ParseChoices;
use Modules\Dynamicfield\Library\Data\SortDataFields;
use Modules\Dynamicfield\Library\Data\ToArray;
use Modules\Dynamicfield\Library\Fields\FieldTypeSorter;
use Modules\Dynamicfield\Library\FieldTranslations\MissingFieldTranslation;
use Modules\Dynamicfield\Library\FieldTranslations\SortForFront;
use Modules\Dynamicfield\Library\Options\GetOptions;
use Modules\Dynamicfield\Library\Options\OptionsTypeSorter;
use Modules\Dynamicfield\Library\OptionValues\GetOptionValues;

class OptionsRepeaterSubFields implements RepeaterSubFieldsContract {

    use ParseChoices, GetOptions, GetOptionValues, MissingFieldTranslation;

    /**
     * table
     *
     * @var array
     */
    protected $key           = null;
    protected $getRows       = true;
    protected $options       = [];
    protected $getFieldTranslationData;

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
    public static function collect($subField, $getFieldTranslationData, $options, $key)
    {
        $item = (new static($getFieldTranslationData, $options, $key));
        $fields = $item->handle($subField);
        return $fields;
    }


    /**
     * FieldTypeSorter constructor.
     *
     * @param $getFieldTranslationData
     * @param $options
     */
    public function __construct($getFieldTranslationData, $options, $key)
    {
        $this->key                     = $key;
        $this->options                 = $options;
        $this->getFieldTranslationData = $getFieldTranslationData;
    }



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
    public function handle($subField){
        $fieldCollection  = $this->getRepeaterChildren($subField);

        if(is_null($fieldCollection)){
            return $subField;
        }

        if($this->getFieldTranslationData == true){
            $subField['rows'] = $this->sortRepeaterSubFieldsIntoRows($subField, $this->getFieldTranslationData);
        }

        $subField['children'] = $this->sortThroughChildrenFields($fieldCollection->toArray());

        return $subField;
    }

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
    function sortRepeaterSubFieldsIntoRows($field, $getFieldTranslationData)
    {
        $rows = [];

        $updateFieldTranslation = false;

        $rowsLayout = (isset($field['field_translation'])) ? json_decode($field['field_translation']['value']) : null;

        if( empty($rowsLayout) || $rowsLayout == null ) {
            return $rows;
        }

//        if ($this->options['i'] == 1) {
//            dd($field, '$rowsLayout', $rowsLayout, $getFieldTranslationData);
//        }

        // sort through the saved fields repeater layouts
        foreach($rowsLayout as $key => $row)
        {
            $newRow = [];
            foreach($row as $subKey => $column)
            {
                if($getFieldTranslationData == false){

                    if(!isset($column->field_translation->unique_id)){
                        $subField = '';
                    }

                    if(isset($column->field_translation->unique_id)){
                        $subField = $this->getOptionValue($column->unique_id,
                            $column->field_translation->unique_id, false);
                    }
                }

                /*
                 * When getting fields for entity pages
                 */
                if($getFieldTranslationData == true) {

                    if(!isset($column->field_translation->unique_id)){
                        $subField = '';
                    }

                    if(isset($column->field_translation->unique_id)) {
                        //dd('one isset',$field, $column);
                        $field = $this->optionByUniqueIdTranslationUniqueId($column->unique_id,
                            $column->field_translation->unique_id, $toArray = true, $this->getFieldTranslationData);
                        if (empty($field)) {
                            continue;
                        }
                        $subField = (isset($field[0])) ? $field[0] : $field;
                    }
                }
                array_push($newRow, $subField);
            }
            array_push($rows, $newRow);
        }

        $rows = $this->collectFieldsInRows($rows);

        return $rows;
    }

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
    public function collectFieldsInRows($rows)
    {
        $newRows = [];

        foreach ($rows as $row)
        {
            $newRows[] = OptionsTypeSorter::handle($row, $this->getFieldTranslationData, $this->options);
        }

        return $newRows;
    }

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
    public function sortThroughChildrenFields($fieldCollection)
    {
        $subFields = SortDataFields::extractAndSortDataProperty($fieldCollection, $this->getFieldTranslationData);
        $subFields = OptionsTypeSorter::handle($subFields, $this->getFieldTranslationData, $this->options);
        return $subFields;
    }

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
    public function getRepeaterChildren($field)
    {
        $fieldCollection = null;

        $options = $this->options;

        if($this->getFieldTranslationData === true){
            $fieldCollection = Option::where('parent', '=', $field['unique_id'])
                ->orderBy('order')
                ->with(['fieldTranslation' ])
                ->get();

            //dd('$fieldCollection',$fieldCollection);
        }

        if($this->getFieldTranslationData === false){
            $fieldCollection = Option::where('parent', '=', $field['unique_id'])->orderBy('order')->get();
        }

        return $fieldCollection;
    }




}