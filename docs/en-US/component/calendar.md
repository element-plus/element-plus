---
title: Calendar
lang: en-US
---

# Calendar

Display date.

## Basic

:::demo Set `value` to specify the currently displayed month. If `value` is not specified, current month is displayed. `value` supports two-way binding.

calendar/basic

:::

## Controller Type ^(2.13.1)

:::demo You can set the type of the controller for Calendar header. When setting `select`, you can use `formatter` to customize `label`.

calendar/controller-type

:::

## Custom Content

:::demo Customize what is displayed in the calendar cell by setting `scoped-slot` named `date-cell`. In `scoped-slot` you can get the date (the date of the current cell), data (including the type, isSelected, day attribute). For details, please refer to the API documentation below.

calendar/customize

:::

## Range

:::demo Set the `range` attribute to specify the display range of the calendar. Start time must be Monday, end time must be Sunday, and the time span cannot exceed two months.

calendar/range

:::

## Customize header

:::demo

calendar/header

:::

## Localization

The default locale of is English, if you need to use other languages, please check [Internationalization](/en-US/guide/i18n)

Note, date time locale (month name, first day of the week ...) are also configured in localization.

## API

### Attributes

| Name                      | Description                                                                                                                                                    | Type                                                                      | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------- |
| model-value / v-model     | binding value                                                                                                                                                  | ^[Date]                                                                   | —       |
| range                     | time range, including start time and end time. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months. | ^[array]`[Date, Date]`                                                    | —       |
| controller-type ^(2.13.1) | type of the controller for Calendar header                                                                                                                     | ^[enum]`'button' \| 'select'`                                             | button  |
| formatter ^(2.13.1)       | format label when `controller-type` is 'select'                                                                                                                | ^[Function]`(value: number, type: 'year' \| 'month') => string \| number` | —       |

### Slots

| Name      | Description                                                                                                                                                                                                                                               | Type                                                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| date-cell | `type` indicates which month the date belongs, optional values are prev-month, current-month, next-month; `isSelected` indicates whether the date is selected; `day` is the formatted date in the format `YYYY-MM-DD`; `date` is date the cell represents | ^[object]`{ data: { type: 'prev-month' \| 'current-month' \| 'next-month', isSelected: boolean, day: string, date: Date } }` |
| header    | content of the Calendar header                                                                                                                                                                                                                            | ^[object]`{ date: string }`                                                                                                  |

### Exposes

| Name                        | Description                                                            | Type                                                                                          |
| --------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| selectedDay                 | currently selected date                                                | ^[object]`ComputedRef<Dayjs \| undefined>`                                                    |
| pickDay                     | select a specific date                                                 | ^[Function]`(day: dayjs.Dayjs) => void`                                                       |
| selectDate                  | select date                                                            | ^[Function]`(type: CalendarDateType) => void`                                                 |
| calculateValidatedDateRange | Calculate the validate date range according to the start and end dates | ^[Function]`(startDayjs: dayjs.Dayjs, endDayjs: dayjs.Dayjs) => [dayjs.Dayjs, dayjs.Dayjs][]` |

## Type Declarations

<details>
  <summary>Show declarations</summary>

```ts
type CalendarDateType =
  | 'prev-month'
  | 'next-month'
  | 'prev-year'
  | 'next-year'
  | 'today'
```

</details>
