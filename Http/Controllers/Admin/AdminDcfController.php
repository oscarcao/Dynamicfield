<?php

namespace Modules\Dynamicfield\Http\Controllers\Admin;

use Collective\Html\FormFacade;
use Illuminate\Http\Request;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Modules\Core\Http\Controllers\Admin\AdminBaseController;
use Modules\Dynamicfield\Library\FieldTranslations\UpdateRepeatersInFlexLayouts;
use Modules\Dynamicfield\Library\FlexibleContent\FlexibleContentMigrateLayouts;
use Modules\Dynamicfield\Library\Migrate\MigrateFlexRepeatersToLatest;
use Modules\Dynamicfield\Library\Migrate\MigrateWysiwyg;
use Modules\Dynamicfield\Library\Migrate\UpdateEmptyParentLayouts;
use Modules\Dynamicfield\Library\Repeaters\RepeaterMigrateLayouts;
use Modules\Dynamicfield\Library\UseCases\UpdateFieldParentLayouts;
use Modules\Dynamicfield\Repositories\GroupRepository;

use Modules\Dynamicfield\Library\Template;
use Modules\Page\Entities\Page;
use Modules\Page\Repositories\PageRepository;

use Request as BaseRequest;

class AdminDcfController extends AdminBaseController
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
        $group = 'empty';
        return view('dynamicfield::admin.admin', compact('group'));
    }

    /**
     * updateParentLayoutProperty
     *
     * A method dedicated to updating the parent layout
     * Currently they save to the Field data property
     *
     * Turns out for future reference need this as a new
     * model property. Thia method is for legacy code to copy
     * from one place to the model property in DB
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function updateParentLayoutProperty()
    {
        //dd('yes all good still');
        $feedback = UpdateFieldParentLayouts::perform();
        $message  = ($feedback['result'] === true) ? 'Updated' : 'Not Updated';
        
        return redirect()->back()->withSuccess($message);
    }

    /**
     * migrateOldToNew
     *
     * A method dedicated to updating the flexible content and repeaters
     * to latest field_translation data property format
     *
     * Originally we relied on parent for repeaters to work out the children
     * that changes to just remembering a rows array of unique_id's and field_id's of
     * the field_translation
     *
     * Flexible content is a case of removing too much information being saved in the
     * Field_translation data property
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function migrateOldToNew()
    {
        //dd('migrateOldToNew');
        //$feedback = FlexibleContentMigrateLayouts::perform();
        //$feedback = UpdateRepeatersInFlexLayouts::perform();
        $feedback = MigrateFlexRepeatersToLatest::perform();
        $message  = ($feedback['result'] === true) ? 'Updated' : 'Not Updated';

        return redirect()->back()->withSuccess($message);
    }

    /**
     * migrateWysiwyg
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function migrateWysiwyg()
    {
        $feedback = MigrateWysiwyg::perform();
        $message  = ($feedback['result'] === true) ? 'Updated' : 'Not Updated';

        return redirect()->back()->withSuccess($message);
    }

    /**
     * updateEmptyParentLayouts
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function updateEmptyParentLayouts()
    {
        $feedback = UpdateEmptyParentLayouts::perform();
        $message  = ($feedback === true) ? 'Updated' : 'Not Updated';

        return redirect()->back()->withSuccess($message);
    }


}
