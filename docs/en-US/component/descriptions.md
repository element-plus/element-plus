---
title: Descriptions
lang: en-US
---

# Descriptions

Display multiple fields in list form.

## Basic usage

:::demo

descriptions/basic-usage

:::

## Sizes

:::demo

descriptions/sizes

:::

## Vertical List

:::demo

descriptions/vertical-list

:::

## Rowspan ^(2.8.1)

:::demo

descriptions/rowspan

:::

## Customized Style

:::demo

descriptions/customized-style

:::

## Descriptions API

### Descriptions Attributes

| Name                 | Description                                | Type                                           | Default    |
| -------------------- | ------------------------------------------ | ---------------------------------------------- | ---------- |
| border               | With or without border                     | ^[boolean]                                     | false      |
| column               | Numbers of `Descriptions Item` in one line | ^[number]                                      | 3          |
| direction            | Direction of list                          | ^[enum]`'vertical' \| 'horizontal'`            | horizontal |
| size                 | Size of list                               | ^[enum]`'' \| 'large' \| 'default' \| 'small'` | —          |
| title                | Title text, display on the top left        | ^[string]                                      | ''         |
| extra                | Extra text, display on the top right       | ^[string]                                      | ''         |
| label-width ^(2.8.8) | Label width of every column                | ^[string] / ^[number]                          | —          |

### Descriptions Slots

| Name    | Description                                 | Subtags           |
| ------- | ------------------------------------------- | ----------------- |
| default | Customize default content                   | Descriptions Item |
| title   | Custom title, display on the top left       | —                 |
| extra   | Custom extra area, display on the top right | —                 |

## DescriptionsItem API

### DescriptionsItem Attributes

| Name                 | Description                                                                                                                                                                                  | Type                                   | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------- |
| label                | Label text                                                                                                                                                                                   | ^[string]                              | ''      |
| span                 | Colspan of column                                                                                                                                                                            | ^[number]                              | 1       |
| rowspan ^(2.8.1)     | The number of rows a cell should span                                                                                                                                                        | ^[number]                              | 1       |
| width                | Column width, the width of the same column in different rows is set by the max value (If no `border`, width contains label and content)                                                      | ^[string] / ^[number]                  | ''      |
| min-width            | Column minimum width, columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion (If no`border`, width contains label and content) | ^[string] / ^[number]                  | ''      |
| label-width ^(2.8.8) | Column label width, if not set, it will be the same as the width of the column. Higher priority than the `label-width` of `Descriptions`                                                     | ^[string] / ^[number]                  | —       |
| align                | Column content alignment (If no `border`, effective for both label and content)                                                                                                              | ^[enum]`'left' \| 'center' \| 'right'` | left    |
| label-align          | Column label alignment, if omitted, the value of the above `align` attribute will be applied (If no `border`, please use `align` attribute)                                                  | ^[enum]`'left' \| 'center' \| 'right'` | —       |
| class-name           | Column content custom class name                                                                                                                                                             | ^[string]                              | ''      |
| label-class-name     | Column label custom class name                                                                                                                                                               | ^[string]                              | ''      |

### DescriptionsItem Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | Customize default content |
| label   | Custom label              |
