import { buildProps, definePropType } from '@element-plus/utils/props'
import { isValidComponentSize } from '@element-plus/utils/validators'
import { radioEmits } from './radio'
import type { ExtractPropTypes } from '@vue/runtime-core'
import type { ComponentSize } from '@element-plus/utils/types'

export const radioGroupProps = buildProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  size: {
    type: definePropType<ComponentSize>([String]),
    validator: isValidComponentSize,
  },
  fill: {
    type: String,
    default: '',
  },
  textColor: {
    type: String,
    default: '',
  },
  disabled: Boolean,
} as const)

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export const radioGroupEmits = radioEmits
export type RadioGroupEmits = typeof radioGroupEmits
