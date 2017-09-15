var gulp = require('gulp');
var shell = require('gulp-shell');
var Elixir = require('laravel-elixir');

var Task = Elixir.Task;
var exec = require('child_process').exec;
//var exec = require('gulp-exec');

Elixir.extend('execute', function() {

    new Task('execute', function() {

        var str = __dirname;
        var res = str.replace("/Modules/Dynamicfield", "");
        //return exec('cd /Users/paulquinn/Sites/asgard-dos && php artisan module:publish dynamicfield', function (err, stdout, stderr) {
        return exec('cd ' + res + ' && php artisan module:publish dynamicfield', function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);

            console.log('__dirname',__dirname, res);
            //cb(err);
        });
    }).watch('./Resources/js/**/**');

});
