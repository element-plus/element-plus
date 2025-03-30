---
title: Slider
lang: en-US
---

# Slider

Drag the slider within a fixed range.

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

## Sizes

:::demo

slider/sizes

:::

## Placement

You can custom tooltip placement.

:::demo

slider/placement

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

## API

### Attributes

| Name                        | Description                                                                                                                                             | Type                                                                                                                                                                        | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| model-value / v-model       | binding value                                                                                                                                           | ^[number] / ^[object]`number[]`                                                                                                                                             | 0       |
| min                         | minimum value                                                                                                                                           | ^[number]                                                                                                                                                                   | 0       |
| max                         | maximum value                                                                                                                                           | ^[number]                                                                                                                                                                   | 100     |
| disabled                    | whether Slider is disabled                                                                                                                              | ^[boolean]                                                                                                                                                                  | false   |
| step                        | step size                                                                                                                                               | ^[number]                                                                                                                                                                   | 1       |
| show-input                  | whether to display an input box, works when `range` is false                                                                                            | ^[boolean]                                                                                                                                                                  | false   |
| show-input-controls         | whether to display control buttons when `show-input` is true                                                                                            | ^[boolean]                                                                                                                                                                  | true    |
| size                        | size of the slider wrapper, will not work in vertical mode                                                                                              | ^[enum]`'' \| 'large' \| 'default' \| 'small'`                                                                                                                              | default |
| input-size                  | size of the input box, when set `size`, the default is the value of `size`                                                                              | ^[enum]`'' \| 'large' \| 'default' \| 'small'`                                                                                                                              | default |
| show-stops                  | whether to display breakpoints                                                                                                                          | ^[boolean]                                                                                                                                                                  | false   |
| show-tooltip                | whether to display tooltip value                                                                                                                        | ^[boolean]                                                                                                                                                                  | true    |
| format-tooltip              | format to display tooltip value                                                                                                                         | ^[Function]`(value: number) => number \| string`                                                                                                                            | —       |
| range                       | whether to select a range                                                                                                                               | ^[boolean]                                                                                                                                                                  | false   |
| vertical                    | vertical mode                                                                                                                                           | ^[boolean]                                                                                                                                                                  | false   |
| height                      | slider height, required in vertical mode                                                                                                                | ^[string]                                                                                                                                                                   | —       |
| aria-label ^(a11y) ^(2.7.2) | native `aria-label` attribute                                                                                                                           | ^[string]                                                                                                                                                                   | —       |
| range-start-label           | when `range` is true, screen reader label for the start of the range                                                                                    | ^[string]                                                                                                                                                                   | —       |
| range-end-label             | when `range` is true, screen reader label for the end of the range                                                                                      | ^[string]                                                                                                                                                                   | —       |
| format-value-text           | format to display the `aria-valuenow` attribute for screen readers                                                                                      | ^[Function]`(value: number) => string`                                                                                                                                      | —       |
| debounce                    | debounce delay when typing, in milliseconds, works when `show-input` is true                                                                            | ^[number]                                                                                                                                                                   | 300     |
| tooltip-class               | custom class name for the tooltip                                                                                                                       | ^[string]                                                                                                                                                                   | —       |
| placement                   | position of Tooltip                                                                                                                                     | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | top     |
| marks                       | marks, type of key must be `number` and must in closed interval `[min, max]`, each mark can custom style                                                | ^[object]`SliderMarks`                                                                                                                                                      | —       |
| validate-event              | whether to trigger form validation                                                                                                                      | ^[boolean]                                                                                                                                                                  | true    |
| persistent ^(2.9.5)         | when slider tooltip inactive and `persistent` is `false` , popconfirm will be destroyed. `persistent` always be `false` when `show-tooltip ` is `false` | ^[boolean]                                                                                                                                                                  | true    |
| label ^(a11y) ^(deprecated) | native `aria-label` attribute                                                                                                                           | ^[string]                                                                                                                                                                   | —       |

### Events

| Name   | Description                                                                                                       | Type                                               |
| ------ | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| change | triggers when the value changes (if the mouse is being dragged, this event only fires when the mouse is released) | ^[Function]`(value: Arrayable<number>) => boolean` |
| input  | triggers when the data changes (It'll be emitted in real time during sliding)                                     | ^[Function]`(value: Arrayable<number>) => boolean` |

## Type Declarations

<details>
  <summary>Show declarations</summary>

```ts
type SliderMarks = Record<number, string | { style: CSSProperties; label: any }>
type Arrayable<T> = T | T[]
```

</details>
