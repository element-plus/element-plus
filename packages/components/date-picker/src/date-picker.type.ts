import type { Dayjs } from 'dayjs'

export declare type IDatePickerType =
  | 'year'
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

export interface MonthCell {
  column: number
  row: number
  disabled: boolean
  start: boolean
  end: boolean
  text: string
  index: number
  type: 'normal' | 'today'
  inRange: boolean
  dayjs: Dayjs
  date: Date
  isCurrent: boolean
  timestamp: number
}
