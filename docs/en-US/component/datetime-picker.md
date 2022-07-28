---
title: DateTimePicker
lang: en-US
---

# DateTimePicker

Select date and time in one picker.

:::tip

DateTimePicker is derived from DatePicker and TimePicker. For a more detailed explanation on attributes, you can refer to DatePicker and TimePicker.

:::

## Date and time

:::demo You can select date and time in one picker at the same time by setting `type` to `datetime`. The way to use shortcuts is the same as Date Picker.

datetime-picker/date-and-time

:::

## DateTime Formats

Use `format` to control displayed text's format in the input box. Use `value-format` to control binding value's format.

By default, the component accepts and emits a `Date` object.

Check the list [here](https://day.js.org/docs/en/display/format#list-of-all-available-formats) of all available formats of Day.js.

:::warning

Pay attention to capitalization

:::

:::demo

datetime-picker/date-and-time-formats

:::

## Date and time range

:::demo You can select date and time range by setting `type` to `datetimerange`.

datetime-picker/date-and-time-range

:::

## Default time value for start date and end date

:::demo When picking date range on the date panel with type `datetimerange`, `00:00:00` will be used as the default time value for start and end date. We can control it with the `default-time` attribute. `default-time` accepts an array of up to two Date objects. The first item controls time value of the start date and the second item controls time value of the end date.

datetime-picker/default-time

:::

## Attributes

| Attribute             | Description                                                                                           | Type                                              | Accepted Values                                                                                                                                                                 | Default             |
| --------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| model-value / v-model | binding value                                                                                         | date(DateTimePicker) / array(DateTimeRangePicker) | —                                                                                                                                                                               | —                   |
| readonly              | whether DatePicker is read only                                                                       | boolean                                           | —                                                                                                                                                                               | false               |
| disabled              | whether DatePicker is disabled                                                                        | boolean                                           | —                                                                                                                                                                               | false               |
| editable              | whether the input is editable                                                                         | boolean                                           | —                                                                                                                                                                               | true                |
| clearable             | whether to show clear button                                                                          | boolean                                           | —                                                                                                                                                                               | true                |
| size                  | size of Input                                                                                         | string                                            | large/default/small                                                                                                                                                             | default             |
| placeholder           | placeholder in non-range mode                                                                         | string                                            | —                                                                                                                                                                               | —                   |
| start-placeholder     | placeholder for the start date in range mode                                                          | string                                            | —                                                                                                                                                                               | —                   |
| end-placeholder       | placeholder for the end date in range mode                                                            | string                                            | —                                                                                                                                                                               | —                   |
| time-arrow-control    | whether to pick time using arrow buttons                                                              | boolean                                           | —                                                                                                                                                                               | false               |
| type                  | type of the picker                                                                                    | string                                            | year/month/date/datetime/ week/datetimerange/daterange                                                                                                                          | date                |
| format                | format of the displayed value in the input box                                                        | string                                            | see [date formats](/en-US/component/date-picker#date-formats)                                                                                                                   | YYYY-MM-DD HH:mm:ss |
| popper-class          | custom class name for DateTimePicker's dropdown                                                       | string                                            | —                                                                                                                                                                               | —                   |
| range-separator       | range separator                                                                                       | string                                            | -                                                                                                                                                                               | '-'                 |
| default-value         | optional, default date of the calendar                                                                | Date                                              | anything accepted by `new Date()`                                                                                                                                               | —                   |
| default-time          | the default time value after picking a date                                                           | non-range: Date / range: Date[]                   | non-range: a Date object, range: array of two Date objects, and the first item is for the start date and second for the end date. Time `00:00:00` will be used if not specified | —                   |
| value-format          | optional, format of binding value. If not specified, the binding value will be a Date object          | string                                            | see [date formats](https://day.js.org/docs/en/display/format)                                                                                                                   | —                   |
| id                    | same as `id` in native input                                                                          | string / array(string)                            | String `id="my-datetime"` or array `:id="['my-range-start', 'my-range-end']"` for date range                                                                                    | -                   |
| name                  | same as `name` in native input                                                                        | string                                            | —                                                                                                                                                                               | —                   |
| unlink-panels         | unllink two date-panels in range-picker                                                               | boolean                                           | —                                                                                                                                                                               | false               |
| prefix-icon           | Custom prefix icon component                                                                          | string / Component                                | —                                                                                                                                                                               | Date                |
| clear-icon            | Custom clear icon component                                                                           | string / Component                                | —                                                                                                                                                                               | CircleClose         |
| shortcuts             | an object array to set shortcut options                                                               | object[{ text: string, value: date / function }]  | —                                                                                                                                                                               | —                   |
| disabledDate          | a function determining if a date is disabled with that date as its parameter. Should return a Boolean | function                                          | —                                                                                                                                                                               | —                   |
| cellClassName         | set custom className                                                                                  | Function(Date)                                    | —                                                                                                                                                                               | —                   |
| teleported            | whether datetime-picker dropdown is teleported to the body                                            | boolean                                           | true / false                                                                                                                                                                    | true                |

## Events

| Event Name      | Description                                                                   | Parameters                                |
| --------------- | ----------------------------------------------------------------------------- | ----------------------------------------- |
| change          | triggers when user confirms the value                                         | component's binding value                 |
| blur            | triggers when Input blurs                                                     | `(e: FocusEvent)`                         |
| focus           | triggers when Input focuses                                                   | `(e: FocusEvent)`                         |
| calendar-change | triggers when the calendar selected date is changed. Only for `datetimerange` | [Date, Date]                              |
| visible-change  | triggers when the DateTimePicker's dropdown appears/disappears                | true when it appears, and false otherwise |

## Methods

| Method | Description               | Parameters |
| ------ | ------------------------- | ---------- |
| focus  | focus the Input component | —          |

## Slots

| Name            | Description                    |
| --------------- | ------------------------------ |
| default         | custom cell content            |
| range-separator | custom range separator content |
