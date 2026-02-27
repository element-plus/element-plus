import { buildProps } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type Thumb from './thumb.vue'

export interface ThumbProps {
  vertical?: boolean
  size?: string
  move?: number
  ratio: number
  always?: boolean
}

/**
 * @deprecated Removed after 3.0.0, Use `ThumbProps` instead.
 */
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

/**
 * @deprecated Removed after 3.0.0, Use `ThumbProps` instead.
 */
export type ThumbPropsPublic = ExtractPublicPropTypes<typeof thumbProps>

export type ThumbInstance = InstanceType<typeof Thumb> & unknown
