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

| Name                  | Description                                                                                                                  | Type                                                                                                                                                           | Default    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| model-value / v-model | binding value, if it is an `range` picker, the length of the array should be 2                                               | ^[number] / ^[string] / ^[Date]`number[] \| string[] \| Date[]`                                                                                                | ''         |
| border                | whether the date picker is bordered                                                                                          | ^[boolean]                                                                                                                                                     | true       |
| disabled              | whether DatePicker is disabled                                                                                               | ^[boolean]                                                                                                                                                     | false      |
| clearable             | whether to show clear button                                                                                                 | ^[boolean]                                                                                                                                                     | true       |
| type                  | type of the picker                                                                                                           | ^[enum]`'year' \| 'years' \|'month' \| 'months' \| 'date' \| 'dates' \| 'datetime' \| 'week' \| 'datetimerange' \| 'daterange' \| 'monthrange' \| 'yearrange'` | date       |
| default-value         | optional, default date of the calendar                                                                                       | ^[object]`Date \| [Date, Date]`                                                                                                                                | —          |
| default-time          | optional, the time value to use when selecting date range                                                                    | ^[object]`Date \| [Date, Date]`                                                                                                                                | —          |
| value-format          | optional, format of binding value. If not specified, the binding value will be a Date object                                 | ^[string]                                                                                                                                                      | —          |
| date-format           | optional, format of the date displayed in input's inner panel                                                                | ^[string] see [date formats](https://day.js.org/docs/en/display/format)                                                                                        | YYYY-MM-DD |
| time-format           | optional, format of the time displayed in input's inner panel                                                                | ^[string] see [date formats](https://day.js.org/docs/en/display/format)                                                                                        | HH:mm:ss   |
| unlink-panels         | unlink two date-panels in range-picker                                                                                       | ^[boolean]                                                                                                                                                     | false      |
| disabled-date         | a function determining if a date is disabled with that date as its parameter. Should return a Boolean                        | ^[Function]`(data: Date) => boolean`                                                                                                                           | —          |
| shortcuts             | an object array to set shortcut options                                                                                      | ^[object]`Array<{ text: string, value: Date \| Function }>`                                                                                                    | []         |
| cell-class-name       | set custom className                                                                                                         | ^[Function]`(data: Date) => string`                                                                                                                            | —          |
| show-footer           | whether to show footer where the date picker is one ^[enum]`'dates' \| 'months' \| 'years' \| 'datetime' \| 'datetimerange'` | ^[boolean]                                                                                                                                                     | false      |
| show-confirm          | whether to show the confirm button                                                                                           | ^[boolean]                                                                                                                                                     | false      |
| show-week-number      | show the week number besides the week                                                                                        | ^[boolean]                                                                                                                                                     | false      |

### Events

| Name            | Description                                                           | Type                                                                                      |
| --------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| calendar-change | triggers when the calendar selected date is changed. Only for `range` | ^[Function]`(val: [Date, null \| Date]) => void`                                          |
| panel-change    | triggers when the navigation button click.                            | ^[Function]`(date: Date \| [Date, Date], mode: 'month' \| 'year', view?: string) => void` |

### Slots

| Name       | Description         |
| ---------- | ------------------- |
| default    | custom cell content |
| prev-month | prev month icon     |
| next-month | next month icon     |
| prev-year  | prev year icon      |
| next-year  | next year icon      |
