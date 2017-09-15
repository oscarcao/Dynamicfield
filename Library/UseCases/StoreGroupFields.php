<?php
namespace Modules\Dynamicfield\Library\UseCases;

use Modules\Dynamicfield\Library\UseCases\UseCase;

class StoreGroupFields extends UseCase {

    /**
     * @var GroupRepository
     */
    protected $groupRepository;

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
    public static function performUseCase($groupRepository, $isEdit = false)
    {
        return (new static)->handleThis($groupRepository, $isEdit);
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
    protected function handleThis($groupRepository, $isEdit)
    {
        $this->groupRepository = $groupRepository;
        return $this->storeGroupFields($isEdit);
    }

    /**
     * storeGroupFields()
     *
     * store the group fields in DB
     * make updates/deletions is necessary too
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function storeGroupFields($isEdit)
    {
        $request = request();
        $data    = $request->all();
        //dd('storeGroupFields',$data, $isEdit);

        $returnedInfo = [];

        $dataGroup      = (isset($data['group'])) ? $data['group'] : [];
        $dataFields     = (isset($data['field'])) ? $data['field'] : [];
        $fieldsToDelete = (isset($data['cdf-deleted'])) ? $data['cdf-deleted'] : [];
        $hasLayoutBlocksToDelete = (isset($data['cdf-deletedLayout'])) ? $data['cdf-deletedLayout'] : null;


        //dd($hasLayoutBlocksToUpdate);
        // reset key of array location /////
        $dataRules    = array_values($data["location"]);
        $newDataRules = array_map('array_values', $dataRules);

        //dd('$isEdit',$isEdit,'$dataGroup',$dataGroup,'$dataFields',$dataFields,'$fieldsToDelete',$fieldsToDelete,'$hasLayoutBlocksToDelete',$hasLayoutBlocksToDelete,'$dataRules',$dataRules,'$newDataRules',$newDataRules);
        if($isEdit === true)
        {
            if (null !== $hasLayoutBlocksToDelete)
            {
                $returnedInfo['layoutResult'] = $this->groupRepository->updateLayoutFieldValues($hasLayoutBlocksToDelete);
            }
            $returnedInfo['deleteResult'] = $this->groupRepository->deleteFields($fieldsToDelete);
        }
        //$bResult = [];
        $returnedInfo['bResult'] = $this->groupRepository->saveData($dataGroup, $dataFields, $newDataRules, $isEdit);
        $returnedInfo['groupId'] = @$data["group"]["id"];

//        if ($result['groupId'] > 0) {
//            $tran_core = '';
//        }

        return $returnedInfo;
    }
}