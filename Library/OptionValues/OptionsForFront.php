<?php
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 21/09/2016
 * Time: 10:29
 */

namespace Modules\Dynamicfield\Library\OptionValues;

use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Library\Contracts\Sorting\SortForFrontContract;
use Modules\Dynamicfield\Library\FlexibleContent\FlexibleContentForFront;
use Modules\Dynamicfield\Library\Media\MediaHelpers;
use Modules\Dynamicfield\Library\Relationships\LinkObject;
use Modules\Dynamicfield\Library\Relationships\UserObject;
use Modules\Dynamicfield\Library\Repeaters\OptionsRepeaterForFront;
use Modules\Dynamicfield\Library\Repeaters\RepeaterForFront;

class OptionsForFront implements SortForFrontContract
{

    //use MediaHelpers;

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
     * @param $bool
     *
     * @return mixed
     */
    public function handle($fields)
    {
        /*
         * fields collection to loop through and fields for frontend
         */
        $fieldsForFront    = [];

        foreach ($fields as $fieldTranslation)
        {
            $fieldInfo = self::checkFieldType($fieldTranslation);

            /*
             * if it is null then skip it
             */
            if(!is_object($fieldTranslation)) {
                continue;
            }

            if(!is_null($fieldTranslation->field)) {
                $fieldsForFront[$fieldTranslation->field->slug] = $fieldInfo;
            }

        } // endforeach

        return $fieldsForFront;
    }

    /**
     * check the field type to get the correct data
     * back for our frontend
     *
     * @param $fieldTranslation
     *
     * @return array|null
     */
    public static function checkFieldType($fieldTranslation)
    {
        $fieldInfo = null;
        if(!is_object($fieldTranslation) || null == $fieldTranslation){
            return [];
        }

        if(!is_object($fieldTranslation->field)){
            return '';
        }

        switch ($fieldTranslation->field->type) {
            case 'link':
                $fieldInfo = LinkObject::getLinkUrl($fieldTranslation['value']);
                break;
            case 'linkObject':
                $fieldInfo = LinkObject::getLinkObject($fieldTranslation['value']);
                break;
            case 'user':
                $fieldInfo = UserObject::getUser($fieldTranslation['value']);
                break;
            case 'file':
                $fieldInfo = MediaHelpers::getMediaItem($fieldTranslation['value']);
                break;
            case 'image':
                $fieldInfo = MediaHelpers::getMediaItem($fieldTranslation['value']);
                break;
            case 'repeater':
                $fieldInfo = OptionsRepeaterForFront::collect($fieldTranslation);
                break;
//            case 'flexiblecontent':
//                $fieldInfo = FlexibleContentForFront::collect(json_decode($fieldTranslation));
//                break;
            default:
                $fieldInfo = (!empty($fieldTranslation['value'])) ? $fieldTranslation['value'] : '';
        }

        return $fieldInfo;
    }

}
