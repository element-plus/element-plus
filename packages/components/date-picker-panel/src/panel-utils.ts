import DatePickPanel from './date-picker-com/panel-date-pick.vue'
import DateRangePickPanel from './date-picker-com/panel-date-range.vue'
import MonthRangePickPanel from './date-picker-com/panel-month-range.vue'
import YearRangePickPanel from './date-picker-com/panel-year-range.vue'

import type { DatePickerType } from './types'

export const getPanel = function (type: DatePickerType) {
  switch (type) {
    case 'daterange':
    case 'datetimerange': {
      return DateRangePickPanel
    }
    case 'monthrange': {
      return MonthRangePickPanel
    }
    case 'yearrange': {
      return YearRangePickPanel
    }
    default: {
      return DatePickPanel
    }
  }
}
