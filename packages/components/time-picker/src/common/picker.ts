import { isBoolean } from '@element-plus/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import type { DateModelType, SingleOrRange } from './props'
import type { IDatePickerType } from '@element-plus/components/date-picker/src/date-picker.type'
import type { ITimePickerType } from '../types'
import type { Dayjs } from 'dayjs'

export type PickerType = IDatePickerType | ITimePickerType

export const basicPickerEmits = {
  blur: (evt?: FocusEvent) => evt instanceof FocusEvent,
  focus: (evt?: FocusEvent) => evt instanceof FocusEvent,
  'visible-change': (visibility: boolean) => isBoolean(visibility),
  keydown: (evt: KeyboardEvent) => evt instanceof KeyboardEvent,
}

export const pickerEmitsWhenTime = {
  [UPDATE_MODEL_EVENT]: (
    val:
      | string
      | number
      | Date
      | Dayjs
      | (string | number | Date | Dayjs)[]
      | null
      | undefined
  ) => true,
  [CHANGE_EVENT]: (val: SingleOrRange<DateModelType> | null) => true,
}

export const pickerEmitsWhenDate = {
  ...pickerEmitsWhenTime,
  'calendar-change': (val: [Date, null | Date]) => val,
  'panel-change': (
    value: Date | [Date, Date],
    mode: 'month' | 'year',
    view: unknown
  ) => value && mode && view,
}

export const pickerEmits = {
  ...basicPickerEmits,
  ...pickerEmitsWhenDate,
}

export type PickerEmits = typeof pickerEmits
