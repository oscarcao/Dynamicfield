var elixir = require('laravel-elixir');
//require('laravel-elixir-babelify');
require('laravel-elixir-vueify');

elixir.config.assetsPath = 'Resources/';
elixir.config.publicPath = 'Assets/';

require('./gulp-exec');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    //mix.less('app.less');
    mix.browserify('app.js');
    mix.execute();
});
