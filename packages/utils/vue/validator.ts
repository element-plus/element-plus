import { align, componentSizes, datePickTypes } from '@element-plus/constants'
import type {
  Align,
  ComponentSize,
  DatePickType,
} from '@element-plus/constants'

export const isValidComponentSize = (val: string): val is ComponentSize | '' =>
  ['', ...componentSizes].includes(val)

export const isValidDatePickType = (val: string): val is DatePickType =>
  ([...datePickTypes] as string[]).includes(val)

export const isValidAlign = (val: string): val is Align =>
  align.includes(val as Align)
