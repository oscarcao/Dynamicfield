<?php namespace Modules\Dynamicfield\Tests;

use Modules\Core\Tests\BaseTestCase;
use Modules\Media\Entities\File;

class DynamicFieldTest extends BaseDynamicFieldTest
{
    /*
     * ACF sorts the data into an associative array.
     * Our test data has it set like so:
     *
     * [
     * 'text'   => 'addd',
     * 'image1' => ['array of image data']
     * 'repeater' => [
     *       ['repeat_text' => 'one'],
     *       ['repeat_text' => 'two'],
     *       ['repeat_text' => 'threeeeee']
     *   ]
     * ]
     *
     */
    public $fileMock;

    /** @test */
    public function it_finds_3_entity_fields_with_all_data_attached()
    {

        $this->setUpOurTest();

        $fields = $this->fieldsRepository->getFieldValues(1,'en');

        $this->assertEquals(3,count($fields));
        $this->assertNotEquals(1,count($fields));

        $arrayed = $fields->toArray();

        $this->assertEquals('text',$arrayed[0]['defined_fields']['type']);

        $this->assertNotEmpty($arrayed[2]['repeaters']);
    }

    /**
     * ACF sorts the data into an associative array.
     * Let us ensure our data test examples filters into that sorted array.
     *
     * @test
     */
    public function it_finds_entities_and_then_sorts_into_an_array_of_ACF_fields()
    {

        $this->setUpOurTest();

        // Create a stub for the SomeClass class.
        //$file = $this->prophesize('File');

        //dd($file);

        //$file->read('findOrNew')->willReturn([]);
        //$file->addMethodProphecy('findOrNew');
        //$file->reveal();

        // Configure the stub.
        //$stub->method('findOrNew')
        //    ->willReturn([]);

        // Create a stub for the SomeClass class.
        //$stub = $this->createMock(File::class);

        // Configure the stub.
        //$stub->method('doSomething')
        //    ->willReturn('foo');

//        File::shouldReceive('findOrNew')
//            ->once()
//            ->with('key')
//            ->andReturn('value');

        dd($this->fileMock);

        $entities    = $this->fieldsRepository->getFieldValues(1, 'en');
        //dd($entities);
        $fields      = $this->fieldsRepository->sortFieldsForFront($entities);


        //$fieldsArray = $fields->toArray();

        //$this->assertArrayHasKey('repeater',$fieldsArray,'yes it matches');

    }

    private function setUpOurTest()
    {

        $this->fileMock = Mockery::mock('Modules\Media\Entities\File');

        /*
         * create the field groups entry = dynamicfield__groups
         */
        $group = $this->fieldsRepository->modelCreate('Group',[
            //'id'        => 1,
            'name'       => 'page fields',
            'template'   => 1
        ]);

        //dd($group);

        /*
         * create the fields = dynamicfield__fields
         */
        $this->fieldsRepository->create([
            'group_id' => 1,
            'data'     => '{"label":"text","default_value":"","instruction":"add it","required":"false","placeholder":"","limit":""}',
            'type'     => 'text',
            'name'     => 'text',
            'order'    => 1
        ]);

        $this->fieldsRepository->create([
            'group_id' => 1,
            'data'     => '{"label":"image1","required":"false","instruction":""}',
            'type'     => 'image',
            'name'     => 'image1',
            'order'    => 3
        ]);

        $this->fieldsRepository->create([
            'group_id' => 1,
            'data'     => '{"label":"repeater","instruction":"","required":"false"}',
            'type'     => 'repeater',
            'name'     => 'repeater',
            'order'    => 2
        ]);



        /*
         * create the field translations entry = dynamicfield__field_translations
         */
        $this->fieldsRepository->modelCreate('FieldTranslation',[
            'entity_field_id' => 1,
            'locale'          => 'en',
            'value'           => 'addd'
        ]);


        // media file reference
        $this->fieldsRepository->modelCreate('FieldTranslation',[
            'entity_field_id' => 2,
            'locale'          => 'en',
            'value'           => 1
        ]);

        // add the image referenced
        //$file = File::create([
//        $file = $this->fileRepository->create([
//            'filename'      => 'charlie-dating-profile.jpg',
//            'path'          => '/assets/media/charlie-dating-profile.jpg',
//            'extension'     => 'jpg',
//            'mimetype'      => 'image/jpeg',
//            'filesize'      => 8808,
//            'folder_id'     => 0
//        ]);


        /*
         * create the field entites = dynamicfield__entities
         */
        $this->fieldsRepository->modelCreate('Entity',[
            'entity_id'    => 1,
            'field_id'     => 1,
            'entity_type'  => 'Modules\Page\Entities\Page'
        ]);

        $this->fieldsRepository->modelCreate('Entity',[
            'entity_id'    => 1,
            'field_id'     => 2,
            'entity_type'  => 'Modules\Page\Entities\Page'
        ]);

        $this->fieldsRepository->modelCreate('Entity',[
            'entity_id'    => 1,
            'field_id'     => 3,
            'entity_type'  => 'Modules\Page\Entities\Page'
        ]);


        /*
         * create the repeater fields = dynamicfield__repeater_fields
         */
        $this->fieldsRepository->modelCreate('RepeaterField',[
            'field_id'     => 1,
            'data'         => '{"label":"repeat text","default_value":"","instruction":"","required":"false","placeholder":"","limit":""}',
            'type'         => 'text',
            'name'         => 'repeat_text',
            'order'        => 1
        ]);


        /*
         * create the repeater fields = dynamicfield__repeater_translations
         */
        $this->fieldsRepository->modelCreate('RepeaterTranslation',[
            'entity_repeater_id'   => 3,
            'locale'                 => 'en',
            'order'                => 1
        ]);

        $this->fieldsRepository->modelCreate('RepeaterTranslation',[
            'entity_repeater_id'   => 3,
            'locale'                 => 'en',
            'order'                => 2
        ]);

        $this->fieldsRepository->modelCreate('RepeaterTranslation',[
            'entity_repeater_id'   => 3,
            'locale'                 => 'en',
            'order'                => 3
        ]);

        /*
         * create the repeater fields = dynamicfield__repeater_values
         */
        $this->fieldsRepository->modelCreate('RepeaterValue',[
            'translation_id'   => 1,
            'field_id'         => 1,
            'value'            => 'one'
        ]);

        $this->fieldsRepository->modelCreate('RepeaterValue',[
            'translation_id'   => 2,
            'field_id'         => 1,
            'value'            => 'two'
        ]);

        $this->fieldsRepository->modelCreate('RepeaterValue',[
            'translation_id'   => 3,
            'field_id'         => 1,
            'value'            => 'threeeeee'
        ]);

        //'Field';
        //'FieldTranslation';
        //'Entity';
        //'Group';
        //'RepeaterField';
        //'RepeaterTranslation';
        //'RepeaterValue';
    }

}