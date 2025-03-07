---
title: Steps
lang: en-US
---

# Steps

Guide the user to complete tasks in accordance with the process. Its steps can be set according to the actual application scenario and the number of the steps can't be less than 2.

## Basic usage

Simple step bar.

:::demo Set `active` attribute with `Number` type, which indicates the index of steps and starts from 0. You can set `space` attribute when the width of the step needs to be fixed which accepts `Number` type. The unit of the `space` attribute is `px`. If not set, it is responsive. Setting the `finish-status` attribute can change the state of the steps that have been completed.

steps/basic

:::

## Step bar that contains status

Shows the status of the step for each step.

:::demo Use `title` attribute to set the name of the step, or override the attribute by using a named `slot`. We have listed all the slot names for you at the end of this page.

steps/with-status

:::

## Center

Title and description can be centered.

:::demo

steps/centered

:::

## Step bar with description

There is description for each step.

:::demo

steps/with-description

:::

## Step bar with icon

A variety of custom icons can be used in the step bar.

:::demo The icon is set by the `icon` property. The types of icons can be found in the document for the Icon component. In addition, you can customize the icon through a named `slot`.

steps/with-icon

:::

## Vertical step bar

Vertical step bars.

:::demo You only need to set the `direction` attribute to `vertical` in the `el-steps` element.

steps/vertical

:::

## Simple step bar

Simple step bars, where `align-center`, `description`, `direction` and `space` will be ignored.

:::demo

steps/simple

:::

## Steps API

### Steps Attributes

| Name           | Description                                                                   | Type                                                             | Default    |
| -------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------- | ---------- |
| space          | the spacing of each step, will be responsive if omitted. Supports percentage. | ^[number] / ^[string]                                            | ''         |
| direction      | display direction                                                             | ^[enum]`'vertical' \| 'horizontal'`                              | horizontal |
| active         | current activation step                                                       | ^[number]                                                        | 0          |
| process-status | status of current step                                                        | ^[enum]`'wait' \| 'process' \| 'finish' \| 'error' \| 'success'` | process    |
| finish-status  | status of end step                                                            | ^[enum]`'wait' \| 'process' \| 'finish' \| 'error' \| 'success'` | finish     |
| align-center   | center title and description                                                  | ^[boolean]                                                       | —          |
| simple         | whether to apply simple theme                                                 | ^[boolean]                                                       | —          |

### Steps Slots

| Name    | Description               | Subtags |
| ------- | ------------------------- | ------- |
| default | customize default content | Step    |

## Step API

### Step Attributes

| Name        | Description                                                              | Type                                                                   | Default |
| ----------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------- | ------- |
| title       | step title                                                               | ^[string]                                                              | ''      |
| description | step description                                                         | ^[string]                                                              | ''      |
| icon        | step custom icon. Icons can be passed via named slot as well             | ^[string] / ^[Component]                                               | —       |
| status      | current status. It will be automatically set by Steps if not configured. | ^[enum]`'' \| 'wait' \| 'process' \| 'finish' \| 'error' \| 'success'` | ''      |

### Step Slots

| Name        | Description      |
| ----------- | ---------------- |
| icon        | custom icon      |
| title       | step title       |
| description | step description |
