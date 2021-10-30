---
title: DatePicker
lang: en-US
---

# DatePicker

Use Date Picker for date input.

<style lang="scss">

.example-showcase .demo-date-picker {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color-base);
  flex: 1;
  &:last-child {
    border-right: none;
  }
}

.demo-date-picker .container {
  flex: 1;
  border-right: solid 1px var(--el-border-color-base);
  .block {
    border-right: none;
    &:last-child {
      border-top: solid 1px var(--el-border-color-base);
    }
  }
  &:last-child {
    border-right: none;
  }
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

</style>

## Enter Date

Basic date picker measured by 'day'.

:::demo The measurement is determined by the `type` attribute. You can enable quick options via `shortcuts` property. The disabled date is set by `disabledDate`, which is a function.

date-picker/enter-date

:::

## Other measurements

You can choose week, month, year or multiple dates by extending the standard date picker component.

:::demo

date-picker/other-measurements

:::

## Date Range

Picking a date range is supported.

:::demo When in range mode, the left and right panels are linked by default. If you want the two panels to switch current months independently, you can use the `unlink-panels` attribute.

date-picker/date-range

:::

## Month Range

Picking a month range is supported.

:::demo When in range mode, the left and right panels are linked by default. If you want the two panels to switch current years independently, you can use the `unlink-panels` attribute.

date-picker/month-range

:::

## Default Value

If user hasn't picked a date, shows today's calendar by default. You can use `default-value` to set another date. Its value should be parsable by `new Date()`.

If type is `daterange`, `default-value` sets the left side calendar.

:::demo

date-picker/default-value

:::

## Date Formats

Use `format` to control displayed text's format in the input box. Use `value-format` to control binding value's format.

By default, the component accepts and emits a `Date` object.

Check the list [here](https://day.js.org/docs/en/display/format#list-of-all-available-formats) of all available formats of Day.js.

:::warning

Pay attention to capitalization

:::

:::demo

date-picker/date-formats

:::

## Default time for start date and end date

When picking a date range, you can assign the time part for start date and end date.

:::demo By default, the time part of start date and end date are both `00:00:00`. Setting `default-time` can change their time respectively. It accepts an array of up to two Date objects. The first string sets the time for the start date, and the second for the end date.

date-picker/default-time

:::

## Custom content

The content of cell can be customized, in scoped-slot you can get the cell data.

:::demo

date-picker/custom-content

:::

For data details, please refer:

```ts
interface DateCell {
  column: number
  customClass: string
  disabled: boolean
  end: boolean
  inRange: boolean
  row: number
  selected: Dayjs
  isCurrent: boolean
  isSelected: boolean
  start: boolean
  text: number
  timestamp: number
  date: Date
  dayjs: Dayjs
  type: 'normal' | 'today' | 'week' | 'next-month' | 'prev-month'
}
```

## Localization

The default locale of is English, if you need to use other languages, please check [Internationalization](/en-US/guide/i18n)

Note, date time locale (month name, first day of the week ...) are also configured in localization.

## Attributes

| Attribute             | Description                                                                                           | Type                                             | Accepted Values                                                                                                   | Default     |
| --------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- | ----------- |
| model-value / v-model | binding value                                                                                         | date(DatePicker) / array(DateRangePicker)        | —                                                                                                                 | —           |
| readonly              | whether DatePicker is read only                                                                       | boolean                                          | —                                                                                                                 | false       |
| disabled              | whether DatePicker is disabled                                                                        | boolean                                          | —                                                                                                                 | false       |
| size                  | size of Input                                                                                         | string                                           | large/medium/small/mini                                                                                           | large       |
| editable              | whether the input is editable                                                                         | boolean                                          | —                                                                                                                 | true        |
| clearable             | whether to show clear button                                                                          | boolean                                          | —                                                                                                                 | true        |
| placeholder           | placeholder in non-range mode                                                                         | string                                           | —                                                                                                                 | —           |
| start-placeholder     | placeholder for the start date in range mode                                                          | string                                           | —                                                                                                                 | —           |
| end-placeholder       | placeholder for the end date in range mode                                                            | string                                           | —                                                                                                                 | —           |
| type                  | type of the picker                                                                                    | string                                           | year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange                                          | date        |
| format                | format of the displayed value in the input box                                                        | string                                           | see [date formats](/en-US/component/date-picker#date-formats)                                                     | YYYY-MM-DD  |
| popper-class          | custom class name for DatePicker's dropdown                                                           | string                                           | —                                                                                                                 | —           |
| range-separator       | range separator                                                                                       | string                                           | —                                                                                                                 | '-'         |
| default-value         | optional, default date of the calendar                                                                | Date                                             | anything accepted by `new Date()`                                                                                 | —           |
| default-time          | optional, the time value to use when selecting date range                                             | Date[]                                           | Array with length 2, each item is a Date. The first item for the start date and then second item for the end date | —           |
| value-format          | optional, format of binding value. If not specified, the binding value will be a Date object          | string                                           | see [date formats](/en-US/component/date-picker#date-formats)                                                     | —           |
| name                  | same as `name` in native input                                                                        | string                                           | —                                                                                                                 | —           |
| unlink-panels         | unlink two date-panels in range-picker                                                                | boolean                                          | —                                                                                                                 | false       |
| prefix-icon           | custom prefix icon component                                                                          | string / Component                               | —                                                                                                                 | Date        |
| clear-icon            | custom clear icon component                                                                           | string / Component                               | —                                                                                                                 | CircleClose |
| validate-event        | whether to trigger form validation                                                                    | boolean                                          | -                                                                                                                 | true        |
| disabledDate          | a function determining if a date is disabled with that date as its parameter. Should return a Boolean | function                                         | —                                                                                                                 | —           |
| shortcuts             | an object array to set shortcut options                                                               | object[{ text: string, value: date / function }] | —                                                                                                                 | —           |

## Events

| Event Name      | Description                                                               | Parameters                |
| --------------- | ------------------------------------------------------------------------- | ------------------------- |
| change          | triggers when user confirms the value                                     | component's binding value |
| blur            | triggers when Input blurs                                                 | component instance        |
| focus           | triggers when Input focuses                                               | component instance        |
| calendar-change | triggers when the calendar selected date is changed. Only for `daterange` | [Date, Date]              |

## Methods

| Method | Description               | Parameters |
| ------ | ------------------------- | ---------- |
| focus  | focus the Input component | —          |

## Slots

| Name            | Description                    |
| --------------- | ------------------------------ |
| default         | custom cell content            |
| range-separator | custom range separator content |
