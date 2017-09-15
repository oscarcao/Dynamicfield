<?php

namespace Modules\Dynamicfield\Library\Enum\Options;

use Modules\Dynamicfield\Library\Enum\BasicEnum;

abstract class Wysiwyg extends BasicEnum
{
    /**
     * the field keys we wish to use
     *
     * @var array
     */
    protected static $fieldKeys = [
        'name'          => '',
        'default_value' => '',
        'toolbar'       => '',
        'instruction'   => '',
        'required'      => false,
        'parent_layout' => ''
    ];
}
