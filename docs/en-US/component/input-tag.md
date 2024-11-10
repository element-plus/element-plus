---
title: InputTag
lang: en-US
---

# InputTag

InputTag is a input component that can add content as a tag.

## Basic usage

After pressing the Enter key, the input will be added as a value to the tag.

:::demo

input-tag/basic

:::

## Trigger

You can customize the key to trigger the input tag. The default is the Enter key.

:::demo

input-tag/trigger

:::

## Max Tags

You can set the maximum number of tags that can be entered.

:::demo

input-tag/max

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

| Name                  | Description                                                            | Type                                                        | Default |
| --------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------- | ------- |
| model-value / v-model | binding value                                                          | ^[array]`string[]`                                          | —       |
| max                   | max number tags that can be enter                                      | ^[number]                                                   | —       |
| trigger               | the key to trigger input tag                                           | ^[enum]`'Enter' \| 'Space'`                                 | Enter   |
| tag-type              | tag type                                                               | ^[enum]`'' \| 'success' \| 'info' \| 'warning' \| 'danger'` | info    |
| tag-effect            | tag effect                                                             | ^[enum]`'' \| 'light' \| 'dark' \| 'plain'`                 | light   |
| size                  | input box size                                                         | ^[enum]`'large' \| 'default' \| 'small'`                    | —       |
| clearable             | whether to show clear button, only works when `type` is not 'textarea' | ^[boolean]                                                  | false   |
| disabled              | whether Input is disabled                                              | ^[boolean]                                                  | false   |
| readonly              | same as `readonly` in native input                                     | ^[boolean]                                                  | false   |
| autofocus             | same as `autofocus` in native input                                    | ^[boolean]                                                  | false   |
| validate-event        | whether to trigger form validation                                     | ^[boolean]                                                  | true    |
| id                    | native input id                                                        | ^[string]                                                   | —       |
| tabindex              | input tabindex                                                         | ^[string] / ^[number]                                       | —       |
| maxlength             | same as `maxlength` in native input                                    | ^[string] / ^[number]                                       | —       |
| minlength             | same as `minlength` in native input                                    | ^[string] / ^[number]                                       | —       |
| placeholder           | placeholder of Input                                                   | ^[string]                                                   | —       |
| autocomplete          | same as `autocomplete` in native input                                 | ^[string]                                                   | off     |

### Events

| Name       | Description                             | Type                                     |
| ---------- | --------------------------------------- | ---------------------------------------- |
| change     | triggers when the modelValue change     | ^[Function]`(value: string[]) => void`   |
| input      | triggers when the input value change    | ^[Function]`(value: string) => void`     |
| tag-add    | triggers when a tag is added            | ^[Function]`(value: string) => void`     |
| tag-remove | triggers when a tag is removed          | ^[Function]`(value: string) => void`     |
| focus      | triggers when InputTag focuses          | ^[Function]`(event: FocusEvent) => void` |
| blur       | triggers when InputTag blurs            | ^[Function]`(event: FocusEvent) => void` |
| clear      | triggers when the clear icon is clicked | ^[Function]`() => void`                  |

### Slots

| Name   | Description                | Type                         |
| ------ | -------------------------- | ---------------------------- |
| tag    | content as tag             | ^[object]`{ value: string }` |
| prefix | content as InputTag prefix | —                            |
| suffix | content as InputTag suffix | —                            |

### Exposes

| Name  | Description             | Type                    |
| ----- | ----------------------- | ----------------------- |
| focus | focus the input element | ^[Function]`() => void` |
| blur  | blur the input element  | ^[Function]`() => void` |
