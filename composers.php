<?php
if (! function_exists('array_flatten_preserve')) {

    /**
     * Dump the passed variables and end the script.
     *
     * @param  mixed
     * @return void
     */
    function array_flatten_preserve($array, $return=array(), $preserve_index_names = false) {

        foreach ($array AS $key => $value) {
            if(is_array($value)) {
                $return = array_flatten_preserve($value,$return, $preserve_index_names);
            }
            else {
                if($value) {
                    if($preserve_index_names === false) {
                        $return[] = $value;
                    }
                    else {
                        $return[$key] = $value;
                    }
                }
            }
        }

        return $return;
    }
}
//view()->composer(['*::*.edit', '*::*.create'], Modules\Dynamicfield\Composers\DynamicfieldViewComposer::class);
view()->composer(['dynamicfield::admin.group.edit'], Modules\Dynamicfield\Composers\TemplateViewComposer::class);
view()->composer('*', Modules\Dynamicfield\Composers\FrontendViewComposer::class);
