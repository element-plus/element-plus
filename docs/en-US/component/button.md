---
title: Button
lang: en-US
---

# Button

Commonly used button.

## Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

button/basic

:::

## Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

button/disabled

:::

## Link Button

:::warning

`type="text"` has been **deprecated**, and **will be** removed in ^(3.0.0), consider switching to new API.

New API `link` has been added in ^(2.2.1), you can use `type` API to set the theme of your link button

:::

:::demo

button/link

:::

## Text Button

:::tip

Text button has been upgraded with a new design since <el-tag round effect="plain" size="small">2.2.0</el-tag> , if you want to use the
previous version like button, you might want to check [Link](./link.md#basic) out.

The API is also updated, because the `type` attribute also represents the button's style. So we have to make a new API
`text: boolean` for text button.

:::

Buttons without border and background.

:::demo

button/text

:::

## Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Element Plus icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

button/icon

:::

## Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<el-button-group>` to group your buttons.

button/group

:::

## Loading Button

Click the button to load data, then the button displays a loading state.

Set `loading` attribute to `true` to display loading state.

:::tip

You can use the `loading` slot or `loadingIcon` to customize your loading component

ps: `loading` slot has higher priority than loadingIcon

:::

:::demo

button/loading

:::

## Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `large`, `small`.

button/size

:::

## Tag ^(2.3.4)

You can custom element tag, For example button, div, a, router-link, nuxt-link.

:::demo

button/tag

:::

## Custom Color ^(beta)

You can custom button color.

We will calculate hover color & active color automatically.

:::demo

button/custom

:::

## Button API

### Button Attributes

| Name              | Description                                                                                                                                          | Type                                                                                                         | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| size              | button size                                                                                                                                          | ^[enum]`'large' \| 'default' \| 'small'`                                                                     | —       |
| type              | button type, when setting `color`, the latter prevails                                                                                               | ^[enum]`'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| '' \| 'text' (deprecated)` | —       |
| plain             | determine whether it's a plain button                                                                                                                | ^[boolean]                                                                                                   | false   |
| text ^(2.2.0)     | determine whether it's a text button                                                                                                                 | ^[boolean]                                                                                                   | false   |
| bg ^(2.2.0)       | determine whether the text button background color is always on                                                                                      | ^[boolean]                                                                                                   | false   |
| link ^(2.2.1)     | determine whether it's a link button                                                                                                                 | ^[boolean]                                                                                                   | false   |
| round             | determine whether it's a round button                                                                                                                | ^[boolean]                                                                                                   | false   |
| circle            | determine whether it's a circle button                                                                                                               | ^[boolean]                                                                                                   | false   |
| loading           | determine whether it's loading                                                                                                                       | ^[boolean]                                                                                                   | false   |
| loading-icon      | customize loading icon component                                                                                                                     | ^[string] / ^[Component]                                                                                     | Loading |
| disabled          | disable the button                                                                                                                                   | ^[boolean]                                                                                                   | false   |
| icon              | icon component                                                                                                                                       | ^[string] / ^[Component]                                                                                     | —       |
| autofocus         | same as native button's `autofocus`                                                                                                                  | ^[boolean]                                                                                                   | false   |
| native-type       | same as native button's `type`                                                                                                                       | ^[enum]`'button' \| 'submit' \| 'reset'`                                                                     | button  |
| auto-insert-space | automatically insert a space between two chinese characters(this will only take effect when the text length is 2 and all characters are in Chinese.) | ^[boolean]                                                                                                   | false   |
| color             | custom button color, automatically calculate `hover` and `active` color                                                                              | ^[string]                                                                                                    | —       |
| dark              | dark mode, which automatically converts `color` to dark mode colors                                                                                  | ^[boolean]                                                                                                   | false   |
| tag ^(2.3.4)      | custom element tag                                                                                                                                   | ^[string] / ^[Component]                                                                                     | button  |

### Button Slots

| Name    | Description                 |
| ------- | --------------------------- |
| default | customize default content   |
| loading | customize loading component |
| icon    | customize icon component    |

### Button Exposes

| Name           | Description          | Type                                                                                                           |
| -------------- | -------------------- | -------------------------------------------------------------------------------------------------------------- |
| ref            | button html element  | ^[object]`Ref<HTMLButtonElement>`                                                                              |
| size           | button size          | ^[object]`ComputedRef<'' \| 'small' \| 'default' \| 'large'>`                                                  |
| type           | button type          | ^[object]`ComputedRef<'' \| 'default' \| 'primary' \| 'success' \| 'warning' \| 'info' \| 'danger' \| 'text'>` |
| disabled       | button disabled      | ^[object]`ComputedRef<boolean>`                                                                                |
| shouldAddSpace | whether adding space | ^[object]`ComputedRef<boolean>`                                                                                |

## ButtonGroup API

### ButtonGroup Attributes

| Name | Description                                      | Type                                                               | Default |
| ---- | ------------------------------------------------ | ------------------------------------------------------------------ | ------- |
| size | control the size of buttons in this button-group | ^[enum]`'large' \| 'default' \| 'small'`                           | —       |
| type | control the type of buttons in this button-group | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —       |

### ButtonGroup Slots

| Name    | Description                    | Subtags |
| ------- | ------------------------------ | ------- |
| default | customize button group content | Button  |
