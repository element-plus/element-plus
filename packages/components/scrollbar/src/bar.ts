import { buildProps } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'

export const barProps = buildProps({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: Number,
  always: Boolean,
} as const)
export type BarProps = ExtractPropTypes<typeof barProps>
