import { buildProps, definePropType } from '@element-plus/utils'
import { datePickerSharedProps, selectionModeWithDefault } from './shared'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'

export const basicDateTableProps = buildProps({
  ...datePickerSharedProps,
  cellClassName: {
    type: definePropType<(date: Date) => string>(Function),
  },
  showWeekNumber: Boolean,
  selectionMode: selectionModeWithDefault('date'),
} as const)

export type BasicDateTableProps = ExtractPropTypes<typeof basicDateTableProps>

export type RangePickerEmits = { minDate: Dayjs; maxDate: null }
export type DatePickerEmits = Dayjs
export type DatesPickerEmits = Dayjs[]
export type WeekPickerEmits = {
  year: number
  week: number
  value: string
  date: Dayjs
}

export type DateTableEmits =
  | RangePickerEmits
  | DatePickerEmits
  | DatesPickerEmits
  | WeekPickerEmits
