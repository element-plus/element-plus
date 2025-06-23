import dayjs from 'dayjs'
import { isArray, isString } from '@element-plus/utils'
import { rangeArr } from '@element-plus/components/time-picker'

import type { ComputedRef } from 'vue'
import type { Dayjs } from 'dayjs'
import type { DateCell } from './date-picker.type'
import type { DisabledDateType } from './props/shared'

type DayRange = [Dayjs | undefined, Dayjs | undefined]

export const isValidRange = (range: DayRange): boolean => {
  if (!isArray(range)) return false

  const [left, right] = range

  return (
    dayjs.isDayjs(left) &&
    dayjs.isDayjs(right) &&
    dayjs(left).isValid() &&
    dayjs(right).isValid() &&
    left.isSameOrBefore(right)
  )
}

type GetDefaultValueParams = {
  lang: string
  step?: number
  unit: 'month' | 'year'
  unlinkPanels: boolean
}

export type DefaultValue = [Date, Date] | Date | undefined

export const getDefaultValue = (
  defaultValue: DefaultValue,
  { lang, step = 1, unit, unlinkPanels }: GetDefaultValueParams
) => {
  let start: Dayjs

  if (isArray(defaultValue)) {
    let [left, right] = defaultValue.map((d) => dayjs(d).locale(lang))
    if (!unlinkPanels) {
      right = left.add(step, unit)
    }
    return [left, right]
  } else if (defaultValue) {
    start = dayjs(defaultValue)
  } else {
    start = dayjs()
  }
  start = start.locale(lang)
  return [start, start.add(step, unit)]
}

type Dimension = {
  row: number
  column: number
}

type BuildPickerTableMetadata = {
  startDate?: Dayjs | null
  unit: 'month' | 'day'
  columnIndexOffset: number
  now: Dayjs
  nextEndDate: Dayjs | null
  relativeDateGetter: (index: number) => Dayjs
  setCellMetadata?: (
    cell: DateCell,
    dimension: { rowIndex: number; columnIndex: number }
  ) => void
  setRowMetadata?: (row: DateCell[]) => void
}

export const buildPickerTable = (
  dimension: Dimension,
  rows: DateCell[][],
  {
    columnIndexOffset,
    startDate,
    nextEndDate,
    now,
    unit,
    relativeDateGetter,
    setCellMetadata,
    setRowMetadata,
  }: BuildPickerTableMetadata
) => {
  for (let rowIndex = 0; rowIndex < dimension.row; rowIndex++) {
    const row = rows[rowIndex]
    for (let columnIndex = 0; columnIndex < dimension.column; columnIndex++) {
      let cell = row[columnIndex + columnIndexOffset]
      if (!cell) {
        cell = {
          row: rowIndex,
          column: columnIndex,
          type: 'normal',
          inRange: false,
          start: false,
          end: false,
        }
      }
      const index = rowIndex * dimension.column + columnIndex
      const nextStartDate = relativeDateGetter(index)
      cell.dayjs = nextStartDate
      cell.date = nextStartDate.toDate()
      cell.timestamp = nextStartDate.valueOf()
      cell.type = 'normal'

      cell.inRange =
        !!(
          startDate &&
          nextStartDate.isSameOrAfter(startDate, unit) &&
          nextEndDate &&
          nextStartDate.isSameOrBefore(nextEndDate, unit)
        ) ||
        !!(
          startDate &&
          nextStartDate.isSameOrBefore(startDate, unit) &&
          nextEndDate &&
          nextStartDate.isSameOrAfter(nextEndDate, unit)
        )

      if (startDate?.isSameOrAfter(nextEndDate)) {
        cell.start = !!nextEndDate && nextStartDate.isSame(nextEndDate, unit)
        cell.end = startDate && nextStartDate.isSame(startDate, unit)
      } else {
        cell.start = !!startDate && nextStartDate.isSame(startDate, unit)
        cell.end = !!nextEndDate && nextStartDate.isSame(nextEndDate, unit)
      }

      const isToday = nextStartDate.isSame(now, unit)

      if (isToday) {
        cell.type = 'today'
      }
      setCellMetadata?.(cell, { rowIndex, columnIndex })
      row[columnIndex + columnIndexOffset] = cell
    }
    setRowMetadata?.(row)
  }
}

export const datesInMonth = (
  date: Dayjs,
  year: number,
  month: number,
  lang: string
) => {
  const firstDay = dayjs()
    .locale(lang)
    .startOf('month')
    .month(month)
    .year(year)
    .hour(date.hour())
    .minute(date.minute())
    .second(date.second())

  const numOfDays = firstDay.daysInMonth()
  return rangeArr(numOfDays).map((n) => firstDay.add(n, 'day').toDate())
}

export const getValidDateOfMonth = (
  date: Dayjs,
  year: number,
  month: number,
  lang: string,
  disabledDate?: DisabledDateType
) => {
  const _value = dayjs()
    .year(year)
    .month(month)
    .startOf('month')
    .hour(date.hour())
    .minute(date.minute())
    .second(date.second())
  const _date = datesInMonth(date, year, month, lang).find((date) => {
    return !disabledDate?.(date)
  })
  if (_date) {
    return dayjs(_date).locale(lang)
  }
  return _value.locale(lang)
}

export const getValidDateOfYear = (
  value: Dayjs,
  lang: string,
  disabledDate?: DisabledDateType
) => {
  const year = value.year()
  if (!disabledDate?.(value.toDate())) {
    return value.locale(lang)
  }
  const month = value.month()
  if (!datesInMonth(value, year, month, lang).every(disabledDate)) {
    return getValidDateOfMonth(value, year, month, lang, disabledDate)
  }
  for (let i = 0; i < 12; i++) {
    if (!datesInMonth(value, year, i, lang).every(disabledDate)) {
      return getValidDateOfMonth(value, year, i, lang, disabledDate)
    }
  }
  return value
}

export const correctlyParseUserInput = (
  value: string | Dayjs | Dayjs[],
  format: string,
  lang: string,
  defaultFormat: ComputedRef<boolean>
): Dayjs | Dayjs[] => {
  if (isArray(value)) {
    return value.map(
      (v) => correctlyParseUserInput(v, format, lang, defaultFormat) as Dayjs
    )
  }
  if (isString(value)) {
    const dayjsValue = defaultFormat.value ? dayjs(value) : dayjs(value, format)
    if (!dayjsValue.isValid()) {
      // return directly if not valid
      return dayjsValue
    }
  }
  return dayjs(value, format).locale(lang)
}
