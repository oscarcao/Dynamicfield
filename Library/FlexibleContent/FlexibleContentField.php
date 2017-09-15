<?php
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 21/09/2016
 * Time: 10:29
 */

namespace Modules\Dynamicfield\Library\FlexibleContent;

use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Library\Data\ParseChoices;
use Modules\Dynamicfield\Library\Data\SortDataFields;
use Modules\Dynamicfield\Library\Data\ToArray;
use Modules\Dynamicfield\Library\Fields\FieldTypeSorter;
use Modules\Dynamicfield\Library\Fields\GetFields;
use Modules\Dynamicfield\Library\FieldTranslations\GetFieldTranslation;
use Modules\Dynamicfield\Library\Repeaters\RepeaterRows;
use Modules\Dynamicfield\Library\Repeaters\RepeaterSubFields;

class FlexibleContentField {

    use ParseChoices, GetFields, GetFieldTranslation;

    /**
     * table
     *
     * @var array
     */
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
    public static function collect($subField, $getFieldTranslationData, $options){
        $item = (new static($getFieldTranslationData, $options));
        $fields = $item->collectLayoutsAndLayoutBlocks($subField);
        return $fields;
    }

    /**
     * FieldTypeSorter constructor.
     *
     * @param $getFieldTranslationData
     * @param $options
     */
    public function __construct( $getFieldTranslationData, $options )
    {
        $this->options                 = $options;
        $this->getFieldTranslationData = $getFieldTranslationData;
    }


    /**
     * collectLayoutBlocks
     *
     * Lets go get the layoutBlocks
     *
     * @param $field
     *
     * @return mixed
     */
    public function collectLayoutsAndLayoutBlocks($field)
    {
        $field['layouts'] = (isset($field['layouts']) && !empty($field['layouts']) ) ? $this->collectLayoutsSubFields($field['layouts']) : [];
        if($this->getFieldTranslationData == true) {
            $field['layoutBlocks'] = (isset($field['field_translation'])) ? $this->loopThroughLayoutBlocks($field) : [];
        }

        return $field;
    }

    /**
     * collectLayoutsSubFields
     *
     * @param $layouts
     *
     * @return mixed
     */
    private function collectLayoutsSubFields($layouts)
    {
        /*
         * loop through the array of saved layouts
         */
        foreach($layouts as $key => $layout)
        {
            $layouts[$key]['fields'] = [];
            $layouts[$key]['fields'] = $this->fieldByParentLayout($parentLayout = $layout['key'], $toArray = true);
            $layouts[$key]['fields'] = FieldTypeSorter::handle(
                SortDataFields::extractAndSortDataProperty($layouts[$key]['fields'],
                $this->getFieldTranslationData), $this->getFieldTranslationData,
                $this->options
            );
        }

        return $layouts;
    }

    /**
     * We go through layouts of the flexible content
     * then loop through all fields with parent != 0
     *
     * if the fields parent_layout matches the layout id
     * then we assign that field into the layout
     *
     * Refactor needed?
     *
     * @param $field
     *
     * @return mixed
     */
    private function loopThroughLayoutBlocks($field)
    {
        $layoutBlocks = json_decode($field['field_translation']['value']);
        $layouts      = [];

        /*
         * if we have empty then return empty
         * array to send back
         */
        if(is_null($layoutBlocks)){
            return $layouts;
        }

        /*
         * loop through the array of saved layout blocks
         */
        foreach($layoutBlocks as $key => $layout)
        {
            $layoutAsArray = (array)$layout;
            $layoutAsArray['fields'] = $this->fieldByTranslationParentLayout($parentLayout = $layout->key, $toArray = true);

            if(count($layoutAsArray['fields']) == 0) continue;

            $sortedFields = SortDataFields::extractAndSortDataProperty($layoutAsArray['fields'], $this->getFieldTranslationData);
            $layoutAsArray['fields'] = FieldTypeSorter::handle($sortedFields, $this->getFieldTranslationData, $this->options);
            array_push($layouts, $layoutAsArray);
        }

        return $layouts;
    }


}