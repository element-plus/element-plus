import { basicPickerEmits, pickerEmitsWhenTime } from './common/picker'

/**
 * Actually this is not the ultimate solution. The best solution should be defining emits according to props.type
 *
 * if props.type === 'time', use timePickerEmits
 *
 * if props.type === 'timerange', use timeRangePickerEmits
 *
 * timePickerEmits and timeRangePickerEmits may have different params type for same events.
 *
 * For example, when type === 'time', the "update:modelValue" event params should be `DateModelType | null`,
 * but when type === 'timerange', the "update:modelValue" event params should be `[DateModelType, DateModelType] | null`
 *
 * But currently you can only use generic components after Vue3.3.
 * Also, if we want to define emits through generics, it seems like you can only do that with script setup. https://vuejs.org/guide/typescript/overview.html#generic-components
 *
 * Same goes for ElDatePicker component
 *
 */
export const timePickerEmits = {
  ...basicPickerEmits,
  ...pickerEmitsWhenTime,
}

// TODO
// export const timeRangePickerEmits = {}

export type TimePickerEmits = typeof timePickerEmits
