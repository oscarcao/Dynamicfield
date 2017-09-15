<?php
namespace Modules\Dynamicfield\Library\Data;


class FormatFieldValueToSave
{
    use WysiwygData;

    /**
     * formatSavedValue
     *
     * Depending on field type we then must format the value
     * to be saved to DB
     *
     * @param $value
     *
     * @return mixed|string
     */
    public static function formatSavedValue($value)
    {
        if( in_array($value['type'],['select','checkbox','radio']) && !isset($value['value']) ) {
            return '';
        }

        if( $value['type'] == 'wysiwyg' ) {
            return self::cleanWysiwygValue($value['value']);
        }

        if(is_array($value['value'])){
            return serialize($value['value']);
        }

        return $value['value'];
    }

    /**
     * @param $v
     * @return bool
     */
    public static function weCanNotSaveThisFieldValueToDb($k,$v)
    {
        if('undefined' === $k){
            return false;
        }
        if('image' === $v['type']){
            return true;
        }
        if(in_array($v['type'],['flexiblecontent','repeater']) && $v['value'] == ''){
            return false;
        }
        if(in_array($v['type'],['select','checkbox','radio']) && !isset($v['value'])){
            //dd('here');
            return true;
        }
        if (!isset($v['type']) || !isset($v['value'])){
            return false;
        }
        return true;
    }
}