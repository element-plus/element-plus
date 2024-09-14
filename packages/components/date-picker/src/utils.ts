import dayjs from 'dayjs'
import { isArray } from '@element-plus/utils'
import { rangeArr } from '@element-plus/components/time-picker'

import type { Dayjs } from 'dayjs'
import type { DateCell } from './date-picker.type'
import type { DisabledDateType } from './props/shared'

type DayRange = [Dayjs | undefined, Dayjs | undefined]

export const isValidRange = (range: DayRange): boolean => {
  if (!isArray(range)) return false

  const [left, right] = range

  return (
    dayjs.isDayjs(left) && dayjs.isDayjs(right) && left.isSameOrBefore(right)
  )
}

type GetDefaultValueParams = {
  lang: string
  unit: 'month' | 'year'
  unlinkPanels: boolean
}

export type DefaultValue = [Date, Date] | Date | undefined

export const getDefaultValue = (
  defaultValue: DefaultValue,
  { lang, unit, unlinkPanels }: GetDefaultValueParams
) => {
  let start: Dayjs

  if (isArray(defaultValue)) {
    let [left, right] = defaultValue.map((d) => dayjs(d).locale(lang))
    if (!unlinkPanels) {
      right = left.add(1, unit)
    }
    return [left, right]
  } else if (defaultValue) {
    start = dayjs(defaultValue)
  } else {
    start = dayjs()
  }
  start = start.locale(lang)
  return [start, start.add(1, unit)]
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

export const datesInMonth = (year: number, month: number, lang: string) => {
  const firstDay = dayjs().locale(lang).startOf('month').month(month).year(year)
  const numOfDays = firstDay.daysInMonth()
  return rangeArr(numOfDays).map((n) => firstDay.add(n, 'day').toDate())
}

export const getValidDateOfMonth = (
  year: number,
  month: number,
  lang: string,
  disabledDate?: DisabledDateType
) => {
  const _value = dayjs().year(year).month(month).startOf('month')
  const _date = datesInMonth(year, month, lang).find((date) => {
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
  if (!datesInMonth(year, month, lang).every(disabledDate)) {
    return getValidDateOfMonth(year, month, lang, disabledDate)
  }
  for (let i = 0; i < 12; i++) {
    if (!datesInMonth(year, i, lang).every(disabledDate)) {
      return getValidDateOfMonth(year, i, lang, disabledDate)
    }
  }
  return value
}
