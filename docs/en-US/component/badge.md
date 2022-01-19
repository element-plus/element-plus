---
title: Badge
lang: en-US
---

# Badge

A number or status mark on buttons and icons.

## Basic usage

Displays the amount of new messages.

:::demo The amount is defined with `value` which accepts `Number` or `String`.

badge/basic

:::

## Max value

You can customize the max value.

:::demo The max value is defined by property `max` which is a `Number`. Note that it only works when `value` is also a `Number`.

badge/max

:::

## Customizations

Displays text content other than numbers.

:::demo When `value` is a `String`, it can display customized text.

badge/customize

:::

## Little red dot

Use a red dot to mark content that needs to be noticed.

:::demo Use the attribute `is-dot`. It is a `Boolean`.

badge/dot

:::

## Attributes

| Attribute | Description                                                                      | Type            | Accepted Values                             | Default |
| --------- | -------------------------------------------------------------------------------- | --------------- | ------------------------------------------- | ------- |
| value     | display value                                                                    | string / number | —                                           | —       |
| max       | maximum value, shows '{max}+' when exceeded. Only works if `value` is a `Number` | number          | —                                           | —       |
| is-dot    | if a little dot is displayed                                                     | boolean         | —                                           | false   |
| hidden    | hidden badge                                                                     | boolean         | —                                           | false   |
| type      | button type                                                                      | string          | primary / success / warning / danger / info | —       |

## Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
