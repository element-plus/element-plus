import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPublicPropTypes, StyleValue } from 'vue'
import type { Dayjs } from 'dayjs'
import type Statistic from './statistic.vue'

export interface StatisticProps {
  /**
   * @description Setting the decimal point
   */
  decimalSeparator?: string
  /**
   * @description Sets the thousandth identifier
   */
  groupSeparator?: string
  /**
   * @description numerical precision
   */
  precision?: number
  /**
   * @description Custom numerical presentation
   */
  formatter?: (...args: any[]) => string | number
  /**
   * @description Numerical content
   */
  value?: number | Dayjs
  /**
   * @description Sets the prefix of a number
   */
  prefix?: string
  /**
   * @description  Sets the suffix of a number
   */
  suffix?: string
  /**
   * @description Numeric titles
   */
  title?: string
  /**
   * @description Styles numeric values
   */
  valueStyle?: StyleValue
}

/**
 * @deprecated Removed after 3.0.0, Use `StatisticProps` instead.
 */
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

/**
 * @deprecated Removed after 3.0.0, Use `StatisticProps` instead.
 */
export type StatisticPropsPublic = ExtractPublicPropTypes<typeof statisticProps>

export type StatisticInstance = InstanceType<typeof Statistic> & unknown
