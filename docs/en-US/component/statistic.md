---
title: Statistic
lang: en-US
---

# Statistic

Display statistics.

## Basic usage

:::demo To highlight a number or a group of numbers, such as statistical value, amount, and ranking, you can add elements such as icon and unit before and after the number and title.

statistic/num

:::

## Countdown

:::demo Set `timeIndices`Start the countdown. Countdown component, support English and Chinese countdown, support to add other components control countdown.

statistic/countdown

:::

## Card usage

:::demo Card usage display, can be freely combined

statistic/card

:::

### Statistic Attributes

| Attribute         | Description                    | Type                                                   | Accepted Values | Default |
| ----------------- | ------------------------------ | ------------------------------------------------------ | --------------- | ------- |
| value             | Numerical content              | ^[string] / ^[number]                                  | -               | -       |
| decimal-separator | Setting the decimal point      | ^[string]                                              | -               | .       |
| format            | Custom numerical presentation  | ^[string]                                              | -               | -       |
| group-separator   | Sets the thousandth identifier | ^[string]                                              | -               | ,       |
| precision         | numerical precision            | ^[number]                                              | -               | 0       |
| prefix            | Sets the prefix of a number    | ^[string]                                              | -               | -       |
| suffix            | Sets the suffix of a number    | ^[string]                                              | -               | -       |
| title             | Numeric titles                 | ^[string]                                              | -               | -       |
| value-style       | Styles numeric values          | ^[object]`CSSProperties \| CSSProperties[]\| string[]` | -               |
| rate              | Set the ratio                  | ^[number]                                              | -               | 1000    |

### Statistic Slots

| Name      | Description                 |
| --------- | --------------------------- |
| prefix    | Numeric prefix              |
| suffix    | Suffixes for numeric values |
| formatter | Numerical content           |
| title     | Numeric titles              |

### Statistic.Countdown Attributes

| Attribute    | Description                              | Type                          | Default |
| ------------ | ---------------------------------------- | ----------------------------- | ------- |
| time-indices | Whether to enable the countdown function | ^[boolean]`'true' \| 'false'` | false   |
| value        | Required value, enter the bound value    | ^[string]`'' `                | —       |
| format       | Formatting the countdown display         | ^[string]`'' `                | —       |

### Statistic.Countdown Events

| Method | Description                                | Type                                     |
| ------ | ------------------------------------------ | ---------------------------------------- |
| change | Enable in the 'countdown' function         | ^[Function]`() => Date`                  |
| finish | Launched after the 'countdown' is complete | ^[Function]`(event: FocusEvent) => void` |

### Statistic Methods

| Method  | Description         | Parameters                            |
| ------- | ------------------- | ------------------------------------- |
| suspend | Pause the countdown | ^[Function]`(value: boolean) => Date` |
