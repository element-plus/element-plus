import { buildProps } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
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
})
export type BarProps = ExtractPropTypes<typeof barProps>

export type BarInstance = InstanceType<typeof Bar> & unknown
