---
title: Page
lang: en-US
---

# Page Header

If path of the page is simple, it is recommended to use PageHeader instead of the Breadcrumb.

## Complete example

:::demo

page-header/complete

:::

## Basic usage

Standard page header, for simply scenarios.

:::demo

page-header/basic

:::

## Custom icon

The default icon might not meet your satisfaction, you can customize the icon by setting `icon` attribute
like the example.

:::demo

page-header/custom-icon

:::

## No icon

Sometimes the page is just full of elements, and you might not want the icon to show up on the page,
you can set the `icon` attribute to `""` to get rid of it.

:::demo

page-header/no-icon

:::

## Breadcrumbs

Page header allows you to add breadcrumbs for giving route information to the users by `breadcrumb` slot.

:::demo

page-header/breadcrumb

:::

## Additional operation section

The header can be as complicated as needed, you may add additional sections to the header, to allow rich
interactions.

:::demo

page-header/additional-sections

:::

## Main content

Sometimes we want the head to show with some co-responding content, we can utilize the `default` slot for doing so.

:::demo

page-header/main-content

:::

## Anatomy

The component is consisted of these parts

```vue
<template>
  <el-page-header>
    <!-- Line 1 -->
    <template #breadcrumb />
    <!-- Line 2 -->
    <template #icon />
    <template #title />
    <template #content />
    <template #extra />
    <!-- Lines after 2 -->
    <template #default />
  </el-page-header>
</template>
```

## API

### Attributes

| Name    | Description                                                   | Type                     | Default |
| ------- | ------------------------------------------------------------- | ------------------------ | ------- |
| icon    | icon component of page header                                 | ^[string] / ^[Component] | Back    |
| title   | main title of page header, default is Back that built-in a11y | ^[string]                | ''      |
| content | content of page header                                        | ^[string]                | ''      |

### Events

| Name | Description                         | Type                    |
| ---- | ----------------------------------- | ----------------------- |
| back | triggers when right side is clicked | ^[Function]`() => void` |

### Slots

| Name       | Description           |
| ---------- | --------------------- |
| icon       | content as icon       |
| title      | content as title      |
| content    | content               |
| extra      | extra                 |
| breadcrumb | content as breadcrumb |
| default    | main content          |
