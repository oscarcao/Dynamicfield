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
use Modules\Dynamicfield\Library\Fields\FieldTypeSorter;
use Modules\Dynamicfield\Library\Fields\GetFields;
use Modules\Dynamicfield\Library\FieldTranslations\GetFieldTranslation;
use Modules\Dynamicfield\Library\FieldTranslations\SortForFront;

class FlexibleContentForFront
{

    use ParseChoices, GetFields, GetFieldTranslation;

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
    public static function collect($fieldTranslation){
        return (new static)->handle($fieldTranslation);
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
    public function handle($flexibleContentField)
    {
        $layoutBlocks = json_decode($flexibleContentField->value);
        $layouts  = [];

        /*
         * if we have empty then return empty
         * array to send back
         */
        if(is_null($layoutBlocks)){
            return $layouts;
        }

        /*
         * so we loop through the flexible content field layouts and
         * build what we need for the front
         */
        foreach( $layoutBlocks as $key => $layout )
        {
            $layoutAsArray  = (array) $layout;
            $layoutAsArray['fields'] = $this->fieldTranslationsByParentLayout($parentLayout = $layout->key, $toArray = false);

            $fieldInfo    = SortForFront::collect($layoutAsArray['fields'], true);
            $layoutFields = [
                'dcf_fc_layout'        => $layoutAsArray['name'],
                $layoutAsArray['name'] => (!empty($fieldInfo)) ? $fieldInfo : ''
            ];
            //$layoutFields = [];
            //$layoutFields['dcf_fc_layout'] = $layoutAsArray['name'];
            //$layoutFields[$layoutAsArray['name']] = (!empty($fieldInfo)) ? $fieldInfo : '';

            array_push($layouts,$layoutFields);
        }


        return $layouts;
    }



}
