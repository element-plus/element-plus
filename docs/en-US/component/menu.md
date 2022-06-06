---
title: Menu
lang: en-US
---

# Menu

Menu that provides navigation for your website.

## Top bar

Top bar Menu can be used in a variety of scenarios.

:::demo By default Menu is vertical, but you can change it to horizontal by setting the mode prop to 'horizontal'. In addition, you can use the sub-menu component to create a second level menu. Menu provides `background-color`, `text-color` and `active-text-color` to customize the colors.

menu/basic

:::

## Left And Right

:::demo You can make the menu items to the left or right.

menu/left-and-right

:::

## Side bar

Vertical Menu with sub-menus.

:::demo You can use the el-menu-item-group component to create a menu group, and the name of the group is determined by the title prop or a named slot.

menu/vertical

:::

## Collapse

Vertical Menu could be collapsed.

:::demo

menu/collapse

:::

## Menu Attributes

| Attribute           | Description                                                                                                | Type    | Accepted Values       | Default  |
| ------------------- | ---------------------------------------------------------------------------------------------------------- | ------- | --------------------- | -------- |
| mode                | menu display mode                                                                                          | string  | horizontal / vertical | vertical |
| collapse            | whether the menu is collapsed (available only in vertical mode)                                            | boolean | —                     | false    |
| ellipsis            | whether the menu is ellipsis (available only in horizontal mode)                                           | boolean | —                     | true     |
| background-color    | background color of Menu (hex format) (deprecated, use `--bg-color` instead)                               | string  | —                     | #ffffff  |
| text-color          | text color of Menu (hex format) (deprecated, use `--text-color` instead)                                   | string  | —                     | #303133  |
| active-text-color   | text color of currently active menu item (hex format) (deprecated, use `--active-color` instead)           | string  | —                     | #409EFF  |
| default-active      | index of currently active menu                                                                             | string  | —                     | —        |
| default-openeds     | array that contains indexes of currently active sub-menus                                                  | Array   | —                     | —        |
| unique-opened       | whether only one sub-menu can be active                                                                    | boolean | —                     | false    |
| menu-trigger        | how sub-menus are triggered, only works when `mode` is 'horizontal'                                        | string  | hover / click         | hover    |
| router              | whether `vue-router` mode is activated. If true, index will be used as 'path' to activate the route action | boolean | —                     | false    |
| collapse-transition | whether to enable the collapse transition                                                                  | boolean | —                     | true     |

## Menu Methods

| Methods Name | Description               | Parameters                            |
| ------------ | ------------------------- | ------------------------------------- |
| open         | open a specific sub-menu  | index: index of the sub-menu to open  |
| close        | close a specific sub-menu | index: index of the sub-menu to close |

## Menu Events

| Event Name | Description                               | Parameters                                                                                                                                                                 |
| ---------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| select     | callback function when menu is activated  | index: index of activated menu, indexPath: index path of activated menu, item: the selected menu item, routeResult: result returned by `vue-router` if `router` is enabled |
| open       | callback function when sub-menu expands   | index: index of expanded sub-menu, indexPath: index path of expanded sub-menu                                                                                              |
| close      | callback function when sub-menu collapses | index: index of collapsed sub-menu, indexPath: index path of collapsed sub-menu                                                                                            |

## Menu Slots

| Name | Description               | Subtags                               |
| ---- | ------------------------- | ------------------------------------- |
| —    | customize default content | SubMenu / Menu-Item / Menu-Item-Group |

## SubMenu Attributes

| Attribute                         | Description                                                                                                      | Type    | Accepted Values | Default                                         |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------- | --------------- | ----------------------------------------------- |
| index                             | unique identification                                                                                            | string  | —               | —                                               |
| popper-class                      | custom class name for the popup menu                                                                             | string  | —               | —                                               |
| show-timeout                      | timeout before showing a sub-menu                                                                                | number  | —               | 300                                             |
| hide-timeout                      | timeout before hiding a sub-menu                                                                                 | number  | —               | 300                                             |
| disabled                          | whether the sub-menu is disabled                                                                                 | boolean | —               | false                                           |
| popper-append-to-body(deprecated) | whether to append the popup menu to body. If the positioning of the menu is wrong, you can try setting this prop | boolean | -               | level one SubMenu: true / other SubMenus: false |
| popper-offset                     | offset of the popper                                                                                             | number  | —               | 6                                               |

## SubMenu Slots

| Name | Description               | Subtags                               |
| ---- | ------------------------- | ------------------------------------- |
| —    | customize default content | SubMenu / Menu-Item / Menu-Item-Group |

## Menu-Item Attributes

| Attribute | Description           | Type        | Accepted Values | Default |
| --------- | --------------------- | ----------- | --------------- | ------- |
| index     | unique identification | string/null | —               | null    |
| route     | Vue Router object     | object      | —               | —       |
| disabled  | whether disabled      | boolean     | —               | false   |

## Menu-Item Events

| Event Name | Description                                 | Parameters             |
| ---------- | ------------------------------------------- | ---------------------- |
| click      | callback function when menu-item is clicked | el: menu-item instance |

## Menu-Item Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |

## Menu-Item-Group Attributes

| Attribute | Description | Type   | Accepted Values | Default |
| --------- | ----------- | ------ | --------------- | ------- |
| title     | group title | string | —               | —       |

## Menu-Item-Group Slots

| Name | Description               | Subtags   |
| ---- | ------------------------- | --------- |
| —    | customize default content | Menu-Item |
