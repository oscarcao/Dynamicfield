<?php

namespace Modules\Dynamicfield\Library\Enum\Options;

use Modules\Dynamicfield\Library\Enum\BasicEnum;

abstract class Number extends BasicEnum
{
    /**
     * the field keys we wish to use
     *
     * @var array
     */
    protected static $fieldKeys = [
        'default_value' => '',
        'placeholder'   => '',
        'instruction'   => '',
        'required'      => false,
        'max_value'     => '',
        'min_value'     => '',
        'parent_layout' => ''
    ];
}
