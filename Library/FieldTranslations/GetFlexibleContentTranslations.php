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

trait GetFlexibleContentTranslations
{
    /**
     * getFieldTranslation
     *
     * @param $fieldId
     * @param $uniqueId
     *
     * @return array
     */
    function flexibleContentTranslations()
    {
        $flexibleFields = FieldTranslation::whereHas('field',function($query){
            $query->where('type','flexiblecontent');
        })->get();

        return $flexibleFields;
    }
}

