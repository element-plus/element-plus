---
title: Badge
lang: en-US
---

# Badge

A number or status mark on buttons and icons.

## Basic Usage

Displays the amount of new messages.

:::demo The amount is defined with value which accepts Number or String.

badge/basic

:::

## Max Value

You can customize the max value.

:::demo The max value is defined by property max which is a Number. Note that it only works when value is also a Number.

badge/max

:::

## Customizations

Displays text content other than numbers. Or you can use the `content` slot to customize content.

:::demo When value is a String, it can display customized text. Or use the `content` slot.

badge/customize

:::

## Red Dot

Use a red dot to mark content that needs to be noticed.

:::demo Use the attribute `is-dot`. It is a Boolean.

badge/dot

:::

## Offset ^(2.7.0)

:::demo Set offset of the badge dot, the format is [left, top], which represents the offset of the status dot from the left and top of the default position.

badge/offset

:::

## API

### Attributes

| Name                 | Description                                                                   | Type                                                               | Default |
| -------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------- |
| value                | display value.                                                                | ^[string] / ^[number]                                              | ''      |
| max                  | maximum value, shows `{max}+` when exceeded. Only works if value is a number. | ^[number]                                                          | 99      |
| is-dot               | if a little dot is displayed.                                                 | ^[boolean]                                                         | false   |
| hidden               | hidden badge.                                                                 | ^[boolean]                                                         | false   |
| type                 | badge type.                                                                   | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | danger  |
| show-zero ^(2.6.0)   | Whether to show badge when value is zero.                                     | ^[boolean]                                                         | true    |
| color ^(2.6.3)       | background color of the dot                                                   | ^[string]                                                          |         |
| offset ^(2.7.0)      | offset of badge                                                               | [ `number` , `number` ]                                            | —       |
| badge-style ^(2.7.1) | custom style of badge                                                         | ^[object]`CSSProperties`                                           | —       |
| badge-class ^(2.7.1) | custom class of badge                                                         | ^[string]                                                          | —       |

### Slots

| Name             | Description               | Type                         |
| ---------------- | ------------------------- | ---------------------------- |
| default          | customize default content | -                            |
| content ^(2.9.1) | customize badge content   | ^[object]`{ value: string }` |
