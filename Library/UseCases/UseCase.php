<?php
namespace Modules\Dynamicfield\Library\UseCases;
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 31/08/2016
 * Time: 15:19
 */



abstract class UseCase
{

    /**
     * @return mixed
     */
    public static function perform()
    {
        return (new static)->handle();
    }

    /**
     * @return mixed
     */
    abstract protected function handle();

}