import { DEFAULT_FORMATS_DATE, DEFAULT_FORMATS_DATEPICKER } from '@element-plus/time-picker'
import { CommonPicker } from '@element-plus/time-picker'
import DatePickPanel from './date-picker-com/panel-date-pick.vue'
import DateRangePickPanel from './date-picker-com/panel-date-range.vue'
import MonthRangePickPanel from './date-picker-com/panel-month-range.vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import localeData from 'dayjs/plugin/localeData'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekYear from 'dayjs/plugin/weekYear'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { h } from 'vue'
dayjs.extend(isLeapYear)
dayjs.extend(localeData)
dayjs.extend(advancedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

const getPanel = function(type) {
  if (type === 'daterange' || type === 'datetimerange') {
    return DateRangePickPanel
  } else if (type === 'monthrange') {
    return MonthRangePickPanel
  }
  return DatePickPanel
}

export default {
  name: 'ElDatePicker',
  install: null,
  props: {
    type: {
      type: String,
      default: 'date',
    },
  },
  setup(props) {
    const format = DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE
    return () => h(CommonPicker, {
      format,
      type: props.type,
      ...props,
    },
    {
      default: scopedProps => h(getPanel(props.type), scopedProps),
    })
  },
}
