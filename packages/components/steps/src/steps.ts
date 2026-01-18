import { CHANGE_EVENT } from '@element-plus/constants'
import { buildProps, isNumber } from '@element-plus/utils'

import type Steps from './steps.vue'
import type { ExtractPublicPropTypes } from 'vue'

export type StepsStatus = 'wait' | 'process' | 'finish' | 'error' | 'success'

export interface StepsProps {
  /**
   * @description the spacing of each step, will be responsive if omitted. Supports percentage.
   * @default ''
   */
  space?: number | string
  /**
   * @description current activation step
   * @default 0
   */
  active?: number
  /**
   * @description display direction
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * @description center title and description
   */
  alignCenter?: boolean
  /**
   * @description whether to apply simple theme
   */
  simple?: boolean
  /**
   * @description status of end step
   * @default 'finish'
   */
  finishStatus?: StepsStatus
  /**
   * @description status of current step
   * @default 'process'
   */
  processStatus?: StepsStatus
}

/**
 * @deprecated Removed after 3.0.0, Use `stepsProps` instead.
 */
export const stepsProps = buildProps({
  /**
   * @description the spacing of each step, will be responsive if omitted. Supports percentage.
   */
  space: {
    type: [Number, String],
    default: '',
  },
  /**
   * @description current activation step
   */
  active: {
    type: Number,
    default: 0,
  },
  /**
   * @description display direction
   */
  direction: {
    type: String,
    default: 'horizontal',
    values: ['horizontal', 'vertical'],
  },
  /**
   * @description center title and description
   */
  alignCenter: {
    type: Boolean,
  },
  /**
   * @description whether to apply simple theme
   */
  simple: {
    type: Boolean,
  },
  /**
   * @description status of end step
   */
  finishStatus: {
    type: String,
    values: ['wait', 'process', 'finish', 'error', 'success'],
    default: 'finish',
  },
  /**
   * @description status of current step
   */
  processStatus: {
    type: String,
    values: ['wait', 'process', 'finish', 'error', 'success'],
    default: 'process',
  },
} as const)
export type StepsPropsPublic = ExtractPublicPropTypes<typeof stepsProps>

export const stepsEmits = {
  [CHANGE_EVENT]: (newVal: number, oldVal: number) =>
    [newVal, oldVal].every(isNumber),
}
export type StepsEmits = typeof stepsEmits

export type StepsInstance = InstanceType<typeof Steps> & unknown
