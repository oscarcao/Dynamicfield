<?php
namespace Modules\Dynamicfield\Library\Fields;

use DB;
use Modules\Dynamicfield\Entities\Entity;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Library\Contracts\Sorting\TypeSorter;
use Modules\Dynamicfield\Library\Data\ToArray;
use Modules\Dynamicfield\Library\Entity\GetEntityModel;
use Modules\Dynamicfield\Library\FieldTranslations\MissingFieldTranslation;
use Modules\Dynamicfield\Library\FlexibleContent\FlexibleContentField;
use Modules\Dynamicfield\Library\Repeaters\RepeaterSubFields;

class FieldTypeSorter implements TypeSorter {

    use MissingFieldTranslation;

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
    public static function handle($fields, $getFieldTranslationData, $options){
        $item   = (new static( $getFieldTranslationData, $options));
        $fields = $item->loopThroughFields($fields);
        return $fields;
    }

    /**
     * FieldTypeSorter constructor.
     *
     * @param $getFieldTranslationData
     * @param $options
     */
    public function __construct($getFieldTranslationData, $options)
    {
        $this->options                 = $options;
        $this->getFieldTranslationData = $getFieldTranslationData;
    }

    /**
     * So lets check our repeater fields to
     * see if any fields are repeaters and
     * if that repeater has kids
     *
     * @param $fields
     * @param int $level
     *
     * @return mixed
     */
    public function loopThroughFields($fields)
    {
        foreach($fields as $key => $field)
        {
            $field = ToArray::convert($field);
            $fields[$key] = $field;

            if ( 'repeater' === $field['type'] )
            {
                $fields[$key] = RepeaterSubFields::collect($field, $this->getFieldTranslationData, $this->options, $key);
            }

            if ( 'flexiblecontent' === $field['type'] )
            {
                $fields[$key] = FlexibleContentField::collect($field, $this->getFieldTranslationData, $this->options);
            }

        }

        return $fields;
    }
}