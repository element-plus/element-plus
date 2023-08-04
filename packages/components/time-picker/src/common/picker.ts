import { isBoolean, isUndefined } from '@element-plus/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import type { DateModelType, SingleOrRange } from './props'
import type { IDatePickerType } from '@element-plus/components/date-picker/src/date-picker.type'
import type { ITimePickerType } from '../types'
import type { Dayjs } from 'dayjs'

// TODO encapsulate date-picker emits and time-picker emits better

/**
 * the emits are redefined in ElDatePicker and ElTimePicker again
 *
 * because if you import the emits from another file, sometimes you can't get correct params type infer from ts
 *
 * for the example below, if I hover the cursor on `@some-change`, sometimes my local env will just show `@some-change: any`
 *
 * not sure if it's a problem of my local env
 *
 * @example
 * ```ts
 * // a.ts
 * export const someEmits = {
 *   someChange: (val: number | string) => val !== undefined
 * }
 *
 * // TestComp.vue
 * import { someEmits } from './a'
 *
 * export default defineComponent({
 * ...
 *  emits: someEmits
 * ...
 * })
 *
 * // father.vue
 * <template>
 *   <TestComp @some-change="" />
 * </template>
 *
 * ```
 *
 */

export const basicPickerEmits = {
  blur: (evt?: FocusEvent) => evt instanceof FocusEvent || evt === undefined,
  focus: (evt?: FocusEvent) => evt instanceof FocusEvent || evt === undefined,
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
  ) => val || true,
  [CHANGE_EVENT]: (val: SingleOrRange<DateModelType> | null) =>
    !isUndefined(val),
}

export const pickerEmitsWhenDate = {
  ...pickerEmitsWhenTime,
  'calendar-change': (val: [Date, null | Date]) => val,
  'panel-change': (
    value: Date | [Date, Date],
    mode: 'month' | 'year',
    view: unknown
  ) => (value && mode) || view,
}

export const pickerEmits = {
  ...basicPickerEmits,
  ...pickerEmitsWhenDate,
}

export type PickerEmits = typeof pickerEmits
export type PickerType = IDatePickerType | ITimePickerType
