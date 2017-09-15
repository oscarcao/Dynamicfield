<?php
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 05/08/2016
 * Time: 11:18
 */

namespace Modules\Dynamicfield\Library\Fields;

use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;

trait RepeaterChildren {

    /**
     * Got and get all the repeaters children
     * fields, if it has any
     *
     * @param $fields
     *
     * @return mixed
     */
    public function getRepeaterChildren($fields)
    {
        //dd($fields);
        $fields2 = $fields->map(function ($field, $key) {
            if( 'repeater' === $field['type'] ){

                //dd('matches',$field);
                $children = Field::where('parent','=',$field['unique_id'])->orderBy('order')->get();
                dd($children->toArray());
                $this->extractAndSortDataProperty();
            }
            return $field;
        });

        dd('$fields2',$fields2);
    }
}