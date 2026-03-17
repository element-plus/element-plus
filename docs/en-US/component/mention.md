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

## Props ^(2.11.3)

You can customize the alias of the `options` through the `props` attribute.

:::demo

mention/props

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

| Name                                 | Description                                                                            | Type                                                                         | Default                                                  |
| ------------------------------------ | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------- |
| options                              | Mention options list                                                                   | ^[array]`MentionOption[]`                                                    | `[]`                                                     |
| props ^(2.11.3)                      | Configuration options                                                                  | ^[object]`MentionOptionProps`                                                | `{value: 'value', label: 'label', disabled: 'disabled'}` |
| prefix                               | Prefix character to trigger mentions. The string length must be exactly 1              | ^[string] \| ^[array]`string[]`                                              | `'@'`                                                    |
| split                                | Character to split mentions. The string length must be exactly 1                       | ^[string]                                                                    | `' '`                                                    |
| filter-option                        | Customize filter option logic                                                          | ^[false] \| ^[Function]`(pattern: string, option: MentionOption) => boolean` | —                                                        |
| placement                            | Set popup placement                                                                    | ^[string]`'bottom' \| 'top'`                                                 | `'bottom'`                                               |
| show-arrow                           | Whether the dropdown panel has an arrow                                                | ^[boolean]                                                                   | `false`                                                  |
| offset                               | Offset of the dropdown panel                                                           | ^[number]                                                                    | `0`                                                      |
| whole                                | When backspace is pressed to delete, whether the mention content is deleted as a whole | ^[boolean]                                                                   | `false`                                                  |
| check-is-whole                       | When backspace is pressed to delete, check if the mention is a whole                   | ^[Function]`(pattern: string, prefix: string) => boolean`                    | —                                                        |
| loading                              | Whether the dropdown panel of mentions is in a loading state                           | ^[boolean]                                                                   | `false`                                                  |
| model-value / v-model                | Input value                                                                            | ^[string]                                                                    | —                                                        |
| popper-class                         | Custom class name for dropdown panel                                                   | ^[string] / ^[object]                                                        | ''                                                       |
| popper-style ^(2.11.5)               | Custom style for dropdown panel                                                        | ^[string] / ^[object]                                                        | —                                                        |
| popper-options                       | [popper.js](https://popper.js.org/docs/v2/) parameters                                 | ^[object] refer to [popper.js doc](https://popper.js.org/docs/v2/)           | —                                                        |
| [input props](./input.md#attributes) | —                                                                                      | —                                                                            | —                                                        |

### Events

| Name                              | Description                                                                                 | Type                                                         |
| --------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| search                            | Trigger when prefix hit                                                                     | ^[Function]`(pattern: string, prefix: string) => void`       |
| select                            | Trigger when user select the option                                                         | ^[Function]`(option: MentionOption, prefix: string) => void` |
| whole-remove ^(2.10.4)            | Trigger when a whole mention is removed and `whole` is `true` or `check-is-whole` is `true` | ^[Function]`(pattern: string, prefix: string) => void`       |
| [input events](./input.md#events) | —                                                                                           | —                                                            |

### Slots

| Name                            | Description                           | Type                                              |
| ------------------------------- | ------------------------------------- | ------------------------------------------------- |
| label                           | Content as option label               | ^[object]`{ item: MentionOption, index: number }` |
| loading                         | Content as option loading             | —                                                 |
| header                          | Content at the top of the dropdown    | —                                                 |
| footer                          | Content at the bottom of the dropdown | —                                                 |
| [input slots](./input.md#slots) | —                                     | —                                                 |

### Exposes

| Name                     | Description                   | Type                                    |
| ------------------------ | ----------------------------- | --------------------------------------- |
| input                    | el-input component instance   | ^[object]`Ref<InputInstance \| null>`   |
| tooltip                  | el-tooltip component instance | ^[object]`Ref<TooltipInstance \| null>` |
| dropdownVisible ^(2.8.5) | Tooltip display status        | ^[object]`ComputedRef<boolean>`         |

## Type Declarations

<details>
  <summary>Show declarations</summary>

```ts
type MentionOption = {
  value?: string
  label?: string
  disabled?: boolean
  [key: string]: any
}

type MentionOptionProps = {
  value?: string
  label?: string
  disabled?: string
  [key: string]: string | undefined
}
```

</details>
