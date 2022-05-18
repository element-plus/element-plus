import { CHANGE_EVENT } from '@element-plus/constants'
import { buildProps, isNumber } from '@element-plus/utils'

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
    values: ['horizontal', 'vertical'] as const,
  },
  alignCenter: {
    type: Boolean,
  },
  simple: {
    type: Boolean,
  },
  finishStatus: {
    type: String,
    default: 'finish',
    values: ['wait', 'process', 'finish', 'error', 'success'] as const,
  },
  processStatus: {
    type: String,
    default: 'process',
    values: ['wait', 'process', 'finish', 'error', 'success'] as const,
  },
} as const)
export type StepsProps = ExtractPropTypes<typeof stepsProps>

export const stepsEmits = {
  [CHANGE_EVENT]: (newVal: number, oldVal: number) =>
    isNumber(newVal) && isNumber(oldVal),
}
export type StepsEmits = typeof stepsEmits
