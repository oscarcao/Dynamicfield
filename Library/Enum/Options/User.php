<?php

namespace Modules\Dynamicfield\Library\Enum\Options;

use Modules\Dynamicfield\Library\Enum\BasicEnum;

abstract class User extends BasicEnum
{
    /**
     * the field keys we wish to use
     *
     * @var array
     */
    protected static $fieldKeys = [
        'name'          => '',
        'default_value' => '',
        'instruction'   => '',
        'required'      => false,
        'parent_layout' => '',
        'multiple'      => false
    ];

}
