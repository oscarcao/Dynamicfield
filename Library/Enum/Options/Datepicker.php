<?php

namespace Modules\Dynamicfield\Library\Enum\Options;

use Modules\Dynamicfield\Library\Enum\BasicEnum;

abstract class Datepicker extends BasicEnum
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
        'placeholder'   => '',
        'limit'         => '',
        'parent_layout' => ''
    ];

}
