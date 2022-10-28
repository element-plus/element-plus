import DatePickPanel from './date-picker-com/panel-date-pick.vue'
import DateRangePickPanel from './date-picker-com/panel-date-range.vue'
import MonthRangePickPanel from './date-picker-com/panel-month-range.vue'
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
