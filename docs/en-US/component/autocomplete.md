---
title: Autocomplete
lang: en-US
---

# Autocomplete

Get some recommended tips based on the current input.

## Basic Usage

Autocomplete component provides input suggestions.

:::demo The `fetch-suggestions` attribute is a method that return suggested inputs. In this example, `querySearch(queryString, cb)` return suggestions to Autocomplete via `cb(data)` when suggestions are ready.

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

## Custom Loading ^(2.5.0)

Override loading content.

:::demo

autocomplete/custom-loading

:::

## API

### Attributes

| Name                                | Description                                                                                                                | Type                                                                                      | Default      |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------ |
| model-value / v-model               | binding value                                                                                                              | ^[string]                                                                                 | —            |
| placeholder                         | the placeholder of Autocomplete                                                                                            | ^[string]                                                                                 | —            |
| clearable                           | whether to show clear button                                                                                               | ^[boolean]                                                                                | false        |
| disabled                            | whether Autocomplete is disabled                                                                                           | ^[boolean]                                                                                | false        |
| value-key                           | key name of the input suggestion object for display                                                                        | ^[string]                                                                                 | value        |
| debounce                            | debounce delay when typing, in milliseconds                                                                                | ^[number]                                                                                 | 300          |
| placement                           | placement of the popup menu                                                                                                | ^[enum]`'top' \| 'top- start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end'` | bottom-start |
| fetch-suggestions                   | a method to fetch input suggestions. When suggestions are ready, invoke `callback(data:[])` to return them to Autocomplete | ^[Array] / ^[Function]`(queryString: string, callback: callbackfn) => void`               | —            |
| trigger-on-focus                    | whether show suggestions when input focus                                                                                  | ^[boolean]                                                                                | true         |
| select-when-unmatched               | whether to emit a `select` event on enter when there is no autocomplete match                                              | ^[boolean]                                                                                | false        |
| name                                | same as `name` in native input                                                                                             | ^[string]                                                                                 | —            |
| aria-label ^(a11y) ^(2.7.2)         | native `aria-label` attribute                                                                                              | ^[string]                                                                                 | —            |
| hide-loading                        | whether to hide the loading icon in remote search                                                                          | ^[boolean]                                                                                | false        |
| popper-class                        | custom class name for autocomplete's dropdown                                                                              | ^[string]                                                                                 | —            |
| teleported                          | whether select dropdown is teleported to the body                                                                          | ^[boolean]                                                                                | true         |
| append-to ^(2.9.9)                  | which select dropdown appends to                                                                                           | ^[CSSSelector] / ^[HTMLElement]                                                           | —            |
| highlight-first-item                | whether to highlight first item in remote search suggestions by default                                                    | ^[boolean]                                                                                | false        |
| fit-input-width                     | whether the width of the dropdown is the same as the input                                                                 | ^[boolean]                                                                                | false        |
| popper-append-to-body ^(deprecated) | whether to append the dropdown to body. If the positioning of the dropdown is wrong, you can try to set this prop to false | ^[boolean]                                                                                | false        |

### Events

| Name   | Description                                                     | Type                                                  |
| ------ | --------------------------------------------------------------- | ----------------------------------------------------- |
| blur   | triggers when Input blurs                                       | ^[Function]`(event: FocusEvent) => void`              |
| focus  | triggers when Input focuses                                     | ^[Function]`(event: FocusEvent) => void`              |
| input  | triggers when the Input value change                            | ^[Function]`(value: string \| number) => void`        |
| clear  | triggers when the Input is cleared by clicking the clear button | ^[Function]`() => void`                               |
| select | triggers when a suggestion is clicked                           | ^[Function]`(item: typeof modelValue \| any) => void` |
| change | triggers when the icon inside Input value change                | ^[Function]`(value: string \| number) => void`        |

### Slots

| Name             | Description                          | Type                                     |
| ---------------- | ------------------------------------ | ---------------------------------------- |
| default          | custom content for input suggestions | ^[object]`{ item: Record<string, any> }` |
| prefix           | content as Input prefix              | -                                        |
| suffix           | content as Input suffix              | -                                        |
| prepend          | content to prepend before Input      | -                                        |
| append           | content to append after Input        | -                                        |
| loading ^(2.5.0) | override loading content             | -                                        |

### Exposes

| Name             | Description                                 | Type                                       |
| ---------------- | ------------------------------------------- | ------------------------------------------ |
| activated        | if autocomplete activated                   | ^[object]`Ref<boolean>`                    |
| blur             | blur the input element                      | ^[Function]`() => void`                    |
| close            | collapse suggestion list                    | ^[Function]`() => void`                    |
| focus            | focus the input element                     | ^[Function]`() => void`                    |
| handleSelect     | triggers when a suggestion is clicked       | ^[Function]`(item: any) => promise<void>`  |
| handleKeyEnter   | handle keyboard enter event                 | ^[Function]`() => promise<void>`           |
| highlightedIndex | the index of the currently highlighted item | ^[object]`Ref<number>`                     |
| highlight        | highlight an item in a suggestion           | ^[Function]`(itemIndex: number) => void`   |
| inputRef         | el-input component instance                 | ^[object]`Ref<ElInputInstance>`            |
| loading          | remote search loading indicator             | ^[object]`Ref<boolean>`                    |
| popperRef        | el-tooltip component instance               | ^[object]`Ref<ElTooltipInstance>`          |
| suggestions      | fetch suggestions result                    | ^[object]`Ref<record<string, any>>`        |
| getData ^(2.8.4) | loading suggestion list                     | ^[Function]`(queryString: string) => void` |
