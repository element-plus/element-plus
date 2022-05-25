import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'

type RangeState = {
  endDate: null
  selecting: boolean
}

export const basicDateTableProps = buildProps({
  date: {
    type: definePropType<Dayjs>(Object),
  },
  minDate: {
    type: definePropType<Dayjs>(Object),
  },
  maxDate: {
    type: definePropType<Dayjs>(Object),
  },
  parsedValue: {
    type: definePropType<Dayjs | Dayjs[]>([Object, Array]),
  },
  selectionMode: {
    type: String,
    default: 'date',
  },
  showWeekNumber: Boolean,
  disabledDate: {
    type: Function,
  },
  cellClassName: {
    type: Function,
  },
  rangeState: {
    type: definePropType<RangeState>(Object),
    default: () => ({
      endDate: null,
      selecting: false,
    }),
  },
} as const)

export type BasicDateTableProps = ExtractPropTypes<typeof basicDateTableProps>
