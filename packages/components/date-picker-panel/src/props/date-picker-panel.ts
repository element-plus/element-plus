import { buildProps, definePropType } from '@element-plus/utils'
import { disabledTimeListsProps } from '@element-plus/components/time-picker/src/props/shared'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'
import type {
  ModelValueType,
  SingleOrRange,
} from '@element-plus/components/time-picker'
import type { DatePickerType } from '../types'

export const datePickerPanelProps = buildProps({
  /**
   * @description optional, format of binding value. If not specified, the binding value will be a Date object
   */
  valueFormat: String,
  /**
   * @description optional, format of the date displayed in input's inner panel
   */
  dateFormat: String,
  /**
   * @description optional, format of the time displayed in input's inner panel
   */
  timeFormat: String,
  /**
   * @description whether picker is disabled
   */
  disabled: Boolean,
  /**
   * @description binding value, if it is an array, the length should be 2
   */
  modelValue: {
    type: definePropType<ModelValueType>([Date, Array, String, Number]),
    default: '',
  },
  /**
   * @description optional, default date of the calendar
   */
  defaultValue: {
    type: definePropType<SingleOrRange<Date>>([Date, Array]),
  },
  /**
   * @description optional, the time value to use when selecting date range
   */
  defaultTime: {
    type: definePropType<SingleOrRange<Date>>([Date, Array]),
  },
  /**
   * @description whether to pick a time range
   */
  isRange: Boolean,
  ...disabledTimeListsProps,
  /**
   * @description a function determining if a date is disabled with that date as its parameter. Should return a Boolean
   */
  disabledDate: {
    type: Function,
  },
  /**
   * @description set custom className
   */
  cellClassName: {
    type: Function,
  },
  /**
   * @description an object array to set shortcut options
   */
  shortcuts: {
    type: Array,
    default: () => [],
  },
  /**
   * @description whether to pick time using arrow buttons
   */
  arrowControl: Boolean,
  /**
   * @description unlink two date-panels in range-picker
   */
  unlinkPanels: Boolean,
  /**
   * @description whether to show the now button
   */
  showNow: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether to show the confirm button
   */
  showConfirm: Boolean,
  /**
   * @description whether to show footer
   */
  showFooter: Boolean,
  /**
   * @description whether to show the number of the calendar week
   */
  showWeekNumber: Boolean,
  /**
   * @description type of the picker
   */
  type: {
    type: definePropType<DatePickerType>(String),
    default: 'date',
  },
  /**
   * @description whether to show clear button in range mode
   */
  clearable: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether the date picker is bordered
   */
  border: {
    type: Boolean,
    default: true,
  },
} as const)

export type DatePickerPanelProps = ExtractPropTypes<typeof datePickerPanelProps>
export type DatePickerPanelPropsPublic = ExtractPublicPropTypes<
  typeof datePickerPanelProps
>
