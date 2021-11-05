import { buildProps } from '@element-plus/utils/props'
import { useFormItemProps } from '@element-plus/hooks'
import { radioEmits } from './radio'
import type { ExtractPropTypes } from '@vue/runtime-core'

export const radioGroupProps = buildProps({
  ...useFormItemProps,
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  fill: {
    type: String,
    default: '',
  },
  textColor: {
    type: String,
    default: '',
  },
} as const)
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export const radioGroupEmits = radioEmits
export type RadioGroupEmits = typeof radioGroupEmits
