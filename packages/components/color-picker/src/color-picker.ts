import { buildProps, isString } from '@element-plus/utils'
import { useSizeProp } from '@element-plus/hooks'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type { ComputedRef, ExtractPropTypes, InjectionKey } from 'vue'
import type ColorPicker from './color-picker.vue'

export const colorPickerProps = buildProps({
  modelValue: String,
  id: String,
  showAlpha: Boolean,
  colorFormat: String,
  disabled: Boolean,
  size: useSizeProp,
  popperClass: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: undefined,
  },
  tabindex: {
    type: [String, Number],
    default: 0,
  },
  predefine: Array,
  validateEvent: {
    type: Boolean,
    default: true,
  },
} as const)
export const colorPickerEmits = {
  change: (color: string | null) => isString(color),
  activeChange: (color: string | null) => isString(color),
  [UPDATE_MODEL_EVENT]: (color: string | null) => isString(color),
}

export type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>
export type ColorPickerEmits = typeof colorPickerEmits
export type ColorPickerInstance = InstanceType<typeof ColorPicker>

export interface ColorPickerContext {
  currentColor: ComputedRef<string>
}

export const colorPickerContextKey: InjectionKey<ColorPickerContext> = Symbol(
  'colorPickerContextKey'
)
