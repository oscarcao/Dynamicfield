<?php

namespace Modules\Dynamicfield\Repositories\Eloquent;

use Modules\Core\Repositories\Eloquent\EloquentBaseRepository;
use Modules\Dynamicfield\Entities\Entity;
use Modules\Dynamicfield\Entities\Entity as EntityModel;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Entities\Group;
use Modules\Dynamicfield\Entities\Rule;

use Modules\Dynamicfield\Library\DynamicFieldsDataSorter;
use Modules\Dynamicfield\Repositories\EntitiesRepository;
use Modules\Dynamicfield\Repositories\FieldsRepository;
use Modules\Media\Entities\File;

class EloquentEntitiesRepository extends EloquentBaseRepository implements EntitiesRepository
{

    private $template;
    private $entityId;
    private $locale;
    private $type;
    private $groupFields;
    private $fieldValues;
    private $fieldInDB ;
    protected $group;

    private $entityModel;
    private $entityModelId;

    /**
     * @param int $id
     *
     * @return object
     */
    public function find($id)
    {
        return $this->model->find($id);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function all()
    {
        return $this->model->orderBy('created_at', 'DESC')->get();
    }


    /**
     * @param  mixed $data
     * @return object
     */
    public function create($data)
    {
        //dd('this->model',$this->model);
        $page = $this->model->create($data);

        //event(new PageWasCreated($page->id, $data));
        return $page;
    }


    /**
     * create/update then get entity
     *
     * @param $entity
     * @param null $locale
     *
     * @return mixed
     */
    public function entityModel($entity, $locale = null)
    {
        $this->template = $entity->template;
        $this->entityId = $entity->id;
        $this->locale   = $locale;
        $this->type     = get_class($entity);
        //$entity = new Entity($entityItem->id, $entityItem->template, $locale, $type);
        //dd('entityModel',$entity, $this);
        if($entity->id == null)
        {
            return $this->entityModel;
        }

        $this->entityModel = EntityModel::firstOrNew([
            'entity_id'   => $this->entityId,
            'entity_type' => $this->type
        ]);

        $this->entityModel->save();
        //dd('updateEntityMode',$this);
        return $this->entityModel;
    }


    /**
     * Get inital group data that match with rule.
     *
     * @param null $default
     */
    public function fetchFieldsForPage($default = null)
    {
        //getGroupByRule
        //dd('fetchFieldsForPage',$default,$this);
        $options = [];
        $options['entity_id'] = (null === $this->entityModel) ? null : $this->entityModel->id;
        $options['type']      = $this->type;
        $options['template']  = $this->template;
        $groups = $this->findGroupByRule($options);
        $fields = [];
        //dd('ret',$groups, $default,$options);
        $i = 0;
        if (count($groups)) {
            foreach ($groups as $groupId)
            {
                $this->group = Group::find($groupId);

                //if($i === 1) {
                    //dd('field', $this->group);
                //}

                $groupArray = [
                    'name'   => $this->group->name,
                    'fields' => $this->loadGroupAndFieldData($this->group, $options + ['i' => $i]),
                    'show'   => true
                ];
                $fields[] = $groupArray;
                $i++;
            }

        }

        //dd('field',$fields);
        return $fields;
    }



    /**
     * Get GroupFields base on rule.
     *
     * @param $options
     *
     * @return array
     */
    public function findGroupByRule($options)
    {
        $arrResult = array();
        $rules     = Rule::all();

        foreach ($rules as $rule)
        {
            $params = $rule->rule;

            //dd($params);
            $defaultMatch = true;
            foreach ($params as $item) {
                $match = $this->matchRule((array) $item, $options);
                $defaultMatch = $defaultMatch && $match;
            }
            if ($defaultMatch) {
                $arrResult[$rule->group_id] = $rule->group_id;
            }
        }

        return $arrResult;
    }

    /**
     * Parse and Match rule with options.
     *
     * @param $rule
     * @param $options
     *
     * @return bool
     */
    private function matchRule($rule, $options)
    {
        $match      = false;
        $type       = array_get($rule, 'parameter', 'type');
        $operator   = array_get($rule, 'operator', 'equal');
        $value      = array_get($rule, 'value', 'default');

        //dd($type,$operator,$value, 'options:',$options);

        if ($operator == 'equal') {
            $match = ($value === $options[$type]);
        } elseif ($operator == 'notequal') {
            $match = ($value !== $options[$type]);
        }

        return $match;
    }

    /**
     * Initial fields of each group and assign to GroupFields array.
     *
     * @param $group
     * @param null $default
     */
    private function loadGroupAndFieldData( $group, $options = null ) //$default = null
    {
        $groupId   = $group->id;
        $groupName = $group->name;
        $fields    = [];


        /*
         * So we
         */
        if(null === $options['entity_id']){
            $fields        = Field::where('group_id','=',$group->id)->where('parent','0')->where('parent_layout','0')->orderBy('order','asc')->get();
        }

        if(null !== $options['entity_id']){
            $fields = Field::where('group_id', '=', $group->id)->where('parent', '0')->where('parent_layout','0')
                ->with([
                'fieldTranslation' => function ($query) use ($options) {
                    $query->where('entity_field_id', $options['entity_id']);
                }
            ])->orderBy('order','asc')->get();
        }

        $dynamicFieldsDataSorter = new DynamicFieldsDataSorter($fields, $getFieldTranslationData = true, $options);
        $fields = $dynamicFieldsDataSorter->sortOutTheFields();

        return $fields;

    }
}