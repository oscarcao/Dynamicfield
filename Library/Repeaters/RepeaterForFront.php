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

class RepeaterForFront
{
    use ParseChoices, GetFields, GetFieldTranslation, MissingFieldTranslation;

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
                    $subField = FindOrGenerateFieldTranslation::find($field, $column, $rowsLayout);
                    if(!empty($updateFieldTranslation) || !is_null($updateFieldTranslation)){
                        $updateFieldTranslation = true;
                        $column->field_translation->unique_id = $subField['unique_id'];
                        $row[$subKey] = $column;
                    }
                }

                if(isset($column->field_translation->unique_id)){
                    $subField = $this->getFieldTranslation($column->unique_id,
                        $column->field_translation->unique_id, false);
                }

                array_push($newRow, $subField);
            }
            array_push($rows, $newRow);
        }

        if($updateFieldTranslation === true){
            $field['value'] = json_encode($rowsLayout);
            $field->save();
            $updateFieldTranslation = false;
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
            $newRows[] = SortForFront::collect($row);
        }

        return $newRows;
    }


}
