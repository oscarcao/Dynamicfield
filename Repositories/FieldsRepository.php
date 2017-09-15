<?php

namespace Modules\Dynamicfield\Repositories;

use Modules\Core\Repositories\BaseRepository;

interface FieldsRepository extends BaseRepository
{
    public function modelCreate($model, $data);

    public function getFields();


}
