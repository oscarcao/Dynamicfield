<?php
namespace Modules\Dynamicfield\Library\Repeaters;


use DB;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Library\FieldTranslations\GetFlexibleContentTranslations;
use Modules\Dynamicfield\Library\FieldTranslations\GetRepeaterTranslations;
use Modules\Dynamicfield\Library\Steps\Steps;
use Modules\Dynamicfield\Library\UseCases\UseCase;

class RepeaterMigrateLayouts extends Steps {

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
        $this->fieldTranslations = $this->repeaterTranslations();
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
            dd('exception!',$ex);

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
        $repeaterLayouts = json_decode($fieldTranslation->value);

        //if(false == $this->doNotNeedToUpdate($repeaterLayouts, $fieldTranslation)){
        //    return false;
        //}

        $repeaterLayouts = $this->generateRepeaterLayout($fieldTranslation);
        //dd($fieldTranslation, $repeaterLayouts);
        $fieldTranslation->value = json_encode($repeaterLayouts);
        $fieldTranslation->save();

        return true;
    }

    /**
     * generateRepeaterLayout
     *
     * @param $fieldTranslation
     * @return array|string
     */
    private function generateRepeaterLayout($fieldTranslation)
    {
        $rows = [];
        $repeaterSubFields = Field::whereHas('repeaterFieldTranslation',function($query) use($fieldTranslation){
            $query->where('parent_layout','0')->where('parent',$fieldTranslation->field_id)->where('entity_field_id',$fieldTranslation->entity_field_id);
        })->with(['repeaterFieldTranslation' => function($query) use($fieldTranslation){
            $query->where('parent_layout','0')->where('parent',$fieldTranslation->field_id)->where('entity_field_id',$fieldTranslation->entity_field_id);
        }])->get();

        if($repeaterSubFields == null){
            return '';
        }
        $repeaterSubFieldsArray = $repeaterSubFields->toArray();
        $count = count($repeaterSubFieldsArray[0]['repeater_field_translation']);
        if($count == 0){
            return [];
        }
        for($i = 0; $i < $count; $i++)
        {
            $row = [];
            //$object = new \stdClass();
            foreach($repeaterSubFieldsArray as $key => $fTranslation)
            {
                if(!isset($fTranslation['repeater_field_translation']) || !isset($fTranslation['repeater_field_translation'][$i])){
                    continue;
                }
                $item = $fTranslation['repeater_field_translation'][$i];
                $fieldTranslationNew = [
                    'unique_id' => $item['unique_id']
                ];
                $itemForRow = [
                    'unique_id' => $fTranslation['unique_id'],
                    'field_translation' => (object)$fieldTranslationNew
                ];
                $itemObj = (object)$itemForRow;
                //dd($itemObj, $itemForRow);
                array_push($row,$itemObj);
            }
            array_push($rows,$row);
        }

        //dd('$count',$count,'$repeaterSubFields',$repeaterSubFields->toArray(),'$fieldTranslation',$fieldTranslation->toArray(),'$rows',$rows);
        return $rows;

    }

    /**
     * doNotNeedToUpdate
     *
     * @param $repeaterLayouts
     * @param $fieldTranslation
     *
     * @return bool
     */
    private function doNotNeedToUpdate($repeaterLayouts, $fieldTranslation)
    {
        if($repeaterLayouts == ''){
            return true;
        }

        if($repeaterLayouts == $fieldTranslation->field->slug){
            return true;
        }

        if(count($repeaterLayouts) > 0){
            return false;
        }

        return true;
    }


}
