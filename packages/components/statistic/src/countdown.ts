import { divide, floor, multiply, padStart, reduce } from 'lodash-unified'
import dayjs from 'dayjs'
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

export const formatTimeStr = function (
  format: any,
  time: number,
  futureTime: any
) {
  const timeUnits: any = [
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
        let sum: any = 0
        if (name == 'M') {
          //Revision of month
          sum = Math.abs(dayjs().diff(dayjs(futureTime), name))
          time -= Math.abs(
            dayjs().diff(dayjs().add(sum, 'month').format(), 'day') *
              timeUnits[2][1]
          )
        } else {
          sum = floor(divide(time, item[1]))
          time -= multiply(sum, item[1])
        }
        sum = padStart(String(sum), String(match).length, '0') // autoCompletion
        return sum
      })
    },
    format
  )
}

export type CountdownInstance = InstanceType<typeof Countdown>
