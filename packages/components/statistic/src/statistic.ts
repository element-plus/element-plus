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
  valueStyle: {
    type: definePropType<StyleValue>([String, Object]),
    default: () => ({}),
  },
  rate: {
    type: Number,
    default: 3,
  },
} as const)
export const regroup = function (
  target: any,
  _mulriple = 3,
  _groupSeparator = ','
): string {
  const reg = new RegExp(`\\B(?=(\\d{${_mulriple}})+(?!\\d))`, 'g')
  return String(target).replace(reg, _groupSeparator)
}
export type StatisticInstance = InstanceType<typeof Statistic>
