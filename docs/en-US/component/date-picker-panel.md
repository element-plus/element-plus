---
title: DatePickerPanel
lang: en-US
---

# DatePickerPanel ^(beta)

`DatePickerPanel` is the core component of `DatePicker`.

## Enter Date

Basic date picker measured by 'day'.

:::demo

date-picker-panel/basic

:::

## Border

By default the date-picker-panel is bordered but in some case you don't want it.
For example `DatePicker` don't inherit `border`.

:::demo

date-picker-panel/border

:::

## Disabled

The `disabled` attribute determines if the date picker is fully disabled.

:::demo

date-picker-panel/disabled

:::

## Types

The measurement is determined by the `type` attribute.

:::demo

date-picker-panel/all-types

:::

## Localization

The default locale of is English, if you need to use other languages, please check [Internationalization](/en-US/guide/i18n)

Note, date time locale (month name, first day of the week ...) are also configured in localization.

## API

### Attributes

| Name                  | Description                                                                                                                       | Type                                                                                                                                                           | Default    |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| model-value / v-model | Binding value, if it is a `range` picker, the length of the array should be 2                                                     | ^[number] / ^[string] / ^[Date] / ^[array]`number[] \| string[] \| Date[]`                                                                                     | ''         |
| border                | Whether the date picker is bordered                                                                                               | ^[boolean]                                                                                                                                                     | true       |
| disabled              | Whether DatePicker is disabled                                                                                                    | ^[boolean]                                                                                                                                                     | false      |
| clearable             | Whether to show clear button                                                                                                      | ^[boolean]                                                                                                                                                     | true       |
| editable ^(2.13.0)    | Whether the input is editable                                                                                                     | ^[boolean]                                                                                                                                                     | true       |
| type                  | Type of the picker                                                                                                                | ^[enum]`'year' \| 'years' \|'month' \| 'months' \| 'date' \| 'dates' \| 'datetime' \| 'week' \| 'datetimerange' \| 'daterange' \| 'monthrange' \| 'yearrange'` | date       |
| default-value         | Optional, default date of the calendar                                                                                            | ^[object]`Date \| [Date, Date]`                                                                                                                                | —          |
| default-time          | Optional, the time value to use when selecting date range                                                                         | ^[object]`Date \| [Date, Date]`                                                                                                                                | —          |
| value-format          | Optional, format of binding value. If not specified, the binding value will be a Date object                                      | ^[string]                                                                                                                                                      | —          |
| date-format           | Optional, format of the date displayed in input's inner panel                                                                     | ^[string] see [date formats](https://day.js.org/docs/en/display/format)                                                                                        | YYYY-MM-DD |
| time-format           | Optional, format of the time displayed in input's inner panel                                                                     | ^[string] see [date formats](https://day.js.org/docs/en/display/format)                                                                                        | HH:mm:ss   |
| unlink-panels         | Unlink two date-panels in range-picker                                                                                            | ^[boolean]                                                                                                                                                     | false      |
| disabled-date         | A function determining if a date is disabled with that date as its parameter. Should return a Boolean                             | ^[Function]`(data: Date) => boolean`                                                                                                                           | —          |
| shortcuts             | An object array to set shortcut options                                                                                           | ^[array]`Array<{ text: string, value: Date \| Function }>`                                                                                                     | []         |
| cell-class-name       | Set custom className                                                                                                              | ^[Function]`(data: Date) => string`                                                                                                                            | —          |
| show-footer           | Whether to show footer where the date picker type is one of `'dates'` / `'months'` / `'years'` / `'datetime'` / `'datetimerange'` | ^[boolean]                                                                                                                                                     | false      |
| show-confirm          | Whether to show the confirm button                                                                                                | ^[boolean]                                                                                                                                                     | false      |
| show-week-number      | Show the week number besides the week                                                                                             | ^[boolean]                                                                                                                                                     | false      |

### Events

| Name            | Description                                                           | Type                                                                                      |
| --------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| calendar-change | Triggers when the calendar selected date is changed. Only for `range` | ^[Function]`(val: [Date, null \| Date]) => void`                                          |
| panel-change    | Triggers when the navigation button click                             | ^[Function]`(date: Date \| [Date, Date], mode: 'month' \| 'year', view?: string) => void` |
| clear ^(2.13.1) | Triggers when a clear button is clicked                               | ^[Function]`() => void`                                                                   |

### Slots

| Name       | Description         |
| ---------- | ------------------- |
| default    | Custom cell content |
| prev-month | Prev month icon     |
| next-month | Next month icon     |
| prev-year  | Prev year icon      |
| next-year  | Next year icon      |
