---
title: Mention
lang: en-US
---

# Mention

Used to mention someone or something in an input.

## Basic Usage

The most basic usage.

:::demo

mention/basic

:::

## Textarea

The input type can be set to `textarea`.

:::demo

mention/textarea

:::

## Customize label

Customize label by `label` slot.

:::demo

mention/label

:::

## Load remote options

Load options asynchronously.

:::demo

mention/loading

:::

## Customize trigger token

Customize trigger token by `prefix` props. Default to `@`, `Array<string>` also supported.

:::demo

mention/prefix

:::

## Delete as a whole

Set the `whole` attribute to `true`, and when you press the backspace, the mention will be deleted as a whole.
Set the `check-is-whole` attribute to customize the checking logic.
:::demo

mention/whole

:::

## Work with form

to work with `el-form`.

:::demo

mention/form

:::

::: tip
Since this component is developed based on the component [`el-input`](./input.md#attributes) , the original properties have not changed, so no repetition here,
and please go to the original component to view the documentation.
:::

## API

### Attributes

| Name                                 | Description                                                                            | Type                                                                         | Default    |
| ------------------------------------ | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------- |
| options                              | mention options list                                                                   | ^[array]`MentionOption[]`                                                    | `[]`       |
| prefix                               | prefix character to trigger mentions. The string length must be exactly 1              | ^[string] \| ^[array]`string[]`                                              | `'@'`      |
| split                                | character to split mentions. The string length must be exactly 1                       | ^[string]                                                                    | `' '`      |
| filter-option                        | customize filter option logic                                                          | ^[false] \| ^[Function]`(pattern: string, option: MentionOption) => boolean` | —          |
| placement                            | set popup placement                                                                    | ^[string]`'bottom' \| 'top'`                                                 | `'bottom'` |
| show-arrow                           | whether the dropdown panel has an arrow                                                | ^[boolean]                                                                   | `false`    |
| offset                               | offset of the dropdown panel                                                           | ^[number]                                                                    | `0`        |
| whole                                | when backspace is pressed to delete, whether the mention content is deleted as a whole | ^[boolean]                                                                   | `false`    |
| check-is-whole                       | when backspace is pressed to delete, check if the mention is a whole                   | ^[Function]`(pattern: string, prefix: string) => boolean`                    | —          |
| loading                              | whether the dropdown panel of mentions is in a loading state                           | ^[boolean]                                                                   | `false`    |
| model-value / v-model                | input value                                                                            | ^[string]                                                                    | —          |
| popper-class                         | custom class name for dropdown panel                                                   | ^[string]                                                                    | —          |
| popper-options                       | [popper.js](https://popper.js.org/docs/v2/) parameters                                 | ^[object] refer to [popper.js doc](https://popper.js.org/docs/v2/)           | —          |
| [input props](./input.md#attributes) | —                                                                                      | —                                                                            | —          |

### Events

| Name                              | Description                         | Type                                                         |
| --------------------------------- | ----------------------------------- | ------------------------------------------------------------ |
| search                            | trigger when prefix hit             | ^[Function]`(pattern: string, prefix: string) => void`       |
| select                            | trigger when user select the option | ^[Function]`(option: MentionOption, prefix: string) => void` |
| [input events](./input.md#events) | —                                   | —                                                            |

### Slots

| Name                            | Description                           | Type                                              |
| ------------------------------- | ------------------------------------- | ------------------------------------------------- |
| label                           | content as option label               | ^[object]`{ item: MentionOption, index: number }` |
| loading                         | content as option loading             | —                                                 |
| header                          | content at the top of the dropdown    | —                                                 |
| footer                          | content at the bottom of the dropdown | —                                                 |
| [input slots](./input.md#slots) | —                                     | —                                                 |

### Exposes

| Name                     | Description                   | Type                                    |
| ------------------------ | ----------------------------- | --------------------------------------- |
| input                    | el-input component instance   | ^[object]`Ref<InputInstance \| null>`   |
| tooltip                  | el-tooltip component instance | ^[object]`Ref<TooltipInstance \| null>` |
| dropdownVisible ^(2.8.5) | tooltip display status        | ^[object]`ComputedRef<boolean>`         |

## Type Declarations

<details>
  <summary>Show declarations</summary>

```ts
type MentionOption = {
  value: string
  label?: string
  disabled?: boolean
  [key: string]: any
}
```

</details>
