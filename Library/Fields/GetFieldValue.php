<?php
namespace Modules\Dynamicfield\Library\Fields;


use DB;
use Modules\Dynamicfield\Entities\Entity;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Library\Entity\GetEntityModel;

class GetFieldValue {

    /**
     * @var $fields
     */
    protected $fields;

    /**
     * @return mixed
     */
    public static function perform($selector, $entityId, $entityType)
    {
        return (new static)->handle($selector, $entityId, $entityType);
    }

    /**
     * handle
     *
     * handle it
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function handle($selector, $entityId, $entityType)
    {
        // 1. get the entity model
        $entity = Entity::where('entity_type', 'like', '%' . $entityType . '%' )
            ->where('entity_id', $entityId)
            ->get();

        if(is_null($entity)){
            return null;
        }

        // 2. from that get the field Translation based on entity model and slug (selector
        $fieldTranslation = FieldTranslation::where('entity_field_id',$entity->first()->id)
            ->whereHas('field', function ($query) use($selector) {
                $query->where('slug', $selector);
            })
            ->with(['field' => function ($query) use($selector) {
                $query->where('slug', $selector);
            }])
            ->get();

        //dd($entity,$fieldTranslation);

        if(is_null($fieldTranslation)){
            return null;
        }

        // 3. sort the data into format that can be returned and used
        $repository     = new \Modules\Dynamicfield\Repositories\Eloquent\EloquentFieldsTranslationsRepository(new \Modules\Dynamicfield\Entities\FieldTranslation());
        $fieldsForFront = $repository->sortFieldsForFront([$fieldTranslation->first()]);
        //dd('handle it', $selector, $entityId, $entityType, $entity, $fieldTranslation, $fieldsForFront);

        if(!isset($fieldsForFront[$selector])){
            return null;
        }

        return $fieldsForFront[$selector];
    }




}