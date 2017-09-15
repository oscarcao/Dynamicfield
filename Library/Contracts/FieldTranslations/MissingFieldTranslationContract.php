<?php
namespace Modules\Dynamicfield\Library\Contracts\FieldTranslations;
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 05/08/2016
 * Time: 11:15
 */


interface MissingFieldTranslationContract
{

    /**
     * isEmptyFieldTranslationValue
     *
     * If we have an empty field translation value.
     * We must also ensure does not have a repeater_field_translation
     * property as this would mean it is a repeater
     * and thus is exempt from this
     *
     * @param $field
     *
     * @return bool
     */
    public function isEmptyFieldTranslationValue($field);


    /**
     * createMissingTranslationValue
     *
     * can we find the missing Field Translation Value
     * Based on its value and the fields unique id
     *
     * @param $fieldAsArray
     * @param $fieldTranslationAsArray
     *
     * @return array
     */
    public function createMissingTranslationValue($fieldAsArray, $fieldTranslationAsArray);

    /**
     * generateMissingFieldTranslationValue
     *
     * if their is a need to generate a Field Translation value
     * then let us create one
     *
     * @return static
     */
    public function generateMissingFieldTranslationValue($field);


}