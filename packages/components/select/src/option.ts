import { buildProps } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'

export const optionProps = buildProps({
  value: {
    type: [String, Number, Boolean, Object],
    required: true,
  },
  label: {
    type: [String, Number],
    default: '',
  },
  created: Boolean,
  disabled: {
    type: Boolean,
    default: false,
  },
} as const)

export type OptionProps = ExtractPropTypes<typeof optionProps>
