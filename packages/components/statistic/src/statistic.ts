import { divide, floor, multiply, padStart, reduce } from 'lodash-unified'
import { buildProps } from '@element-plus/utils'
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
    type: Object,
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
export const diffDate = function (minuend: number, subtrahend: number): number {
  return Math.max(minuend - subtrahend, 0)
}
export const formatTimeStr = function (format: any, time: number) {
  const timeUnits = [
    ['Y', 1000 * 60 * 60 * 24 * 365], // years
    ['M', 1000 * 60 * 60 * 24 * 30], // months
    ['D', 1000 * 60 * 60 * 24], // days
    ['H', 1000 * 60 * 60], // hours
    ['m', 1000 * 60], // minutes
    ['s', 1000], // seconds
    ['S', 1], // million seconds
  ]
  return reduce(
    timeUnits,
    (con: string, item: any[]) => {
      const name = item[0]
      return con.replace(new RegExp(`${name}+`, 'g'), (match: any) => {
        let sum: any = floor(divide(time, item[1]))
        time -= multiply(sum, item[1])
        sum = padStart(String(sum), String(match).length, '0') // autoCompletion
        return sum
      })
    },
    format
  )
}
