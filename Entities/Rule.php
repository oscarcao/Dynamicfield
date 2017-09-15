<?php

namespace Modules\Dynamicfield\Entities;

use Illuminate\Database\Eloquent\Model;

class Rule extends Model
{
    /**
     * table
     *
     * @var array
     */
    protected $table    = 'dynamicfield__rules';

    /**
     * Fillable fields for a tag
     *
     * @var array
     */
    protected $fillable = [
        'group_id',
        'rule'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function group()
    {
        return $this->belongsTo('Modules\Dynamicfield\Entities\Group', 'group_id', 'id');
    }

    /**
     * Get the rule attribute, as it should always be serialized
     * then just undo it
     *
     * @param $data
     *
     * @return $models
     */
    public function getRuleAttribute($data)
    {
        $data = unserialize($data);

        return $data;
    }
}
