import {
  buildProps,
  definePropType,
  isArray,
  isDate,
} from '@element-plus/utils'
import { INPUT_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import type { ExtractPropTypes } from 'vue'
import type Calendar from './calendar.vue'

export type CalendarDateType =
  | 'prev-month'
  | 'next-month'
  | 'prev-year'
  | 'next-year'
  | 'today'

const isValidRange = (range: unknown): range is [Date, Date] =>
  isArray(range) && range.length === 2 && range.every((item) => isDate(item))

export const calendarProps = buildProps({
  modelValue: {
    type: Date,
  },
  range: {
    type: definePropType<[Date, Date]>(Array),
    validator: isValidRange,
  },
} as const)
export type CalendarProps = ExtractPropTypes<typeof calendarProps>

export const calendarEmits = {
  [UPDATE_MODEL_EVENT]: (value: Date) => isDate(value),
  [INPUT_EVENT]: (value: Date) => isDate(value),
}
export type CalendarEmits = typeof calendarEmits

export type CalendarInstance = InstanceType<typeof Calendar>
