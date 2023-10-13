---
title: Icon selector
lang: en-US
---

# Icon selector

Select the component with the `icon` icon, and the default icon library uses `@element-plus/icons-vue`. You can also expand your local file or third-party icon library yourself

## Basic usage

Click to select the icon, and click again to cancel the selection. It is necessary to adjust the `pagination` initialization attribute based on the number of components to display the best performance of the components `pagination` attribute is the same as[pagination](./pagination.md#attributes)

:::demo 

select-icon/basic

:::

## Size

You can adjust the size through the `icon-background-size` and `icon-size` attributes

:::demo

select-icon/sizes

:::

## Color

Personalize your presentation by modifying the `icon-color`、`icon-background-color`、`selected-color`, and `background-color` attributes

:::demo

select-icon/color

:::

## Multiple

Use the `multiple` attribute to set multiple selections. At this point, the value bound to the `v-model` becomes an array.

:::demo

select-icon/multiple

:::

## Use custom icons

The `svg` template string of the icon can be passed through the `icons` attribute, and the `use-default-icon` attribute can be set to `false` to mask the built-in component library

:::demo

select-icon/custom-icons

:::

## Filter

The `filter` attribute allows for filtering of icon sets, which can be combined with the `search` slot for intra component filtering

:::demo

select-icon/filter

:::

## Custom rendering

The `icon` slot allows for custom rendering of the `dom`, which is very useful when you have already used third-party `icon` parsing components in your project

:::demo

select-icon/custom-icon-render

:::



## Attribute

| Attribute Name             | illustrate                                                         | type                                | Optional values                  | Default value  |
| ------------------ | ------------------------------------------------------------ | ----------------------------------- | ----------------------- | ------- |
| v-model            | bind value                                                       | string/ string[] / null / undefined | —                       | —       |
| icons              | List of icons to add                                             | {name:string;val:string}[]          | —                       | []      |
| pagination         | Paging properties, same as[pagination](./pagination.md#attributes)         | —                                   | —                       | —       |
| iconBackgroundSize | The size of the icon background                                               | string                              | large / default / small | default |
| filter             | Filter conditions                                                     | string                              | —                       | —       |
| iconColor          | Icon Color                                                     | string                              | —                       | #000000 |
| backgroundColor    | Component background color                                                 | string                              | —                       | #ffffff |
| selectedColor      | Selected icon color                                               | string                              | —                       | #409eff |
| iconSize           | size                                                     | number                              | —24                     |         |
| multiple           | multiple choice                                                         | boolean                             | —                       | false   |
| hiddenPagination   | Do you want to hide pagination? The pagination function is still available. If you need to customize the pagination component, please hide it | boolean                             | —                       | false   |
| useDefaultIcon     | Do you want to use the default icon set                                         | boolean                             | —                       | true    |



### Slots

| Slot Name  | illustrate         |
| ------- | ------------ |
| default | Custom rendering area |
| search  | Filter component area   |

