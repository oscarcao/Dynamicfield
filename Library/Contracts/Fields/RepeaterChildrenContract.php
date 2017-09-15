<?php
namespace Modules\Dynamicfield\Library\Contracts\Fields;
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 05/08/2016
 * Time: 11:15
 */


interface RepeaterChildrenContract
{

    /**
     * Got and get all the repeaters children
     * fields, if it has any
     *
     * @param $fields
     *
     * @return mixed
     */
    public function getRepeaterChildren($fields);


}