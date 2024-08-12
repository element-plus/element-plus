---
title: Popconfirm
lang: en-US
---

# Popconfirm

A simple confirmation dialog of an element click action.

:::tip

This component requires the `<client-only></client-only>` wrap when used in SSR (eg: [Nuxt](https://nuxt.com/v3)) and SSG (eg: [VitePress](https://vitepress.vuejs.org/)).

:::

## Basic usage

Popconfirm is similar to Popover. So for some duplicated attributes, please refer to the documentation of Popover.

:::demo Only `title` attribute is available in Popconfirm, `content` will be ignored.

popconfirm/basic-usage

:::

## Customize

You can customize Popconfirm like:

:::demo

popconfirm/customize

:::

## Trigger event

Click the button to trigger the event

:::demo

popconfirm/trigger-event

:::

## API

### Attributes

| Name                | Description                                                                         | Type                                                                         | Default        |
| ------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------- |
| title               | Title                                                                               | ^[string]                                                                    | —              |
| confirm-button-text | Confirm button text                                                                 | ^[string]                                                                    | —              |
| cancel-button-text  | Cancel button text                                                                  | ^[string]                                                                    | —              |
| confirm-button-type | Confirm button type                                                                 | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text'` | primary        |
| cancel-button-type  | Cancel button type                                                                  | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text'` | text           |
| icon                | Icon Component                                                                      | ^[string] / ^[Component]                                                     | QuestionFilled |
| icon-color          | Icon color                                                                          | ^[string]                                                                    | #f90           |
| hide-icon           | is hide Icon                                                                        | ^[boolean]                                                                   | false          |
| hide-after          | delay of disappear, in millisecond                                                  | ^[number]                                                                    | 200            |
| teleported          | whether popconfirm is teleported to the body                                        | ^[boolean]                                                                   | true           |
| persistent          | when popconfirm inactive and `persistent` is `false` , popconfirm will be destroyed | ^[boolean]                                                                   | false          |
| width               | popconfirm width, min width 150px                                                   | ^[string] / ^[number]                                                        | 150            |

### Events

| Name    | Description                        | Type                                 |
| ------- | ---------------------------------- | ------------------------------------ |
| confirm | triggers when click confirm button | ^[Function]`(e: MouseEvent) => void` |
| cancel  | triggers when click cancel button  | ^[Function]`(e: MouseEvent) => void` |

### Slots

| Name      | Description                           |
| --------- | ------------------------------------- |
| reference | HTML element that triggers Popconfirm |
