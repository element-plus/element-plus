---
title: Autocomplete
lang: en-US
---

## Autocomplete

You can get some recommended tips based on the current input.

:::demo Autocomplete component provides input suggestions. The `fetch-suggestions` attribute is a method that returns suggested input. In this example, `querySearch(queryString, cb)` returns suggestions to Autocomplete via `cb(data)` when suggestions are ready.

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

## Autocomplete Attributes

| Attribute                         | Description                                                                                                                | Type                            | Accepted Values                                                | Default      |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | -------------------------------------------------------------- | ------------ |
| placeholder                       | the placeholder of Autocomplete                                                                                            | string                          | —                                                              | —            |
| clearable                         | whether to show clear button                                                                                               | boolean                         | —                                                              | false        |
| disabled                          | whether Autocomplete is disabled                                                                                           | boolean                         | —                                                              | false        |
| value-key                         | key name of the input suggestion object for display                                                                        | string                          | —                                                              | value        |
| icon                              | icon component                                                                                                             | string / Component              | —                                                              | —            |
| model-value / v-model             | binding value                                                                                                              | string                          | —                                                              | —            |
| debounce                          | debounce delay when typing, in milliseconds                                                                                | number                          | —                                                              | 300          |
| placement                         | placement of the popup menu                                                                                                | string                          | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-start |
| fetch-suggestions                 | a method to fetch input suggestions. When suggestions are ready, invoke `callback(data:[])` to return them to Autocomplete | Function(queryString, callback) | —                                                              | —            |
| popper-class                      | custom class name for autocomplete's dropdown                                                                              | string                          | —                                                              | —            |
| trigger-on-focus                  | whether show suggestions when input focus                                                                                  | boolean                         | —                                                              | true         |
| name                              | same as `name` in native input                                                                                             | string                          | —                                                              | —            |
| select-when-unmatched             | whether to emit a `select` event on enter when there is no autocomplete match                                              | boolean                         | —                                                              | false        |
| label                             | label text                                                                                                                 | string                          | —                                                              | —            |
| prefix-icon                       | prefix icon class                                                                                                          | string / Component              | —                                                              | —            |
| suffix-icon                       | suffix icon class                                                                                                          | string / Component              | —                                                              | —            |
| hide-loading                      | whether to hide the loading icon in remote search                                                                          | boolean                         | —                                                              | false        |
| popper-append-to-body(deprecated) | whether to append the dropdown to body. If the positioning of the dropdown is wrong, you can try to set this prop to false | boolean                         | —                                                              | false        |
| teleported                        | whether select dropdown is teleported to the body                                                                          | boolean                         | true / false                                                   | true         |
| highlight-first-item              | whether to highlight first item in remote search suggestions by default                                                    | boolean                         | —                                                              | false        |
| fit-input-width                   | whether the width of the dropdown is the same as the input                                                                 | boolean                         | —                                                              | false        |

## Autocomplete Slots

| Name    | Description                                                           |
| ------- | --------------------------------------------------------------------- |
| —       | Custom content for input suggestions. The scope parameter is { item } |
| prefix  | content as Input prefix                                               |
| suffix  | content as Input suffix                                               |
| prepend | content to prepend before Input                                       |
| append  | content to append after Input                                         |

## Autocomplete Events

| Event Name | Description                                      | Parameters                |
| ---------- | ------------------------------------------------ | ------------------------- |
| select     | triggers when a suggestion is clicked            | suggestion being clicked  |
| change     | triggers when the icon inside Input value change | (value: string \| number) |

## Autocomplete Methods

| Method | Description             | Parameters |
| ------ | ----------------------- | ---------- |
| focus  | focus the input element | —          |
| blur   | blur the input element  | —          |
