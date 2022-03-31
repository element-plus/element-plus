import { buildProps } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'

export const barProps = buildProps({
  always: {
    type: Boolean,
    default: true,
  },
  width: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '',
  },
  ratioX: {
    type: Number,
    default: 1,
  },
  ratioY: {
    type: Number,
    default: 1,
  },
} as const)
export type BarProps = ExtractPropTypes<typeof barProps>
