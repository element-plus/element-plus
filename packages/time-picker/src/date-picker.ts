import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { h } from 'vue'
import { DEFAULT_FORMATS_DATE, DEFAULT_FORMATS_DATEPICKER } from './common/constant'
import Picker from './common/picker.vue'
import DatePickPanel from './date-picker-com/panel-date-pick.vue'
import DateRangePickPanel from './date-picker-com/panel-date-range.vue'
import MonthRangePickPanel from './date-picker-com/panel-month-range.vue'
dayjs.extend(customParseFormat)

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
  props: {
    type: {
      type: String,
      default: 'date',
    },
  },
  setup(props) {
    const format = DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE
    return () => h(Picker, {
      ...props,
      format,
    },
    {
      default: scopedProps => h(getPanel(props.type), scopedProps),
    })
  },
}
