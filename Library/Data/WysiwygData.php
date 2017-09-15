<?php
namespace Modules\Dynamicfield\Library\Data;


trait WysiwygData
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
    public function cleanWysiwyg($value)
    {
        $output = preg_replace('/(<[^>]+) style=".*?"/i', '$1', $value);
        return $output;
    }

    /**
     * cleanWysiwygValue
     *
     * Clean wysiwyg values to strip inline styles
     *
     * @param $value
     *
     * @return mixed
     */
    public static function cleanWysiwygValue($value)
    {
        $output = preg_replace('/(<[^>]+) style=".*?"/i', '$1', $value);
        return $output;
    }
}