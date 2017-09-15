<?php
namespace Modules\Dynamicfield\Library\FlexibleContent;


use DB;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Library\FieldTranslations\GetFlexibleContentTranslations;
use Modules\Dynamicfield\Library\Steps\Steps;
use Modules\Dynamicfield\Library\UseCases\UseCase;

class FlexibleContentMigrateLayouts extends Steps {

    use GetFlexibleContentTranslations;

    /**
     * @var $fieldTranslations
     */
    protected $fieldTranslations;

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
        $this->fieldTranslations = $this->flexibleContentTranslations();

        if($this->fieldTranslations == null){
            return false;
        }

        DB::beginTransaction();

        $updatedRows['count'] = 0;

        try {
            $deleted = $this->fieldTranslations->map(function ($fieldTranslation, $key) use($updatedRows) {
                $return = $this->updateValue($fieldTranslation);
                if($return === true) {
                    $updatedRows['count']++;
                }
            });
            DB::commit();

            $updatedRows['rows'] = $deleted;
            $deletedResult       = true;

        } catch (\Exception $ex) {
            DB::rollback();
            //dd('exception!',$ex);

            $updatedRows['rows'] = 0;
            $deletedResult       = false;
        }

        $updatedRows['result'] = $deletedResult;

        return $updatedRows;
    }



    /**
     * updateValue()
     *
     * update the value
     *
     * @return Boolean
     */
    protected function updateValue($fieldTranslation)
    {
        $layoutBlocks = json_decode($fieldTranslation->value);

        if($layoutBlocks == null){
            return false;
        }

        foreach($layoutBlocks as $key => $layoutBlock)
        {
            if(isset($layoutBlock->fields)) {
                unset($layoutBlock->fields);
            }
        }
        //dd($layoutBlocks);

        $fieldTranslation->value = json_encode($layoutBlocks);
        $fieldTranslation->save();

        return true;
    }

}
