---
title: Tag
lang: en-US
---

# Tag

Used for marking and selection.

## Basic usage

:::demo Use the `type` attribute to define Tag's type. In addition, the `color` attribute can be used to set the background color of the Tag.

tag/basic

:::

## Removable Tag

:::demo `closable` attribute can be used to define a removable tag. It accepts a `Boolean`. By default the removal of Tag has a fading animation. If you don't want to use it, you can set the `disable-transitions` attribute, which accepts a `Boolean`, to `true`. `close` event triggers when Tag is removed.

tag/removable

:::

## Edit Dynamically

You can use the `close` event to add and remove tag dynamically.

:::demo

tag/editable

:::

## Sizes

Besides default size, Tag component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `large`, `default` or `small`.

tag/sizes

:::

## Theme

Tag provide three different themes: `dark`、`light` and `plain`

:::demo Using `effect` to change, default is `light`

tag/theme

:::

## Rounded

Tag can also be rounded like button.

:::demo

tag/rounded

:::

## Checkable Tag

Sometimes because of the business needs, we might need checkbox like tag, but **button like checkbox** cannot meet our needs, here comes `check-tag`. You can use `type` prop in ^(2.5.4).

:::demo basic check-tag usage, the API is rather simple.

tag/checkable

:::

## Tag API

### Tag Attributes

| Name                | Description                          | Type                                                               | Default |
| ------------------- | ------------------------------------ | ------------------------------------------------------------------ | ------- |
| type                | type of Tag                          | ^[enum]`'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'` | primary |
| closable            | whether Tag can be removed           | ^[boolean]                                                         | false   |
| disable-transitions | whether to disable animations        | ^[boolean]                                                         | false   |
| hit                 | whether Tag has a highlighted border | ^[boolean]                                                         | false   |
| color               | background color of the Tag          | ^[string]                                                          | —       |
| size                | size of Tag                          | ^[enum]`'large' \| 'default' \| 'small'`                           | —       |
| effect              | theme of Tag                         | ^[enum]`'dark' \| 'light' \| 'plain'`                              | light   |
| round               | whether Tag is rounded               | ^[boolean]                                                         | false   |

### Tag Events

| Name  | Description                  | Type                                   |
| ----- | ---------------------------- | -------------------------------------- |
| click | triggers when Tag is clicked | ^[Function]`(evt: MouseEvent) => void` |
| close | triggers when Tag is removed | ^[Function]`(evt: MouseEvent) => void` |

### Tag Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

## CheckTag API

### CheckTag Attributes

| Name                      | Description                       | Type                                                               | Default |
| ------------------------- | --------------------------------- | ------------------------------------------------------------------ | ------- |
| checked / v-model:checked | is checked                        | ^[boolean]                                                         | false   |
| disabled ^(2.8.2)         | whether the check-tag is disabled | ^[boolean]                                                         | false   |
| type ^(2.5.4)             | type of CheckTag                  | ^[enum]`'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'` | primary |

### CheckTag Events

| Name   | Description                        | Type                                  |
| ------ | ---------------------------------- | ------------------------------------- |
| change | triggers when Check Tag is clicked | ^[Function]`(value: boolean) => void` |

### CheckTag Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
