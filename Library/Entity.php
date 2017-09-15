<?php

namespace Modules\Dynamicfield\Library;

use Modules\Dynamicfield\Entities\Entity as EntityModel;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\Group;
use Modules\Dynamicfield\Entities\Rule;


class Entity
{

    private $template;
    private $entityId;
    private $locale;
    private $type;
    private $groupFields;
    private $fieldValues;
    private $fieldInDB ;

    private $entityModel;


    /**
     * Constructor.
     *
     * @param $entityId
     * @param $template
     * @param $locale
     * @param $type
     */
    public function __construct($entityId, $template, $locale, $type)
    {
        $this->template = $template;
        $this->entityId = $entityId;
        $this->locale   = $locale;
        $this->type     = $type;

        $this->updateEntityModel();
    }

    /**
     * Our entity Model needs creating/updating
     *
     * to cover whether it is a new entity (module - page/blog)
     *
     * @return mixed
     */
    protected function updateEntityModel()
    {
        $entityId   = $this->entityId;
        $entityType = $this->type;

        $this->entityModel = EntityModel::firstOrNew([
            'entity_id'   => $entityId,
            'entity_type' => $entityType
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
        $options['type']     = $this->type;
        $options['template'] = $this->template;
        $groups = $this->findGroupByRule($options);
        $fields = [];

        if (count($groups))
        {
            foreach ($groups as $groupId)
            {
                $group = Group::find($groupId);

                $groupArray = [
                    'name'   => $group->name,
                    'fields' => $this->loadGroupAndFieldData($group, $default)
                ];
                $fields[] = $groupArray;
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

        foreach ($rules as $rule) {
            $params = (array) unserialize($rule->rule);

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
    private function loadGroupAndFieldData($group, $default = null)
    {
        $groupId    = $group->id;
        $groupName  = $group->name;

        /*
         * So we
         */
        $fields        = Field::where('group_id','=',$group->id)->where('parent','0')->with(['fieldTranslation'])->get();

        //dd($fields);
        $dynamicFieldsDataSorter = new DynamicFieldsDataSorter($fields, $getFieldTranslationData = true, $options = null);
        $fields = $dynamicFieldsDataSorter->sortOutTheFields();

        return $fields;

    }

}
