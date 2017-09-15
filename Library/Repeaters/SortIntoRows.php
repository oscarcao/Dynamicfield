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
use Modules\Dynamicfield\Library\Data\SortDataFields;

trait SortIntoRows
{
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
    function sortRepeaterSubFieldsIntoRows($field,$fieldCollection)
    {
        $rows = [];

        //return [];
        if($this->options['i'] == 1) {
            dd($field, $fieldCollection);
        }
        // 1. loop through the sub fields of the repeater
        foreach($fieldCollection as $key => $value)
        {
            $subField  = $value;
            $subValues = $subField['repeater_field_translation'];
            $count     = count($subValues);
            $subField  = SortDataFields::extractAndSortDataProperty([$value] ,true);
            $subField  = $subField[0];
            unset($subField['repeater_field_translation']);

            // 2. For each sub field get the sub repeater field for the row
            foreach($subValues as $subKey => $subValue)
            {
                $theFieldAndValue = $subField;
                $theFieldAndValue['field_translation'] = $subValue;
                $rows[$subKey][$key] = $theFieldAndValue;
                //dd('$subField',$subField,'$subValue',$subValue, '$subValues',$subValues);
            }
            //dd($rows, $key, $value, $subField, $subValues, $count);
        }
        //dd($field,$fieldCollection, $rows);

        //$field['rows'] = $rows;
        //return $field;
        return $rows;
    }
}