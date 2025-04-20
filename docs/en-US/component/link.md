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

## Underline Link ^(2.9.9)

A underline is added below the text to indicate it is a link

:::demo

link/underline-link

:::

## Hover State

Whether to show the underline on hover

:::demo

link/hover-state

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

| Name                      | Description                                                                        | Type                                                                            | Default |
| ------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------- |
| type                      | type                                                                               | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | default |
| underline                 | Whether to show the underline on hover                                             | ^[boolean]                                                                      | true    |
| always-underline ^(2.9.9) | whether the underline is always visible (Priority is higher than `underline` prop) | ^[boolean]                                                                      | false   |
| disabled                  | whether the component is disabled                                                  | ^[boolean]                                                                      | false   |
| href                      | same as native hyperlink's `href`                                                  | ^[string]                                                                       | —       |
| target                    | same as native hyperlink's `target`                                                | ^[enum]`'_blank' \| '_parent' \| '_self' \| '_top'`                             | \_self  |
| icon                      | icon component                                                                     | ^[string] / ^[Component]                                                        | —       |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
| icon    | customize icon component  |
