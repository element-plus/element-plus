import { checkboxProps, checkboxEmits } from './checkbox'
import type { ExtractPropTypes } from 'vue'

export const checkboxButtonProps = {
  ...checkboxProps,
}

export type CheckboxButtonProps = ExtractPropTypes<typeof checkboxButtonProps>

export const checkboxButtonEmits = {
  ...checkboxEmits,
}

export type CheckboxButtonEmits = typeof checkboxButtonEmits
