<?php namespace Modules\Dynamicfield\Tests\Entities;

use Illuminate\Foundation\Testing\TestCase;
use Modules\Core\Tests\BaseTestCase;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Entities\FieldTranslation;
use Modules\Dynamicfield\Library\Data\WysiwygData;
use Modules\Dynamicfield\Tests\BaseDynamicFieldTest;
use Modules\Media\Entities\File;

class FieldTranslationEntityTest extends BaseDynamicFieldTest
//class FieldEntityTest extends TestCase
{

    use WysiwygData;

    /** @test */
    public function it_creates_and_gets_a_fieldTranslation()
    {
        $uniqueId = 'field_' . uniqid();
        $fieldId  = 'field_' . uniqid();
        $fieldTranslation = FieldTranslation::create([
            'entity_field_id'   => 1,
            'locale'            => 'en',
            'value'             => 'here is the value',
            'field_id'          => $fieldId,
            'unique_id'         => $uniqueId,
            'parent'            => '0',
            'parent_layout'     => '0'
        ]);

        $this->assertEquals($uniqueId, $fieldTranslation->unique_id);
        $this->assertEquals($fieldId, $fieldTranslation->field_id);
    }

    /** @test */
    public function it_creates_and_field_and_field_translation_and_respects_relationship()
    {
        $uniqueId = 'field_' . uniqid();
        $fieldId  = 'field_' . uniqid();
        $fieldTranslationUniqueId = 'field_' . uniqid();

        // items is array containing field and fieldTranslation
        $items    = $this->setUpFieldAndFieldTranslation($uniqueId,$fieldId,$fieldTranslationUniqueId,$type = 'text',$FieldTranslationValue = '');

        $this->assertEquals($items['fieldTranslation']->field->unique_id, $items['field']->unique_id);
        $this->assertEquals($items['fieldTranslation']->field_id, $items['field']->unique_id);

    }

    /** @test */
    public function it_tests_the_getExtraDataAttribute_default_which_is_null()
    {
        $uniqueId = 'field_' . uniqid();
        $fieldId  = 'field_' . uniqid();
        $fieldTranslationUniqueId = 'field_' . uniqid();

        // items is array containing field and fieldTranslation
        $items    = $this->setUpFieldAndFieldTranslation(
            $uniqueId,
            $fieldId,
            $fieldTranslationUniqueId,
            $type = 'text',
            $FieldTranslationValue = 'here is the text value'
        );

        $this->assertEquals($items['fieldTranslation']->extra_data, null);

    }

    /** @test */
    public function it_tests_the_getExtraDataAttribute_image_which_is_an_image()
    {
        $uniqueId = 'field_' . uniqid();
        $fieldId  = 'field_' . uniqid();
        $fieldTranslationUniqueId = 'field_' . uniqid();

//        $image = File::create([
//            'filename' => 'image.jpg',
//            'path' => '/assets/media/image.jpg',
//            'extension' => 'jpg',
//            'mimetype' => 'image/jpeg',
//            'filesize' => '1001',
//            'folder_id' => '0'
//        ]);

        //$this->fileMock = $this->
        //$this->app->instance(File::class, $this->fileMock);

        // items is array containing field and fieldTranslation
        $items    = $this->setUpFieldAndFieldTranslation(
            $uniqueId,
            $fieldId,
            $fieldTranslationUniqueId,
            $type = 'image',
            $FieldTranslationValue = 1
        );

        //dd($items);
        //$this->assertEquals($items['fieldTranslation']->extra_data, null);

    }

    /** @test */
    public function it_tests_the_getValueAttribute_default_which_is_normal_data()
    {
        $uniqueId = 'field_' . uniqid();
        $fieldId  = 'field_' . uniqid();
        $fieldTranslationUniqueId = 'field_' . uniqid();

        // items is array containing field and fieldTranslation
        $items    = $this->setUpFieldAndFieldTranslation(
            $uniqueId,
            $fieldId,
            $fieldTranslationUniqueId,
            $type = 'text',
            $FieldTranslationValue = 'here is the text value'
        );

        //dd($items['fieldTranslation']);
        $this->assertEquals($items['fieldTranslation']->value, 'here is the text value');

    }

    /** @test */
    public function it_tests_the_getValueAttribute_default_which_is_serialized_data()
    {
        $uniqueId = 'field_' . uniqid();
        $fieldId  = 'field_' . uniqid();
        $fieldTranslationUniqueId = 'field_' . uniqid();

        // items is array containing field and fieldTranslation
        $items    = $this->setUpFieldAndFieldTranslation(
            $uniqueId,
            $fieldId,
            $fieldTranslationUniqueId,
            $type = 'text',
            $FieldTranslationValue = serialize('here is the text value')
        );

        //dd($items['fieldTranslation']);
        $this->assertEquals($items['fieldTranslation']->value, 'here is the text value');

    }

    /** @test */
    public function it_tests_the_getValueAttribute_default_which_is_wysiwyg_data()
    {
        $uniqueId = 'field_' . uniqid();
        $fieldId  = 'field_' . uniqid();
        $fieldTranslationUniqueId = 'field_' . uniqid();

        // imported trait /////
        $input = $this->cleanWysiwyg('here is the text value');
        // items is array containing field and fieldTranslation
        $items    = $this->setUpFieldAndFieldTranslation(
            $uniqueId,
            $fieldId,
            $fieldTranslationUniqueId,
            $type = 'wysiwyg',
            $FieldTranslationValue = $input
        );

        //dd($items['fieldTranslation']);
        $this->assertEquals($items['fieldTranslation']->value, 'here is the text value');

    }

    private function setUpFieldAndFieldTranslation($uniqueId, $fieldId, $fieldTranslationUniqueId, $type = 'text', $FieldTranslationValue = 'here is text')
    {
        $items = [];
        $dataObj = serialize([
            'name' => 'textfield',
            'default_value' => '',
            'instruction' => '',
            'required' => '',
            'false' => '',
            'placeholder' => '',
            'limit' => '',
            'parent_layout' => '',
        ]);
        $field = Field::create([
            'group_id'      => 1,
            'data'          => $dataObj,
            'type'          => $type,
            'name'          => 'the field',
            'slug'          => 'the-field',
            'unique_id'     => $uniqueId,
            'field_type'    => '',
            'parent'        => '0'
        ]);

        $fieldTranslation = FieldTranslation::create([
            'entity_field_id'   => 1,
            'locale'            => 'en',
            'value'             => $FieldTranslationValue,
            'field_id'          => $uniqueId,
            'unique_id'         => $fieldTranslationUniqueId,
            'parent'            => '0',
            'parent_layout'     => '0'
        ]);

        $items['field'] = $field;
        $items['fieldTranslation'] = $fieldTranslation;

        return $items;
    }
}