---
title: Progress
lang: en-US
---

# Progress

Progress is used to show the progress of current operation, and inform the user the current status.

<style lang="scss">
$namespace: el;
.example-showcase .demo-progress {
  .#{$namespace}-progress--line {
    margin-bottom: 15px;
    width: 350px;
  }

  .#{$namespace}-progress--circle {
    margin-right: 15px;
  }

  .percentage-value {
    display: block;
    margin-top: 10px;
    font-size: 28px;
  }

  .percentage-label {
    display: block;
    margin-top: 10px;
    font-size: 12px;
  }
}
</style>

## Linear progress bar

:::demo Use `percentage` attribute to set the percentage. It's **required** and must be between `0-100`. You can custom text format by setting `format`.

progress/linear-progress-bar

:::

## Internal percentage

In this case the percentage takes no additional space.

:::demo `stroke-width` attribute decides the `width` of progress bar, and use `text-inside` attribute to put description inside the progress bar.

progress/internal-percentage

:::

## Custom color

You can use `color` attr to set the progress bar color. it accepts color string, function, or array.

:::demo

progress/custom-color

:::

## Circular progress bar

:::demo You can specify `type` attribute to `circle` to use circular progress bar, and use `width` attribute to change the size of circle.

progress/circular-progress-bar

:::

## Dashboard progress bar

You also can specify `type` attribute to `dashboard` to use dashboard progress bar.

:::demo

progress/dashboard-progress-bar

:::

## Customized content

:::demo Use default slot to add customized content.

progress/customized-content

:::

## Indeterminate progress

:::demo Use `indeterminate` attribute to set indeterminate progress, with `duration` to control the animation duration.

progress/indeterminate-progress

:::

## Attributes

| Attribute      | Description                                                                           | Type                  | Accepted Values           | Default |
| -------------- | ------------------------------------------------------------------------------------- | --------------------- | ------------------------- | ------- |
| percentage     | percentage, **required**                                                              | number                | 0-100                     | 0       |
| type           | the type of progress bar                                                              | string                | line/circle/dashboard     | line    |
| stroke-width   | the width of progress bar                                                             | number                | —                         | 6       |
| text-inside    | whether to place the percentage inside progress bar, only works when `type` is 'line' | boolean               | —                         | false   |
| status         | the current status of progress bar                                                    | string                | success/exception/warning | —       |
| indeterminate  | set indeterminate progress                                                            | boolean               | -                         | false   |
| duration       | control the animation duration of indeterminate progress                              | number                | -                         | 3       |
| color          | background color of progress bar. Overrides `status` prop                             | string/function/array | —                         | ''      |
| width          | the canvas width of circle progress bar                                               | number                | —                         | 126     |
| show-text      | whether to show percentage                                                            | boolean               | —                         | true    |
| stroke-linecap | circle/dashboard type shape at the end path                                           | string                | butt/round/square         | round   |
| format         | custom text format                                                                    | function(percentage)  | —                         | —       |

## Slots

| Name    | Description                                     |
| ------- | ----------------------------------------------- |
| default | Customized content, parameter is { percentage } |
