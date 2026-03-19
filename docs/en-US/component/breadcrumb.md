---
title: Breadcrumb
lang: en-US
---

# Breadcrumb

Displays the location of the current page, making it easier to browser back.

## Basic usage

:::demo In `el-breadcrumb`, each `el-breadcrumb-item` is a tag that stands for every level starting from homepage. This component has a `String` attribute `separator`, and it determines the separator. Its default value is '/'.

breadcrumb/basic

:::

## Icon separator

:::demo Set `separator-icon` to use `svg icon` as the separator，it will cover `separator`

breadcrumb/icon

:::

## Breadcrumb API

### Breadcrumb Attributes

| Name           | Description                      | Type                     | Default |
| -------------- | -------------------------------- | ------------------------ | ------- |
| separator      | Separator character              | ^[string]                | /       |
| separator-icon | Icon component of icon separator | ^[string] / ^[Component] | —       |

### Breadcrumb Slots

| Name    | Description               | Subtags         |
| ------- | ------------------------- | --------------- |
| default | Customize default content | Breadcrumb Item |

## BreadcrumbItem API

### BreadcrumbItem Attributes

| Name    | Description                                               | Type                                    | Default |
| ------- | --------------------------------------------------------- | --------------------------------------- | ------- |
| to      | Target route of the link, same as `to` of `vue-router`    | ^[string] / ^[object]`RouteLocationRaw` | ''      |
| replace | If `true`, the navigation will not leave a history record | ^[boolean]                              | false   |

### BreadcrumbItem Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | Customize default content |
