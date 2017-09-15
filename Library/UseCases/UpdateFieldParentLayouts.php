<?php
namespace Modules\Dynamicfield\Library\UseCases;


use DB;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Library\UseCases\UseCase;

class UpdateFieldParentLayouts extends UseCase {

    /**
     * @var $fields
     */
    protected $fields;

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
        $this->fields = Field::all();
        //dd($this->fields);
        DB::beginTransaction();

        $updatedRows['count'] = 0;

        try {
            $multiplied = $this->fields->map(function ($field, $key) use($updatedRows) {
                $return = $this->updateParentLayoutProperty($field);
                if($return === true) {
                    $updatedRows['count']++;
                }
            });
            DB::commit();
            $deletedResult = true;

        } catch (\Exception $ex) {
            DB::rollback();
            //dd('exception!',$ex);
            $deletedResult = false;
        }

        $updatedRows['result'] = $deletedResult;

        return $updatedRows;
    }



    /**
     * updateParentLayoutProperty()
     *
     * update the parent layout property to be the called
     * parent_layout property within data serialized array
     *
     * @return Boolean
     */
    protected function updateParentLayoutProperty($field)
    {
        $data = $field->data;

        if(!isset($field->parent_layout) || !isset($data['parent_layout'])){
            return false;
        }

        $field->parent_layout = $data['parent_layout'];
        $field->save();

        return true;
    }

}