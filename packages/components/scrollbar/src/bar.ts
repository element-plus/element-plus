import { buildProps } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type Bar from './bar.vue'

export interface BarProps {
  always?: boolean
  minSize: number
}

/**
 * @deprecated Removed after 3.0.0, Use `BarProps` instead.
 */
export const barProps = buildProps({
  always: {
    type: Boolean,
    default: true,
  },
  minSize: {
    type: Number,
    required: true,
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `BarProps` instead.
 */
export type BarPropsPublic = ExtractPublicPropTypes<typeof barProps>

export type BarInstance = InstanceType<typeof Bar> & unknown
