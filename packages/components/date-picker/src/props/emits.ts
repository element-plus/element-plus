import {
  basicPickerEmits,
  pickerEmitsWhenDate,
} from '@element-plus/components/time-picker'

/**
 * Actually this is not the ultimate solution. The best solution should be defining emits according to props.type
 *
 * if props.type === 'date', use datePickerEmits
 *
 * if props.type === 'daterange', use dateRangePickerEmits
 *
 * timePickerEmits and timeRangePickerEmits may have different params type for same events.
 *
 * For example, when type === 'date', ElTimePicker's "update:modelValue" event params should be `DateModelType | null`,
 * but when type === 'daterange', "update:modelValue" event params should be `[DateModelType, DateModelType] | null`
 *
 * But currently you can only use generic components after Vue3.3.
 * Also, if we want to define emits through generics, it seems like you can only do that with script setup. https://vuejs.org/guide/typescript/overview.html#generic-components
 *
 * Same goes for ElTimePicker component
 *
 */
export const datePickerEmits = {
  ...basicPickerEmits,
  ...pickerEmitsWhenDate,
}

// TODO
// export const dateRangePickerEmits = {}

export type DatePickerEmits = typeof datePickerEmits
