import { buildProps } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'

export const radioButtonProps = buildProps({
  label: {
    type: [String, Number, Boolean],
    default: '',
  },
  disabled: Boolean,
  name: {
    type: String,
    default: '',
  },
} as const)

export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>
