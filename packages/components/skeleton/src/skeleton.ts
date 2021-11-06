import { buildProps } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'

export const skeletonProps = buildProps({
  animated: {
    type: Boolean,
    default: false,
  },
  count: {
    type: Number,
    default: 1,
  },
  rows: {
    type: Number,
    default: 3,
  },
  loading: {
    type: Boolean,
    default: true,
  },
  throttle: {
    type: Number,
  },
} as const)
export type SKeletonProps = ExtractPropTypes<typeof skeletonProps>
