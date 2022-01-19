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

:::demo Set `separator-class` to use `iconfont` as the separator，it will cover `separator`

breadcrumb/icon

:::

## Breadcrumb Attributes

| Attribute       | Description                      | Type               | Accepted Values | Default |
| --------------- | -------------------------------- | ------------------ | --------------- | ------- |
| separator       | separator character              | string             | —               | /       |
| separator-class | icon component of icon separator | string / Component | —               | -       |

## Breadcrumb Slots

| Name | Description               | Subtags         |
| ---- | ------------------------- | --------------- |
| -    | customize default content | Breadcrumb Item |

## Breadcrumb Item Attributes

| Attribute | Description                                               | Type          | Accepted Values | Default |
| --------- | --------------------------------------------------------- | ------------- | --------------- | ------- |
| to        | target route of the link, same as `to` of `vue-router`    | string/object | —               | —       |
| replace   | if `true`, the navigation will not leave a history record | boolean       | —               | false   |

## Breadcrumb Item Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
