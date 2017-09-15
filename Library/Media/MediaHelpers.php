<?php
namespace Modules\Dynamicfield\Library\Media;
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 31/08/2016
 * Time: 15:19
 */
use Modules\Media\Entities\File;


class MediaHelpers
{
    /**
     * Our call to get the media item
     *
     * @param $id
     *
     * @return array
     */
    public static function getMediaItem($id)
    {
        if (empty($id) || is_null($id) || !is_numeric($id)){
            return null;
        }

        $file = File::findOrNew($id)->toArray();
        return [
            'filename'  => $file['filename'],
            'url'       => $file['path_string'],
            'extension' => $file['extension'],
        ];
    }

}