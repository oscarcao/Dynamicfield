<?php

return [
// append
    'dynamicfield.group' => [
        'index' => 'dynamicfield::group.list resource',
        'create' => 'dynamicfield::group.create resource',
        'store' => 'dynamicfield::group.store resource',
        'edit' => 'dynamicfield::group.edit resource',
        'update' => 'dynamicfield::group.update resource',
        'destroy' => 'dynamicfield::group.destroy resource',
        'renderOption' => 'dynamicfield::group.renderOption resource',
        'renderRepeaterOption' => 'dynamicfield::group.renderRepeaterOption resource',
        'ajaxRender' => 'dynamicfield::group.ajaxRender resource',
        'renderLocationDrop' => 'dynamicfield::group.renderLocationDrop resource',
        'updateProps' => 'dynamicfield::group.updateProps resource',
        'updateParentLayoutProperty' => 'dynamicfield::group.updateParentLayoutProperty resource',
    ],
    'dynamicfield.admin' => [
        'index' => 'dynamicfield::admin.list resource',
        'updateParentLayoutProperty' => 'dynamicfield::admin.updateParentLayoutProperty resource',
        'updateProps' => 'dynamicfield::admin.updateProps resource',
        'migrateOldToNew' => 'dynamicfield::admin.migrateOldToNew resource',
        'deleteMissingFieldTranslations' => 'dynamicfield::admin.deleteMissingFieldTranslations resource',
        'migrateWysiwyg' => 'dynamicfield::admin.migrateWysiwyg resource',
        'updateEmptyParentLayouts' => 'dynamicfield::admin.updateEmptyParentLayouts resource',
    ],
    'dynamicfield.options' => [
        'index' => 'dynamicfield::options.list resource',
        'create' => 'dynamicfield::options.create resource',
        'store' => 'dynamicfield::options.store resource',
        'edit' => 'dynamicfield::options.edit resource',
        'update' => 'dynamicfield::options.update resource',
        'destroy' => 'dynamicfield::options.destroy resource',
    ],
    'dynamicfield.optionvalues' => [
        'index' => 'dynamicfield::optionvalues.list resource',
        'create' => 'dynamicfield::optionvalues.create resource',
        'store' => 'dynamicfield::optionvalues.store resource',
        'edit' => 'dynamicfield::optionvalues.edit resource',
        'update' => 'dynamicfield::optionvalues.update resource',
        'destroy' => 'dynamicfield::optionvalues.destroy resource',
    ],
    'dynamicfield.media' => [
        'linkMedia' => 'dynamicfield::media.linkMedia resource',
    ],
    'dynamicfield.page' => [
        'duplicate' => 'dynamicfield::page.duplicate resource',
    ],
    'dynamicfield.api' => [
        'collectUsers' => 'dynamicfield::api.collectUsers api',
        'collectEntities' => 'dynamicfield::api.collectEntities api',
    ],
    //http://swimcoach-site/backend/dynamicfield/api/collect-users
];
