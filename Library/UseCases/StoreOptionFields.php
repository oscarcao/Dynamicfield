<?php
namespace Modules\Dynamicfield\Library\UseCases;

use Modules\Dynamicfield\Library\UseCases\UseCase;

class StoreOptionFields extends UseCase {

    /**
     * @var optionsRepository
     */
    protected $optionsRepository;

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
    public static function performUseCase($optionsRepository, $isEdit = false)
    {
        return (new static)->handleThis($optionsRepository, $isEdit);
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
    protected function handleThis($optionsRepository, $isEdit)
    {
        $this->optionsRepository = $optionsRepository;
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
        $data    = $request->all();

        $returnedInfo = [];

        $dataFields     = (isset($data['field'])) ? $data['field'] : [];
        $fieldsToDelete = (isset($data['cdf-deleted'])) ? $data['cdf-deleted'] : [];
        //$hasLayoutBlocksToDelete = (isset($data['cdf-deletedLayout'])) ? $data['cdf-deletedLayout'] : null;

        if($isEdit === true)
        {
//            if (null !== $hasLayoutBlocksToDelete)
//            {
//                $returnedInfo['layoutResult'] = $this->optionsRepository->updateLayoutFieldValues($hasLayoutBlocksToDelete);
//            }
            $returnedInfo['deleteResult'] = $this->optionsRepository->deleteFields($fieldsToDelete);
        }

        $returnedInfo['bResult'] = $this->optionsRepository->saveData($dataFields, $isEdit);

        return $returnedInfo;
    }
}