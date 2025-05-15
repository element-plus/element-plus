import {
  columnAlignment,
  componentSizes,
  datePickTypes,
} from '@element-plus/constants'
import type {
  ColumnAlignment,
  ComponentSize,
  DatePickType,
} from '@element-plus/constants'

export const isValidComponentSize = (val: string): val is ComponentSize | '' =>
  ['', ...componentSizes].includes(val)

export const isValidDatePickType = (val: string): val is DatePickType =>
  ([...datePickTypes] as string[]).includes(val)

export const isValidColumnAlignment = (val: string): val is ColumnAlignment =>
  columnAlignment.includes(val as ColumnAlignment)
