<?php

namespace Modules\Dynamicfield\Entities;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{

    /**
     * table
     *
     * @var array
     */
    protected $table = 'dynamicfield__groups';

    /**
     * Fillable fields for a tag
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'template'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function fields()
    {
        return $this->hasMany('Modules\Dynamicfield\Entities\Field', 'group_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function rules()
    {
        return $this->hasMany('Modules\Dynamicfield\Entities\Rule', 'group_id', 'id');
    }

    /**
     * @param $query
     * @param $template
     *
     * @return mixed
     */
    public function scopeFindByTemplate($query, $template)
    {
        $groups = $query->where('template', $template)->get();

        return $groups;
    }

    /**
     * Find guru photos by template
     *
     * @param $folder
     * @return mixed7
     */
    public static function findByTemplate($template)
    {
        return self::where('template', '=', $template)->get();
    }

}
