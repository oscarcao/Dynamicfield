<?php
namespace Modules\Dynamicfield\Library\Fields;

use DB;
use Modules\Dynamicfield\Entities\Entity;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Library\Data\ToArray;
use Modules\Dynamicfield\Library\Entity\GetEntityModel;
use Modules\Dynamicfield\Library\FieldTranslations\MissingFieldTranslation;
use Modules\Dynamicfield\Library\FlexibleContent\FlexibleContentField;
use Modules\Dynamicfield\Library\Repeaters\RepeaterSubFields;

class FieldsForSerialization {

    /**
     * get field dat
     *
     * @param $field
     *
     * @return string
     */
    public static function getFieldsForSerializationData($field)
    {
        //dd('getFieldsForSerializationData',$field);
        $type        = $field['type'];
        $optionClass = "Modules\Dynamicfield\Library\Enum\Options\\" . ucfirst($type);

        $options        = $optionClass::getKeys();
        $mapped         = self::mapDataToOptions($options, $field);
        $serializedData = serialize($mapped);

        return $serializedData;
    }

    /**
     * This method maps the incoming field data to the
     * fields of the field type
     *
     * @param $options
     *
     * @return array
     */
    public static function mapDataToOptions($options, $field)
    {
        $data = [];

        foreach ($options as $k => $v)
        {
            $data[$v] = (isset($field[$v])) ? $field[$v] : '';
        }

        return $data;
    }
}