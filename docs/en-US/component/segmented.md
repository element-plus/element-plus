---
title: Segmented
lang: en-US
---

# Segmented

Display multiple options and allow users to select a single option.

## Basic Usage

Set `v-model` to the option value is selected.

:::demo

segmented/basic

:::

## Direction Usage ^(2.8.7)

Set `vertical` to change direction.

:::demo

segmented/custom-direction

:::

## Disabled

Set `disabled` of segmented or option to `true` to disable it.

:::demo

segmented/disabled

:::

## Block

Set `block` to `true` to fit the width of parent element.

:::demo

segmented/block

:::

## Custom Content

Set default slot to render custom content.

:::demo

segmented/custom-content

:::

## Custom Style

Set custom styles using CSS varibles.

:::demo

segmented/custom-style

:::

## API

### Attributes

| Name                  | Description                        | Type                                           | Default    |
| --------------------- | ---------------------------------- | ---------------------------------------------- | ---------- |
| model-value / v-model | binding value                      | ^[string] / ^[number] / ^[boolean]             | —          |
| options               | data of the options                | ^[array]`Option[]`                             | []         |
| size                  | size of component                  | ^[enum]`'' \| 'large' \| 'default' \| 'small'` | ''         |
| block                 | fit width of parent content        | ^[boolean]                                     | —          |
| disabled              | whether segmented is disabled      | ^[boolean]                                     | false      |
| validate-event        | whether to trigger form validation | ^[boolean]                                     | true       |
| name                  | native `name` attribute            | ^[string]                                      | —          |
| id                    | native `id` attribute              | ^[string]                                      | —          |
| aria-label ^(a11y)    | native `aria-label` attribute      | ^[string]                                      | —          |
| direction ^(2.8.7)    | display direction                  | ^[enum]`'horizontal' \| 'vertical'`            | horizontal |

### Events

| Name   | Description                                                                   | Type                            |
| ------ | ----------------------------------------------------------------------------- | ------------------------------- |
| change | triggers when the selected value changes, the param is current selected value | ^[Function]`(val: any) => void` |

### Slots

| Name    | Description     | Type                        |
| ------- | --------------- | --------------------------- |
| default | option renderer | ^[object]`{ item: Option }` |

## Type Declarations

<details>
  <summary>Show declarations</summary>

```ts
type Option =
  | {
      label: string
      value: string | number | boolean
      disabled?: boolean
      [key: string]: any
    }
  | string
  | number
  | boolean
```

</details>
