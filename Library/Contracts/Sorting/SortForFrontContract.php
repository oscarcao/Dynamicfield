<?php


namespace Modules\Dynamicfield\Library\Contracts\Sorting;
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 13/10/2016
 * Time: 10:57
 */
interface SortForFrontContract
{

    /**
     * collect
     *
     * go collect the fields
     *
     * @param $rows
     *
     * @return mixed
     */
    public static function collect($rows);

    /**
     * handle
     *
     * handle it
     *
     * @param $fields
     *
     * @return mixed
     */
    public function handle($fields);

    /**
     * check the field type to get the correct data
     * back for our frontend
     *
     * @param $fieldTranslation
     *
     * @return array|null
     */
    public static function checkFieldType($fieldTranslation);
}