<?php

namespace Modules\Dynamicfield\Repositories\Eloquent;

use Modules\Core\Repositories\Eloquent\EloquentBaseRepository;
use Modules\Dynamicfield\Entities\Entity;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Library\Contracts\Data\ParseChoicesContract;
use Modules\Dynamicfield\Library\Contracts\Data\SortDataFieldsContract;
use Modules\Dynamicfield\Library\Data\ParseChoices;
use Modules\Dynamicfield\Library\Data\SortDataFields;
use Modules\Dynamicfield\Library\Repeaters\RepeaterForFront;
use Modules\Dynamicfield\Repositories\FieldsRepository;
use Modules\Media\Entities\File;

class EloquentFieldsRepository extends EloquentBaseRepository implements FieldsRepository, ParseChoicesContract //, SortDataFieldsContract
{
    use ParseChoices; //, SortDataFields;

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
     * @param  mixed  $data
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
     * We use this mainly for tests to create our entires into db for
     * specific models
     *
     * TODO : can create repositories for each entity/model
     *
     * @param  mixed  $model
     * @param  mixed  $data
     *
     * @return object
     */
    public function modelCreate($model, $data)
    {
        //dd('this->model',$this->model);
        $modelCreate = '\\Modules\\Dynamicfield\\Entities\\' . $model;
        $modelCreated = $modelCreate::create($data);

        return $modelCreated;
    }

    /**
     * @param $model
     * @param  array  $data
     * @return object
     */
    public function update($model, $data)
    {
        $model->update($data);

        event(new PageWasUpdated($model->id, $data));

        return $model;
    }

    /**
     * get the fields
     *
     * @param $id
     *
     * @return mixed
     */
    public function getFields()
    {
        return $this->fields;
    }


}
