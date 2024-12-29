import dayjs from 'dayjs'
import { isArray, isDate, isEmpty } from '@element-plus/utils'

import type { Dayjs } from 'dayjs'
import type { DateOrDates, DayOrDays } from './common/props'
export type TimeList = [number | undefined, number, undefined | number]

export const buildTimeList = (value: number, bound: number): TimeList => {
  return [
    value > 0 ? value - 1 : undefined,
    value,
    value < bound ? value + 1 : undefined,
  ]
}

export const rangeArr = (n: number) =>
  Array.from(Array.from({ length: n }).keys())

export const extractDateFormat = (format: string) => {
  return format
    .replace(/\W?m{1,2}|\W?ZZ/g, '')
    .replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, '')
    .trim()
}

export const extractTimeFormat = (format: string) => {
  return format
    .replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, '')
    .trim()
}

export const dateEquals = function (a: Date | unknown, b: Date | unknown) {
  const aIsDate = isDate(a)
  const bIsDate = isDate(b)
  if (aIsDate && bIsDate) {
    return a.getTime() === b.getTime()
  }
  if (!aIsDate && !bIsDate) {
    return a === b
  }
  return false
}

export const valueEquals = function (
  a: Array<Date> | unknown,
  b: Array<Date> | unknown
) {
  const aIsArray = isArray(a)
  const bIsArray = isArray(b)
  if (aIsArray && bIsArray) {
    if (a.length !== b.length) {
      return false
    }
    return a.every((item, index) => dateEquals(item, b[index]))
  }
  if (!aIsArray && !bIsArray) {
    return dateEquals(a, b)
  }
  return false
}

export const parseDate = function (
  date: string | number | Date,
  format: string | undefined,
  lang: string
) {
  const day =
    isEmpty(format) || format === 'x'
      ? dayjs(date).locale(lang)
      : dayjs(date, format).locale(lang)
  return day.isValid() ? day : undefined
}

export const formatter = function (
  date: string | number | Date | Dayjs,
  format: string | undefined,
  lang: string
) {
  if (isEmpty(format)) return date
  if (format === 'x') return +date
  return dayjs(date).locale(lang).format(format)
}

export const makeList = (total: number, method?: () => number[]) => {
  const arr: boolean[] = []
  const disabledArr = method?.()
  for (let i = 0; i < total; i++) {
    arr.push(disabledArr?.includes(i) ?? false)
  }
  return arr
}

export const dayOrDaysToDate = (dayOrDays: DayOrDays): DateOrDates => {
  return isArray(dayOrDays)
    ? (dayOrDays.map((d) => d.toDate()) as [Date, Date])
    : dayOrDays.toDate()
}
