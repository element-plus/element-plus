import {
  buildProps,
  definePropType,
  isArray,
  isDate,
} from '@element-plus/utils'
import { INPUT_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type { ExtractPublicPropTypes } from 'vue'

export type CalendarDateType =
  | 'prev-month'
  | 'next-month'
  | 'prev-year'
  | 'next-year'
  | 'today'

const isValidRange = (range: unknown): range is [Date, Date] =>
  isArray(range) && range.length === 2 && range.every((item) => isDate(item))

export interface CalendarProps {
  modelValue?: Date
  range?: [Date, Date]
  controllerType?: 'button' | 'select'
  formatter?: (value: number, type: 'year' | 'month') => string | number
}

export const calendarProps = buildProps({
  /**
   * @description binding value
   */
  modelValue: {
    type: Date,
  },
  /**
   * @description time range, including start time and end time.
   *   Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months.
   */
  range: {
    type: definePropType<[Date, Date]>(Array),
    validator: isValidRange,
  },
  /**
   * @description type of the controller for the Calendar header
   */
  controllerType: {
    type: String,
    values: ['button', 'select'],
    default: 'button',
  },
  /**
   * @description format label when `controller-type` is 'select'
   */
  formatter: {
    type: definePropType<
      (value: number, type: 'year' | 'month') => string | number
    >(Function),
  },
} as const)
export type CalendarPropsPublic = ExtractPublicPropTypes<typeof calendarProps>

export const calendarEmits = {
  [UPDATE_MODEL_EVENT]: (value: Date) => isDate(value),
  [INPUT_EVENT]: (value: Date) => isDate(value),
}
export type CalendarEmits = typeof calendarEmits
