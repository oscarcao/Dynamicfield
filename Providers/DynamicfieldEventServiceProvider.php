<?php

namespace Modules\Dynamicfield\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class DynamicfieldEventServiceProvider extends ServiceProvider
{
    /**
     * The event handler mappings for the application.
     *
     * @var array
     */
    protected $subscribe = [
        'Modules\Dynamicfield\Listener\AddNewProcess',
        'Modules\Dynamicfield\Listener\UpdateProcess',
    ];
    /**
     * Register any other events for your application.
     *
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
