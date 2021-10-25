---
title: Slider
lang: en-US
---

# Slider

Drag the slider within a fixed range.

<style lang="scss">
.slider-demo-block {
  display: flex;
  align-items: center;
  .el-slider {
    flex: 1;
    margin-left: 12px;
  }
  .demonstration {
    font-size: 14px;
    color: var(--el-text-color-secondary);
    line-height: 44px;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
     & + .el-slider {
        flex: 0 0 70%;
    }
  }
}
</style>

## Basic usage

The current value is displayed when the slider is being dragged.

:::demo Customize the initial value of the slider by setting the binding value.

slider/basic-usage

:::

## Discrete values

The options can be discrete.

:::demo Set step size with the `step` attribute. You can display breakpoints by setting the `show-stops` attribute.

slider/discrete-values

:::

## Slider with input box

Set value via a input box.

:::demo Set the `show-input` attribute to display an input box on the right.

slider/slider-with-input-box

:::

## Range selection

Selecting a range of values is supported.

:::demo Setting the `range` attribute activates range mode, where the binding value is an array made up of two boundary values.

slider/range-selection

:::

## Vertical mode

:::demo Setting the `vertical` attribute to `true` enables vertical mode. In vertical mode, the `height` attribute is required.

slider/vertical-mode

:::

## Show marks

:::demo Setting this `marks` attribute can show mark on slider.

slider/show-marks

:::

## Attributes

| Attribute             | Description                                                                                               | Type            | Accepted Values               | Default |
| --------------------- | --------------------------------------------------------------------------------------------------------- | --------------- | ----------------------------- | ------- |
| model-value / v-model | binding value                                                                                             | number          | —                             | 0       |
| min                   | minimum value                                                                                             | number          | —                             | 0       |
| max                   | maximum value                                                                                             | number          | —                             | 100     |
| disabled              | whether Slider is disabled                                                                                | boolean         | —                             | false   |
| step                  | step size                                                                                                 | number          | —                             | 1       |
| show-input            | whether to display an input box, works when `range` is false                                              | boolean         | —                             | false   |
| show-input-controls   | whether to display control buttons when `show-input` is true                                              | boolean         | —                             | true    |
| input-size            | size of the input box                                                                                     | string          | large / medium / small / mini | small   |
| show-stops            | whether to display breakpoints                                                                            | boolean         | —                             | false   |
| show-tooltip          | whether to display tooltip value                                                                          | boolean         | —                             | true    |
| format-tooltip        | format to display tooltip value                                                                           | function(value) | —                             | —       |
| range                 | whether to select a range                                                                                 | boolean         | —                             | false   |
| vertical              | vertical mode                                                                                             | boolean         | —                             | false   |
| height                | Slider height, required in vertical mode                                                                  | string          | —                             | —       |
| label                 | label for screen reader                                                                                   | string          | —                             | —       |
| debounce              | debounce delay when typing, in milliseconds, works when `show-input` is true                              | number          | —                             | 300     |
| tooltip-class         | custom class name for the tooltip                                                                         | string          | —                             | —       |
| marks                 | marks， type of key must be `number` and must in closed interval `[min, max]`, each mark can custom style | object          | —                             | —       |

## Events

| Event Name | Description                                                                                                       | Parameters           |
| ---------- | ----------------------------------------------------------------------------------------------------------------- | -------------------- |
| change     | triggers when the value changes (if the mouse is being dragged, this event only fires when the mouse is released) | value after changing |
| input      | triggers when the data changes (It'll be emitted in real time during sliding)                                     | value after changing |
