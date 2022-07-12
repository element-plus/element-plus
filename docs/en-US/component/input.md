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

## Formatter

Display value within it's situation with `formatter`, and we usually use `parser` at the same time.

:::demo

input/formatter

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

:::demo Add `size` attribute to change the size of Input. In addition to the default size, there are two other options: `large`, `small`.

input/various-size

:::

## Limit length

:::demo `maxlength` and `minlength` attributes of input, they declare a limit on the number of characters a user can input. The "number of characters" is measured using JavaScript string length.Setting the `maxlength` prop for a text or textarea type of Input can limit the length of input value, allows you to show word count by setting `show-word-limit` to `true` at the same time.

input/length-limiting

:::

## Input Attributes

| Attribute            | Description                                                                                                                            | Type                                     | Accepted Values                                                                                                                       | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| type                 | type of input                                                                                                                          | string                                   | text, textarea and other [native input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text    |
| modelValue / v-model | binding value                                                                                                                          | string / number                          | —                                                                                                                                     | —       |
| maxlength            | the max length                                                                                                                         | string / number                          | —                                                                                                                                     | —       |
| minlength            | same as `minlength` in native input                                                                                                    | number                                   | —                                                                                                                                     | —       |
| show-word-limit      | whether show word count，only works when `type` is 'text' or 'textarea'                                                                | boolean                                  | —                                                                                                                                     | false   |
| placeholder          | placeholder of Input                                                                                                                   | string                                   | —                                                                                                                                     | —       |
| clearable            | whether to show clear button                                                                                                           | boolean                                  | —                                                                                                                                     | false   |
| formatter            | specifies the format of the value presented input.(only works when `type` is 'text')                                                   | function(value: string / number): string | —                                                                                                                                     | —       |
| parser               | specifies the value extracted from formatter input.(only works when `type` is 'text')                                                  | function(string): string                 | —                                                                                                                                     | —       |
| show-password        | whether to show toggleable password input                                                                                              | boolean                                  | —                                                                                                                                     | false   |
| disabled             | whether Input is disabled                                                                                                              | boolean                                  | —                                                                                                                                     | false   |
| size                 | size of Input, works when `type` is not 'textarea'                                                                                     | string                                   | large / default / small                                                                                                               | —       |
| prefix-icon          | prefix icon component                                                                                                                  | string / Component                       | —                                                                                                                                     | —       |
| suffix-icon          | suffix icon component                                                                                                                  | string / Component                       | —                                                                                                                                     | —       |
| rows                 | number of rows of textarea, only works when `type` is 'textarea'                                                                       | number                                   | —                                                                                                                                     | 2       |
| autosize             | whether textarea has an adaptive height, only works when `type` is 'textarea'. Can accept an object, e.g. `{ minRows: 2, maxRows: 6 }` | boolean / object                         | —                                                                                                                                     | false   |
| autocomplete         | same as `autocomplete` in native input                                                                                                 | string                                   | —                                                                                                                                     | off     |
| name                 | same as `name` in native input                                                                                                         | string                                   | —                                                                                                                                     | —       |
| readonly             | same as `readonly` in native input                                                                                                     | boolean                                  | —                                                                                                                                     | false   |
| max                  | same as `max` in native input                                                                                                          | —                                        | —                                                                                                                                     | —       |
| min                  | same as `min` in native input                                                                                                          | —                                        | —                                                                                                                                     | —       |
| step                 | same as `step` in native input                                                                                                         | —                                        | —                                                                                                                                     | —       |
| resize               | control the resizability                                                                                                               | string                                   | none / both / horizontal / vertical                                                                                                   | —       |
| autofocus            | same as `autofocus` in native input                                                                                                    | boolean                                  | —                                                                                                                                     | false   |
| form                 | same as `form` in native input                                                                                                         | string                                   | —                                                                                                                                     | —       |
| label                | label text                                                                                                                             | string                                   | —                                                                                                                                     | —       |
| tabindex             | input tabindex                                                                                                                         | string / number                          | -                                                                                                                                     | -       |
| validate-event       | whether to trigger form validation                                                                                                     | boolean                                  | -                                                                                                                                     | true    |
| input-style          | the style of the input element or textarea element                                                                                     | object                                   | -                                                                                                                                     | {}      |

## Input slots

| Name    | Description                                                       |
| ------- | ----------------------------------------------------------------- |
| prefix  | content as Input prefix, only works when `type` is 'text'         |
| suffix  | content as Input suffix, only works when `type` is 'text'         |
| prepend | content to prepend before Input, only works when `type` is 'text' |
| append  | content to append after Input, only works when `type` is 'text'   |

## Input Events

| Event Name | Description                                                                                           | Parameters                |
| ---------- | ----------------------------------------------------------------------------------------------------- | ------------------------- |
| blur       | triggers when Input blurs                                                                             | (event: Event)            |
| focus      | triggers when Input focuses                                                                           | (event: Event)            |
| change     | triggers when the input box loses focus or the user presses Enter, only if the modelValue has changed | (value: string \| number) |
| input      | triggers when the Input value change                                                                  | (value: string \| number) |
| clear      | triggers when the Input is cleared by clicking the clear button                                       | —                         |

## Input Methods

| Method | Description                      | Parameters |
| ------ | -------------------------------- | ---------- |
| focus  | focus the input element          | —          |
| blur   | blur the input element           | —          |
| select | select the text in input element | —          |
