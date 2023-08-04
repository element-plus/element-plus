import { defineComponent, provide, reactive, ref, toRef } from 'vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
import localeData from 'dayjs/plugin/localeData.js'
import weekOfYear from 'dayjs/plugin/weekOfYear.js'
import weekYear from 'dayjs/plugin/weekYear.js'
import dayOfYear from 'dayjs/plugin/dayOfYear.js'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js'
import { useNamespace } from '@element-plus/hooks'
import {
  CommonPicker,
  DEFAULT_FORMATS_DATE,
  DEFAULT_FORMATS_DATEPICKER,
} from '@element-plus/components/time-picker'
import { isBoolean, isUndefined } from '@element-plus/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { ROOT_PICKER_INJECTION_KEY } from './constants'

import { datePickerProps } from './props/date-picker'
import { getPanel } from './panel-utils'
import type {
  DateModelType,
  SingleOrRange,
} from '@element-plus/components/time-picker'
import type { DatePickerExpose } from './instance'
import type { Dayjs } from 'dayjs'

dayjs.extend(localeData)
dayjs.extend(advancedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)
dayjs.extend(dayOfYear)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

const datePickerEmits = {
  blur: (evt?: FocusEvent) => evt instanceof FocusEvent || evt === undefined,
  focus: (evt?: FocusEvent) => evt instanceof FocusEvent || evt === undefined,
  'visible-change': (visibility: boolean) => isBoolean(visibility),
  keydown: (evt: KeyboardEvent) => evt instanceof KeyboardEvent,
  [UPDATE_MODEL_EVENT]: (
    val:
      | string
      | number
      | Date
      | Dayjs
      | (string | number | Date | Dayjs)[]
      | null
      | undefined
  ) => val || true,
  [CHANGE_EVENT]: (val: SingleOrRange<DateModelType> | null) =>
    !isUndefined(val),
  'calendar-change': (val: [Date, null | Date]) => val,
  'panel-change': (
    value: Date | [Date, Date],
    mode: 'month' | 'year',
    view: unknown
  ) => (value && mode) || view,
}

export type DatePickerEmits = typeof datePickerEmits

export default defineComponent({
  name: 'ElDatePicker',
  install: null,
  props: datePickerProps,
  emits: datePickerEmits,
  setup(props, { expose, emit, slots }) {
    const ns = useNamespace('picker-panel')

    provide('ElPopperOptions', reactive(toRef(props, 'popperOptions')))
    provide(ROOT_PICKER_INJECTION_KEY, {
      slots,
      pickerNs: ns,
    })

    const commonPicker = ref<InstanceType<typeof CommonPicker>>()
    const refProps: DatePickerExpose = {
      focus: (focusStartInput = true) => {
        commonPicker.value?.focus(focusStartInput)
      },
      handleOpen: () => {
        commonPicker.value?.handleOpen()
      },
      handleClose: () => {
        commonPicker.value?.handleClose()
      },
    }

    expose(refProps)

    // event handlers
    const onModelValueUpdated = (val: any) => emit('update:modelValue', val)
    const onFocus = (evt?: FocusEvent) => emit('focus', evt)
    const onBlur = (evt?: FocusEvent) => emit('blur', evt)
    const onCalendarChange = (val: [Date, null | Date]) =>
      emit('calendar-change', val)
    const onChange = (val: SingleOrRange<DateModelType> | null) =>
      emit('change', val)
    const onKeydown = (key: KeyboardEvent) => emit('keydown', key)
    const onPanelChange = (
      value: Date | [Date, Date],
      mode: 'month' | 'year',
      view: unknown
    ) => emit('panel-change', value, mode, view)
    const onVisibleChange = (visibility: boolean) =>
      emit('visible-change', visibility)

    return () => {
      // since props always have all defined keys on it, {format, ...props} will always overwrite format
      // pick props.format or provide default value here before spreading
      const format =
        props.format ??
        (DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE)

      const Component = getPanel(props.type)

      return (
        <CommonPicker
          {...props}
          format={format}
          type={props.type}
          ref={commonPicker}
          onUpdate:modelValue={onModelValueUpdated}
          onBlur={onBlur}
          onFocus={onFocus}
          onCalendar-change={onCalendarChange}
          onChange={onChange}
          onKeydown={onKeydown}
          onPanel-change={onPanelChange}
          onVisible-change={onVisibleChange}
        >
          {{
            default: (scopedProps: /**FIXME: remove any type */ any) => (
              <Component {...scopedProps} />
            ),
            'range-separator': slots['range-separator'],
          }}
        </CommonPicker>
      )
    }
  },
})
