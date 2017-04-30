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
    ],
    'dynamicfield.media' => [
        'linkMedia' => 'dynamicfield::media.linkMedia resource',
    ],
    'dynamicfield.page' => [
        'duplicate' => 'dynamicfield::page.duplicate resource',
    ],
];
