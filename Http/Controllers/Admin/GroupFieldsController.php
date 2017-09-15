<?php

namespace Modules\Dynamicfield\Http\Controllers\Admin;

use Collective\Html\FormFacade;
use Illuminate\Http\Request;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Modules\Core\Http\Controllers\Admin\AdminBaseController;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\Group;
use Modules\Dynamicfield\Entities\Rule;
use Modules\Dynamicfield\Http\Requests\GroupFieldRequest;
use Modules\Dynamicfield\Library\DynamicFieldsDataSorter;
use Modules\Dynamicfield\Library\UseCases\StoreGroupFields;
use Modules\Dynamicfield\Library\UseCases\UpdateFieldParentLayouts;
use Modules\Dynamicfield\Repositories\GroupRepository;

use Modules\Dynamicfield\Library\Template;
use Modules\Page\Entities\Page;
use Modules\Page\Repositories\PageRepository;
use Modules\User\Entities\Sentinel\User;
use RecursiveArrayIterator;
use RecursiveIteratorIterator;
use Request as BaseRequest;

class GroupFieldsController extends AdminBaseController
{
    /**
     * @var GroupRepository
     * @var PageRepository
     * @var $template
     */
    private $groupRepository;
    private $pageRepository;
    private $template;

    public function __construct(GroupRepository $groupRepository, PageRepository $pageRepository, Template $template)
    {
        parent::__construct();
        $this->groupRepository = $groupRepository;
        $this->pageRepository  = $pageRepository;
        $this->template = $template;
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $group = $this->groupRepository->all();
        return view('dynamicfield::admin.group.index', compact('group'));
    }

    /**
     * @param Group $group
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create()
    {
        $group = new Group;
        $group->name     = '';
        $group->template = '';
        $fields = [];
        $all_templates = $this->template->getTemplates();

        //dd($group);
        return view('dynamicfield::admin.group.create', compact('group', 'fields', 'all_templates'));
    }

    /**
     * store the data
     *
     * @uses GroupRepository
     *
     * @param GroupFieldRequest $request
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(GroupFieldRequest $request)
    {
        //dd('store',$request);
        $result = StoreGroupFields::performUseCase($this->groupRepository);

        if ($result['bResult']) {
            return redirect()->route('admin.dynamicfield.group.index')
                            ->withSuccess(trans('core::core.messages.resource created', ['name' => trans('dynamicfield::dynamicfield.title.field_group')]));
        }

        return redirect()->route('admin.dynamicfield.group.index');
    }

    /**
     * @param Group $group
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit(Group $group)
    {
        $fields     = $this->loadGroupAndFieldData($group);
        $locations  = Rule::where('group_id', '=', $group->id)->get()->toArray();
        $group      = $group->toArray();

        //dd($fields);

        return view('dynamicfield::admin.group.edit', compact('group', 'fields', 'locations'));
    }

    /**
     * The group has data associated
     * with it so go get it
     *
     * @param $group
     *
     * @return array|mixed
     */
    public function loadGroupAndFieldData($group)
    {
        $groupId   = $group->id;
        $groupName = $group->name;

        $fields = Field::where('group_id','=',$group->id)->where('parent','0')->orderBy('order','asc')->get();
        $dynamicFieldsDataSorter = new DynamicFieldsDataSorter($fields, $getFieldTranslationData = false, $options = null);
        $fields = $dynamicFieldsDataSorter->sortOutTheFields();

        return $fields;
    }

    /**
     * @param Group   $group
     * @param Request $request
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Group $group, Request $request)
    {
        $result = StoreGroupFields::performUseCase($this->groupRepository, $isEdit = true);
        
        //return redirect()->route('admin.dynamicfield.group.edit');
        return redirect()->back()
                        ->withSuccess(trans('core::core.messages.resource updated', ['name' => trans('dynamicfield::dynamicfield.title.field_group')]));
    }

    /**
     * @param Group $group
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Group $group)
    {
        $this->groupRepository->destroy($group);
        
        return redirect()->route('admin.dynamicfield.group.index')
                        ->withSuccess(trans('core::core.messages.resource deleted', ['name' => trans('dynamicfield::dynamicfield.title.field_group')]));;
    }




    /**
     * @param Page $page
     * @return \Illuminate\Http\RedirectResponse
     */
    public function duplicate(Page $page)
    {
        //$this->groupRepository->replicate($page);

        return redirect()->route('admin.page.page.index')
                        ->withSuccess(trans('dynamicfield::messages.page.duplicate successful'));;
    }

    /**
     * collectUsers
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function collectUsers()
    {
        $users = User::all();
        $allFields = [];
        foreach($users as $user)
        {
            $newItem = [
                'id'    => $user['id'],
                'label' => $user['first_name'] . ' ' . $user['last_name'],
                'email' => $user['email']
            ];
            array_push($allFields, $newItem);
        }
        return response()->json($allFields);
    }

    /**
     * collectEntities
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function collectEntities()
    {
        $entities  = config('asgard.dynamicfield.config.entity-type');
        $allFields = [];
        foreach($entities as $entityPath => $entityName)
        {
            $entityItems = $entityPath::all()->toArray();

            foreach($entityItems as $item)
            {
                $newItem = [
                    'id'    => $item['id'],
                    'label' => (isset($item['title'])) ?  $entityName . ' - ' . $item['title'] : $entityName . ' - ' . $item['slug'],
                    'type'  => $entityPath
                ];
                array_push($allFields, $newItem);
            }
        }
        return response()->json($allFields);
    }


    /**
     * renderLocationDrop
     *
     * @return \Collective\Html\FormFacade\Select
     */
    public function renderLocationDrop()
    {
        $selected   = $_REQUEST['selected'];
        $dropName   = $_REQUEST['dropName'];
        $value      = null;
        if ($_REQUEST['value'] != "undefined") {
            $value    = $_REQUEST['value'];
        }
        $name       = str_replace("parameter", "value", $dropName);
        $arrData   = array();
        switch ($selected) {
            case "type":
                $arrData = config('asgard.dynamicfield.config.entity-type');
                break;
            case "template":
                $arrData    = $this->template->getTemplates();
                break;
        }
        //$html = FormFacade::select($name, $arrData, $value, ['class' => "form-control"]);
        //return response()->json(['html' => $html]);

        return response(FormFacade::select($name, $arrData, $value, ['class' => "form-control"]));
    }

}
