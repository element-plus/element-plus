---
title: InputTag
lang: en-US
---

# InputTag

The InputTag component allows users to add content as tags.

## Basic Usage

Press the Enter key to add the input as a tag.

:::demo

input-tag/basic

:::

## Custom Trigger

You can customize the key used to trigger the input tag. The default key is Enter.

:::demo

input-tag/trigger

:::

## Maximum Tags

You can set a limit on the number of tags that can be added.

:::demo

input-tag/max

:::

## Collapse Tags ^(2.11.0)

Use the collapse tags attribute to merge them into one piece of text. You can use the collapse tags tooltip property to enable the behavior of hovering over collapsed text to display specific selected values. Using the collapse tags tooltip attribute will render the max attribute invalid.

:::demo

input-tag/collapse

:::

## Disabled

You can set the InputTag to be disabled.

:::demo

input-tag/disabled

:::

## Clearable

You can set whether to show the clear button.

:::demo

input-tag/clearable

:::

## Custom Clear Icon ^(2.11.0)

You can customize the clear icon by setting the `clear-icon` attribute.

:::demo

input-tag/clear-icon

:::

## Draggable

You can set whether tags can be dragged.

:::demo

input-tag/draggable

:::

## Delimiter ^(2.9.9)

You can add a tag when a delimiter is matched.

:::demo

input-tag/delimiter

:::

## Sizes

Add `size` attribute to change the size of InputTag. In addition to the default size, there are two other options: `large`, `small`.

:::demo

input-tag/size

:::

## Custom Tag

You can customize the tag content by `tag` slot.

:::demo

input-tag/tag

:::

## Custom Prefix and Suffix

You can customize the prefix and suffix of the InputTag by `prefix` and `suffix` slot.

:::demo

input-tag/prefix-suffix

:::

## API

### Attributes

| Name                            | Description                                                                                                    | Type                                                        | Default     |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------- |
| model-value / v-model           | Binding value                                                                                                  | ^[array]`string[]`                                          | —           |
| max                             | Max number tags that can be enter                                                                              | ^[number]                                                   | —           |
| tag-type                        | Tag type                                                                                                       | ^[enum]`'' \| 'success' \| 'info' \| 'warning' \| 'danger'` | info        |
| tag-effect                      | Tag effect                                                                                                     | ^[enum]`'' \| 'light' \| 'dark' \| 'plain'`                 | light       |
| effect ^(2.13.2)                | Tooltip theme, built-in theme: `dark` / `light`                                                                | ^[enum]`'dark' \| 'light'` / ^[string]                      | light       |
| trigger                         | The key to trigger input tag                                                                                   | ^[enum]`'Enter' \| 'Space'`                                 | Enter       |
| draggable                       | Whether tags can be dragged                                                                                    | ^[boolean]                                                  | false       |
| delimiter ^(2.9.9)              | Add a tag when a delimiter is matched                                                                          | ^[string] / ^[regex]                                        | —           |
| size                            | Input box size                                                                                                 | ^[enum]`'large' \| 'default' \| 'small'`                    | —           |
| collapse-tags ^(2.11.0)         | Whether to collapse tags to a text when multiple selecting                                                     | ^[boolean]                                                  | false       |
| collapse-tags-tooltip ^(2.11.0) | Whether show all selected tags when mouse hover text of collapse-tags. To use this, collapse-tags must be true | ^[boolean]                                                  | false       |
| save-on-blur ^(2.9.7)           | Whether to save the input value when the input loses focus                                                     | ^[boolean]                                                  | true        |
| clearable                       | Whether to show clear button                                                                                   | ^[boolean]                                                  | false       |
| clear-icon ^(2.11.0)            | Custom clear icon component                                                                                    | ^[string] / ^[object]`Component`                            | CircleClose |
| disabled                        | Whether to disable input-tag                                                                                   | ^[boolean]                                                  | false       |
| validate-event                  | Whether to trigger form validation                                                                             | ^[boolean]                                                  | true        |
| readonly                        | Same as `readonly` in native input                                                                             | ^[boolean]                                                  | false       |
| autofocus                       | Same as `autofocus` in native input                                                                            | ^[boolean]                                                  | false       |
| id                              | Same as `id` in native input                                                                                   | ^[string]                                                   | —           |
| tabindex                        | Same as `tabindex` in native input                                                                             | ^[string] / ^[number]                                       | —           |
| max-collapse-tags ^(2.11.0)     | The max tags number to be shown. To use this, collapse-tags must be true                                       | ^[number]                                                   | 1           |
| maxlength                       | Same as `maxlength` in native input                                                                            | ^[string] / ^[number]                                       | —           |
| minlength                       | Same as `minlength` in native input                                                                            | ^[string] / ^[number]                                       | —           |
| placeholder                     | Placeholder of input                                                                                           | ^[string]                                                   | —           |
| autocomplete                    | Same as `autocomplete` in native input                                                                         | ^[string]                                                   | off         |
| aria-label ^(a11y)              | Native `aria-label` attribute                                                                                  | ^[string]                                                   | —           |

### Events

| Name               | Description                             | Type                                                                     |
| ------------------ | --------------------------------------- | ------------------------------------------------------------------------ |
| change             | Triggers when the modelValue change     | ^[Function]`(value: string[]) => void`                                   |
| input              | Triggers when the input value change    | ^[Function]`(value: string) => void`                                     |
| add-tag            | Triggers when a tag is added            | ^[Function]`(value: string \| string []) => void`                        |
| remove-tag         | Triggers when a tag is removed          | ^[Function]`(value: string, index: number) => void`                      |
| drag-tag ^(2.11.3) | Triggers when a tag is dragged          | ^[Function]`(oldIndex: number, newIndex: number, value: string) => void` |
| focus              | Triggers when InputTag focuses          | ^[Function]`(event: FocusEvent) => void`                                 |
| blur               | Triggers when InputTag blurs            | ^[Function]`(event: FocusEvent) => void`                                 |
| clear              | Triggers when the clear icon is clicked | ^[Function]`() => void`                                                  |

### Slots

| Name   | Description                | Type                                        |
| ------ | -------------------------- | ------------------------------------------- |
| tag    | Content as tag             | ^[object]`{ value: string, index: number }` |
| prefix | Content as InputTag prefix | —                                           |
| suffix | Content as InputTag suffix | —                                           |

### Exposes

| Name  | Description             | Type                    |
| ----- | ----------------------- | ----------------------- |
| focus | Focus the input element | ^[Function]`() => void` |
| blur  | Blur the input element  | ^[Function]`() => void` |
