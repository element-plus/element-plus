import { buildProps, definePropType } from '@element-plus/utils'
import type { StyleValue } from 'vue'
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
  formatter: {
    type: definePropType<(val: string | number) => string | number>(Function),
  },
  /**
   * @description Numerical content
   */
  value: {
    type: [String, Number],
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
  // rate: {
  //   type: Number,
  //   default: 3,
  // },
} as const)
export const groupFormat = function (
  target: string,
  step = 3,
  groupSeparator = ','
): string {
  const reg = new RegExp(`\\B(?=(\\d{${step}})+(?!\\d))`, 'g')
  return target.replace(reg, groupSeparator)
}
export type StatisticInstance = InstanceType<typeof Statistic>
