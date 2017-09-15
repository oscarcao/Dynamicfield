<?php

namespace Modules\Dynamicfield\Entities;

use Illuminate\Database\Eloquent\Model;
use Modules\Media\Support\Traits\MediaRelation;

class Option extends Model
{
    use MediaRelation;

    /**
     * table
     *
     * @var array
     */
    protected $table = 'dynamicfield__options';

    /**
     * Fillable fields for a tag
     *
     * @var array
     */
    protected $fillable = [
        'data',
        'type',
        'name',
        'slug',
        'order',
        'parent',
        'parent_layout',
        'field_type',
        'unique_id'
    ];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function fieldTranslation()
    {
        return $this->belongsTo('Modules\Dynamicfield\Entities\OptionValue', 'unique_id', 'field_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function repeaterFieldTranslation()
    {
        return $this->hasMany('Modules\Dynamicfield\Entities\OptionValue', 'field_id', 'unique_id');
    }

    public function children()
    {
        return $this->hasMany('Modules\Dynamicfield\Entities\Option', 'parent', 'unique_id');
    }

    public function parent()
    {
        return $this->belongsTo('Modules\Dynamicfield\Entities\Option', 'parent', 'unique_id');
    }

    /**
     * Get the data attribute, as it should always be serialized
     * then just undo it
     *
     * @param $data
     *
     * @return $models
     */
    public function getDataAttribute($data)
    {
        $data = unserialize($data);

        return $data;
    }


    /**
     * getOptions
     *
     * @return array
     */
    public function getOptions()
    {
        $result = array();
        $optionClass = "Modules\Dynamicfield\Library\Enum\Options\\" . ucfirst($this->type);
        if (class_exists($optionClass)) {
            $arrDefault = $optionClass::getList();
            $jsonData   = (array) json_decode($this->data);
            $result     = array_merge($arrDefault, $jsonData);
        }

        return $result;
    }





}
