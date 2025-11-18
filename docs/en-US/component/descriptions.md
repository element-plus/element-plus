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
| border               | with or without border                     | ^[boolean]                                     | false      |
| column               | numbers of `Descriptions Item` in one line | ^[number]                                      | 3          |
| direction            | direction of list                          | ^[enum]`'vertical' \| 'horizontal'`            | horizontal |
| size                 | size of list                               | ^[enum]`'' \| 'large' \| 'default' \| 'small'` | —          |
| title                | title text, display on the top left        | ^[string]                                      | ''         |
| extra                | extra text, display on the top right       | ^[string]                                      | ''         |
| label-width ^(2.8.8) | label width of every column                | ^[string] / ^[number]                          | ''         |

### Descriptions Slots

| Name    | Description                                 | Subtags           |
| ------- | ------------------------------------------- | ----------------- |
| default | customize default content                   | Descriptions Item |
| title   | custom title, display on the top left       | —                 |
| extra   | custom extra area, display on the top right | —                 |

## DescriptionsItem API

### DescriptionsItem Attributes

| Name                 | Description                                                                                                                                                                                  | Type                                   | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------- |
| label                | label text                                                                                                                                                                                   | ^[string]                              | ''      |
| span                 | colspan of column                                                                                                                                                                            | ^[number]                              | 1       |
| rowspan ^(2.8.1)     | the number of rows a cell should span                                                                                                                                                        | ^[number]                              | 1       |
| width                | column width, the width of the same column in different rows is set by the max value (If no `border`, width contains label and content)                                                      | ^[string] / ^[number]                  | ''      |
| min-width            | column minimum width, columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion (If no`border`, width contains label and content) | ^[string] / ^[number]                  | ''      |
| label-width ^(2.8.8) | column label width, if not set, it will be the same as the width of the column. Higher priority than the `label-width` of `Descriptions`                                                     | ^[string] / ^[number]                  | ''      |
| align                | column content alignment (If no `border`, effective for both label and content)                                                                                                              | ^[enum]`'left' \| 'center' \| 'right'` | left    |
| label-align          | column label alignment, if omitted, the value of the above `align` attribute will be applied (If no `border`, please use `align` attribute)                                                  | ^[enum]`'left' \| 'center' \| 'right'` | —       |
| class-name           | column content custom class name                                                                                                                                                             | ^[string]                              | ''      |
| label-class-name     | column label custom class name                                                                                                                                                               | ^[string]                              | ''      |

### DescriptionsItem Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
| label   | custom label              |
