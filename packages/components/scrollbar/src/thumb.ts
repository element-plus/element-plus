import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type Thumb from './thumb.vue'

export const thumbProps = buildProps({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: true,
  },
  always: Boolean,
} as const)
export type ThumbProps = ExtractPropTypes<typeof thumbProps>
export type ThumbPropsPublic = __ExtractPublicPropTypes<typeof thumbProps>

export type ThumbInstance = InstanceType<typeof Thumb> & unknown
