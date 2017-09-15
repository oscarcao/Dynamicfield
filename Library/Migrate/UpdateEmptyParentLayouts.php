<?php
namespace Modules\Dynamicfield\Library\Migrate;

use DB;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Library\FieldTranslations\GetFlexibleContentTranslations;
use Modules\Dynamicfield\Library\FieldTranslations\UpdateRepeatersInFlexLayouts;
use Modules\Dynamicfield\Library\FlexibleContent\FlexibleContentMigrateLayouts;
use Modules\Dynamicfield\Library\Repeaters\RepeaterMigrateLayouts;
use Modules\Dynamicfield\Library\Steps\Steps;
use Modules\Dynamicfield\Library\UseCases\UseCase;

class UpdateEmptyParentLayouts extends Steps {

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
        $tasks = [
            MigrateFieldTranslationParentLayout::class,
            MigrateFieldParentLayout::class
        ];

        foreach($tasks as $task){
            (new $task)->handle();
        }

        return true;
    }



}


