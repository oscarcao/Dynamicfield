<?php

namespace Modules\Dynamicfield\Composers;

use Illuminate\Contracts\View\View;
//use Modules\Dynamicfield\Library\DynamicFields;

class DynamicfieldViewComposer
{
    /**
     * Assign dynamicField to view
     *
     * @param View $view
     */
    public function compose(View $view)
    {
        $this->assignDynamicFieldsToPageObject($view);
    }

    /**
     * Pass dynamicFields to view
     *
     * @param $view
     * @return mixed
     */
    private function assignDynamicFieldsToPageObject($view)
    {
        $entityDynamic  = null;
        $data    = $view->getData();

        //dd($data);
        //TODO Fix with event
        if (count($data)) {
            $arrType = config('asgard.dynamicfield.config.entity-type');
            $arrType =  array_keys($arrType);
            //dd($data, $arrType, $view);
            // edit entity
            foreach ($data as $item) {
                if (is_object($item)) {
                    $className = get_class($item);
                    if (in_array($className, $arrType)) {
                        $entityDynamic = $item;
                        break;
                    }
                }
            }
        }

        //dd($entityDynamic);
        // initial model data for create new;
        if (is_null($entityDynamic)) {
            $router    = \Request::route()->getName();
            //dd($router);
            $arrCreateRouter    = config('asgard.dynamicfield.config.router');
            if (array_key_exists($router, $arrCreateRouter)) {
                $entityDynamic = new $arrCreateRouter[$router];
            }
        }
        //dd($entityDynamic);
        $view->with('entityDynamic', $entityDynamic);

        return $view;
    }
}
