<?php
namespace Modules\Dynamicfield\Library\Migrate;

use DB;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Library\Fields\GetFields;
use Modules\Dynamicfield\Library\FieldTranslations\GetFieldTranslation;
use Modules\Dynamicfield\Library\FieldTranslations\GetFlexibleContentTranslations;
use Modules\Dynamicfield\Library\FieldTranslations\UpdateRepeatersInFlexLayouts;
use Modules\Dynamicfield\Library\FlexibleContent\FlexibleContentMigrateLayouts;
use Modules\Dynamicfield\Library\Repeaters\RepeaterMigrateLayouts;
use Modules\Dynamicfield\Library\Steps\Steps;
use Modules\Dynamicfield\Library\UseCases\UseCase;

class MigrateFieldParentLayout extends Steps {

    use GetFields;

    /**
     * @return mixed
     */
    public static function perform()
    {
        return (new static)->handle();
    }

    /**
     * handle
     *
     * handle it
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function handle()
    {
        $fields = $this->getEmptyParentLayoutFields();

        //dd('$fields',$fields->toArray());

        $feedback = [];

        if($fields == null){
            $feedback['result'] = false;
            return $feedback;
        }

        DB::beginTransaction();

        $feedback['count'] = 0;

        try {
            $deleted = $fields->map(function ($field, $key) use($feedback) {
                $return = $this->updateValue($field);
                if($return === true) {
                    $feedback['count']++;
                }
            });
            DB::commit();

            $feedback['rows']   = $deleted;
            $feedback['result'] = true;

        } catch (\Exception $ex) {
            DB::rollback();
            //dd('exception!',$ex);

            $feedback['rows']   = 0;
            $feedback['result'] = false;
        }


        return $feedback;
    }

    /**
     * updateValue()
     *
     * update the value
     *
     * @return Boolean
     */
    protected function updateValue($field)
    {
        $field->parent_layout = 0;
        $field->save();

        return true;
    }



}


