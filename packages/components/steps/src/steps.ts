import { CHANGE_EVENT } from '@element-plus/constants'
import { buildProps, isNumber } from '@element-plus/utils'
import type Steps from './steps.vue'
import type { ExtractPropTypes } from 'vue'

export const stepsProps = buildProps({
  space: {
    type: [Number, String],
    default: '',
  },
  active: {
    type: Number,
    default: 0,
  },
  direction: {
    type: String,
    default: 'horizontal',
    values: ['horizontal', 'vertical'],
  },
  alignCenter: {
    type: Boolean,
  },
  simple: {
    type: Boolean,
  },
  finishStatus: {
    type: String,
    values: ['wait', 'process', 'finish', 'error', 'success'],
    default: 'finish',
  },
  processStatus: {
    type: String,
    values: ['wait', 'process', 'finish', 'error', 'success'],
    default: 'process',
  },
} as const)
export type StepsProps = ExtractPropTypes<typeof stepsProps>

export const stepsEmits = {
  [CHANGE_EVENT]: (newVal: number, oldVal: number) =>
    [newVal, oldVal].every(isNumber),
}
export type StepsEmits = typeof stepsEmits

export type StepsInstance = InstanceType<typeof Steps>
