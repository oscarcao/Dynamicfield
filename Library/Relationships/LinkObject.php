<?php
namespace Modules\Dynamicfield\Library\Relationships;

use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Library\Data\ToArray;
use Modules\Dynamicfield\Library\Media\MediaHelpers;
use Modules\Page\Entities\PageTranslation;

/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 31/08/2016
 * Time: 15:19
 */



class LinkObject
{
    /**
     * Our call to get the media item
     *
     * @param $id
     *
     * @return array
     */
    public static function getLinkUrl($object)
    {
        //dd($object);
        $decoded = json_decode($object);
        if(is_object($decoded)) {
            $object = self::getLinkObject($object);
            return $object['url'];
        }
        return ($object === '""')?'':$object;
    }


    /**
     * Our call to get the media item
     *
     * @param $id
     *
     * @return array
     */
    public static function getLinkObject($object)
    {
        if (empty($object) || is_null($object)){
            return null;
        }

        $linkObject = json_decode($object);

        if (empty($linkObject) || is_null($linkObject) || !is_object($linkObject)){
            return null;
        }

        if(!isset($linkObject->type)){
            return null;
        }

        if(!isset($linkObject->id)){
            return null;
        }

        $type = $linkObject->type;
        $id   = $linkObject->id;

        $urlObject = $type::findOrNew($id);

        $path = self::getClassName($urlObject);

        $result = (array)$linkObject;

        if(null == $entity = self::chooseEntityTypeAndGetUrl($urlObject, $path)){
            return $entity;
        }

        return $entity;
    }


    /**
     * getClassName
     *
     * get the class name
     *
     * @param $urlObject
     *
     * @return string
     */
    public static function getClassName($urlObject) {

        $classNameString = get_class($urlObject);
        $path = explode('\\', $classNameString);
        $name = array_pop($path);

        return strtolower($name);
    }

    /**
     * chooseEntityTypeAndGetUrl
     *
     * @param $urlObject
     * @param $type
     *
     * @return null|string
     */
    public static function chooseEntityTypeAndGetUrl($urlObject, $type)
    {
        $entity = [];

        if($type == 'page')
        {
            $page = PageTranslation::where('page_id',$urlObject['id'])->get()->first();
            if (empty($page))
                return null;

            $entityArray = [
                'id'        => (isset($page['id']))    ? $page['id'] : '',
                'title'     => (isset($page['title'])) ? $page['title'] : '',
                'body'      => (isset($page['body']))  ? $page['body'] : '',
                'slug'      => (isset($page['slug']))  ? $page['slug'] : ''
            ];
            $url = (function_exists('get_page_url')) ? get_page_url($urlObject['id'], true) : url($page->slug);
            //$url  = url($type . '/' . $page->slug);
            //$url = url($page->slug);
            $entity['type']   = 'page';
            $entity['url']    = $url;
            $entity['entity'] = $entityArray;

            return $entity;
        }

        if($type == 'post')
        {
            $urlObjectArray = ToArray::convert($urlObject);
            $entityArray = [
                'id'        => (isset($urlObjectArray['id']))        ? $urlObjectArray['id'] : '',
                'title'     => (isset($urlObjectArray['title']))     ? $urlObjectArray['title'] : '',
                'summary'   => (isset($urlObjectArray['summary']))   ? $urlObjectArray['summary'] : '',
                'content'   => (isset($urlObjectArray['content']))   ? $urlObjectArray['content'] : '',
                'thumbnail' => (isset($urlObjectArray['thumbnail'])) ? MediaHelpers::getMediaItem($urlObjectArray['thumbnail']) : '',
                'featured'  => (isset($urlObjectArray['featured']))  ? MediaHelpers::getMediaItem($urlObjectArray['featured']) : '',
                'slug'      => (isset($urlObjectArray['slug']))      ? $urlObjectArray['slug'] : ''
            ];

            $url  = url($type . '/' . $urlObject->slug);
            $entity['type']   = 'post';
            $entity['url']    = $url;
            $entity['entity'] = $entityArray;

            return $entity;
        }

        return null;
    }

}