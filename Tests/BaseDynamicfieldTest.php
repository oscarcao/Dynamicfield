<?php namespace Modules\Dynamicfield\Tests;

use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Sidebar\SidebarServiceProvider;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;
use Mcamara\LaravelLocalization\LaravelLocalizationServiceProvider;
use Modules\Core\Providers\CoreServiceProvider;
use Modules\Dynamicfield\Providers\DynamicfieldServiceProvider;
use Modules\Dynamicfield\Repositories\FieldsRepository;

use Modules\Dynamicfield\Repositories\Eloquent\EloquentFieldsRepository;
use Modules\Media\Entities\File;
use Modules\Media\Providers\MediaServiceProvider;
use Modules\Media\Repositories\FileRepository;
use Modules\Page\Providers\PageServiceProvider;
use Modules\Page\Repositories\PageRepository;
use Orchestra\Testbench\TestCase;
use Nwidart\Modules\ModulesServiceProvider;
use Illuminate\Contracts\Console\Kernel;

use Modules\Core\Tests\BaseTestCase;

abstract class BaseDynamicFieldTest extends BaseTestCase
{
    /**
     * @var PageRepository
     */
    protected $page;

    /**
     * @var FieldsRepository
     */
    protected $fieldsRepository;

    /**
     * @var FileRepository
     */
    protected $fileRepository;

    public function setUp()
    {
        parent::setUp();

        $this->resetDatabase();

        $this->page             = app(PageRepository::class);
        $this->fieldsRepository = app(FieldsRepository::class);
        $this->fileRepository   = app(FileRepository::class);
    }

    protected function getPackageProviders($app)
    {
        return [
            ModulesServiceProvider::class,
            CoreServiceProvider::class,
            PageServiceProvider::class,
            MediaServiceProvider::class,
            LaravelLocalizationServiceProvider::class,
            SidebarServiceProvider::class,
            DynamicfieldServiceProvider::class
        ];
    }

    protected function getPackageAliases($app)
    {
        return [
            'Eloquent' => Model::class,
            'LaravelLocalization' => LaravelLocalization::class,
            'File' => File::class,
        ];
    }

    protected function getEnvironmentSetUp($app)
    {
        $app['path.base'] = __DIR__ . '/..';
        $app['config']->set('database.default', 'sqlite');
        $app['config']->set('database.connections.sqlite', array(
            'driver' => 'sqlite',
            'database' => ':memory:',
            'prefix' => '',
        ));
        $app['config']->set('translatable.locales', ['en', 'fr']);
    }

    private function resetDatabase()
    {
        // Relative to the testbench app folder: vendors/orchestra/testbench/src/fixture
        $migrationsPath = 'Database/Migrations';
        $artisan = $this->app->make(Kernel::class);
        // Makes sure the migrations table is created
        $artisan->call('migrate', [
            '--database' => 'sqlite',
            '--path'     => $migrationsPath,
        ]);
        // We empty all tables
        $artisan->call('migrate:reset', [
            '--database' => 'sqlite',
        ]);
        // Migrate
        $artisan->call('migrate', [
            '--database' => 'sqlite',
            '--path'     => $migrationsPath,
        ]);
    }
}