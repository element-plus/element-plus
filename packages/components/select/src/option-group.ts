import { buildProps } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'

export const optionGroupProps = buildProps({
  label: String,
  disabled: {
    type: Boolean,
    default: false,
  },
} as const)
export type OptionGroupProps = ExtractPropTypes<typeof optionGroupProps>

export type OptionGroupContext = OptionGroupProps
