<?php

namespace Modules\Dynamicfield\Repositories;

use Modules\Core\Repositories\BaseRepository;

interface OptionValuesRepository extends BaseRepository
{
    public function modelCreate($model, $data);

    /**
     * Field Values data we need to delete/remove
     *
     * @param $data
     */
    public function deleteFieldValuesData($data);

    /**
     * When saving specific field values (field_translations)
     * we also can delete here
     *
     * @param $entity
     * @param $data
     */
    public function saveFieldsData($data);

    public function getFieldValues($page, $locale);

    public function sortFieldsForFront($fields = null);

}