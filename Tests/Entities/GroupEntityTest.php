<?php namespace Modules\Dynamicfield\Tests\Entities;

use Illuminate\Foundation\Testing\TestCase;
use Modules\Core\Tests\BaseTestCase;
use Modules\Dynamicfield\Entities\Group;
use Modules\Dynamicfield\Tests\BaseDynamicFieldTest;

class GroupEntityTest extends BaseDynamicFieldTest

{

    /** @test */
    public function it_creates_and_gets_a_group_model()
    {
        $name = 'group 1';
        $template = 'template1';
        $group = Group::create([
            'name'      => $name,
            'template'  => $template,
        ]);

        $this->assertEquals($group->name, $name);
        $this->assertEquals($group->template, $template);
    }

    /** @test */
    public function it_finds_a_group_model_by_template()
    {
        $name     = 'group 1';
        $template = 'template1';
        $group = Group::create([
            'name'      => $name,
            'template'  => $template,
        ]);

        $foundGroup = Group::findByTemplate($template);

        //dd($foundGroup);
        $this->assertEquals($group->template, $template);
        $this->assertEquals($foundGroup->first()->template, $template);
    }

}