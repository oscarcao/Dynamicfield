<?php

namespace Modules\Dynamicfield\Providers;

use Illuminate\Support\ServiceProvider;
use Modules\Core\Traits\CanPublishConfiguration;

class DynamicfieldServiceProvider extends ServiceProvider
{
    use CanPublishConfiguration;

    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    public function boot()
    {
        $this->mergeConfigFrom(__DIR__ . '/../Config/config.php', 'asgard.dynamicfield.config');

        $this->publishes([__DIR__ . '/../Config/config.php' => config_path('asgard.dynamicfield.config' . '.php'), ], 'config');

        $this->publishConfig('dynamicfield', 'permissions');
        
        $this->loadMigrationsFrom(__DIR__.'/../Database/Migrations');
    }

    /**
     * Register the service provider.
     */
    public function register()
    {
        $this->registerBindings();
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return array();
    }

    private function registerBindings()
    {
        // add bindings
        $this->app->bind(
            'Modules\Dynamicfield\Repositories\FieldsRepository',
            function () {
                $repository = new \Modules\Dynamicfield\Repositories\Eloquent\EloquentFieldsRepository(new \Modules\Dynamicfield\Entities\Fields());
                if (!config('app.cache')) {
                    return $repository;
                }
            }
        );

        $this->app->bind(
            'Modules\Dynamicfield\Repositories\GroupRepository',
            function () {
                $repository = new \Modules\Dynamicfield\Repositories\Eloquent\EloquentGroupRepository(new \Modules\Dynamicfield\Entities\Group());
                if (!config('app.cache')) {
                    return $repository;
                }
            }
        );

        $this->app->bind(
            'Modules\Dynamicfield\Repositories\GroupFieldRepository',
            function () {
                $repository = new \Modules\Dynamicfield\Repositories\Eloquent\EloquentGroupFieldRepository(new \Modules\Dynamicfield\Entities\Field());
                if (!config('app.cache')) {
                    return $repository;
                }
            }
        );

        if ($this->app->environment() == 'local') {
            $this->app->register('Barryvdh\Debugbar\ServiceProvider');
        }
    }
}
