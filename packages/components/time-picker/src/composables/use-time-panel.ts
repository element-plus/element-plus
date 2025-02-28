import type { Dayjs } from 'dayjs'

import type {
  GetDisabledHours,
  GetDisabledMinutes,
  GetDisabledSeconds,
} from '../common/props'

type UseTimePanelProps = {
  getAvailableHours: GetDisabledHours
  getAvailableMinutes: GetDisabledMinutes
  getAvailableSeconds: GetDisabledSeconds
}

export const useTimePanel = ({
  getAvailableHours,
  getAvailableMinutes,
  getAvailableSeconds,
}: UseTimePanelProps) => {
  const getAvailableTime = (
    date: Dayjs,
    role: string,
    first: boolean,
    compareDate?: Dayjs
  ) => {
    const availableTimeGetters = {
      hour: getAvailableHours,
      minute: getAvailableMinutes,
      second: getAvailableSeconds,
    } as const
    let result = date
    ;(['hour', 'minute', 'second'] as const).forEach((type) => {
      if (availableTimeGetters[type]) {
        let availableTimeSlots: number[]
        const method = availableTimeGetters[type]
        switch (type) {
          case 'minute': {
            availableTimeSlots = (method as typeof getAvailableMinutes)(
              result.hour(),
              role,
              compareDate
            )
            break
          }
          case 'second': {
            availableTimeSlots = (method as typeof getAvailableSeconds)(
              result.hour(),
              result.minute(),
              role,
              compareDate
            )
            break
          }
          default: {
            availableTimeSlots = (method as typeof getAvailableHours)(
              role,
              compareDate
            )
            break
          }
        }

        if (
          availableTimeSlots?.length &&
          !availableTimeSlots.includes(result[type]())
        ) {
          const pos = first ? 0 : availableTimeSlots.length - 1
          result = result[type](availableTimeSlots[pos]) as unknown as Dayjs
        }
      }
    })
    return result
  }

  const timePickerOptions: Record<string, (...args: any[]) => void> = {}

  const onSetOption = ([key, val]: [string, (...args: any[]) => void]) => {
    timePickerOptions[key] = val
  }

  return {
    timePickerOptions,

    getAvailableTime,
    onSetOption,
  }
}
