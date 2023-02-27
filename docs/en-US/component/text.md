---
title: Text
lang: en-US
---

# Text

Used for text.

## Basic

:::demo Use the `type` attribute to define Text's type.

text/basic

:::

## Sizes

:::demo Use attribute `size` to set additional sizes with `large`, `default` or `small`.

text/sizes

:::

## Ellipsis

:::demo Pass the `truncated` prop to render an ellipsis when the text exceeds the width of the viewport or max-width set.

text/truncated

:::

## Override

:::demo Use attribute `as` to override element

text/override

:::

## Mixed

:::demo Text mixed component

text/mixed

:::

## Text API

### Text Attributes

| Name      | Description          | Type                                                               | Default |
| --------- | -------------------- | ------------------------------------------------------------------ | ------- |
| type      | text type            | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —       |
| size      | text size            | ^[enum]`'large' \| 'default' \| 'small'`                           | default |
| truncated | render ellipsis      | ^[boolean]                                                         | false   |
| as        | override the element | ^[string]                                                          | span    |

### Text Slots

| Name | Description     |
| ---- | --------------- |
| —    | default content |
