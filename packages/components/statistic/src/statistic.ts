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
    default: null,
  },
  /**
   * @description Sets the prefix of a number
   */
  prefix: {
    type: String,
  },
  /**
   * @description  Sets the suffix of a number
   */
  suffix: {
    type: String,
  },
  /**
   * @description Numeric titles
   */
  title: {
    type: String,
  },
  /**
   * @description Styles numeric values
   */
  valueStyle: {
    type: definePropType<StyleValue>([String, Object]),
    default: () => ({}),
  },
  // rate: {
  //   type: Number,
  //   default: 3,
  // },
} as const)
export const groupFormat = function (
  target: any,
  _mulriple = 3,
  _groupSeparator = ','
): string {
  const reg = new RegExp(`\\B(?=(\\d{${_mulriple}})+(?!\\d))`, 'g')
  return String(target).replace(reg, _groupSeparator)
}
export type StatisticInstance = InstanceType<typeof Statistic>
