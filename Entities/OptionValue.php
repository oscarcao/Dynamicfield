<?php

namespace Modules\Dynamicfield\Entities;

use Illuminate\Database\Eloquent\Model;
use Modules\Dynamicfield\Library\Data\DataChecks;
use Modules\Media\Entities\File;
use Modules\Media\Repositories\FileRepository;
use Modules\Media\Support\Traits\MediaRelation;

class OptionValue extends Model
{
    use MediaRelation, DataChecks;

    /**
     * table
     *
     * @var array
     */
    protected $table = 'dynamicfield__option_values';

    /**
     * Fillable fields for a tag
     *
     * @var array
     */
    protected $fillable = [
        'locale',
        'value',
        'field_id',
        'unique_id',
        'parent',
        'parent_layout'
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'extra_data'
    ];


    /**
     * Get the extra_data attribute
     *
     * @param $data
     *
     * @return $models
     */
    public function getExtraDataAttribute($data)
    {
        if(in_array($this->field->type,['image','file']))
        {
            //dd($this);
            $file  = File::find($this->value);

            // no result then return null
            if(null === $file) return null;

            $path  = $file->path->getUrl();
            $thumb = $file->getThumbnail($file->path);
            $data = [
                'path'        => $path,
                'thumb'       => $thumb
            ];

            return $data;
        }

        return null;
    }

    /**
     * Get the value attribute
     *
     * if our type is wysiwyg then we need to do some
     * extra stuff
     *
     * @param $data
     *
     * @return $models
     */
    public function getValueAttribute($data)
    {

        if($this->is_serialized($data)){
            $data = unserialize($data);
        }

        if(in_array($this->field->type,['wysiwyg']))
        {
            $data2 = html_entity_decode(htmlspecialchars_decode($data));
            return $data2;
        }

//        if(in_array($this->field->type,['checkbox','select','radio'])){
//            return $this->sortChoicesOut($data);
//        }

        return $data;
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function field()
    {
        return $this->belongsTo('Modules\Dynamicfield\Entities\Option', 'field_id', 'unique_id');
    }


}
