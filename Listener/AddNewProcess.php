<?php

namespace Modules\Dynamicfield\Listener;

use Modules\Blog\Entities\Post;
use Modules\Post\Entities\Post as PostPost;
use Modules\Blog\Events\BlogWasCreated;
use Modules\Dynamicfield\Repositories\Eloquent\EloquentFieldsTranslationsRepository;
use Modules\Dynamicfield\Repositories\EntitiesRepository;
use Modules\Dynamicfield\Repositories\FieldTranslationsRepository;
use Modules\Page\Entities\Page;
use Modules\Page\Events\PageWasCreated;

class AddNewProcess
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

    public function handle($event)
    {

    }

    /**
     * Handle the event.
     *
     * @param PageWasCreated $event
     */
    public function pageHandle($event)
    {
        $page = Page::firstOrNew(['id' => $event->pageId]);
        $this->saveDynamicData($page, $event->data);
    }
    /**
     * Handle the event.
     *
     * @param BlogWasCreated $event
     */
    public function blogHandle($event)
    {
        //dd($event);
        $post = Post::firstOrNew(['id' => $event->postId]);
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

    public function subscribe($events)
    {
        $events->listen(
            'Modules\Post\Events\PostWasCreated',
            'Modules\Dynamicfield\Listener\AddNewProcess@postHandle'
        );

        $events->listen(
            'Modules\Blog\Events\PostWasCreated',
            'Modules\Dynamicfield\Listener\AddNewProcess@blogHandle'
        );

        $events->listen(
            'Modules\Page\Events\PageWasCreated',
            'Modules\Dynamicfield\Listener\AddNewProcess@pageHandle'
        );
    }
    // save data to dynamic database ;
    private function saveDynamicData($entity, $data)
    {

        //dd('here?');
        $entityModel  = $this->entitiesRepository->entityModel($entity, $data);
        $saveResult   = $this->fieldsTranslationsRepository->saveFieldsData($entityModel,$entity, $data);
        $deleteResult = $this->fieldsTranslationsRepository->deleteFieldValuesData($entityModel,$data);
        //$fields = new DynamicFieldsForEntity($entity);
        //$fields->init($data);
        //$fields->save();
    }
}
