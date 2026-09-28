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

:::demo Pass the `truncated` prop to render an ellipsis when the text exceeds the width of the viewport or max-width set. `line-clamp` prop to render multiline ellipsis. Starting from version ^(2.14.6), `isTruncated` is exposed to indicate whether the text is truncated. You can use it to show a tooltip only when truncation occurs.

text/truncated

:::

## Override

:::demo Use attribute `tag` to override element

text/override

:::

## Mixed

:::demo Text mixed component

text/mixed

:::

## API

### Attributes

| Name                | Description        | Type                                                               | Default |
| ------------------- | ------------------ | ------------------------------------------------------------------ | ------- |
| type                | text type          | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —       |
| size                | text size          | ^[enum]`'large' \| 'default' \| 'small'`                           | default |
| truncated           | render ellipsis    | ^[boolean]                                                         | false   |
| line-clamp ^(2.4.0) | maximum lines      | ^[string] / ^[number]                                              | —       |
| tag                 | custom element tag | ^[string]                                                          | span    |

### Slots

| Name    | Description     |
| ------- | --------------- |
| default | default content |

### Exposes

| Name                  | Description                   | Type                    |
| --------------------- | ----------------------------- | ----------------------- |
| isTruncated ^(2.14.6) | whether the text is truncated | ^[object]`Ref<boolean>` |
