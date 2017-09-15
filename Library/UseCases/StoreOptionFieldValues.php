<?php
/**
 * Created by PhpStorm.
 * User: paulquinn
 * Date: 13/10/2016
 * Time: 16:29
 */

namespace Modules\Dynamicfield\Library\UseCases;

use Modules\Dynamicfield\Library\UseCases\UseCase;

class StoreOptionFieldValues extends UseCase
{

    /**
     * @var optionValuesRepository
     */
    protected $optionValuesRepository;

    /**
     * @return mixed
     */
    public static function perform()
    {
        return (new static)->handleThis();
    }

    /**
     * @return mixed
     */
    public static function performUseCase($optionValuesRepository, $isEdit = false)
    {
        return (new static)->handleThis($optionValuesRepository, $isEdit);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    protected function handle()
    {
        return null;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    protected function handleThis($optionValuesRepository, $isEdit)
    {
        $this->optionValuesRepository = $optionValuesRepository;
        return $this->storeFields($isEdit);
    }

    /**
     * storeFields()
     *
     * store the option fields in DB
     * make updates/deletions is necessary too
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function storeFields($isEdit)
    {
        $request = request();
        $data = $request->all();

        $saveResult   = $this->optionValuesRepository->saveFieldsData($data);
        $deleteResult = $this->optionValuesRepository->deleteFieldValuesData($data);
    }
}