<?php
namespace Modules\Dynamicfield\Library\FieldTranslations;

use DB;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Library\FieldTranslations\GetFlexibleContentTranslations;
use Modules\Dynamicfield\Library\FieldTranslations\GetRepeaterTranslations;
use Modules\Dynamicfield\Library\Steps\Steps;
use Modules\Dynamicfield\Library\UseCases\UseCase;

class UpdateRepeatersInFlexLayouts extends Steps {

    use GetRepeaterTranslations;

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
        $this->fieldTranslations = $this->repeaterTranslationsInLayouts();
        //dd($this->fieldTranslations);
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

        $parentFieldLayout = $this->getRepeaterParentLayout($fieldTranslation);
        if(is_null($parentFieldLayout)){
            return false;
        }

        $parentLayouts = json_decode($parentFieldLayout->value);

        foreach($parentLayouts as $layout){
            if($layout->layoutParentKey == $fieldTranslation->parent_layout){
                //dd('we have a match!!!',$layout);
                $fieldTranslation->parent_layout = $layout->key;
                break;
            }
        }

        //dd('$fieldTranslation',$fieldTranslation,'$parentFieldLayout',$parentFieldLayout->toArray(),'$parentLayouts',$parentLayouts);

        $fieldTranslation->save();


        return true;
    }

    /**
     * getRepeaterParentLayout
     *
     * we need to get the specific parent that
     * is the correct flexible content field!
     *
     * @param $fieldTranslation
     *
     * @return mixed
     */
    private function getRepeaterParentLayout($fieldTranslation)
    {
        return FieldTranslation::where('entity_field_id',$fieldTranslation->entity_field_id)
            ->where('field_id',$fieldTranslation->parent)
            ->where('value','like','%' . $fieldTranslation->parent_layout  . '%')
            ->whereHas('field',function($query){
                $query->where('type','flexiblecontent');
            })->get()->first();
    }


}
