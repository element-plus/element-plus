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



## Typography API

### Typography Attributes

| Name  | Description | Type                                                  | Default |
| ----- | ----------- | ----------------------------------------------------- | ------- |
| color | color       | ^[string]                                             | —       |
| font  | font        | ^[string]                                             | —       |
| type  | button type | ^[enum]`'primary'\| 'success'\| 'warning'\| 'danger'` | —       |

### Bate Attributes

| Name     | Description    | Type                                                  | Default |
| -------- | -------------- | ----------------------------------------------------- | ------- |
| editable | editable       | ^[Boolean / Object]`EditConfig`                       | false   |
| copyable | copyable       | ^[Boolean / Object]`copyConfig`                       | false   |
| content  | content        | ^[string]                                             | —       |
| type     | type           | ^[enum]`'primary'\| 'success'\| 'warning'\| 'danger'` | —       |
| keyboard | Keyboard style | ^[Boolean]                                            | false   |
| code     | code           | ^[Boolean]                                            | false   |

### Typography Slots

| Name    | Description                 |
| ------- | --------------------------- |
| default | customize default content   |

### Bate Slots

| Name    | Description                 |
| ------- | --------------------------- |
| default | customize default content   |
### Button Exposes

| Name           | Description          | Type                                                                                                           |
| -------------- | -------------------- | -------------------------------------------------------------------------------------------------------------- |
| ref            | button html element  | ^[object]`Ref<HTMLButtonElement>`                                                                              |
| size           | button size          | ^[object]`ComputedRef<'' \| 'small' \| 'default' \| 'large'>`                                                  |
| type           | button type          | ^[object]`ComputedRef<'' \| 'default' \| 'primary' \| 'success' \| 'warning' \| 'info' \| 'danger' \| 'text'>` |
| disabled       | button disabled      | ^[object]`ComputedRef<boolean>`                                                                                |
| shouldAddSpace | whether adding space | ^[object]`ComputedRef<boolean>`                                                                                |

## ButtonGroup API

### ButtonGroup Attributes

| Name | Description                                      | Type                                                           | Default |
| ---- | ------------------------------------------------ | -------------------------------------------------------------- | ------- |
| size | control the size of buttons in this button-group | ^[enum]`'large'\| 'default'\| 'small'`                         | —       |
| type | control the type of buttons in this button-group | ^[enum]`'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | —       |

### ButtonGroup Slots

| Name    | Description                    | Subtags |
| ------- | ------------------------------ | ------- |
| default | customize button group content | Button  |
