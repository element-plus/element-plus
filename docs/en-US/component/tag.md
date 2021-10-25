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

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

tag/sizes

:::

## Theme

Tag provide three different themes: `dark`、`light` and `plain`

:::demo Using `effect` to change, default is `light`

tag/theme

:::

## Checkable tag

Sometimes because of the business needs, we might need checkbox like tag, but **button like checkbox** cannot meet our needs, here comes `check-tag`

:::demo basic check-tag usage, the API is rather simple.

tag/checkable

:::

## Attributes

| Attribute           | Description                          | Type    | Accepted Values             | Default |
| ------------------- | ------------------------------------ | ------- | --------------------------- | ------- |
| type                | component type                       | string  | success/info/warning/danger | —       |
| closable            | whether Tag can be removed           | boolean | —                           | false   |
| disable-transitions | whether to disable animations        | boolean | —                           | false   |
| hit                 | whether Tag has a highlighted border | boolean | —                           | false   |
| color               | background color of the Tag          | string  | —                           | —       |
| size                | tag size                             | string  | medium / small / mini       | —       |
| effect              | component theme                      | string  | dark / light / plain        | light   |

## Events

| Event Name | Description                  | Parameters |
| ---------- | ---------------------------- | ---------- |
| click      | triggers when Tag is clicked | —          |
| close      | triggers when Tag is removed | —          |

## Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |

## CheckTag Attributes

| Attribute | Description | Type    | Accepted Values | Default |
| --------- | ----------- | ------- | --------------- | ------- |
| checked   | is checked  | boolean | true/false      | —       |

## CheckTag Events

| Event Name | Description                        | Parameters |
| ---------- | ---------------------------------- | ---------- |
| change     | triggers when Check Tag is clicked | checked    |

## CheckTag Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
