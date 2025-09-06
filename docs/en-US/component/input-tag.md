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
| model-value / v-model           | binding value                                                                                                  | ^[array]`string[]`                                          | —           |
| max                             | max number tags that can be enter                                                                              | ^[number]                                                   | —           |
| tag-type                        | tag type                                                                                                       | ^[enum]`'' \| 'success' \| 'info' \| 'warning' \| 'danger'` | info        |
| tag-effect                      | tag effect                                                                                                     | ^[enum]`'' \| 'light' \| 'dark' \| 'plain'`                 | light       |
| trigger                         | the key to trigger input tag                                                                                   | ^[enum]`'Enter' \| 'Space'`                                 | Enter       |
| draggable                       | whether tags can be dragged                                                                                    | ^[boolean]                                                  | false       |
| delimiter ^(2.9.9)              | add a tag when a delimiter is matched                                                                          | ^[string] / ^[regex]                                        | —           |
| size                            | input box size                                                                                                 | ^[enum]`'large' \| 'default' \| 'small'`                    | —           |
| collapse-tags ^(2.11.0)         | whether to collapse tags to a text when multiple selecting                                                     | ^[boolean]                                                  | false       |
| collapse-tags-tooltip ^(2.11.0) | whether show all selected tags when mouse hover text of collapse-tags. To use this, collapse-tags must be true | ^[boolean]                                                  | false       |
| save-on-blur ^(2.9.7)           | whether to save the input value when the input loses focus                                                     | ^[boolean]                                                  | true        |
| clearable                       | whether to show clear button                                                                                   | ^[boolean]                                                  | false       |
| clear-icon ^(2.11.0)            | custom clear icon component                                                                                    | ^[string] / ^[object]`Component`                            | CircleClose |
| disabled                        | whether to disable input-tag                                                                                   | ^[boolean]                                                  | false       |
| validate-event                  | whether to trigger form validation                                                                             | ^[boolean]                                                  | true        |
| readonly                        | same as `readonly` in native input                                                                             | ^[boolean]                                                  | false       |
| autofocus                       | same as `autofocus` in native input                                                                            | ^[boolean]                                                  | false       |
| id                              | same as `id` in native input                                                                                   | ^[string]                                                   | —           |
| tabindex                        | same as `tabindex` in native input                                                                             | ^[string] / ^[number]                                       | —           |
| max-collapse-tags ^(2.11.0)     | the max tags number to be shown. To use this, collapse-tags must be true                                       | ^[number]                                                   | 1           |
| maxlength                       | same as `maxlength` in native input                                                                            | ^[string] / ^[number]                                       | —           |
| minlength                       | same as `minlength` in native input                                                                            | ^[string] / ^[number]                                       | —           |
| placeholder                     | placeholder of input                                                                                           | ^[string]                                                   | —           |
| autocomplete                    | same as `autocomplete` in native input                                                                         | ^[string]                                                   | off         |
| aria-label ^(a11y)              | native `aria-label` attribute                                                                                  | ^[string]                                                   | —           |

### Events

| Name       | Description                             | Type                                                                     |
| ---------- | --------------------------------------- | ------------------------------------------------------------------------ |
| change     | triggers when the modelValue change     | ^[Function]`(value: string[]) => void`                                   |
| input      | triggers when the input value change    | ^[Function]`(value: string) => void`                                     |
| add-tag    | triggers when a tag is added            | ^[Function]`(value: string \| string []) => void`                        |
| remove-tag | triggers when a tag is removed          | ^[Function]`(value: string, index: number) => void`                      |
| drag-tag ^(2.11.3)  | triggers when a tag is dragged          | ^[Function]`(oldIndex: number, newIndex: number, value: string) => void` |
| focus      | triggers when InputTag focuses          | ^[Function]`(event: FocusEvent) => void`                                 |
| blur       | triggers when InputTag blurs            | ^[Function]`(event: FocusEvent) => void`                                 |
| clear      | triggers when the clear icon is clicked | ^[Function]`() => void`                                                  |

### Slots

| Name   | Description                | Type                                        |
| ------ | -------------------------- | ------------------------------------------- |
| tag    | content as tag             | ^[object]`{ value: string, index: number }` |
| prefix | content as InputTag prefix | —                                           |
| suffix | content as InputTag suffix | —                                           |

### Exposes

| Name  | Description             | Type                    |
| ----- | ----------------------- | ----------------------- |
| focus | focus the input element | ^[Function]`() => void` |
| blur  | blur the input element  | ^[Function]`() => void` |
