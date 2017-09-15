<?php

namespace Modules\Dynamicfield\Http\Controllers\Admin;

use Collective\Html\FormFacade;
use Illuminate\Http\Request;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Modules\Core\Http\Controllers\Admin\AdminBaseController;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\Group;
use Modules\Dynamicfield\Entities\Option;
use Modules\Dynamicfield\Entities\Rule;
use Modules\Dynamicfield\Http\Requests\GroupFieldRequest;
use Modules\Dynamicfield\Library\DynamicFieldsDataSorter;
use Modules\Dynamicfield\Library\DynamicFieldsForEntity;
use Modules\Dynamicfield\Library\UseCases\StoreGroupFields;
use Modules\Dynamicfield\Library\UseCases\StoreOptionFieldValues;
use Modules\Dynamicfield\Library\UseCases\UpdateFieldParentLayouts;
use Modules\Dynamicfield\Repositories\GroupRepository;

use Modules\Dynamicfield\Library\Template;
use Modules\Dynamicfield\Repositories\OptionValuesRepository;
use Modules\Page\Entities\Page;
use Modules\Page\Repositories\PageRepository;
use Modules\User\Entities\Sentinel\User;
use RecursiveArrayIterator;
use RecursiveIteratorIterator;
use Request as BaseRequest;

class OptionFieldValuesController extends AdminBaseController
{
    /**
     * @var OptionValuesRepository
     * @var PageRepository
     * @var $template
     */
    private $optionValuesRepository;
    private $pageRepository;
    private $template;

    public function __construct(OptionValuesRepository $optionValuesRepository, PageRepository $pageRepository, Template $template)
    {
        parent::__construct();
        $this->optionValuesRepository = $optionValuesRepository;
        $this->pageRepository  = $pageRepository;
        $this->template = $template;
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $entities = $this->loadOptionFields();
        //dd($entities);
        return view('dynamicfield::admin.options.optionFieldValues', compact('entities'));
    }

    /**
     * loadOptionFields
     *
     * @return array|mixed
     */
    public function loadOptionFields()
    {
        $arrValue = config('asgard.dynamicfield.config.entity-type');
        $fields = Option::where('parent','0')->where('parent_layout',0)->with('fieldTranslation')->orderBy('order','asc')->get();

        $dynamicFieldsDataSorter = new DynamicFieldsDataSorter($fields, $getFieldTranslationData = true, $options = null);
        $fields = $dynamicFieldsDataSorter->sortOutTheFields($isOptions = true);

        $entities = [
            'name'  => 'Options',
            'fields' => $fields,
            'show'   => true
        ];

        return [$entities];
    }


    /**
     * store the data
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $result = StoreOptionFieldValues::performUseCase($this->optionValuesRepository, $isEdit = true);

        if ($result['bResult']) {
            return redirect()->route('admin.dynamicfield.optionvalues.index')
                            ->withSuccess(trans('core::core.messages.resource created', ['name' => trans('dynamicfield::dynamicfield.title.field_group')]));
        }

        return redirect()->route('admin.dynamicfield.optionvalues.index');
    }



}
