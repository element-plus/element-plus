---
title: statistic
lang: en-US
---

# statistic

Display statistics.

## Basic usage

:::demo To highlight a number or a group of numbers, such as statistical value, amount, and ranking, you can add elements such as icon and unit before and after the number and title.

statistic/num

:::

## Countdown

:::demo Set `timeIndices`Start the countdown.   Countdown component, support English and Chinese countdown, support to add other components control countdown.

statistic/countdown

:::

## Card usage

Card usage display, can be freely combined

:::demo Set `disabled` of `el-select` to make it disabled.

statistic/card

:::




### Statistic Attributes

| Attribute          | Description            | Type            | Accepted Values                 | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value            | Numerical content                 | string \| number    | -          | -       |
| decimal-separator | Setting the decimal point            | string                  | -      | .       |
| formatter        | Custom numerical presentation| v-slot \|({value}) => VNode | -   | -      |
| group-separator   | Sets the thousandth identifier              | string           | -             | ,       |
| precision        | numerical precision      | number                | -        | 0      |
| prefix           | Sets the prefix of a number          | string \| v-slot | -             | -       |
| suffix           |Sets the suffix of a number          | string \| v-slot     | -         | -       |
| title            | 	Numeric titles               | string \| v-slot   | -           | -       |
| value-style       | Styles numeric values          | style             | -            | -       |
| rate       | Set the ratio          | number             | -            | 1000       |


### Statistic Slots
| Name | Description |
|------|--------|
| prefix | Numeric prefix |
| suffix | Suffixes for numeric values |
| formatter | Numerical content |
| title | Numeric titles |


### Statistic.Countdown  Attributes

| Attribute          | Description            | Type            | Options                 | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| time-indices       | Whether to enable the countdown function     | boolean     | true\|false                        | false      |
| value         | Required value, enter the bound value   | string  | — | — |
| format         | Formatting the countdown display   | string  | — | 'HH:mm:ss' |
### Statistic.Countdown Events
| Method | Description | Parameters |
|---------|--------|---------|
| change | Enable in the 'countdown' function | (value:  Date) |
| finish | Launched after the 'countdown' is complete | (value: boolean) |

### Statistic Methods
| Method | Description | Parameters |CallBack|
| ---- | ---- | ---- |---- |
| suspend | Pause the countdown|(value:boolean) |(value:  Date) |
