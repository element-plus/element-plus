import { buildProps, definePropType } from '@element-plus/utils'
import { datePickTypes } from '@element-plus/constants'

import type { Dayjs } from 'dayjs'

const selectionModes = ['date', 'dates', 'year', 'month', 'week']

type RangeState = {
  endDate: null | Dayjs
  selecting: boolean
}

export const datePickerSharedProps = buildProps({
  disabledDate: {
    type: definePropType<(date: Date) => boolean>(Function),
  },
  date: {
    type: definePropType<Dayjs>(Object),
    required: true,
  },
  minDate: {
    type: definePropType<Dayjs | null>(Object),
  },
  maxDate: {
    type: definePropType<Dayjs | null>(Object),
  },
  parsedValue: {
    type: definePropType<Dayjs | Dayjs[]>([Object, Array]),
    required: true,
  },
  rangeState: {
    type: definePropType<RangeState>(Object),
    default: () => ({
      endDate: null,
      selecting: false,
    }),
  },
} as const)

export const panelSharedProps = buildProps({
  type: {
    type: definePropType<typeof datePickTypes>(String),
    required: true,
    values: datePickTypes,
  },
})

export const selectionModeWithDefault = (
  mode: typeof selectionModes[number]
) => {
  return {
    type: String,
    values: selectionModes,
    default: mode,
  }
}
