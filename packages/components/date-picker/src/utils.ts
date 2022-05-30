import { default as dayjs, isDayjs } from 'dayjs'
import { isArray } from '@element-plus/utils'
import DatePickPanel from './date-picker-com/panel-date-pick.vue'
import DateRangePickPanel from './date-picker-com/panel-date-range.vue'
import MonthRangePickPanel from './date-picker-com/panel-month-range.vue'

import type { Dayjs } from 'dayjs'
import type { IDatePickerType } from './date-picker.type'

export const getPanel = function (type: IDatePickerType) {
  switch (type) {
    case 'daterange':
    case 'datetimerange': {
      return DateRangePickPanel
    }
    case 'monthrange': {
      return MonthRangePickPanel
    }
    default: {
      return DatePickPanel
    }
  }
}

type DayRange = [Dayjs | undefined, Dayjs | undefined]

export const isValidRange = (range: DayRange): boolean => {
  if (!isArray(range)) return false

  const [left, right] = range

  return isDayjs(left) && isDayjs(right) && left.isSameOrBefore(right)
}

type getDefaultValueParams = {
  lang: string
  unit: 'month' | 'year'
  unlinkPanels: boolean
}

export type DefaultValue = [Date, Date] | Date | undefined

export const getDefaultValue = (
  defaultValue: DefaultValue,
  { lang, unit, unlinkPanels }: getDefaultValueParams
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
