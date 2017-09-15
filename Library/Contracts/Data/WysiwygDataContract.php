<?php
namespace Modules\Dynamicfield\Library\Contracts\Data;

interface WysiwygDataContract
{

    /**
     * cleanWysiwyg
     *
     * Clean wysiwyg values to strip inline styles
     *
     * @param $value
     *
     * @return mixed
     */
    public function cleanWysiwyg($value);

}