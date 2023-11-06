import dayjs from 'dayjs'
import { isArray, isDate, isEmpty } from '@element-plus/utils'

import { DEFAULT_FORMATS_DATEPICKER } from './constants'
import type { Dayjs } from 'dayjs'
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

export const parseQuarter = (
  date: string | number | Date,
  valueFormat: string | undefined = DEFAULT_FORMATS_DATEPICKER.quarter,
  lang: string
) => {
  let day
  // dayjs(date, format) format 参数无法解析季度，需单独处理 eg: dayjs(2023-Q1 , 'YYYY-[Q]Q') 无效
  if (typeof date === 'string' && date.includes('Q')) {
    const matches = date.match(/(\d{4})[^0-9]*Q(\d)/)
    if (!matches) return null
    const year = matches[1]
    const quarter = matches[2]
    const month = (+quarter - 1) * 3 + 1
    const monthStr = month.toString().padStart(2, '0')
    const newFormat = valueFormat.replace(/\[Q\]Q/, 'MM')
    day = dayjs(`${year}-${monthStr}`, newFormat).locale(lang)
  } else {
    day = dayjs(date).locale(lang)
  }
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
