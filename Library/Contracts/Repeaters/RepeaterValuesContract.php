<?php
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 14/10/2016
 * Time: 11:02
 */

namespace Modules\Dynamicfield\Library\Contracts\Repeaters;


interface RepeaterValuesContract
{

    /**
     * DoWeNeedToUpdate
     *
     * Can we proceed?
     *
     * @param $field
     * @param $isEdit
     *
     * @return bool
     */
    public static function DoWeNeedToUpdate($field);


    /**
     * UpdateFieldTranslations
     * @param $field
     *
     * @return null
     */
    public static function UpdateFieldTranslations($field);


    /**
     * handle
     *
     * handle this
     *
     * @return mixed
     */
    public function handle($field);
}