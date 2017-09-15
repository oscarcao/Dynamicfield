<?php

use Illuminate\Routing\Router;

$router->bind('group', function ($id) {
    return app('Modules\Dynamicfield\Repositories\GroupRepository')->find($id);
});
$router->bind('page', function ($id) {
    return app('Modules\Page\Repositories\PageRepository')->find($id);
});
$router->group(['prefix' => '/dynamicfield'], function (Router $router) {
    $router->resource('group', 'GroupFieldsController', ['except' => ['show'], 'names' => [
        'index'     => 'admin.dynamicfield.group.index',
        'create'    => 'admin.dynamicfield.group.create',
        'store'     => 'admin.dynamicfield.group.store',
        'update'    => 'admin.dynamicfield.group.update',
        'destroy'   => 'admin.dynamicfield.group.destroy'
    ]]);

    $router->get('group/edit/renderLocationDrop', ['as' => 'admin.dynamicfield.group.renderLocationDrop', 'uses' => 'GroupFieldsController@renderLocationDrop']);
    $router->get('group/renderLocationDrop', ['as' => 'admin.dynamicfield.group.renderLocationDrop', 'uses' => 'GroupFieldsController@renderLocationDrop']);
    $router->get('group/edit/{group}', ['as' => 'admin.dynamicfield.group.edit', 'uses' => 'GroupFieldsController@edit']);
    $router->post('group/edit/{group}', ['as' => 'admin.dynamicfield.group.update', 'uses' => 'GroupFieldsController@update']);

    $router->resource('options', 'OptionFieldsController', ['except' => ['show'], 'names' => [
        'index'     => 'admin.dynamicfield.options.index',
        'store'     => 'admin.dynamicfield.options.store',
    ]]);

    $router->resource('optionvalues', 'OptionFieldValuesController', ['except' => ['show'], 'names' => [
        'index'     => 'admin.dynamicfield.optionvalues.index',
        'store'     => 'admin.dynamicfield.optionvalues.store'
    ]]);

    $router->resource('admin', 'AdminDcfController', ['except' => ['show'], 'names' => [
        'index'     => 'admin.dynamicfield.admin.index',
    ]]);

    $router->post('admin/update-parent-layouts/', ['as' => 'admin.dynamicfield.admin.updateProps', 'uses' => 'AdminDcfController@updateParentLayoutProperty']);
    $router->post('admin/migrate-old-to-new/', ['as' => 'admin.dynamicfield.admin.migrateOldToNew', 'uses' => 'AdminDcfController@migrateOldToNew']);
    $router->post('admin/migrate-wysiwyg/', ['as' => 'admin.dynamicfield.admin.migrateWysiwyg', 'uses' => 'AdminDcfController@migrateWysiwyg']);
    $router->post('admin/update-empty-parent-layouts/', ['as' => 'admin.dynamicfield.admin.updateEmptyParentLayouts', 'uses' => 'AdminDcfController@updateEmptyParentLayouts']);
    $router->post('group/update-parent-layouts/', ['as' => 'admin.dynamicfield.group.updateProps', 'uses' => 'GroupFieldsController@updateParentLayoutProperty']);

    $router->post('media/link', ['as' => 'admin.dynamicfield.media.linkMedia', 'uses' => 'MediaController@linkMedia']);
    $router->get('page/{page}/duplicate', ['as' => 'admin.dynamicfield.page.duplicate', 'uses' => 'GroupFieldsController@duplicate']);

    $router->get('api/collect-entities', ['as' => 'admin.dynamicfield.page.collectEntities', 'uses' => 'GroupFieldsController@collectEntities']);
    $router->get('api/collect-users', ['as' => 'admin.dynamicfield.page.collectUsers', 'uses' => 'GroupFieldsController@collectUsers']);


});
