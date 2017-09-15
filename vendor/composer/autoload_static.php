<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit6495dd35943e9d8c710d208c566ee63e
{
    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'Modules\\Dynamicfield\\' => 21,
            'Modules\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Modules\\Dynamicfield\\' => 
        array (
            0 => __DIR__ . '/../..' . '/',
            1 => __DIR__ . '/../..' . '/',
        ),
        'Modules\\' => 
        array (
            0 => __DIR__ . '/../..' . '/Modules',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit6495dd35943e9d8c710d208c566ee63e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit6495dd35943e9d8c710d208c566ee63e::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
