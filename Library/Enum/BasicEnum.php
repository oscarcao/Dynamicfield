<?php

namespace Modules\Dynamicfield\Library\Enum;

abstract class BasicEnum
{
    /**
     * the field keys we wish to use,
     * must be used in parent otherwise
     * this will return
     *
     * @var array
     */
    //protected static $fieldKeys = [];

    /**
     * Get the array
     *
     * @return array
     */
    public static function getList()
    {
        $values = static::$fieldKeys;

        return $values;
    }

    /**
     * return the array of values we are
     * wishing to save to be serialized
     *
     * @return array
     */
    public static function getKeys()
    {
        $constants = static::$fieldKeys;
        $keys      = array_keys($constants);

        return $keys;
    }

}
