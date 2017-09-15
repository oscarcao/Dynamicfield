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

trait MissingFieldTranslation
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
    public function isEmptyFieldTranslationValue($field)
    {
        if($this->getFieldTranslationData === false){
            return false;
        }

        if(in_array($field['type'],['flexiblecontent','repeater'])){
            return false;
        }

        if(isset($field['field_translation']) && $field['field_translation'] !== null){
            return false;
        }

        if(isset($field['repeater_field_translation'])){
            return false;
        }

        return true;
    }

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
    public function createMissingTranslationValue($fieldAsArray, $fieldTranslationAsArray)
    {
        $field = FieldTranslation::where('value', $fieldTranslationAsArray['value'])
            ->where('field_id',$fieldAsArray['unique_id'])
            ->get();

        //dd('$field',$field, '$fieldAsArray',$fieldAsArray, '$fieldTranslationAsArray',$fieldTranslationAsArray);
        if(null !== $field)
        {
            $fieldAsArray['field_translation'] = $field->first()->toArray();
        }

        if(null === $field)
        {
            $fieldAsArray['field_translation'] = $this->generateMissingFieldTranslationValue($fieldAsArray);
        }

        return $fieldAsArray;
    }

    /**
     * generateMissingFieldTranslationValue
     *
     * if their is a need to generate a Field Translation value
     * then let us create one
     *
     * @return static
     */
    public function generateMissingFieldTranslationValue($field, $entityId = null)
    {
        if($entityId == null) {
            $entityId = (property_exists($this, 'options')) ? $this->options['entity_id'] : '';
        }
        $uniqueId = UniqueId::generate('field_');
        $newFieldAttributes = [
            'entity_field_id'   => $entityId,
            'locale'            => locale(),
            'value'             => '',
            'field_id'          => $field['unique_id'],
            'unique_id'         => $uniqueId,
            'parent'            => $field['parent'],
            'parent_layout'     => $field['parent_layout']
        ];

        $newField = FieldTranslation::create($newFieldAttributes);

        return $newField;
    }

}