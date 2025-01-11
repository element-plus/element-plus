import { placements } from '@popperjs/core'
import { buildProps, definePropType } from '@element-plus/utils'
import {
  useAriaProps,
  useEmptyValuesProps,
  useSizeProp,
} from '@element-plus/hooks'
import { CircleClose } from '@element-plus/icons-vue'
import { disabledTimeListsProps } from '../props/shared'

import type { Component, ExtractPropTypes } from 'vue'
import type { Options } from '@popperjs/core'
import type { Dayjs } from 'dayjs'
import type { Placement } from '@element-plus/components/popper'

export type SingleOrRange<T> = T | [T, T]
export type DateModelType = number | string | Date
export type ModelValueType = SingleOrRange<DateModelType> | string[]
export type DayOrDays = SingleOrRange<Dayjs>
export type DateOrDates = SingleOrRange<Date>
export type UserInput = SingleOrRange<string | null>
export type GetDisabledHours = (role: string, comparingDate?: Dayjs) => number[]
export type GetDisabledMinutes = (
  hour: number,
  role: string,
  comparingDate?: Dayjs
) => number[]
export type GetDisabledSeconds = (
  hour: number,
  minute: number,
  role: string,
  comparingDate?: Dayjs
) => number[]

export const timePickerDefaultProps = buildProps({
  /**
   * @description same as `id` in native input
   */
  id: {
    type: definePropType<SingleOrRange<string>>([Array, String]),
  },
  /**
   * @description same as `name` in native input
   */
  name: {
    type: definePropType<SingleOrRange<string>>([Array, String]),
  },
  /**
   * @description custom class name for TimePicker's dropdown
   */
  popperClass: {
    type: String,
    default: '',
  },
  /**
   * @description format of the displayed value in the input box
   */
  format: String,
  /**
   * @description optional, format of binding value. If not specified, the binding value will be a Date object
   */
  valueFormat: String,
  /**
   * @description optional, format of the date displayed value in TimePicker's dropdown
   */
  dateFormat: String,
  /**
   * @description optional, format of the time displayed value in TimePicker's dropdown
   */
  timeFormat: String,
  /**
   * @description type of the picker
   */
  type: {
    type: String,
    default: '',
  },
  /**
   * @description whether to show clear button
   */
  clearable: {
    type: Boolean,
    default: true,
  },
  /**
   * @description Custom clear icon component
   */
  clearIcon: {
    type: definePropType<string | Component>([String, Object]),
    default: CircleClose,
  },
  /**
   * @description whether the input is editable
   */
  editable: {
    type: Boolean,
    default: true,
  },
  /**
   * @description Custom prefix icon component
   */
  prefixIcon: {
    type: definePropType<string | Component>([String, Object]),
    default: '',
  },
  /**
   * @description size of Input
   */
  size: useSizeProp,
  /**
   * @description whether TimePicker is read only
   */
  readonly: Boolean,
  /**
   * @description whether TimePicker is disabled
   */
  disabled: Boolean,
  /**
   * @description placeholder in non-range mode
   */
  placeholder: {
    type: String,
    default: '',
  },
  /**
   * @description [popper.js](https://popper.js.org/docs/v2/) parameters
   */
  popperOptions: {
    type: definePropType<Partial<Options>>(Object),
    default: () => ({}),
  },
  /**
   * @description binding value, if it is an array, the length should be 2
   */
  modelValue: {
    type: definePropType<ModelValueType>([Date, Array, String, Number]),
    default: '',
  },
  /**
   * @description range separator
   */
  rangeSeparator: {
    type: String,
    default: '-',
  },
  /**
   * @description placeholder for the start date in range mode
   */
  startPlaceholder: String,
  /**
   * @description placeholder for the end date in range mode
   */
  endPlaceholder: String,
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
   * @description input tabindex
   */
  tabindex: {
    type: definePropType<string | number>([String, Number]),
    default: 0,
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  /**
   * @description unlink two date-panels in range-picker
   */
  unlinkPanels: Boolean,
  /**
   * @description position of dropdown
   */
  placement: {
    type: definePropType<Placement>(String),
    values: placements,
    default: 'bottom',
  },
  /**
   * @description list of possible positions for dropdown
   */
  fallbackPlacements: {
    type: definePropType<Placement[]>(Array),
    default: ['bottom', 'top', 'right', 'left'],
  },
  ...useEmptyValuesProps,
  ...useAriaProps(['ariaLabel']),
  /**
   * @description whether to show the now button
   */
  showNow: {
    type: Boolean,
    default: true,
  },
} as const)

export type TimePickerDefaultProps = ExtractPropTypes<
  typeof timePickerDefaultProps
>

export interface PickerOptions {
  isValidValue: (date: DayOrDays) => boolean
  handleKeydownInput: (event: KeyboardEvent) => void
  parseUserInput: (value: UserInput) => DayOrDays
  formatToString: (value: DayOrDays) => UserInput
  getRangeAvailableTime: (date: DayOrDays) => DayOrDays
  getDefaultValue: () => DayOrDays
  panelReady: boolean
  handleClear: () => void
  handleFocusPicker?: () => void
}

export const timePickerRangeTriggerProps = buildProps({
  id: {
    type: definePropType<string[]>(Array),
  },
  name: {
    type: definePropType<string[]>(Array),
  },
  modelValue: {
    type: definePropType<UserInput>([Array, String]),
  },
  startPlaceholder: String,
  endPlaceholder: String,
} as const)

/**
 * @deprecated Use `timePickerRangeTriggerProps` instead. This will be removed in future versions.
 */
export const timePickerRngeTriggerProps = timePickerRangeTriggerProps
