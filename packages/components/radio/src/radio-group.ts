import { buildProps } from '@element-plus/utils'
import { useSizeProp } from '@element-plus/hooks'
import { radioEmits } from './radio'
import type { ExtractPropTypes } from '@vue/runtime-core'
import type RadioGroup from './radio-group.vue'

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
  validateEvent: {
    type: Boolean,
    default: true,
  },
} as const)
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export const radioGroupEmits = radioEmits
export type RadioGroupEmits = typeof radioGroupEmits
export type RadioGroupInstance = InstanceType<typeof RadioGroup>
