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

:::demo Make the Input clearable with the `clearable` attribute. After version ^(2.13.4), the clearable feature is also available for textarea type of Input.

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

:::demo Make a toggle-able password Input with the `show-password` attribute. Since ^(2.13.6), the `password-icon` slot is supported to override the default icon.

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
| type                          | Type of input, see more in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)               | ^[string]`'text' \| 'textarea' \| 'number' \| 'password' \| 'email' \| 'search' \| 'tel' \|  'url'` | text        |
| model-value / v-model         | Binding value                                                                                                                          | ^[string] / ^[number]                                                                               | —           |
| model-modifiers ^(2.11.5)     | v-model modifiers, reference [Vue modifiers](https://vuejs.org/guide/essentials/forms.html#modifiers)                                  | ^[object]`{ lazy?: true, number?: true, trim?: true }`                                              | —           |
| maxlength                     | Same as `maxlength` in native input                                                                                                    | ^[string] / ^[number]                                                                               | —           |
| minlength                     | Same as `minlength` in native input                                                                                                    | ^[string] / ^[number]                                                                               | —           |
| show-word-limit               | Whether show word count, only works when `type` is 'text' or 'textarea'                                                                | ^[boolean]                                                                                          | false       |
| word-limit-position ^(2.11.5) | Word count position, valid when `show-word-limit` is true                                                                              | ^[enum]`'inside' \| 'outside'`                                                                      | "inside"    |
| placeholder                   | Placeholder of Input                                                                                                                   | ^[string]                                                                                           | —           |
| clearable                     | Whether to show clear button, only works when `type` is not 'textarea'                                                                 | ^[boolean]                                                                                          | false       |
| clear-icon ^(2.11.0)          | Custom clear icon component                                                                                                            | ^[string] / ^[object]`Component`                                                                    | CircleClose |
| formatter                     | Specifies the format of the value presented input.(only works when `type` is 'text')                                                   | ^[Function]`(value: string \| number) => string`                                                    | —           |
| parser                        | Specifies the value extracted from formatter input.(only works when `type` is 'text')                                                  | ^[Function]`(value: string) => string`                                                              | —           |
| show-password                 | Whether to show toggleable password input                                                                                              | ^[boolean]                                                                                          | false       |
| disabled                      | Whether Input is disabled                                                                                                              | ^[boolean]                                                                                          | false       |
| size                          | Size of Input, works when `type` is not 'textarea'                                                                                     | ^[enum]`'large' \| 'default' \| 'small'`                                                            | —           |
| prefix-icon                   | Prefix icon component                                                                                                                  | ^[string] / ^[Component]                                                                            | —           |
| suffix-icon                   | Suffix icon component                                                                                                                  | ^[string] / ^[Component]                                                                            | —           |
| rows                          | Number of rows of textarea, only works when `type` is 'textarea'                                                                       | ^[number]                                                                                           | 2           |
| autosize                      | Whether textarea has an adaptive height, only works when `type` is 'textarea'. Can accept an object, e.g. `{ minRows: 2, maxRows: 6 }` | ^[boolean] / ^[object]`{ minRows?: number, maxRows?: number }`                                      | false       |
| autocomplete                  | Same as `autocomplete` in native input                                                                                                 | ^[string]                                                                                           | off         |
| name                          | Same as `name` in native input                                                                                                         | ^[string]                                                                                           | —           |
| readonly                      | Same as `readonly` in native input                                                                                                     | ^[boolean]                                                                                          | false       |
| max                           | Same as `max` in native input                                                                                                          | —                                                                                                   | —           |
| min                           | Same as `min` in native input                                                                                                          | —                                                                                                   | —           |
| step                          | Same as `step` in native input                                                                                                         | —                                                                                                   | —           |
| resize                        | Control the resizability                                                                                                               | ^[enum]`'none' \| 'both' \| 'horizontal' \| 'vertical'`                                             | —           |
| autofocus                     | Same as `autofocus` in native input                                                                                                    | ^[boolean]                                                                                          | false       |
| form                          | Same as `form` in native input                                                                                                         | `string`                                                                                            | —           |
| aria-label ^(a11y) ^(2.7.2)   | Same as `aria-label` in native input                                                                                                   | ^[string]                                                                                           | —           |
| tabindex                      | Input tabindex                                                                                                                         | ^[string] / ^[number]                                                                               | —           |
| validate-event                | Whether to trigger form validation                                                                                                     | ^[boolean]                                                                                          | true        |
| input-style                   | The style of the input element or textarea element                                                                                     | ^[string] / ^[object]`CSSProperties \| CSSProperties[] \| string[]`                                 | {}          |
| label ^(a11y) ^(deprecated)   | Same as `aria-label` in native input                                                                                                   | ^[string]                                                                                           | —           |
| inputmode ^(2.10.3)           | Same as `inputmode` in native input                                                                                                    | ^[string]                                                                                           | —           |

### Events

| Name              | Description                                                                                           | Type                                                                                              |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| blur              | Triggers when Input blurs                                                                             | ^[Function]`(event: FocusEvent) => void`                                                          |
| focus             | Triggers when Input focuses                                                                           | ^[Function]`(event: FocusEvent) => void`                                                          |
| change            | Triggers when the input box loses focus or the user presses Enter, only if the modelValue has changed | ^[Function]`(value: string \| number, evt?: Event) => void`                                       |
| input             | Triggers when the Input value change                                                                  | ^[Function]`(value: string \| number) => void`                                                    |
| clear             | Triggers when the Input is cleared by clicking the clear button                                       | ^[Function]`(evt?: MouseEvent) => void (After version 2.13.4, the evt parameter can be received)` |
| keydown           | Triggers when a key is pressed down                                                                   | ^[Function]`(event: KeyboardEvent \| Event) => void`                                              |
| mouseleave        | Triggers when the mouse leaves the Input element                                                      | ^[Function]`(event: MouseEvent) => void`                                                          |
| mouseenter        | Triggers when the mouse enters the Input element                                                      | ^[Function]`(event: MouseEvent) => void`                                                          |
| compositionstart  | Triggers when the composition starts                                                                  | ^[Function]`(event: CompositionEvent) => void`                                                    |
| compositionupdate | Triggers when the composition is updated                                                              | ^[Function]`(event: CompositionEvent) => void`                                                    |
| compositionend    | Triggers when the composition ends                                                                    | ^[Function]`(event: CompositionEvent) => void`                                                    |

### Slots

| Name                    | Description                                                                                                           |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------- |
| prefix                  | Content as Input prefix, only works when `type` is not 'textarea'                                                     |
| suffix                  | Content as Input suffix, only works when `type` is not 'textarea'                                                     |
| prepend                 | Content to prepend before Input, only works when `type` is not 'textarea'                                             |
| append                  | Content to append after Input, only works when `type` is not 'textarea'                                               |
| password-icon ^(2.13.6) | Content as Input password icon, only works when `show-password` is true. The scope variable is `{ visible: boolean }` |

### Exposes

| Name                 | Description                      | Type                                                    |
| -------------------- | -------------------------------- | ------------------------------------------------------- |
| blur                 | Blur the input element           | ^[Function]`() => void`                                 |
| clear                | Clear input value                | ^[Function]`() => void`                                 |
| focus                | Focus the input element          | ^[Function]`() => void`                                 |
| input                | HTML input element               | ^[object]`Ref<HTMLInputElement>`                        |
| ref                  | HTML element, input or textarea  | ^[object]`Ref<HTMLInputElement \| HTMLTextAreaElement>` |
| resizeTextarea       | Resize textarea                  | ^[Function]`() => void`                                 |
| select               | Select the text in input element | ^[Function]`() => void`                                 |
| textarea             | HTML textarea element            | ^[object]`Ref<HTMLTextAreaElement>`                     |
| textareaStyle        | Style of textarea                | ^[object]`Ref<StyleValue>`                              |
| isComposing ^(2.8.0) | Is input composing               | ^[object]`Ref<boolean>`                                 |

## FAQ

#### Why is the width of the ElInput component expanded by clearable?

Typical issue: [#7287](https://github.com/element-plus/element-plus/issues/7287)

PS: Since the ElInput component does not have a default width, when the clearable icon is displayed, the width of the component will be expanded, which can be solved by setting width.

```vue
<el-input v-model="input" clearable style="width: 200px" />
```
