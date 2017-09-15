<?php
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 16/09/2016
 * Time: 11:03
 */

namespace Modules\Dynamicfield\Library\Data;

class ToArray {

    /**
     * Just a quick check to see if we have a collection/object
     * and we require arrays
     *
     * @param $object
     *
     * @return mixed
     */
    public static function convert($object)
    {
        //if()
        if(!is_array($object) && is_object($object))
        {

            if('stdClass' == get_class($object))
            {
                return (array) $object;
            }
            $object = $object->toArray();
        }

        return $object;
    }
}