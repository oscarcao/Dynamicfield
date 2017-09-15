<?php
namespace Modules\Dynamicfield\Library\Relationships;

use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Page\Entities\PageTranslation;

/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 31/08/2016
 * Time: 15:19
 */



class UserObject
{


    /**
     * Our call to get the user
     *
     * @param $id
     *
     * @return array
     */
    public static function getUser($object)
    {
        if (empty($object) || is_null($object)){
            return null;
        }

        $userObject = json_decode($object);

        if (empty($userObject) || is_null($userObject) || !is_object($userObject)){
            return null;
        }

        $user = (array)$userObject;

        if(isset($user['id'])){
            unset($user['id']);
        }

        return $user;
    }


}