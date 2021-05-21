import { defineComponent, h, provide, ref } from 'vue'
import dayjs from 'dayjs'
import { CommonPicker, DEFAULT_FORMATS_DATE, DEFAULT_FORMATS_DATEPICKER, defaultProps } from '@element-plus/time-picker'
import DatePickPanel from './date-picker-com/panel-date-pick.vue'
import DateRangePickPanel from './date-picker-com/panel-date-range.vue'
import MonthRangePickPanel from './date-picker-com/panel-month-range.vue'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import localeData from 'dayjs/plugin/localeData'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekYear from 'dayjs/plugin/weekYear'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

import type { PropType } from 'vue'
import type { IDatePickerType } from './date-picker.type'


dayjs.extend(localeData)
dayjs.extend(advancedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)
dayjs.extend(dayOfYear)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

const getPanel = function (type: IDatePickerType) {
  if (type === 'daterange' || type === 'datetimerange') {
    return DateRangePickPanel
  } else if (type === 'monthrange') {
    return MonthRangePickPanel
  }
  return DatePickPanel
}

export default defineComponent({
  name: 'ElDatePicker',
  install: null,
  props: {
    ...defaultProps,
    type: {
      type: String as PropType<IDatePickerType>,
      default: 'date',
    },
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    provide('ElPopperOptions', props.popperOptions)
    const commonPicker = ref(null)
    const refProps = {
      ...props,
      focus: () => {
        commonPicker.value?.handleFocus()
      },
    }
    ctx.expose(refProps)
    return () => {
      // since props always have all defined keys on it, {format, ...props} will always overwrite format
      // pick props.format or provide default value here before spreading
      const format = props.format ?? (DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE)
      return h(CommonPicker, {
        ...props,
        format,
        type: props.type,
        ref: commonPicker,
        'onUpdate:modelValue': value => ctx.emit('update:modelValue', value),
      },
      {
        default: scopedProps => h(getPanel(props.type), scopedProps),
      })
    }
  },
})
