import { buildProps, definePropType, isNumber } from '@element-plus/utils'
import { CHANGE_EVENT } from '@element-plus/constants'

import type { ExtractPropTypes, StyleValue } from 'vue'
import type { Dayjs } from 'dayjs'
import type Countdown from './countdown.vue'

export const countdownProps = buildProps({
  /**
   * @description Formatting the countdown display
   */
  format: {
    type: String,
    default: 'HH:mm:ss',
  },
  /**
   * @description Sets the prefix of a countdown
   */
  prefix: String,
  /**
   * @description Sets the suffix of a countdown
   */
  suffix: String,
  /**
   * @description countdown titles
   */
  title: String,
  /**
   * @description target time
   */
  value: {
    type: definePropType<number | Dayjs>([Number, Object]),
    default: 0,
  },
  /**
   * @description Styles countdown values
   */
  valueStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
  },
} as const)
export type CountdownProps = ExtractPropTypes<typeof countdownProps>

export const countdownEmits = {
  finish: () => true,
  [CHANGE_EVENT]: (value: number) => isNumber(value),
}
export type CountdownEmits = typeof countdownEmits

export type CountdownInstance = InstanceType<typeof Countdown>
