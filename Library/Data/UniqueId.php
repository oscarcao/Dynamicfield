<?php
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 16/09/2016
 * Time: 11:03
 */

namespace Modules\Dynamicfield\Library\Data;


class UniqueId
{

    /**
     * generate
     *
     * we wish to generate a unique_id
     *
     * @param string $prefix
     *
     * @return string
     */
    public static function generate($prefix = '')
    {
        $uniqueId = md5(uniqid(rand(), true));

        $uniqueId = substr($uniqueId, 0, 13);

        return $prefix . $uniqueId;
    }
}