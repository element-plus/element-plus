---
title: Rate
lang: en-US
---

# Rate

Used for rating

## Basic usage

:::demo Rate divides rating scores into several levels and these levels can be distinguished by using different background colors. By default background colors are the same, but you can assign them an array with three element to reflect three levels using the `colors` attribute, and their two thresholds can be defined by `low-threshold` and `high-threshold`, or you can assign them with a object which key is the threshold between two levels and value is the corresponding color.

rate/basic-usage

:::

## Sizes

:::demo

rate/sizes

:::

## With allow-half

:::demo Add attribute `allow-half` Half star allowed

rate/allow-half

:::

## With text

Using text to indicate rating score

:::demo Add attribute `show-text` to display text at the right of Rate. You can assign texts for different scores using `texts`. `texts` is an array whose length should be equal to the max score `max`.

rate/text

:::

## Clearable

:::demo You can reset the value to `0` when you click at the same value again.

rate/clearable

:::

## More icons

You can use different icons to distinguish different rate components.

:::demo You can customize icons by passing `icons` an array with three elements or a object which key is the threshold between two levels and value is the corresponding icon. In this example, we also use `void-icon` to set the icon if it is unselected.

rate/more-icons

:::

## Read-only

Read-only Rate is for displaying rating score. Half star is supported.

:::demo Use attribute `disabled` to make the component read-only. Add `show-score` to display the rating score at the right side. Additionally, you can use attribute `score-template` to provide a score template. It must contain `{value}`, and `{value}` will be replaced with the rating score.

rate/readonly

:::

## Custom styles

Now you can set custom style for rate component.
Use `css/scss` language to change the global or local color. We set some global color variables: `--el-rate-void-color`, `--el-rate-fill-color`, `--el-rate-disabled-void-color`, `--el-rate-text-color`. You can use like: `:root { --el-rate-void-color: red; --el-rate-fill-color: blue; }`.

### Default Variables

| Variable                      | Default Color                 |
| ----------------------------- | ----------------------------- |
| --el-rate-void-color          | var(--el-border-color-darker) |
| --el-rate-fill-color          | #f7ba2a                       |
| --el-rate-disabled-void-color | var(--el-fill-color)          |
| --el-rate-text-color          | var(--el-text-color-primary)  |

## API

### Attributes

| Name                        | Description                                                                                                                                                                                                                    | Type                                                                      | Default                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| model-value / v-model       | binding value                                                                                                                                                                                                                  | ^[number]                                                                 | 0                                                                  |
| max                         | max rating score                                                                                                                                                                                                               | ^[number]                                                                 | 5                                                                  |
| size                        | size of Rate                                                                                                                                                                                                                   | ^[enum]`'large' \| 'default' \| 'small'`                                  | —                                                                  |
| disabled                    | whether Rate is read-only                                                                                                                                                                                                      | ^[boolean]                                                                | false                                                              |
| allow-half                  | whether picking half start is allowed                                                                                                                                                                                          | ^[boolean]                                                                | false                                                              |
| low-threshold               | threshold value between low and medium level. The value itself will be included in low level                                                                                                                                   | ^[number]                                                                 | 2                                                                  |
| high-threshold              | threshold value between medium and high level. The value itself will be included in high level                                                                                                                                 | ^[number]                                                                 | 4                                                                  |
| colors                      | colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color         | ^[object]`string[] \| Record<number, string>`                             | ['#f7ba2a', '#f7ba2a', '#f7ba2a']                                  |
| void-color                  | color of unselected icons                                                                                                                                                                                                      | ^[string]                                                                 | #c6d1de                                                            |
| disabled-void-color         | color of unselected read-only icons                                                                                                                                                                                            | ^[string]                                                                 | #eff2f7                                                            |
| icons                       | icon components. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon component | ^[object]`string[] \| Component[] \| Record<number, string \| Component>` | [StarFilled, StarFilled, StarFilled]                               |
| void-icon                   | component of unselected icons                                                                                                                                                                                                  | ^[string] / ^[Component]                                                  | Star                                                               |
| disabled-void-icon          | component of unselected read-only icons                                                                                                                                                                                        | ^[string] / ^[Component]                                                  | StarFilled                                                         |
| show-text                   | whether to display texts                                                                                                                                                                                                       | ^[boolean]                                                                | false                                                              |
| show-score                  | whether to display current score. show-score and show-text cannot be true at the same time                                                                                                                                     | ^[boolean]                                                                | false                                                              |
| text-color                  | color of texts                                                                                                                                                                                                                 | ^[string]                                                                 | ''                                                                 |
| texts                       | text array                                                                                                                                                                                                                     | ^[array]`string[]`                                                        | ['Extremely bad', 'Disappointed', 'Fair', 'Satisfied', 'Surprise'] |
| score-template              | score template                                                                                                                                                                                                                 | ^[string]                                                                 | {value}                                                            |
| clearable ^(2.2.18)         | whether value can be reset to `0`                                                                                                                                                                                              | ^[boolean]                                                                | false                                                              |
| id                          | native `id` attribute                                                                                                                                                                                                          | ^[string]                                                                 | —                                                                  |
| aria-label ^(a11y) ^(2.7.2) | same as `aria-label` in Rate                                                                                                                                                                                                   | ^[string]                                                                 | —                                                                  |
| label ^(a11y) ^(deprecated) | same as `aria-label` in Rate                                                                                                                                                                                                   | ^[string]                                                                 | —                                                                  |

### Events

| Name   | Description                         | Type                                 |
| ------ | ----------------------------------- | ------------------------------------ |
| change | Triggers when rate value is changed | ^[Function]`(value: number) => void` |

### Exposes

| Name              | Description         | Type                                 |
| ----------------- | ------------------- | ------------------------------------ |
| setCurrentValue   | set current value   | ^[Function]`(value: number) => void` |
| resetCurrentValue | reset current value | ^[Function]`() => void`              |
