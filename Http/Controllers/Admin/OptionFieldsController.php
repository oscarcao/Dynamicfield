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
use Modules\Dynamicfield\Library\UseCases\StoreGroupFields;
use Modules\Dynamicfield\Library\UseCases\StoreOptionFields;
use Modules\Dynamicfield\Library\UseCases\UpdateFieldParentLayouts;
use Modules\Dynamicfield\Repositories\FieldsRepository;
use Modules\Dynamicfield\Repositories\GroupRepository;

use Modules\Dynamicfield\Library\Template;
use Modules\Dynamicfield\Repositories\OptionsRepository;
use Modules\Page\Entities\Page;
use Modules\Page\Repositories\PageRepository;
use Modules\User\Entities\Sentinel\User;
use RecursiveArrayIterator;
use RecursiveIteratorIterator;
use Request as BaseRequest;

class OptionFieldsController extends AdminBaseController
{
    /**
     * @var $optionsRepository
     * @var $template
     */
    private $optionsRepository;
    private $template;

    public function __construct(OptionsRepository $optionsRepository, Template $template)
    {
        parent::__construct();
        $this->optionsRepository = $optionsRepository;
        $this->template = $template;
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $fields = $this->loadOptionFields();
        //dd($fields);
        return view('dynamicfield::admin.options.optionFields', compact('fields'));
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
        //dd('store',$request, $request->all());
        $result = StoreOptionFields::performUseCase($this->optionsRepository, $isEdit = true);

        if ($result['bResult']) {
            return redirect()->route('admin.dynamicfield.options.index')
                            ->withSuccess(trans('core::core.messages.resource created', ['name' => trans('dynamicfield::dynamicfield.title.field_group')]));
        }

        return redirect()->route('admin.dynamicfield.options.index');
    }


    /**
     * The group has data associated
     * with it so go get it
     *
     * @param $group
     *
     * @return array|mixed
     */
    public function loadOptionFields()
    {

        $fields = Option::where('parent','0')->where('parent_layout',0)->orderBy('order','asc')->get();
        ///dd($fields);
        $dynamicFieldsDataSorter = new DynamicFieldsDataSorter($fields, $getFieldTranslationData = false, $options = null);
        $fields = $dynamicFieldsDataSorter->sortOutTheFields($isOptions = true);

        return $fields;
    }



}
