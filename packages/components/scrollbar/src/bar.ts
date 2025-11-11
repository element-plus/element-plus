import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type Bar from './bar.vue'

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
export type BarProps = ExtractPropTypes<typeof barProps>
export type BarPropsPublic = __ExtractPublicPropTypes<typeof barProps>

export type BarInstance = InstanceType<typeof Bar> & unknown
