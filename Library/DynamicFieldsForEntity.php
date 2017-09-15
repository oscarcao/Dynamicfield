<?php

namespace Modules\Dynamicfield\Library;

use App\Http\Requests\Request;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Modules\Dynamicfield\Repositories\Eloquent\EloquentEntitiesRepository;
use Modules\Dynamicfield\Repositories\EntitiesRepository;

class DynamicFieldsForEntity
{
    protected $entities;
    protected $entitiesRepository;
    private $request = null;
    private $locale;
    private $entity;
    private $type;

    /**
     * DynamicFields constructor.
     *
     * @param $entity
     * @param null $locale
     */
    public function __construct($entity, $locale = null)
    {
        $this->locale   = $locale;
        $this->entity   = $entity;
        $this->type     = get_class($entity);
        $this->entitiesRepository = new EloquentEntitiesRepository(new \Modules\Dynamicfield\Entities\Entity());
    }

    /**
     * Set entity data.
     *
     * So we work out the current page module based on request being input
     * then go get the fields assigned to that (that being the page/module
     * object being passed across)
     *
     * @param null $default
     */
    public function getFieldsForCurrentPage($request = null)
    {
        //dd()
        $this->request  = $request;
        $locale         = $this->locale;
        $entityItem     = $this->entity;
        $type           = $this->type;

        //dd('getFieldsForCurrentPage this',$this);
        $fields = [];

        if (isset($locale)) {
            $entityModel = $this->entitiesRepository->entityModel($entityItem, $this->locale);
            $fields = $this->entitiesRepository->fetchFieldsForPage($request);
            return $fields;
        }


        $languages = LaravelLocalization::getSupportedLocales();
        foreach ($languages as $locale => $code) {
            $entity = $this->entitiesRepository->entityModel($entityItem, $this->locale);
            $fields = $this->entitiesRepository->fetchFieldsForPage($request);
        }

        return $fields;
    }





}
