<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOptionTables extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {

        Schema::create('dynamicfield__options', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            //$table->integer('group_id')->unsigned();
            $table->text('data');
            $table->string('type');
            $table->string('name');
            $table->string('slug');
            $table->string('unique_id');
            $table->string('field_type');
            $table->string('order')->default(0);
            $table->string('parent')->default(0);
            $table->string('parent_layout')->default(0);
            //$table->foreign('group_id')->references('id')->on('dynamicfield__groups')->onDelete('cascade');
            $table->timestamps();
        });



        Schema::create('dynamicfield__option_values', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            //$table->integer('entity_field_id')->unsigned();
            $table->string('locale', 5);
            $table->longText('value');
            $table->string('field_id');
            $table->string('unique_id');
            $table->string('parent')->default(0);
            $table->string('parent_layout')->default(0);
            //$table->foreign('entity_field_id')->references('id')->on('dynamicfield__entities')->onDelete('cascade');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::drop('dynamicfield__field_translations');
        Schema::drop('dynamicfield__entities');
        Schema::drop('dynamicfield__fields');
        Schema::drop('dynamicfield__groups');
        Schema::drop('dynamicfield__rules');
    }
}
