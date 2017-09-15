<?php
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 13/10/2016
 * Time: 11:52
 */

namespace Modules\Dynamicfield\Library\Contracts\Sorting;


interface TypeSorter
{
    /**
     * collect
     *
     * go collect the fields
     *
     * @param $subField
     * @param $options
     * @param $getFieldTranslationData
     *
     * @return mixed
     */
    public static function handle($fields, $getFieldTranslationData, $options);

    /**
     * FieldTypeSorter constructor.
     *
     * @param $getFieldTranslationData
     * @param $options
     */
    public function __construct($getFieldTranslationData, $options);

    /**
     * So lets check our repeater fields to
     * see if any fields are repeaters and
     * if that repeater has kids
     *
     * @param $fields
     * @param int $level
     *
     * @return mixed
     */
    public function loopThroughFields($fields);
}