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
use Modules\Dynamicfield\Library\FieldTranslations\GetFieldTranslation;

class RepeaterRows
{

    use SortIntoRows, ParseChoices, GetFieldTranslation;

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
    public static function collect($rows){
        return (new static)->handle($rows);
    }

    /**
     * loopThroughRepeaterRows
     *
     * if we need to loop through the repeater rows
     *
     * @param $rows
     *
     * @return mixed
     */
    public function handle($rows)
    {
        //dd('row',$rows);
        $rowsPre = $rows;
        foreach($rows as $key => $row)
        {
            foreach($row as $subKey => $column)
            {
                $columnArr = (array)$column;
                $columnFt  = (array)$columnArr['field_translation'];
                $repeaterBool = ($columnArr['type'] == 'repeater') ? true : false;

                $val = $this->getFieldTranslation($columnFt['field_id'], $columnFt['unique_id'], true);
                $columnArr['field_translation'] = $val;
                //dd($val,$columnArr, $rows[$key][$subKey], $layoutKey);
                $rows[$key][$subKey] = $columnArr;
            }
        }

        //dd('rows',$rows,'rowspre',$rowsPre);

        return $rows;
    }

}