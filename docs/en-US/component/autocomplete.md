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

## Custom Header & Footer ^(2.10.6)

You can customize both the header and footer of the dropdown using slots

:::demo Use slot to customize the content.

autocomplete/custom-header-footer

:::

## API

### Attributes

| Name                                 | Description                                                                                                                | Type                                                                                     | Default      |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------ |
| model-value / v-model                | Binding value                                                                                                              | ^[string]                                                                                | —            |
| placeholder                          | The placeholder of Autocomplete                                                                                            | ^[string]                                                                                | —            |
| clearable                            | Whether to show clear button                                                                                               | ^[boolean]                                                                               | false        |
| disabled                             | Whether Autocomplete is disabled                                                                                           | ^[boolean]                                                                               | false        |
| value-key                            | Key name of the input suggestion object for display                                                                        | ^[string]                                                                                | value        |
| debounce                             | Debounce delay when typing, in milliseconds                                                                                | ^[number]                                                                                | 300          |
| placement                            | Placement of the popup menu                                                                                                | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end'` | bottom-start |
| fetch-suggestions                    | A method to fetch input suggestions. When suggestions are ready, invoke `callback(data:[])` to return them to Autocomplete | ^[Array] / ^[Function]`(queryString: string, callback: callbackfn) => void`              | —            |
| trigger-on-focus                     | Whether show suggestions when input focus                                                                                  | ^[boolean]                                                                               | true         |
| select-when-unmatched                | Whether to emit a `select` event on enter when there is no autocomplete match                                              | ^[boolean]                                                                               | false        |
| name                                 | Same as `name` in native input                                                                                             | ^[string]                                                                                | —            |
| aria-label ^(a11y) ^(2.7.2)          | Native `aria-label` attribute                                                                                              | ^[string]                                                                                | —            |
| hide-loading                         | Whether to hide the loading icon in remote search                                                                          | ^[boolean]                                                                               | false        |
| popper-class                         | Custom class name for autocomplete's dropdown                                                                              | ^[string] / ^[object]                                                                    | ''           |
| popper-style ^(2.11.4)               | Custom style for autocomplete's dropdown                                                                                   | ^[string] / ^[object]                                                                    | —            |
| teleported                           | Whether select dropdown is teleported to the body                                                                          | ^[boolean]                                                                               | true         |
| append-to ^(2.9.9)                   | Which select dropdown appends to                                                                                           | ^[CSSSelector] / ^[HTMLElement]                                                          | —            |
| highlight-first-item                 | Whether to highlight first item in remote search suggestions by default                                                    | ^[boolean]                                                                               | false        |
| fit-input-width                      | Whether the width of the dropdown is the same as the input                                                                 | ^[boolean]                                                                               | false        |
| popper-append-to-body ^(deprecated)  | Whether to append the dropdown to body. If the positioning of the dropdown is wrong, you can try to set this prop to false | ^[boolean]                                                                               | false        |
| loop-navigation ^(2.11.4)            | Whether keyboard navigation loops from end to start                                                                        | ^[boolean]                                                                               | true         |
| [input props](./input.md#attributes) | —                                                                                                                          | —                                                                                        | —            |

### Events

| Name   | Description                                                     | Type                                             |
| ------ | --------------------------------------------------------------- | ------------------------------------------------ |
| blur   | Triggers when Input blurs                                       | ^[Function]`(event: FocusEvent) => void`         |
| focus  | Triggers when Input focuses                                     | ^[Function]`(event: FocusEvent) => void`         |
| input  | Triggers when the Input value change                            | ^[Function]`(value: string \| number) => void`   |
| clear  | Triggers when the Input is cleared by clicking the clear button | ^[Function]`() => void`                          |
| select | Triggers when a suggestion is clicked                           | ^[Function]`(item: Record<string, any>) => void` |
| change | Triggers when the icon inside Input value change                | ^[Function]`(value: string \| number) => void`   |

### Slots

| Name             | Description                           | Type                                     |
| ---------------- | ------------------------------------- | ---------------------------------------- |
| default          | Custom content for input suggestions  | ^[object]`{ item: Record<string, any> }` |
| header ^(2.10.6) | Content at the top of the dropdown    | -                                        |
| footer ^(2.10.6) | Content at the bottom of the dropdown | -                                        |
| prefix           | Content as Input prefix               | -                                        |
| suffix           | Content as Input suffix               | -                                        |
| prepend          | Content to prepend before Input       | -                                        |
| append           | Content to append after Input         | -                                        |
| loading ^(2.5.0) | Override loading content              | -                                        |

### Exposes

| Name             | Description                                 | Type                                                |
| ---------------- | ------------------------------------------- | --------------------------------------------------- |
| activated        | If autocomplete activated                   | ^[object]`Ref<boolean>`                             |
| blur             | Blur the input element                      | ^[Function]`() => void`                             |
| close            | Collapse suggestion list                    | ^[Function]`() => void`                             |
| focus            | Focus the input element                     | ^[Function]`() => void`                             |
| handleSelect     | Triggers when a suggestion is clicked       | ^[Function]`(item: any) => Promise<void>`           |
| handleKeyEnter   | Handle keyboard enter event                 | ^[Function]`() => Promise<void>`                    |
| highlightedIndex | The index of the currently highlighted item | ^[object]`Ref<number>`                              |
| highlight        | Highlight an item in a suggestion           | ^[Function]`(itemIndex: number) => void`            |
| inputRef         | el-input component instance                 | ^[object]`Ref<ElInputInstance>`                     |
| loading          | Remote search loading indicator             | ^[object]`Ref<boolean>`                             |
| popperRef        | el-tooltip component instance               | ^[object]`Ref<ElTooltipInstance>`                   |
| suggestions      | Fetch suggestions result                    | ^[object]`Ref<Record<string, any>[]>`               |
| getData ^(2.8.4) | Loading suggestion list                     | ^[Function]`(queryString: string) => Promise<void>` |
