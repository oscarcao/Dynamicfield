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
use Modules\Dynamicfield\Library\Data\ParseChoices;
use Modules\Dynamicfield\Library\Data\SortDataFields;
use Modules\Dynamicfield\Library\Data\ToArray;
use Modules\Dynamicfield\Library\Fields\FieldTypeSorter;
use Modules\Dynamicfield\Library\Fields\GetFields;
use Modules\Dynamicfield\Library\FieldTranslations\GetFieldTranslation;
use Modules\Dynamicfield\Library\FieldTranslations\MissingFieldTranslation;
use Modules\Dynamicfield\Library\FieldTranslations\SortForFront;
use Modules\Dynamicfield\Library\Options\GetOptions;
use Modules\Dynamicfield\Library\OptionValues\GetOptionValues;
use Modules\Dynamicfield\Library\OptionValues\OptionsForFront;

class OptionsRepeaterForFront
{
    use ParseChoices, GetOptions, GetOptionValues, MissingFieldTranslation;

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
    public static function collect($fieldTranslation){
        return (new static)->sortRepeaterIntoRows($fieldTranslation);
    }


    /**
     * We have all our repeater fields but they
     * need to be put into the correct rows
     *
     * @param $fieldInfo
     * @param $subFields
     *
     * @return mixed
     */
    protected function sortRepeaterIntoRows($fieldTranslation)
    {
        return $this->sortRepeaterSubFieldsIntoRows($fieldTranslation);
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
    function sortRepeaterSubFieldsIntoRows($field)
    {
        $rows = [];

        $updateFieldTranslation = false;


        $rowsLayout = (isset($field['value'])) ? json_decode($field['value']) : null;


        if( empty($rowsLayout) || $rowsLayout == null ) {
            return $rows;
        }

        // sort through the saved fields repeater layouts
        foreach($rowsLayout as $key => $row)
        {
            $newRow = [];
            foreach($row as $subKey => $column)
            {
                if(!isset($column->field_translation->unique_id)){
                    $subField = '';
                }

                if(isset($column->field_translation->unique_id)){
                    $subField = $this->getOptionValue($column->unique_id,
                        $column->field_translation->unique_id, false);
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
            $newRows[] = OptionsForFront::collect($row);
        }

        return $newRows;
    }


}
