---
title: Autocomplete
lang: en-US
---

# Autocomplete

Get some recommended tips based on the current input.

## Basic Usage

Autocomplete component provides input suggestions.

:::demo The `fetch-suggestions` attribute is a method that returns suggested input. In this example, `querySearch(queryString, cb)` returns suggestions to Autocomplete via `cb(data)` when suggestions are ready.

autocomplete/autocomplete

:::

## Custom template

Customize how suggestions are displayed.

:::demo Use `scoped slot` to customize suggestion items. In the scope, you can access the suggestion object via the `item` key.

autocomplete/autocomplete-template

:::

## Remote search

Search data from server-side.

:::demo

autocomplete/remote-search

:::

## Autocomplete APIs

### Attributes

| Name                              | Description                                                                                                                | Type                                                                                           | Default      |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------ |
| placeholder                       | the placeholder of Autocomplete                                                                                            | <StringType />                                                                                 | —            |
| clearable                         | whether to show clear button                                                                                               | <BooleanType />                                                                                | false        |
| disabled                          | whether Autocomplete is disabled                                                                                           | <BooleanType />                                                                                | false        |
| value-key                         | key name of the input suggestion object for display                                                                        | <StringType />                                                                                 | value        |
| model-value / v-model             | binding value                                                                                                              | <StringType />                                                                                 | —            |
| debounce                          | debounce delay when typing, in milliseconds                                                                                | <NumberType />                                                                                 | 300          |
| placement                         | placement of the popup menu                                                                                                | <EnumType :values="['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end']" /> | bottom-start |
| fetch-suggestions                 | a method to fetch input suggestions. When suggestions are ready, invoke `callback(data:[])` to return them to Autocomplete | <FunctionType :params="[['queryString', 'string'], ['callback', 'CallbackFn']]" />             | —            |
| popper-class                      | custom class name for autocomplete's dropdown                                                                              | <StringType />                                                                                 | —            |
| trigger-on-focus                  | whether show suggestions when input focus                                                                                  | <BooleanType />                                                                                | true         |
| name                              | same as `name` in native input                                                                                             | <StringType />                                                                                 | —            |
| select-when-unmatched             | whether to emit a `select` event on enter when there is no autocomplete match                                              | <BooleanType />                                                                                | false        |
| label                             | label text                                                                                                                 | <StringType />                                                                                 | —            |
| hide-loading                      | whether to hide the loading icon in remote search                                                                          | <BooleanType />                                                                                | false        |
| popper-append-to-body(deprecated) | whether to append the dropdown to body. If the positioning of the dropdown is wrong, you can try to set this prop to false | <BooleanType />                                                                                | false        |
| teleported                        | whether select dropdown is teleported to the body                                                                          | <BooleanType />                                                                                | true         |
| highlight-first-item              | whether to highlight first item in remote search suggestions by default                                                    | <BooleanType />                                                                                | false        |
| fit-input-width                   | whether the width of the dropdown is the same as the input                                                                 | <BooleanType />                                                                                | false        |

### Slots

| Name    | Description                                                           |
| ------- | --------------------------------------------------------------------- |
| default | Custom content for input suggestions. The scope parameter is { item } |
| prefix  | content as Input prefix                                               |
| suffix  | content as Input suffix                                               |
| prepend | content to prepend before Input                                       |
| append  | content to append after Input                                         |

### Events

| Name   | Description                                      | Type                                                                         |
| ------ | ------------------------------------------------ | ---------------------------------------------------------------------------- |
| select | triggers when a suggestion is clicked            | <FunctionType :params="[['item', '{ value: typeof modelValue } \| any']]" /> |
| change | triggers when the icon inside Input value change | <FunctionType :params="[['value', 'string \| number']]" />                   |

### Instance Exposes

| Name             | Description                                 | Type                                                                 |
| ---------------- | ------------------------------------------- | -------------------------------------------------------------------- |
| activated        | if autocomplete activated                   | <RefType type="boolean" />                                           |
| blur             | blur the input element                      | <FunctionType />                                                     |
| close            | collapse suggestion list                    | <FunctionType />                                                     |
| focus            | focus the input element                     | <FunctionType />                                                     |
| handleSelect     | triggers when a suggestion is clicked       | <FunctionType :params="[['item', 'any']]" returns="Promise<void>" /> |
| handleKeyEnter   | handle keyboard enter event                 | <FunctionType returns="Promise<void>" />                             |
| highlightedIndex | the index of the currently highlighted item | <RefType type="number" />                                            |
| highlight        | highlight an item in a suggestion           | <FunctionType :params="[['itemIndex', 'number']]" />                 |
| inputRef         | el-input component instance                 | <RefType type="ElInputInstance" />                                   |
| loading          | remote search loading indicator             | <RefType type="boolean" />                                           |
| popperRef        | el-tooltip component instance               | <RefType type="ElTooltipInstance" />                                 |
| suggestions      | fetch suggestions result                    | <RefType type="Record<string, any>" />                               |
