<?php
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 21/09/2016
 * Time: 10:29
 */

namespace Modules\Dynamicfield\Library\Repeaters;


use Modules\Dynamicfield\Library\FieldTranslations\GetFieldTranslation;
use Modules\Dynamicfield\Library\FieldTranslations\MissingFieldTranslation;

class FindOrGenerateFieldTranslation
{

    use MissingFieldTranslation, GetFieldTranslation;

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
    public static function find($fieldTranslation, $column, $rowsLayout){
        return (new static)->findOrGenerateFieldTranslation($fieldTranslation, $column, $rowsLayout);
    }

    /**
     * findOrGenerateFieldTranslation
     *
     * find the missing field or generate a new one then tell
     * method calling this one to update parent fieldTranslation
     *
     * @param $fieldTranslation
     * @param $column
     * @param $rowsLayout
     *
     * @return void|static
     */
    private function findOrGenerateFieldTranslation($fieldTranslation, $column, $rowsLayout)
    {
        $matchedFieldTranslations = $this->getFieldTranslationByFieldIdEntityId($column->unique_id, $fieldTranslation['entity_field_id']);

        if(!is_null($matchedFieldTranslations)){
            $matchedFieldTranslation = $this->findTheMatchInCurrentRows($rowsLayout, $matchedFieldTranslations);

            if(!empty($matchedFieldTranslation) || !is_null($matchedFieldTranslation)){
                return $matchedFieldTranslation;
            }
        }

        return $this->generateMissingFieldTranslationValue($fieldTranslation, $fieldTranslation['entity_field_id']);
    }

    /**
     * findTheMatchInCurrentRows
     *
     * loop through the rows layout in repeater field translation
     * pick off/unset currently matchedFieldTranslations and if
     * one remains then that is the missing field
     *
     * if none then return null
     *
     * @param $rowsLayout
     * @param $matchedFieldTranslations
     *
     * @return array
     */
    private function findTheMatchInCurrentRows($rowsLayout, $matchedFieldTranslations){

        foreach($rowsLayout as $key => $row) {
            foreach ($row as $subKey => $column) {
                $matchedFieldTranslations = $this->doesColumnMatchFieldTranslations($column, $matchedFieldTranslations);
            }
        }

        if( !empty($matchedFieldTranslations) && count($matchedFieldTranslations) == 1){
            return array_collapse($matchedFieldTranslations);
        }

        return null;
    }

    /**
     * doesColumnMatchFieldTranslations
     *
     * if it does then unset it
     *
     * @param $column
     * @param $matchedFieldTranslations
     *
     * @return mixed
     */
    private function doesColumnMatchFieldTranslations($column, $matchedFieldTranslations)
    {
        foreach($matchedFieldTranslations as $key => $fieldTranslation){
            if(isset($column->field_translation->unique_id)){
                if( $fieldTranslation['field_id'] == $column->unique_id && $fieldTranslation['unique_id'] == $column->field_translation->unique_id ){
                    unset($matchedFieldTranslations[$key]);
                }
            }
        }

        return $matchedFieldTranslations;
    }


}
