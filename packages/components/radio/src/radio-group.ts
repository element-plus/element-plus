import { buildProps } from '@element-plus/utils'
import { useSizeProp } from '@element-plus/hooks'
import { radioEmits } from './radio'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const radioGroupProps = buildProps({
  id: {
    type: String,
    default: undefined,
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  fill: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: undefined,
  },
  textColor: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: undefined,
  },
} as const)
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export const radioGroupEmits = radioEmits
export type RadioGroupEmits = typeof radioGroupEmits
