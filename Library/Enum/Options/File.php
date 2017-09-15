<?php

namespace Modules\Dynamicfield\Library\Enum\Options;

use Modules\Dynamicfield\Library\Enum\BasicEnum;

abstract class File extends BasicEnum
{
    /**
     * the field keys we wish to use
     *
     * @var array
     */
    protected static $fieldKeys = [
        'name'          => '',
        'instruction'   => '',
        'required'      => false,
        'file_type'     => '',
        'parent_layout' => ''
    ];
}
