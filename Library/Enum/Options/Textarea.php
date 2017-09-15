<?php

namespace Modules\Dynamicfield\Library\Enum\Options;

use Modules\Dynamicfield\Library\Enum\BasicEnum;

abstract class Textarea extends BasicEnum
{
    /**
     * the field keys we wish to use
     *
     * @var array
     */
    protected static $fieldKeys = [
        'default_value' => '',
        'instruction'   => '',
        'rows'          => '',
        'required'      => false,
        'placeholder'   => '',
        'parent_layout' => ''
        //'limit'         => ''
    ];
}
