import { CHANGE_EVENT } from '@element-plus/utils/constants'
import { buildProps } from '@element-plus/utils/props'
import { isNumber } from '@element-plus/utils/util'
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
    default: false,
  },
  simple: {
    type: Boolean,
    default: false,
  },
  finishStatus: {
    type: String,
    default: 'finish',
    values: ['wait', 'process', 'finish', 'error', 'success'],
  },
  processStatus: {
    type: String,
    default: 'process',
    values: ['wait', 'process', 'finish', 'error', 'success'],
  },
} as const)
export type StepsProps = ExtractPropTypes<typeof stepsProps>

export const stepsEmits = {
  [CHANGE_EVENT]: (newValue: number, oldValue: number) => isNumber(oldValue),
}
export type StepsEmits = typeof stepsEmits

export type StepsInstance = InstanceType<typeof Steps>
