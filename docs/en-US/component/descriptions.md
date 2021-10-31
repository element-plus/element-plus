---
title: Descriptions
lang: en-US
---

# Descriptions

Display multiple fields in list form.

<style lang="scss" scoped>
.example-showcase {
  .margin-top {
    margin-top: 20px;
  }

  .my-label {
    background: var(--el-color-success-lighter);
  }

  .my-content {
    background: var(--el-color-danger-lighter);
  }
}
</style>

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

## Customized Style

:::demo

descriptions/customized-style

:::

## Descriptions Attributes

| Attribute | Description                                | Type    | Accepted Values       | Default    |
| --------- | ------------------------------------------ | ------- | --------------------- | ---------- |
| border    | with or without border                     | boolean | —                     | false      |
| column    | numbers of `Descriptions Item` in one line | number  | —                     | 3          |
| direction | direction of list                          | string  | vertical / horizontal | horizontal |
| size      | size of list                               | string  | medium / small / mini | —          |
| title     | title text, display on the top left        | string  | —                     | —          |
| extra     | extra text, display on the top right       | string  | —                     | —          |

## Descriptions Slots

| Name  | Description                                 | Subtags           |
| ----- | ------------------------------------------- | ----------------- |
| —     | customize default content                   | Descriptions Item |
| title | custom title, display on the top left       | —                 |
| extra | custom extra area, display on the top right | —                 |

## Descriptions Item Attributes

| Attribute        | Description                                                                                                                                                                                  | Type            | Accepted Values       | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------------- | ------- |
| label            | label text                                                                                                                                                                                   | string          | —                     | —       |
| span             | colspan of column                                                                                                                                                                            | number          | —                     | 1       |
| width            | column width, the width of the same column in different rows is set by the max value (If no `border`, width contains label and content)                                                      | string / number | —                     | —       |
| min-width        | column minimum width, columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion (If no`border`, width contains label and content) | string / number | —                     | —       |
| align            | column content alignment (If no `border`, effective for both label and content)                                                                                                              | string          | left / center / right | left    |
| label-align      | column label alignment, if omitted, the value of the above `align` attribute will be applied (If no `border`, please use `align` attribute)                                                  | string          | left / center / right | —       |
| class-name       | column content custom class name                                                                                                                                                             | string          | —                     | —       |
| label-class-name | column label custom class name                                                                                                                                                               | string          | —                     | —       |

## Descriptions Item Slots

| Name  | Description               |
| ----- | ------------------------- |
| —     | customize default content |
| label | custom label              |
