---
title: Page
lang: en-US
---

# Page Header

If path of the page is simple, it is recommended to use PageHeader instead of the Breadcrumb.

## Basic usage

:::demo

page-header/basic

:::

## Custom icon

:::demo

page-header/custom-icon

:::

## Attributes

| Attribute | Description    | Type               | Accepted Values | Default |
| --------- | -------------- | ------------------ | --------------- | ------- |
| icon      | icon component | string / Component | —               | Back    |
| title     | main title     | string             | —               | Back    |
| content   | content        | string             | —               | —       |

## Events

| Event Name | Description                         | Parameters |
| ---------- | ----------------------------------- | ---------- |
| back       | triggers when right side is clicked | —          |

## Slots

| Name    | Description   |
| ------- | ------------- |
| icon    | custom icon   |
| title   | title content |
| content | content       |
