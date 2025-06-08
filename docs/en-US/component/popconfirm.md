---
title: Popconfirm
lang: en-US
---

# Popconfirm

A simple confirmation dialog of an element click action.

## Placement

popconfirm has 9 placements.

:::demo Use attribute `title` to set the display content when click the reference element. The attribute `placement` determines the position of the popconfirm. Its value is `[orientation]-[alignment]` with four orientations `top`, `left`, `right`, `bottom` and three alignments `start`, `end`, `null`, and the default alignment is null. Take `placement="left-end"` for example, popconfirm will display on the left of the element which you are hovering and the bottom of the popconfirm aligns with the bottom of the element.

popconfirm/placement

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

| Name             | Description                           | Type                                                                             |
| ---------------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| reference        | HTML element that triggers Popconfirm | —                                                                                |
| actions ^(2.8.1) | content of the Popconfirm footer      | ^[object]`{ confirm: (e: MouseEvent) => void, cancel: (e: MouseEvent) => void }` |
