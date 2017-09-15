<?php

namespace Modules\Dynamicfield\Providers;

use Illuminate\Database\Eloquent\Factory;
use Faker\Factory as FakerFactory;
use Faker\Generator as FakerGenerator;
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
        $this->mergeConfigFrom(__DIR__ . '/../Config/router.php', 'asgard.dynamicfield.router');
        $this->mergeConfigFrom(__DIR__ . '/../Config/entity-type.php', 'asgard.dynamicfield.entity-type');

        $this->publishes([__DIR__ . '/../Config/config.php' => config_path('asgard.dynamicfield.config' . '.php'), ], 'config');
        $this->publishes([__DIR__ . '/../Config/router.php' => config_path('asgard.dynamicfield.router' . '.php'), ], 'router');
        $this->publishes([__DIR__ . '/../Config/entity-type.php' => config_path('asgard.dynamicfield.entity-type' . '.php'), ], 'entity-type');
    
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

//        $this->app->singleton(Factory::class, function () {
//            dd(base_path('Modules/Dynamicfield/Database/factories'));
//            return Factory::construct(new FakerGenerator(),base_path('Modules/Dynamicfield/Database/factories'));
//        });
//        $this->app->singleton(Factory::class, function ($app){
//            return Factory::construct($app->make(FakerGenerator::class), 'Modules/Dynamicfield/Database/factories');
//        });

        // add bindings
        $this->app->bind(
            'Modules\Dynamicfield\Repositories\EntitiesRepository',
            function () {
                $repository = new \Modules\Dynamicfield\Repositories\Eloquent\EloquentEntitiesRepository(new \Modules\Dynamicfield\Entities\Entity());
                if (!config('app.cache')) {
                    return $repository;
                }
            }
        );

        // add bindings
        $this->app->bind(
            'Modules\Dynamicfield\Repositories\FieldsRepository',
            function () {
                $repository = new \Modules\Dynamicfield\Repositories\Eloquent\EloquentFieldsRepository(new \Modules\Dynamicfield\Entities\Field());
                if (!config('app.cache')) {
                    return $repository;
                }
            }
        );

        $this->app->bind(
            'Modules\Dynamicfield\Repositories\FieldTranslationsRepository',
            function () {
                $repository = new \Modules\Dynamicfield\Repositories\Eloquent\EloquentFieldsTranslationsRepository(new \Modules\Dynamicfield\Entities\FieldTranslation());
                if (!config('app.cache')) {
                    return $repository;
                }
            }
        );

        // add bindings
        $this->app->bind(
            'Modules\Dynamicfield\Repositories\OptionsRepository',
            function () {
                $repository = new \Modules\Dynamicfield\Repositories\Eloquent\EloquentOptionsRepository(new \Modules\Dynamicfield\Entities\Option());
                if (!config('app.cache')) {
                    return $repository;
                }
            }
        );

        $this->app->bind(
            'Modules\Dynamicfield\Repositories\OptionValuesRepository',
            function () {
                $repository = new \Modules\Dynamicfield\Repositories\Eloquent\EloquentOptionValuesRepository(new \Modules\Dynamicfield\Entities\OptionValue());
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
