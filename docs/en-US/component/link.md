---
title: Link
lang: en-US
---

# Link

Text hyperlink

## Basic

Basic text link

:::demo

link/basic

:::

## Disabled

Disabled state of link

:::demo

link/disabled

:::

## Underline

Controlling when underlines should appear

:::warning

The `boolean` value has been **deprecated**, and **will be** removed in ^(3.0.0), consider switching to new values.

Starting from ^(2.9.9), you can use `'always' | 'hover' | 'never'` to control when underlines should appear.

:::

:::demo

link/underline

:::

## Icon

Link with icon

:::tip

Use the `icon` attribute to add icon. You can pass either string for the component name (registered in advance) or the component itself which is a SVG Vue component. Element Plus has provided a set of icon that you can find at [icon](/en-US/component/icon)

:::

:::demo

link/with-icon

:::

## API

### Attributes

| Name      | Description                         | Type                                                                            | Default |
| --------- | ----------------------------------- | ------------------------------------------------------------------------------- | ------- |
| type      | type                                | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | default |
| underline | when underlines should appear       | ^[enum]`'always' \| 'hover' \| 'never' \| boolean`                              | hover   |
| disabled  | whether the component is disabled   | ^[boolean]                                                                      | false   |
| href      | same as native hyperlink's `href`   | ^[string]                                                                       | —       |
| target    | same as native hyperlink's `target` | ^[enum]`'_blank' \| '_parent' \| '_self' \| '_top'`                             | \_self  |
| icon      | icon component                      | ^[string] / ^[Component]                                                        | —       |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
| icon    | customize icon component  |
