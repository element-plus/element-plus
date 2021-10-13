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

export declare type rowType = Partial<{
  row: number
  column: number
  type: string
  inRange: boolean
  start: boolean
  end: boolean
  text: number
  selected: Dayjs
  disabled: boolean
  customClass: string
}>
