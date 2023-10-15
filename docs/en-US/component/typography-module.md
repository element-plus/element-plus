---
title: Typography
lang: en-US
---

# Typography

Basic text writing, including headings, body text, lists, and more.
:::tip
Inherit ElText full attribute, can be added
:::

## Article

:::demo

typography-module/article

:::

## Special display

:::demo

typography-module/special

:::

## Copy and Edit

:::demo

typography-module/function

:::

Global definitions of EditConfig and copyConfig are exposed in Typography and can affect subordinate elements, which can self-define to override the global
:::demo

typography-module/articleGlobal

:::
For data details, please refer:

```ts
interface EditConfig {
  editing?: boolean
  tooltip?: boolean
  onStart?: () => void
  onChange?: (value: string) => void
  onCancel?: () => void
  onEnd?: () => void
  placeholder?: string
  triggerType?: 'icon' | 'text'
  icon?: any
  triggerText?: string
  autoSize?: InputAutoSize
  tooltipContent?: string
}
```

```ts
interface copyConfig {
  text?: string | (() => string)
  triggerText?: string
  onCopy?: () => void
  tooltip?: boolean
  tooltipContent?: string
}
```

## Typography API

### Typography Attributes

| Name  | Description | Type                                                  | Default |
| ----- | ----------- | ----------------------------------------------------- | ------- |
| color | color       | ^[string]                                             | —       |
| font  | font        | ^[string]                                             | —       |
| type  | button type | ^[enum]`'primary'\| 'success'\| 'warning'\| 'danger'` | —       |

### Typography Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

### Typography Exposes

| Name | Description             | Type                              |
| ---- | ----------------------- | --------------------------------- |
| ref  | typography html element | ^[object]`Ref<HTMLButtonElement>` |

## Paragraph API

### Paragraph Attributes

| Name     | Description | Type                                                  | Default |
| -------- | ----------- | ----------------------------------------------------- | ------- |
| color    | color       | ^[string]                                             | —       |
| font     | font        | ^[string]                                             | —       |
| type     | button type | ^[enum]`'primary'\| 'success'\| 'warning'\| 'danger'` | —       |
| editable | editable    | ^[Boolean / Object]`EditConfig`                       | false   |
| copyable | copyable    | ^[Boolean / Object]`copyConfig`                       | false   |

### Paragraph Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

### Paragraph Exposes

| Name | Description            | Type                              |
| ---- | ---------------------- | --------------------------------- |
| ref  | Paragraph html element | ^[object]`Ref<HTMLButtonElement>` |

## Bate API

### Bate Attributes

| Name     | Description    | Type                                                  | Default |
| -------- | -------------- | ----------------------------------------------------- | ------- |
| editable | editable       | ^[Boolean / Object]`EditConfig`                       | false   |
| copyable | copyable       | ^[Boolean / Object]`copyConfig`                       | false   |
| content  | content        | ^[string]                                             | —       |
| type     | type style     | ^[enum]`'primary'\| 'success'\| 'warning'\| 'danger'` | —       |
| keyboard | Keyboard style | ^[Boolean]                                            | false   |
| code     | code           | ^[Boolean]                                            | false   |

## Tabs Events

| Name            | Description                 | Parameters |
| --------------- | --------------------------- | ---------- |
| onVisibleChange | enter box switch event      | (value)    |
| onEnd           | Input ending event          | ()         |
| onStart         | input starts when it occurs | ()         |
| onCopy          | Copy and finish             | (value)    |

### Bate Slots

| Name    | Description                    | Subtags |
| ------- | ------------------------------ | ------- |
| default | customize button group content | Bate    |

### Bate Exposes

| Name | Description       | Type                              |
| ---- | ----------------- | --------------------------------- |
| ref  | base html element | ^[object]`Ref<HTMLButtonElement>` |
