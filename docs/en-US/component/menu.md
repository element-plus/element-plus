---
title: Menu
lang: en-US
---

# Menu

Menu that provides navigation for your website.

::: tip

If you want to override the default height of el-menu, you can use the following CSS:

```css
.el-menu--horizontal {
  --el-menu-horizontal-height: 100px;
}
```

:::

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

## Popper Offset ^(2.4.4)

Submenu with popperOffset will override Menu's `popper-offset`.

:::demo

menu/popper-offset

:::

## Menu API

### Menu Attributes

| Name                            | Description                                                                                                                                                          | Type                                   | Default  |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | -------- |
| mode                            | Menu display mode                                                                                                                                                    | ^[enum]`'horizontal' \| 'vertical'`    | vertical |
| collapse                        | Whether the menu is collapsed (available only in vertical mode)                                                                                                      | ^[boolean]                             | false    |
| ellipsis                        | Whether the menu is ellipsis (available only in horizontal mode)                                                                                                     | ^[boolean]                             | true     |
| ellipsis-icon ^(2.4.4)          | Custom ellipsis icon (available only in horizontal mode and ellipsis is true)                                                                                        | ^[string] / ^[Component]               | —        |
| popper-offset ^(2.4.4)          | Offset of the popper (effective for all submenus)                                                                                                                    | ^[number]                              | 6        |
| default-active                  | Index of active menu on page load                                                                                                                                    | ^[string]                              | ''       |
| default-openeds                 | Array that contains indexes of currently active sub-menus                                                                                                            | ^[array]`string[]`                     | []       |
| unique-opened                   | Whether only one sub-menu can be active                                                                                                                              | ^[boolean]                             | false    |
| menu-trigger                    | How sub-menus are triggered, only works when `mode` is 'horizontal'                                                                                                  | ^[enum]`'hover' \| 'click'`            | hover    |
| router                          | Whether `vue-router` mode is activated. If true, index will be used as 'path' to activate the route action. Use with `default-active` to set the active item on load | ^[boolean]                             | false    |
| collapse-transition             | Whether to enable the collapse transition                                                                                                                            | ^[boolean]                             | true     |
| popper-effect ^(2.2.26)         | Tooltip theme, built-in theme: `dark` / `light` when menu is collapsed                                                                                               | ^[enum]`'dark' \| 'light'` / ^[string] | dark     |
| close-on-click-outside ^(2.4.4) | Optional, whether menu is collapsed when clicking outside                                                                                                            | ^[boolean]                             | false    |
| popper-class ^(2.5.0)           | Custom class name for all popup menus and titles' tooltips                                                                                                           | ^[string]                              | —        |
| popper-style ^(2.11.5)          | Custom style for all popup menus and titles' tooltips                                                                                                                | ^[string] / ^[object]                  | —        |
| show-timeout ^(2.5.0)           | Control timeout for all menus before showing                                                                                                                         | ^[number]                              | 300      |
| hide-timeout ^(2.5.0)           | Control timeout for all menus before hiding                                                                                                                          | ^[number]                              | 300      |
| background-color ^(deprecated)  | Background color of Menu (hex format) (use `--el-menu-bg-color` in a style class instead)                                                                            | ^[string]                              | #ffffff  |
| text-color ^(deprecated)        | Text color of Menu (hex format) ( use `--el-menu-text-color` in a style class instead)                                                                               | ^[string]                              | #303133  |
| active-text-color ^(deprecated) | Text color of currently active menu item (hex format) ( use `--el-menu-active-color` in a style class instead)                                                       | ^[string]                              | #409eff  |
| persistent ^(2.9.5)             | When menu inactive and `persistent` is `false` , dropdown menu will be destroyed                                                                                     | ^[boolean]                             | true     |

### Menu Events

| Name   | Description                               | Type                         |
| ------ | ----------------------------------------- | ---------------------------- |
| select | Callback function when menu is activated  | ^[Function]`MenuSelectEvent` |
| open   | Callback function when sub-menu expands   | ^[Function]`MenuOpenEvent`   |
| close  | Callback function when sub-menu collapses | ^[Function]`MenuCloseEvent`  |

### Menu Slots

| Name    | Description               | Subtags                               |
| ------- | ------------------------- | ------------------------------------- |
| default | Customize default content | SubMenu / Menu-Item / Menu-Item-Group |

### Menu Exposes

| Name                       | Description                                                            | Type                                 |
| -------------------------- | ---------------------------------------------------------------------- | ------------------------------------ |
| open                       | Open a specific sub-menu, the param is index of the sub-menu to open   | ^[Function]`(index: string) => void` |
| close                      | Close a specific sub-menu, the param is index of the sub-menu to close | ^[Function]`(index: string) => void` |
| handleResize               | Manually trigger menu width recalculation                              | ^[Function]`() => void`              |
| updateActiveIndex ^(2.9.8) | Set index of active menu                                               | ^[Function]`(index: string) => void` |

## SubMenu API

### SubMenu Attributes

| Name                   | Description                                                                                                                                   | Type                     | Default   |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | --------- |
| index ^(required)      | Unique identification                                                                                                                         | ^[string]                | —         |
| popper-class           | Custom class name for the popup menu                                                                                                          | ^[string]                | —         |
| popper-style ^(2.11.5) | Custom style for the popup menu                                                                                                               | ^[string] / ^[object]    | —         |
| show-timeout           | Timeout before showing a sub-menu(inherit `show-timeout` of the menu by default.)                                                             | ^[number]                | —         |
| hide-timeout           | Timeout before hiding a sub-menu(inherit `hide-timeout` of the menu by default.)                                                              | ^[number]                | —         |
| disabled               | Whether the sub-menu is disabled                                                                                                              | ^[boolean]               | false     |
| teleported             | Whether popup menu is teleported to the body, the default is true for the level one SubMenu, false for other SubMenus                         | ^[boolean]               | undefined |
| popper-offset          | Offset of the popper (overrides the `popper` of menu)                                                                                         | ^[number]                | —         |
| expand-close-icon      | Icon when menu are expanded and submenu are closed, `expand-close-icon` and `expand-open-icon` need to be passed together to take effect      | ^[string] / ^[Component] | —         |
| expand-open-icon       | Icon when menu are expanded and submenu are opened, `expand-open-icon` and `expand-close-icon` need to be passed together to take effect      | ^[string] / ^[Component] | —         |
| collapse-close-icon    | Icon when menu are collapsed and submenu are closed, `collapse-close-icon` and `collapse-open-icon` need to be passed together to take effect | ^[string] / ^[Component] | —         |
| collapse-open-icon     | Icon when menu are collapsed and submenu are opened, `collapse-open-icon` and `collapse-close-icon` need to be passed together to take effect | ^[string] / ^[Component] | —         |

### SubMenu Slots

| Name    | Description               | Subtags                               |
| ------- | ------------------------- | ------------------------------------- |
| default | Customize default content | SubMenu / Menu-Item / Menu-Item-Group |
| title   | Customize title content   | —                                     |

## Menu-Item API

### Menu-Item Attributes

| Name              | Description                          | Type                  | Default |
| ----------------- | ------------------------------------ | --------------------- | ------- |
| index ^(required) | Unique identification                | ^[string]             | —       |
| route             | Vue Router Route Location Parameters | ^[string] / ^[object] | —       |
| disabled          | Whether disabled                     | ^[boolean]            | false   |

### Menu-Item Events

| Name  | Description                                                                  | Type                                            |
| ----- | ---------------------------------------------------------------------------- | ----------------------------------------------- |
| click | Callback function when menu-item is clicked, the param is menu-item instance | ^[Function]`(item: MenuItemRegistered) => void` |

### Menu-Item Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | Customize default content |
| title   | Customize title content   |

## Menu-Item-Group API

### Menu-Item-Group Attributes

| Name  | Description | Type      | Default |
| ----- | ----------- | --------- | ------- |
| title | Group title | ^[string] | —       |

### Menu-Item-Group Slots

| Name    | Description               | Subtags   |
| ------- | ------------------------- | --------- |
| default | Customize default content | Menu-Item |
| title   | Customize group title     | —         |

## Type Declarations

<details>
  <summary>Show declarations</summary>

```ts
/**
 * @param index index of activated menu
 * @param indexPath index path of activated menu
 * @param item the selected menu item
 * @param routerResult result returned by `vue-router` if `router` is enabled
 */
type MenuSelectEvent = (
  index: string,
  indexPath: string[],
  item: MenuItemClicked,
  routerResult?: Promise<void | NavigationFailure>
) => void

/**
 * @param index index of expanded sub-menu
 * @param indexPath index path of expanded sub-menu
 */
type MenuOpenEvent = (index: string, indexPath: string[]) => void

/**
 * @param index index of collapsed sub-menu
 * @param indexPath index path of collapsed sub-menu
 */
type MenuCloseEvent = (index: string, indexPath: string[]) => void

interface MenuItemRegistered {
  index: string
  indexPath: string[]
  active: boolean
}

interface MenuItemClicked {
  index: string
  indexPath: string[]
  route?: RouteLocationRaw
}
```

</details>
