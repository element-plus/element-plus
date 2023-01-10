import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes, StyleValue } from 'vue'
import type { Dayjs } from 'dayjs'
import type Statistic from './statistic.vue'

export const statisticProps = buildProps({
  /**
   * @description Setting the decimal point
   */
  decimalSeparator: {
    type: String,
    default: '.',
  },
  /**
   * @description Sets the thousandth identifier
   */
  groupSeparator: {
    type: String,
    default: ',',
  },
  /**
   * @description numerical precision
   */
  precision: {
    type: Number,
    default: 0,
  },
  /**
   * @description Custom numerical presentation
   */
  formatter: Function,
  /**
   * @description Numerical content
   */
  value: {
    type: definePropType<number | Dayjs>([Number, Object]),
    default: 0,
  },
  /**
   * @description Sets the prefix of a number
   */
  prefix: String,

  /**
   * @description  Sets the suffix of a number
   */
  suffix: String,
  /**
   * @description Numeric titles
   */
  title: String,
  /**
   * @description Styles numeric values
   */
  valueStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
  },
} as const)
export type StatisticProps = ExtractPropTypes<typeof statisticProps>

export type StatisticInstance = InstanceType<typeof Statistic>
