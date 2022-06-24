---
title: Popconfirm
lang: en-US
---

# Popconfirm

A simple confirmation dialog of an element click action.

## Basic usage

Popconfirm is similar to Popover. So for some duplicated attributes, please refer to the documentation of Popover.

:::demo Only `title` attribute is avaliable in Popconfirm, `content` will be ignored.

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

## Attributes

| Attribute           | Description                                                                         | Type               | Accepted Values                                    | Default        |
| ------------------- | ----------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------- | -------------- |
| title               | Title                                                                               | String             | —                                                  | —              |
| confirm-button-text | Confirm button text                                                                 | String             | —                                                  | —              |
| cancel-button-text  | Cancel button text                                                                  | String             | —                                                  | —              |
| confirm-button-type | Confirm button type                                                                 | String             | primary / success / warning / danger / info / text | primary        |
| cancel-button-type  | Cancel button type                                                                  | String             | primary / success / warning / danger / info / text | text           |
| icon                | Icon Component                                                                      | String / Component | —                                                  | QuestionFilled |
| icon-color          | Icon color                                                                          | String             | —                                                  | #f90           |
| hide-icon           | is hide Icon                                                                        | Boolean            | —                                                  | false          |
| teleported          | whether popconfirm is teleported to the body                                        | boolean            | true / false                                       | true           |
| persistent          | when popconfirm inactive and `persistent` is `false` , popconfirm will be destroyed | boolean            | —                                                  | false          |

## Slots

| Name      | Description                           |
| --------- | ------------------------------------- |
| reference | HTML element that triggers Popconfirm |

## Events

| Event Name | Description                        | Parameters |
| ---------- | ---------------------------------- | ---------- |
| confirm    | triggers when click confirm button | —          |
| cancel     | triggers when click cancel button  | —          |
