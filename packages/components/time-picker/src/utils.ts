import dayjs from 'dayjs'
import { isArray, isDate, isEmpty } from '@element-plus/utils'

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
  const list = [
    'h{1,2}',
    'H{1,2}',
    'm{1,2}',
    's{1,2}',
    'SSS',
    'Z{1,2}',
    '(a|A)',
    '(k|K)',
    '(x|X)',
  ]
  const reg = new RegExp(
    list.map((item) => `[^A-Za-z ]*${item}[^A-Za-z ]*`).join('|'),
    'g'
  )
  return format.replace(reg, '').trim()
}

export const extractTimeFormat = (format: string) => {
  const list = [
    'Do',
    'D{1,2}',
    'd{1,4}',
    'M{1,4}',
    'Y{2,4}',
    'Q',
    'wo',
    'w{1,2}',
    'gggg',
  ]
  const reg = new RegExp(
    list.map((item) => `[^A-Za-z ]*${item}[^A-Za-z ]*`).join('|'),
    'g'
  )
  return format.replace(reg, '').trim()
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
