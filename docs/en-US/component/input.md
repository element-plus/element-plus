---
title: Input
lang: en-US
---

# Input

Input data using mouse or keyboard.

:::warning

Input is a controlled component, it **always shows Vue binding value**.

Under normal circumstances, `input` event should be handled. Its handler should update component's binding value (or use `v-model`). Otherwise, input box's value will not change.

Do not support `v-model` modifiers.

:::

## Basic usage

:::demo

input/basic

:::

## Disabled

:::demo Disable the Input with the `disabled` attribute.

input/disabled

:::

## Clearable

:::demo Make the Input clearable with the `clearable` attribute.

input/clearable

:::

## Password box

:::demo Make a toggle-able password Input with the `show-password` attribute.

input/password

:::

## Input with icon

Add an icon to indicate input type.

:::demo To add icons in Input, you can simply use `prefix-icon` and `suffix-icon` attributes. Also, the `prefix` and `suffix` named slots works as well.

input/with-icon

:::

## Textarea

Resizable for entering multiple lines of text information. Add attribute `type="textarea"` to change `input` into native `textarea`.

:::demo Control the height by setting the `rows` prop.

input/textarea

:::

## Autosize Textarea

Setting the `autosize` prop for a textarea type of Input makes the height to automatically adjust based on the content. An options object can be provided to `autosize` to specify the minimum and maximum number of lines the textarea can automatically adjust.

:::demo

input/auto-sizing-textarea

:::

## Mixed input

Prepend or append an element, generally a label or a button.

:::demo Use `slot` to distribute elements that prepend or append to Input.

input/mixed-input

:::

## Sizes

:::demo Add `size` attribute to change the size of Input. In addition to the default size, there are three other options: `large`, `small` and `mini`.

input/various-size

:::

## Autocomplete

You can get some recommended tips based on the current input.

:::demo Autocomplete component provides input suggestions. The `fetch-suggestions` attribute is a method that returns suggested input. In this example, `querySearch(queryString, cb)` returns suggestions to Autocomplete via `cb(data)` when suggestions are ready.

input/autocomplete

:::

## Custom template

Customize how suggestions are displayed.

:::demo Use `scoped slot` to customize suggestion items. In the scope, you can access the suggestion object via the `item` key.

input/autocomplete-template

:::

## Remote search

Search data from server-side.

:::demo

input/remote-search

:::

## Limit length

:::demo `maxlength` and `minlength` attributes of input, they declare a limit on the number of characters a user can input. The "number of characters" is measured using JavaScript string length.Setting the `maxlength` prop for a text or textarea type of Input can limit the length of input value, allows you to show word count by setting `show-word-limit` to `true` at the same time.

input/length-limiting

:::

## Input Attributes

| Attribute            | Description                                                                                                                          | Type               | Accepted Values                                                                                                                       | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| type                 | type of input                                                                                                                        | string             | text, textarea and other [native input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text    |
| modelValue / v-model | binding value                                                                                                                        | string / number    | —                                                                                                                                     | —       |
| maxlength            | the max length                                                                                                                       | string / number    | —                                                                                                                                     | —       |
| minlength            | same as `minlength` in native input                                                                                                  | number             | —                                                                                                                                     | —       |
| show-word-limit      | whether show word count，only works when `type` is 'text' or 'textarea'                                                              | boolean            | —                                                                                                                                     | false   |
| placeholder          | placeholder of Input                                                                                                                 | string             | —                                                                                                                                     | —       |
| clearable            | whether to show clear button                                                                                                         | boolean            | —                                                                                                                                     | false   |
| show-password        | whether to show toggleable password input                                                                                            | boolean            | —                                                                                                                                     | false   |
| disabled             | whether Input is disabled                                                                                                            | boolean            | —                                                                                                                                     | false   |
| size                 | size of Input, works when `type` is not 'textarea'                                                                                   | string             | medium / small / mini                                                                                                                 | —       |
| prefix-icon          | prefix icon component                                                                                                                | string / Component | —                                                                                                                                     | —       |
| suffix-icon          | suffix icon component                                                                                                                | string / Component | —                                                                                                                                     | —       |
| rows                 | number of rows of textarea, only works when `type` is 'textarea'                                                                     | number             | —                                                                                                                                     | 2       |
| autosize             | whether textarea has an adaptive height, only works when `type` is 'textarea'. Can accept an object, e.g. { minRows: 2, maxRows: 6 } | boolean / object   | —                                                                                                                                     | false   |
| autocomplete         | same as `autocomplete` in native input                                                                                               | string             | —                                                                                                                                     | off     |
| name                 | same as `name` in native input                                                                                                       | string             | —                                                                                                                                     | —       |
| readonly             | same as `readonly` in native input                                                                                                   | boolean            | —                                                                                                                                     | false   |
| max                  | same as `max` in native input                                                                                                        | —                  | —                                                                                                                                     | —       |
| min                  | same as `min` in native input                                                                                                        | —                  | —                                                                                                                                     | —       |
| step                 | same as `step` in native input                                                                                                       | —                  | —                                                                                                                                     | —       |
| resize               | control the resizability                                                                                                             | string             | none / both / horizontal / vertical                                                                                                   | —       |
| autofocus            | same as `autofocus` in native input                                                                                                  | boolean            | —                                                                                                                                     | false   |
| form                 | same as `form` in native input                                                                                                       | string             | —                                                                                                                                     | —       |
| label                | label text                                                                                                                           | string             | —                                                                                                                                     | —       |
| tabindex             | input tabindex                                                                                                                       | string / number    | -                                                                                                                                     | -       |
| validate-event       | whether to trigger form validation                                                                                                   | boolean            | -                                                                                                                                     | true    |
| input-style          | the style of the input element or textarea element                                                                                   | object             | -                                                                                                                                     | {}      |

## Input slots

| Name    | Description                                                       |
| ------- | ----------------------------------------------------------------- |
| prefix  | content as Input prefix, only works when `type` is 'text'         |
| suffix  | content as Input suffix, only works when `type` is 'text'         |
| prepend | content to prepend before Input, only works when `type` is 'text' |
| append  | content to append after Input, only works when `type` is 'text'   |

## Input Events

| Event Name | Description                                                            | Parameters                |
| ---------- | ---------------------------------------------------------------------- | ------------------------- |
| blur       | triggers when Input blurs                                              | (event: Event)            |
| focus      | triggers when Input focuses                                            | (event: Event)            |
| change     | triggers only when the input box loses focus or the user presses Enter | (value: string \| number) |
| input      | triggers when the Input value change                                   | (value: string \| number) |
| clear      | triggers when the Input is cleared by clicking the clear button        | —                         |

## Input Methods

| Method | Description                      | Parameters |
| ------ | -------------------------------- | ---------- |
| focus  | focus the input element          | —          |
| blur   | blur the input element           | —          |
| select | select the text in input element | —          |

## Autocomplete Attributes

| Attribute             | Description                                                                                                                | Type                            | Accepted Values                                                | Default      |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | -------------------------------------------------------------- | ------------ |
| placeholder           | the placeholder of Autocomplete                                                                                            | string                          | —                                                              | —            |
| clearable             | whether to show clear button                                                                                               | boolean                         | —                                                              | false        |
| disabled              | whether Autocomplete is disabled                                                                                           | boolean                         | —                                                              | false        |
| value-key             | key name of the input suggestion object for display                                                                        | string                          | —                                                              | value        |
| icon                  | icon component                                                                                                             | string / Component              | —                                                              | —            |
| model-value / v-model | binding value                                                                                                              | string                          | —                                                              | —            |
| debounce              | debounce delay when typing, in milliseconds                                                                                | number                          | —                                                              | 300          |
| placement             | placement of the popup menu                                                                                                | string                          | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-start |
| fetch-suggestions     | a method to fetch input suggestions. When suggestions are ready, invoke `callback(data:[])` to return them to Autocomplete | Function(queryString, callback) | —                                                              | —            |
| popper-class          | custom class name for autocomplete's dropdown                                                                              | string                          | —                                                              | —            |
| trigger-on-focus      | whether show suggestions when input focus                                                                                  | boolean                         | —                                                              | true         |
| name                  | same as `name` in native input                                                                                             | string                          | —                                                              | —            |
| select-when-unmatched | whether to emit a `select` event on enter when there is no autocomplete match                                              | boolean                         | —                                                              | false        |
| label                 | label text                                                                                                                 | string                          | —                                                              | —            |
| prefix-icon           | prefix icon class                                                                                                          | string                          | —                                                              | —            |
| suffix-icon           | suffix icon class                                                                                                          | string                          | —                                                              | —            |
| hide-loading          | whether to hide the loading icon in remote search                                                                          | boolean                         | —                                                              | false        |
| popper-append-to-body | whether to append the dropdown to body. If the positioning of the dropdown is wrong, you can try to set this prop to false | boolean                         | -                                                              | false        |
| highlight-first-item  | whether to highlight first item in remote search suggestions by default                                                    | boolean                         | —                                                              | false        |

## Autocomplete Slots

| Name    | Description                     |
| ------- | ------------------------------- |
| prefix  | content as Input prefix         |
| suffix  | content as Input suffix         |
| prepend | content to prepend before Input |
| append  | content to append after Input   |

## Autocomplete Scoped Slot

| Name | Description                                                           |
| ---- | --------------------------------------------------------------------- |
| —    | Custom content for input suggestions. The scope parameter is { item } |

## Autocomplete Events

| Event Name | Description                                      | Parameters                |
| ---------- | ------------------------------------------------ | ------------------------- |
| select     | triggers when a suggestion is clicked            | suggestion being clicked  |
| change     | triggers when the icon inside Input value change | (value: string \| number) |

## Autocomplete Methods

| Method | Description             | Parameters |
| ------ | ----------------------- | ---------- |
| focus  | focus the input element | —          |
