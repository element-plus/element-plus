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
    validator: (val: string): boolean =>
      ['horizontal', 'vertical'].includes(val),
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
    validator: (val: string): boolean =>
      ['wait', 'process', 'finish', 'error', 'success'].includes(val),
  },
  processStatus: {
    type: String,
    default: 'process',
    validator: (val: string): boolean =>
      ['wait', 'process', 'finish', 'error', 'success'].includes(val),
  },
} as const)
export type StepsProps = ExtractPropTypes<typeof stepsProps>

export const stepsEmits = {
  [CHANGE_EVENT]: (newVal: number, oldVal: number) =>
    isNumber(newVal) && isNumber(oldVal),
}
export type StepsEmits = typeof stepsEmits
