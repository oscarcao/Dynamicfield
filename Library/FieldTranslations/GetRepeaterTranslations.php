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

trait GetRepeaterTranslations
{
    /**
     * repeaterTranslations
     *
     * @param $fieldId
     * @param $uniqueId
     *
     * @return array
     */
    function repeaterTranslations()
    {
        $repeaterFields = FieldTranslation::whereHas('field',function($query){
            $query->where('type','repeater');
        })->get();

        return $repeaterFields;
    }

    /**
     * repeaterTranslationsInLayouts
     *
     * @param $fieldId
     * @param $uniqueId
     *
     * @return array
     */
    function repeaterTranslationsInLayouts()
    {
        $repeaterFields = FieldTranslation::where('parent_layout','!=',0)
            ->whereHas('field',function($query){
            $query->where('type','repeater');
        })->get();

        return $repeaterFields;
    }
}

