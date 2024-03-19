import type { Dayjs } from 'dayjs'

export declare type IDatePickerType =
  | 'year'
  | 'years'
  | 'month'
  | 'date'
  | 'dates'
  | 'week'
  | 'datetime'
  | 'datetimerange'
  | 'daterange'
  | 'monthrange'

type DateCellType = 'normal' | 'today' | 'week' | 'next-month' | 'prev-month'
export interface DateCell {
  column?: number
  customClass?: string
  disabled?: boolean
  end?: boolean
  inRange?: boolean
  row?: number
  selected?: Dayjs
  isCurrent?: boolean
  isSelected?: boolean
  start?: boolean
  text?: number
  timestamp?: number
  date?: Date
  dayjs?: Dayjs
  type?: DateCellType
}
