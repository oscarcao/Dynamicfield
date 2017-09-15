<?php

namespace Modules\Dynamicfield\Composers;

use Illuminate\Contracts\View\View;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Modules\Dynamicfield\Entities\Option;
use Modules\Dynamicfield\Entities\OptionValue;
use Modules\Dynamicfield\Library\OptionValues\OptionsForFront;
use Modules\Dynamicfield\Repositories\FieldsRepository;
use Modules\Dynamicfield\Repositories\FieldTranslationsRepository;
use Modules\Page\Repositories\PageRepository;
//use Modules\Dynamicfield\Library\DynamicFields;
//use Modules\Dynamicfield\Entities\Entity as EntityModel;
use Illuminate\Filesystem\Filesystem;
use Modules\Core\Foundation\Theme\ThemeManager;
use Request;
use Route;

class FrontendViewComposer
{

    /**
     * @var PageRepository
     */
    private $pageRepository;

    /**
     * @var ThemeManager
     */
    private $themeManager;

    /**
     * @var FieldsRepository
     */
    private $fieldTranslationsRepository;

    public function __construct(ThemeManager $themeManager, PageRepository $pageRepository, FieldTranslationsRepository $fieldTranslationsRepository)
    {
        $this->themeManager     = $themeManager;
        $this->pageRepository   = $pageRepository;
        $this->fieldTranslationsRepository = $fieldTranslationsRepository;
    }

    /**
     * @param View $view
     */
    public function compose(View $view)
    {
        $this->collectOptions();
        $this->assignDynamicFieldsToPageObject($view);
    }

    /**
     * collectOptions
     *
     * @param $view
     *
     * @return mixed
     */
    private function collectOptions()
    {
        $options = [];
        $optionValues = OptionValue::where('parent','0')->where('parent_layout',0)->get();
        //dd($optionValues);
        $options = OptionsForFront::collect($optionValues);
        $GLOBALS['dynamicFieldOptions'] = $options;

        return true;
    }

    /**
     * assignDynamicFieldsToPageObject
     *
     * @param $view
     *
     * @return mixed
     */
    private function assignDynamicFieldsToPageObject($view)
    {
        $arrAllow = config('asgard.dynamicfield.router');
        $data     = $view->getData();
        $routName = Route::currentRouteName();
//        $locale   = LaravelLocalization::getCurrentLocale();
	    $locale   = locale();
        $path     = request()->path();
        $pagePath = str_replace($locale . '/', '', $path);
        $page     = $this->pageRepository->findBySlug($pagePath);
        $request  = request();

        if (in_array($routName, $arrAllow)) {

            $arrType = config('asgard.dynamicfield.config.entity-type');
            $arrType =  array_keys($arrType);

            if (count($data)) {
                foreach ($data as $item) {
                    if (is_object($item)) {
                        $className = get_class($item); // $item
                        if (in_array($className, $arrType)) {
                            $entities = $this->fieldTranslationsRepository->getFieldValues($item, $locale);

                            if( !is_null($entities) && !empty($entities) ) {                            
                                //dd($item, $entities->toArray());
                                $fieldValues = $this->fieldTranslationsRepository->sortFieldsForFront($entities->fieldValues);
                                //dd($item,$fieldValues);
                                return $view->with('dynamicfields', $fieldValues);
                            }
                        }

                        return $view;
                    }

                }// end foreach
            }
        }

        return $view;
    }

}
