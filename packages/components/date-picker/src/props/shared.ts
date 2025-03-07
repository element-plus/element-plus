import { buildProps, definePropType, isArray } from '@element-plus/utils'
import { datePickTypes } from '@element-plus/constants'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'
import type { DatePickType } from '@element-plus/constants'

const selectionModes = [
  'date',
  'dates',
  'year',
  'years',
  'month',
  'months',
  'week',
  'range',
]

export type RangeState = {
  endDate: null | Dayjs
  selecting: boolean
}

export type DisabledDateType = (date: Date) => boolean

export const datePickerSharedProps = buildProps({
  disabledDate: {
    type: definePropType<DisabledDateType>(Function),
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
    type: definePropType<DatePickType>(String),
    required: true,
    values: datePickTypes,
  },
  dateFormat: String,
  timeFormat: String,
  showNow: {
    type: Boolean,
    default: true,
  },
} as const)

export const panelRangeSharedProps = buildProps({
  unlinkPanels: Boolean,
  parsedValue: {
    type: definePropType<Dayjs[]>(Array),
  },
} as const)

export const selectionModeWithDefault = (
  mode: typeof selectionModes[number]
) => {
  return {
    type: String,
    values: selectionModes,
    default: mode,
  }
}

export const rangePickerSharedEmits = {
  pick: (range: [Dayjs, Dayjs]) => isArray(range),
}

export type RangePickerSharedEmits = typeof rangePickerSharedEmits
export type PanelRangeSharedProps = ExtractPropTypes<
  typeof panelRangeSharedProps
>
