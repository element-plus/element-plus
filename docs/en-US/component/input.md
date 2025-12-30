---
title: Input
lang: en-US
---

# Input

Input data using mouse or keyboard.

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

## Custom Clear Icon ^(2.11.0)

:::demo You can customize the clear icon by setting the `clear-icon` attribute.

input/clear-icon

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

:::demo `maxlength` and `minlength` attributes of input, they declare a limit on the number of characters a user can input. The "number of characters" is measured using JavaScript string length.Setting the `maxlength` prop for a text or textarea type of Input can limit the length of input value, allows you to show word count by setting `show-word-limit` to `true` at the same time. In ^(2.11.5), You can set `word-limit-position` to `outside` to display the word count outside the input.

input/length-limiting

:::

## API

### Attributes

| Name                          | Description                                                                                                                            | Type                                                                                                | Default     |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------- |
| type                          | type of input, see more in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)               | ^[string]`'text' \| 'textarea' \| 'number' \| 'password' \| 'email' \| 'search' \| 'tel' \|  'url'` | text        |
| model-value / v-model         | binding value                                                                                                                          | ^[string] / ^[number]                                                                               | —           |
| model-modifiers ^(2.11.5)     | v-model modifiers, reference [Vue modifiers](https://vuejs.org/guide/essentials/forms.html#modifiers)                                  | ^[object]`{ lazy?: boolean, number?: boolean, trim?: boolean }`                                     | —           |
| maxlength                     | same as `maxlength` in native input                                                                                                    | ^[string] / ^[number]                                                                               | —           |
| minlength                     | same as `minlength` in native input                                                                                                    | ^[string] / ^[number]                                                                               | —           |
| show-word-limit               | whether show word count, only works when `type` is 'text' or 'textarea'                                                                | ^[boolean]                                                                                          | false       |
| word-limit-position ^(2.11.5) | word count position, valid when `show-word-limit` is true                                                                              | ^[enum]`'inside' \| 'outside' `                                                                     | "inside"    |
| placeholder                   | placeholder of Input                                                                                                                   | ^[string]                                                                                           | —           |
| clearable                     | whether to show clear button, only works when `type` is not 'textarea'                                                                 | ^[boolean]                                                                                          | false       |
| clear-icon ^(2.11.0)          | custom clear icon component                                                                                                            | ^[string] / ^[object]`Component`                                                                    | CircleClose |
| formatter                     | specifies the format of the value presented input.(only works when `type` is 'text')                                                   | ^[Function]`(value: string \| number) => string`                                                    | —           |
| parser                        | specifies the value extracted from formatter input.(only works when `type` is 'text')                                                  | ^[Function]`(value: string) => string`                                                              | —           |
| show-password                 | whether to show toggleable password input                                                                                              | ^[boolean]                                                                                          | false       |
| disabled                      | whether Input is disabled                                                                                                              | ^[boolean]                                                                                          | false       |
| size                          | size of Input, works when `type` is not 'textarea'                                                                                     | ^[enum]`'large' \| 'default' \| 'small'`                                                            | —           |
| prefix-icon                   | prefix icon component                                                                                                                  | ^[string] / ^[Component]                                                                            | —           |
| suffix-icon                   | suffix icon component                                                                                                                  | ^[string] / ^[Component]                                                                            | —           |
| rows                          | number of rows of textarea, only works when `type` is 'textarea'                                                                       | ^[number]                                                                                           | 2           |
| autosize                      | whether textarea has an adaptive height, only works when `type` is 'textarea'. Can accept an object, e.g. `{ minRows: 2, maxRows: 6 }` | ^[boolean] / ^[object]`{ minRows?: number, maxRows?: number }`                                      | false       |
| autocomplete                  | same as `autocomplete` in native input                                                                                                 | ^[string]                                                                                           | off         |
| name                          | same as `name` in native input                                                                                                         | ^[string]                                                                                           | —           |
| readonly                      | same as `readonly` in native input                                                                                                     | ^[boolean]                                                                                          | false       |
| max                           | same as `max` in native input                                                                                                          | —                                                                                                   | —           |
| min                           | same as `min` in native input                                                                                                          | —                                                                                                   | —           |
| step                          | same as `step` in native input                                                                                                         | —                                                                                                   | —           |
| resize                        | control the resizability                                                                                                               | ^[enum]`'none' \| 'both' \| 'horizontal' \| 'vertical'`                                             | —           |
| autofocus                     | same as `autofocus` in native input                                                                                                    | ^[boolean]                                                                                          | false       |
| form                          | same as `form` in native input                                                                                                         | `string`                                                                                            | —           |
| aria-label ^(a11y) ^(2.7.2)   | same as `aria-label` in native input                                                                                                   | ^[string]                                                                                           | —           |
| tabindex                      | input tabindex                                                                                                                         | ^[string] / ^[number]                                                                               | —           |
| validate-event                | whether to trigger form validation                                                                                                     | ^[boolean]                                                                                          | true        |
| input-style                   | the style of the input element or textarea element                                                                                     | ^[string] / ^[object]`CSSProperties \| CSSProperties[] \| string[]`                                 | {}          |
| label ^(a11y) ^(deprecated)   | same as `aria-label` in native input                                                                                                   | ^[string]                                                                                           | —           |
| inputmode ^(2.10.3)           | same as `inputmode` in native input                                                                                                    | ^[string]                                                                                           | —           |

### Events

| Name              | Description                                                                                           | Type                                                        |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| blur              | triggers when Input blurs                                                                             | ^[Function]`(event: FocusEvent) => void`                    |
| focus             | triggers when Input focuses                                                                           | ^[Function]`(event: FocusEvent) => void`                    |
| change            | triggers when the input box loses focus or the user presses Enter, only if the modelValue has changed | ^[Function]`(value: string \| number, evt?: Event) => void` |
| input             | triggers when the Input value change                                                                  | ^[Function]`(value: string \| number) => void`              |
| clear             | triggers when the Input is cleared by clicking the clear button                                       | ^[Function]`() => void`                                     |
| keydown           | triggers when a key is pressed down                                                                   | ^[Function]`(event: KeyboardEvent \| Event) => void`        |
| mouseleave        | triggers when the mouse leaves the Input element                                                      | ^[Function]`(event: MouseEvent) => void`                    |
| mouseenter        | triggers when the mouse enters the Input element                                                      | ^[Function]`(event: MouseEvent) => void`                    |
| compositionstart  | triggers when the composition starts                                                                  | ^[Function]`(event: CompositionEvent) => void`              |
| compositionupdate | triggers when the composition is updated                                                              | ^[Function]`(event: CompositionEvent) => void`              |
| compositionend    | triggers when the composition ends                                                                    | ^[Function]`(event: CompositionEvent) => void`              |

### Slots

| Name    | Description                                                               |
| ------- | ------------------------------------------------------------------------- |
| prefix  | content as Input prefix, only works when `type` is not 'textarea'         |
| suffix  | content as Input suffix, only works when `type` is not 'textarea'         |
| prepend | content to prepend before Input, only works when `type` is not 'textarea' |
| append  | content to append after Input, only works when `type` is not 'textarea'   |

### Exposes

| Name                 | Description                      | Type                                                    |
| -------------------- | -------------------------------- | ------------------------------------------------------- |
| blur                 | blur the input element           | ^[Function]`() => void`                                 |
| clear                | clear input value                | ^[Function]`() => void`                                 |
| focus                | focus the input element          | ^[Function]`() => void`                                 |
| input                | HTML input element               | ^[object]`Ref<HTMLInputElement>`                        |
| ref                  | HTML element, input or textarea  | ^[object]`Ref<HTMLInputElement \| HTMLTextAreaElement>` |
| resizeTextarea       | resize textarea                  | ^[Function]`() => void`                                 |
| select               | select the text in input element | ^[Function]`() => void`                                 |
| textarea             | HTML textarea element            | ^[object]`Ref<HTMLTextAreaElement>`                     |
| textareaStyle        | style of textarea                | ^[object]`Ref<StyleValue>`                              |
| isComposing ^(2.8.0) | is input composing               | ^[object]`Ref<boolean>`                                 |

## FAQ

#### Why is the width of the ElInput component expanded by clearable?

Typical issue: [#7287](https://github.com/element-plus/element-plus/issues/7287)

PS: Since the ElInput component does not have a default width, when the clearable icon is displayed, the width of the component will be expanded, which can be solved by setting width.

```vue
<el-input v-model="input" clearable style="width: 200px" />
```
