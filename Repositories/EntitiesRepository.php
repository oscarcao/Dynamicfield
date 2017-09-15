<?php

namespace Modules\Dynamicfield\Repositories;

use Modules\Core\Repositories\BaseRepository;

interface EntitiesRepository extends BaseRepository
{

    /**
     * @param $entity
     * @param null $locale
     *
     * @return mixed
     */
    public function entityModel($entity, $locale = null);

    /**
     * Get inital group data that match with rule.
     *
     * @param null $default
     */
    public function fetchFieldsForPage($default = null);

}
