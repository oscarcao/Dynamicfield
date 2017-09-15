# Dynamicfield

**This module is working, but in a very alpha version. Using is at your own risk!**
**You are welcome to work on it**

## Introduction

It's no more needed to alter Page template. It works now with the native functions.
More details come soon.

## Add the following to the Page Config

```
'partials' => [
    'translatable' => [
        'create' => [
            'dynamicfield::admin.dynamicfield.entity-type.page-fields'
        ],
        'edit' => [
            'dynamicfield::admin.dynamicfield.entity-type.page-fields'
        ],
    ],
    'normal' => [
        'create' => [
            'dynamicfield::admin.dynamicfield.entity-type.page-script'
        ],
        'edit' => [
            'dynamicfield::admin.dynamicfield.entity-type.page-script'
        ],
    ],
],
```

## Post-Install Commands

`php artisan module:migrate dynamicfield`

`php artisan module:publish dynamicfield`

`php artisan module:publish-translation dynamicfield`

## Post-Install Actions

If User class not found error appears, update the following in config/auth.php

```
    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => App\User::class,
        ],

        // 'users' => [
        //     'driver' => 'database',
        //     'table' => 'users',
        // ],
    ],
```

to

``` 
    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => Modules\User\Entities\Sentinel\User::class,
        ],

        // 'users' => [
        //     'driver' => 'database',
        //     'table' => 'users',
        // ],
    ],
```

## Usage

Create a new Dynamicfield and select on the right side on which page template you want to use it on.

After you've created your first Dynamicfield, you can go to the Page create/edit view, select your desired Template and then, the Dynamicfield should appear automatically.

If nothing happens, make sure the dynamic-fields.js is loaded. Clear Cache and run the "module:publish dynamicfield" command

After you have created your Dynamicfield, set up your page and filled your data, your able to get the datas on your page template through the:
```
    $dynamicfields
```
It's an array and inside are all fields, as well the repeater fields.
the name of the indexes are the same which you have given for the field name.
