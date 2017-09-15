<?php
namespace Modules\Dynamicfield\Library\Data;

use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;

class SortDataFields {

    use ParseChoices;

    protected $getFieldTranslationData;

    /**
     * When getting fields, output serialized data
     * property to merge into the object
     *
     * @param $fields
     *
     * @return array
     */
    public static function extractAndSortDataProperty($fields, $getFieldTranslationData)
    {
        return (new static)->handle($fields, $getFieldTranslationData);
    }

    /**
     * @param $fields
     * @return array
     */
    public function handle($fields, $getFieldTranslationData)
    {
        $this->getFieldTranslationData = $getFieldTranslationData;

        if(is_array($fields) && !is_object($fields))
        {
            return array_map(function($field){
                $result = $this->flattenArray($field);
                return $result;
            }, $fields);
        }


        return $fields->map(function ($field, $key) {
            $dataField = $field['data'];
            unset($field['data']);
            $dataProperty = (is_array($dataField)) ? $dataField : [];
            $result       = array_merge($field->toArray(), $dataProperty);
            $result['save'] = false;

            if(true === $this->canWeDecodeTheChoices($result))
            {
                $result['choices'] = $this->decodeChoices($result['choices']);
            }
            return $result;
        });
    }

    /**
     * flattenArray
     *
     * @param $field
     *
     * @return array
     */
    public function flattenArray($field)
    {
        $dataField = $field['data'];
        unset($field['data']);
        $dataProperty   = (is_array($dataField)) ? $dataField : [];
        $result         = array_merge($field, $dataProperty);
        $result['save'] = false;

        if(true === $this->canWeDecodeTheChoices($result))
        {
            //dd('are we true???? ', $result, $this->decodeChoices($result['choices']));
            $result['choices'] = $this->decodeChoices($result['choices']);
        }
        return $result;
    }

    /**
     * If we have choices to decode then lets decode them.
     *
     * @param $result
     *
     * @return bool
     */
    public function canWeDecodeTheChoices($result)
    {
        // if group fields page, just return the string as is /////
       // if(property_exists($this,'getFieldTranslationData') && $this->getFieldTranslationData === false) {
        if($this->getFieldTranslationData === false) {
            return false;
        }

        // if not the field types then no need to //////
        if(!in_array($result['type'],['select','checkbox','radio'])){
            return false;
        }

        if( !isset($result['choices']) ) {
            //dd($result);
            return false;
        }

        if( !method_exists($this,'decodeChoices') ) {
            return false;
        }

        return true;
    }

}