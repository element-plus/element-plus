---
title: Statistic
lang: en-US
---

# Statistic

Display statistics.

## Basic usage

:::demo To highlight a number or a group of numbers, such as statistical value, amount, and ranking, you can add elements such as icon and unit before and after the number and title. And use [vueuse](https://vueuse.org/core/useTransition/) to add animated transitions to value.

statistic/basic

:::

## Countdown

:::demo Countdown component, support to add other components control countdown.

statistic/countdown
:::
:::tip

In formatting it is suggested to be in the range of days

:::

## Card usage

:::demo Card usage display, can be freely combined

statistic/card

:::

## Statistic API

### Statistic Attributes

| Attribute         | Description                    | Type                                                                | Default |
| ----------------- | ------------------------------ | ------------------------------------------------------------------- | ------- |
| value             | Numerical content              | ^[number]                                                           | 0       |
| decimal-separator | Setting the decimal point      | ^[string]                                                           | .       |
| formatter         | Custom numerical presentation  | ^[Function]`(value: number) => string \| number`                    | —       |
| group-separator   | Sets the thousandth identifier | ^[string]                                                           | ,       |
| precision         | numerical precision            | ^[number]                                                           | 0       |
| prefix            | Sets the prefix of a number    | ^[string]                                                           | —       |
| suffix            | Sets the suffix of a number    | ^[string]                                                           | —       |
| title             | Numeric titles                 | ^[string]                                                           | —       |
| value-style       | Styles numeric values          | ^[string] / ^[object]`CSSProperties \| CSSProperties[] \| string[]` | —       |

### Statistic Slots

| Name   | Description                 |
| ------ | --------------------------- |
| prefix | Numeric prefix              |
| suffix | Suffixes for numeric values |
| title  | Numeric titles              |

### Statistic Exposes

| Name         | Description           | Type                             |
| ------------ | --------------------- | -------------------------------- |
| displayValue | current display value | ^[object]`Ref<string \| number>` |

## Countdown API

### Countdown Attributes

| Attribute   | Description                      | Type                                                                | Default  |
| ----------- | -------------------------------- | ------------------------------------------------------------------- | -------- |
| value       | target time                      | ^[number] / ^[Dayjs]                                                | —        |
| format      | Formatting the countdown display | ^[string]                                                           | HH:mm:ss |
| prefix      | Sets the prefix of a countdown   | ^[string]                                                           | —        |
| suffix      | Sets the suffix of a countdown   | ^[string]                                                           | —        |
| title       | countdown titles                 | ^[string]                                                           | —        |
| value-style | Styles countdown values          | ^[string] / ^[object]`CSSProperties \| CSSProperties[] \| string[]` | —        |

### Countdown Events

| Method | Description                  | Type                                 |
| ------ | ---------------------------- | ------------------------------------ |
| change | Time difference change event | ^[Function]`(value: number) => void` |
| finish | countdown end event          | ^[Function]`() => void`              |

### Countdown Slots

| Name   | Description            |
| ------ | ---------------------- |
| prefix | countdown value prefix |
| suffix | countdown value suffix |
| title  | countdown title        |

### Countdown Exposes

| Name         | Description           | Type                   |
| ------------ | --------------------- | ---------------------- |
| displayValue | current display value | ^[object]`Ref<string>` |
