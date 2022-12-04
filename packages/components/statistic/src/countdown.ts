import { padStart } from 'lodash-unified'
import { buildProps, definePropType } from '@element-plus/utils'
import type { StyleValue } from 'vue'
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
  prefix: {
    type: String,
  },
  /**
   * @description Sets the suffix of a countdown
   */
  suffix: {
    type: String,
  },
  /**
   * @description countdown titles
   */
  title: {
    type: String,
  },
  /**
   * @description Styles countdown values
   */
  value: {
    type: definePropType<number | Dayjs>([Number, Object]),
  },
  /**
   * @description numerical precision
   */
  valueStyle: {
    type: definePropType<StyleValue>([String, Object]),
    default: () => ({}),
  },
} as const)

export const countdownEmits = {
  finish: () => true,
  change: (value: number) => !!value,
}

export const formatTimeStr = function (format: string, time: number) {
  const timeUnits: [string, number][] = [
    ['Y', 1000 * 60 * 60 * 24 * 365], // years
    ['M', 1000 * 60 * 60 * 24 * 30], // months
    ['D', 1000 * 60 * 60 * 24], // days
    ['H', 1000 * 60 * 60], // hours
    ['m', 1000 * 60], // minutes
    ['s', 1000], // seconds
    ['S', 1], // million seconds
  ]
  // The unformatted value of the previous tick
  let pre = 0
  // previous tick
  let preTick = 0
  // time left
  let timeLeft = time
  return timeUnits.reduce((con: string, item: [string, number]) => {
    const name = item[0]
    return con.replace(new RegExp(`${name}+`, 'g'), (match) => {
      let sum = 0
      if (!format.includes(name)) {
        pre = Math.floor(timeLeft / item[1])
        timeLeft = timeLeft - pre * item[1]
        preTick = item[1]
      } else {
        pre = 0
        preTick = 0
        sum = Math.floor(timeLeft / item[1])
        timeLeft = timeLeft - sum * item[1]
        if (pre > 0) {
          sum = sum + pre * (preTick / item[1])
          pre = 0
        }
      }
      return padStart(String(sum), match.length, '0') // autoCompletion
    })
  }, format)
}

export type CountdownInstance = InstanceType<typeof Countdown>
