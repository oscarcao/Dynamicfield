<?php

namespace Modules\Dynamicfield\Entities;

use Illuminate\Database\Eloquent\Model;


class Entity extends Model
{
    protected $table = 'dynamicfield__entities';
    protected $fillable = ['entity_id', 'field_id', 'entity_type'];


    /**
     * Create Relationship with FieldTranslation.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function fields()
    {
        return $this->hasMany('Modules\Dynamicfield\Entities\FieldTranslation', 'entity_field_id', 'id');
    }

    /**
     * Create Relationship with FieldTranslation.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function fieldValues()
    {
        return $this->hasMany('Modules\Dynamicfield\Entities\FieldTranslation', 'entity_field_id', 'id');
    }

    /**
     * Create Relationship with Field.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function definedFields()
    {
        return $this->belongsTo('Modules\Dynamicfield\Entities\Field', 'field_id', 'id');
    }

    /**
     * Get list fields by locale.
     *
     * @param string $locale
     *
     * @return FieldTranslation
     */
    public function getFieldByLocale($locale = 'en')
    {
        $fields = $this->fields()->where('locale', $locale)->get();
        if ($fields->count()) {
            $object = $fields[0];
        } else {
            $object = new FieldTranslation();
        }

        return $object;
    }


    /**
     * Get entities by fieldID.
     *
     * @param $fieldId
     *
     * @return Entity
     */
    public function getEntitiesByFieldId($fieldId)
    {
        $values = $this->where('field_id', $fieldId)->get();
        if ($values->count()) {
            $object = $values[0];
        } else {
            $object = new self();
        }

        return $object;
    }

    /**
     * Static
     *
     * get all fields by entity Id and entity type
     * entity type is a class string e.g.
     * - Modules/ModuleName/Entities/EntityType
     * - Modules/Blog/Entities/Post
     * - Modules/Pages/Entities/Page
     *
     * @param $id
     * @param $entityType
     * @param $locale
     *
     * @return mixed
     */
    public static function getByEntityId($id, $entityType, $locale = 'en')
    {
        $entity = self::where('entity_id',$id)
            ->where('entity_type',$entityType)
            ->with(['definedFields','fieldValues' => function ($query) use($locale) {
                    $query->where('parent','0')->where('parent_layout','0')->where('locale',$locale);
            }])
            ->get();
        return (null === $entity) ? $entity : $entity->first();
    }

    /**
     * Find entities by entityID,type and fieldId.
     *
     * @param $query
     * @param $entityId
     * @param $entityType
     * @param $fieldId
     *
     * @return Entity
     */
    public function scopeGetEntity($query, $entityId, $entityType, $fieldId)
    {
        $entities = $query->where('entity_id', $entityId)
            ->where('entity_type', $entityType)
            ->where('field_id', $fieldId)->get();
        if ($entities->count()) {
            $object = $entities[0];
        } else {
            $object = new self();
        }

        return $object;
    }

    /**
     * Find list fields by EntityId.
     *
     * @param $query
     * @param $entityId
     *
     * @return mixed
     */
    public function scopeGetFieldsByEntity($query, $entityId)
    {
        $entities = $query->where('entity_id', $entityId)->get();

        return $entities;
    }

}
