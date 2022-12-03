import { buildProps, definePropType } from '@element-plus/utils'
import type { StyleValue } from 'vue'
import type Statistic from './statistic.vue'
export const statisticProps = buildProps({
  decimalSeparator: {
    type: String,
    default: '.',
  },
  groupSeparator: {
    type: String,
    default: ',',
  },
  precision: {
    type: Number,
    default: null,
  },
  formatter: {
    type: definePropType<(val: string | number) => string | number>(Function),
  },
  value: {
    type: [String, Number],
    default: null,
  },
  prefix: {
    type: String,
    default: '',
  },
  suffix: {
    type: String,
    default: null,
  },
  title: {
    type: [String, Number],
    default: '',
  },
  timeIndices: {
    type: Boolean,
    default: false,
  },
  valueStyle: {
    type: definePropType<StyleValue>([String, Object]),
    default: () => ({}),
  },
  format: {
    type: String,
    default: 'HH:mm:ss:SSS',
  },
  rate: {
    type: Number,
    default: 1000,
  },
} as const)
export const magnification = function (
  num: number,
  _mulriple = 1000,
  _groupSeparator = ','
): string {
  const level = String(_mulriple).length - 1
  const reg = new RegExp(`\\d{1,${level}}(?=(\\d{${level}})+$)`, 'g')
  const result = String(num)
    .replace(reg, '$&,')
    .split(',')
    .join(_groupSeparator)
  return result
}
export type StatisticInstance = InstanceType<typeof Statistic>
