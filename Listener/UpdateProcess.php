<?php

namespace Modules\Dynamicfield\Listener;

use Modules\Blog\Entities\Post;
use Modules\Post\Entities\Post as PostPost;
use Modules\Dynamicfield\Repositories\Eloquent\EloquentFieldsTranslationsRepository;
use Modules\Dynamicfield\Repositories\FieldTranslationsRepository;
use Modules\Dynamicfield\Repositories\EntitiesRepository;
use Modules\Page\Entities\Page;

class UpdateProcess
{

    /**
     * $fieldsTranslationsRepository  FieldTranslationsRepository
     * $entitiesRepository            EntitiesRepository
     *
     * @var array
     */
    protected $fieldsTranslationsRepository, $entitiesRepository;

    /**
     * Create the event listener.
     */
    public function __construct(FieldTranslationsRepository $fieldsTranslationsRepository, EntitiesRepository $entitiesRepository)
    {
        $this->fieldsTranslationsRepository = $fieldsTranslationsRepository;
        $this->entitiesRepository           = $entitiesRepository;
    }

    /**
     * Handle the event.
     *
     * @param PageWasUpdated $event
     */
    public function pageHandle($event)
    {
        //dd('lets save the stuff',$event, locale());
        $page = Page::find($event->pageId);
        $this->saveDynamicData($page, $event->data);
    }
    /**
     * Handle the event.
     *
     * @param BlogWasUpdated $event
     */
    public function blogHandle($event)
    {
        $post = Post::find($event->postId);
        $this->saveDynamicData($post, $event->data);
    }

    /**
     * Handle the event.
     *
     * @param BlogWasCreated $event
     */
    public function postHandle($event)
    {
        //dd($event);
        $post = PostPost::firstOrNew(['id' => $event->postId]);
        $this->saveDynamicData($post, $event->data);
    }

    public function handle($event)
    {
    }

    public function subscribe($events)
    {
        $events->listen(
            'Modules\Post\Events\PostWasUpdated',
            'Modules\Dynamicfield\Listener\UpdateProcess@postHandle'
        );

        $events->listen(
            'Modules\Blog\Events\PostWasUpdated',
            'Modules\Dynamicfield\Listener\UpdateProcess@blogHandle'
        );

        $events->listen(
            'Modules\Page\Events\PageWasUpdated',
            'Modules\Dynamicfield\Listener\UpdateProcess@pageHandle'
        );
    }
    // save data to dynamic database ;
    private function saveDynamicData($entity, $data)
    {
        //dd('saveDynamicData',$entity,$data);
        $entityModel  = $this->entitiesRepository->entityModel($entity, $data);
        //dd('saveDynamicData',$entity,$data, $entityModel);
        $saveResult   = $this->fieldsTranslationsRepository->saveFieldsData($entityModel, $entity, $data);
        $deleteResult = $this->fieldsTranslationsRepository->deleteFieldValuesData($entityModel, $data);

        //dd($saveResult, $deleteResult);
//        dd($entity, $data, $this->fieldsTranslationsRepository);
//        $fields = new DynamicFieldsForEntity($entity);
//        $fields->saveFieldData();
    }
}
