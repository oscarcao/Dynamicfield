<?php

namespace Modules\Dynamicfield\Library;

use App\Http\Requests\Request;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Modules\Dynamicfield\Library\Contracts\Data\ParseChoicesContract;
use Modules\Dynamicfield\Library\Contracts\Data\SortDataFieldsContract;
use Modules\Dynamicfield\Library\Contracts\FieldTranslations\MissingFieldTranslationContract;
use Modules\Dynamicfield\Library\Data\DataChecks;
use Modules\Dynamicfield\Library\Data\ParseChoices;
use Modules\Dynamicfield\Library\Data\SortDataFields;
use Modules\Dynamicfield\Library\Data\ToArray;
use Modules\Dynamicfield\Library\Data\UniqueId;
use Modules\Dynamicfield\Library\Fields\FieldTypeSorter;
use Modules\Dynamicfield\Library\Fields\GetFields;
use Modules\Dynamicfield\Library\FieldTranslations\GetFieldTranslation;
use Modules\Dynamicfield\Library\Options\OptionsTypeSorter;
use Modules\Dynamicfield\Library\Repeaters\RepeaterRows;
use Modules\Dynamicfield\Library\Repeaters\RepeaterSubFields;
use Modules\Dynamicfield\Repositories\Eloquent\EloquentEntitiesRepository;
use Modules\Dynamicfield\Repositories\EntitiesRepository;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Library\FieldTranslations\MissingFieldTranslation;

class DynamicFieldsDataSorter implements ParseChoicesContract, SortDataFieldsContract, MissingFieldTranslationContract
{
    use ParseChoices, DataChecks, MissingFieldTranslation, GetFieldTranslation, GetFields;

    /**
     * table
     *
     * @var array
     */
    protected $options       = [];
    protected $fields        = [];
    protected $getFieldTranslationData;

    /**
     * DynamicFieldsDataSorter constructor.
     *
     * @param $fields
     * @param bool $getFieldTranslationData
     * @param null $options
     */
    public function __construct($fields, $getFieldTranslationData, $options = null)
    {
        $this->options                 = $options;
        $this->fields                  = ToArray::convert($fields);
        $this->getFieldTranslationData = $getFieldTranslationData;
    }


    /**
     * sortOutTheFields
     *
     * Sort out the fields being passed in, we need to also decide which
     * sorter to use as options will need certain queries to be different
     *
     * @param $isOptions boolean
     *
     * @return array|mixed
     */
    public function sortOutTheFields($isOptions = false)
    {
        //dd($this->fields, $isOptions);
        $fields = SortDataFields::extractAndSortDataProperty($this->fields, $this->getFieldTranslationData);
        $fields = ($isOptions === false) ? FieldTypeSorter::handle($fields, $this->getFieldTranslationData, $this->options) : OptionsTypeSorter::handle($fields, $this->getFieldTranslationData, $this->options);

        return $fields;
    }




}