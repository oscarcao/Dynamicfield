<?php

namespace Modules\Dynamicfield\Sidebar;

use Maatwebsite\Sidebar\Group;
use Maatwebsite\Sidebar\Item;
use Maatwebsite\Sidebar\Menu;
use Modules\User\Contracts\Authentication;

class SidebarExtender implements \Maatwebsite\Sidebar\SidebarExtender
{
    /**
     * @var Authentication
     */
    protected $auth;

    /**
     * @param Authentication $auth
     *
     * @internal param Guard $guard
     */
    public function __construct(Authentication $auth)
    {
        $this->auth = $auth;
    }

    /**
     * @param Menu $menu
     *
     * @return Menu
     */
    public function extendWith(Menu $menu)
    {
        $menu->group(trans('core::sidebar.content'), function (Group $group) {
            $group->item(trans('dynamicfield::dynamicfield.title.dynamicfield'), function (Item $item) {
                $item->icon('fa fa-copy');
                $item->weight(10);
                $item->authorize(
                /* append */
                );
                $item->item(trans('dynamicfield::dynamicfield.title.options'), function (Item $item) {
                    $item->icon('fa fa-copy');
                    $item->weight(0);
                    $item->append('admin.dynamicfield.options.index');
                    $item->route('admin.dynamicfield.options.index');
                    $item->authorize(
                        $this->auth->hasAccess('dynamicfield.options.index')
                    );
                });

                $item->item(trans('dynamicfield::dynamicfield.title.optionvalues'), function (Item $item) {
                    $item->icon('fa fa-copy');
                    $item->weight(0);
                    $item->append('admin.dynamicfield.optionvalues.index');
                    $item->route('admin.dynamicfield.optionvalues.index');
                    $item->authorize(
                        $this->auth->hasAccess('dynamicfield.optionvalues.index')
                    );
                });

                $item->item(trans('dynamicfield::dynamicfield.title.admin'), function (Item $item) {
                    $item->icon('fa fa-copy');
                    $item->weight(0);
                    $item->append('admin.dynamicfield.group.create');
                    $item->route('admin.dynamicfield.admin.index');
                    $item->authorize(
                        $this->auth->hasAccess('dynamicfield.group.index')
                    );
                });
                $item->item(trans('dynamicfield::dynamicfield.title.dynamicfield'), function (Item $item) {
                    $item->icon('fa fa-copy');
                    $item->weight(0);
                    $item->append('admin.dynamicfield.group.create');
                    $item->route('admin.dynamicfield.group.index');
                    $item->authorize(
                        $this->auth->hasAccess('dynamicfield.group.index')
                    );
                });

            });
        });

        return $menu;
    }
}
