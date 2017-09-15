<?php namespace Modules\Dynamicfield\Tests\Entities;

use Illuminate\Foundation\Testing\TestCase;
use Modules\Core\Tests\BaseTestCase;
use Modules\Dynamicfield\Entities\Field;
use Modules\Dynamicfield\Tests\BaseDynamicFieldTest;
use Modules\Media\Entities\File;

class FieldEntityTest extends BaseDynamicFieldTest
//class FieldEntityTest extends TestCase
{

    /** @test */
    public function it_creates_and_gets_a_field()
    {
        //$user = factory(\Modules\Dynamicfield\Entities\Field::class)->create();
        //dd($user);
        $uniqueId = uniqid();
        $field = Field::create([
            'group_id'      => 1,
            'data'          => '',
            'type'          => '',
            'name'          => '',
            'slug'          => '',
            'unique_id'     => $uniqueId,
            'field_type'    => '',
            'parent'        => ''
        ]);

        //dd('one',$field);
        $this->assertEquals($uniqueId, $field->unique_id);
    }

    /** @test */
    public function it_creates_and_gets_a_field_with_seralized_data()
    {
        //$user = factory(\Modules\Dynamicfield\Entities\Field::class)->create();
        $uniqueId = uniqid();
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
            'type'          => 'text',
            'name'          => 'textfield',
            'slug'          => 'text-field',
            'unique_id'     => $uniqueId,
            'field_type'    => '',
            'parent'        => '0'
        ]);

        //dd('one',$field->toArray());
        $this->assertEquals($uniqueId, $field->unique_id);
        $fieldArray = $field->toArray();
        $this->assertTrue(is_array($fieldArray['data']));
    }
}