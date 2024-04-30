import {
  componentSizes,
  datePickTypes,
  directionTypes,
} from '@element-plus/constants'
import type {
  ComponentSize,
  DatePickType,
  DirectionType,
} from '@element-plus/constants'

export const isValidComponentSize = (val: string): val is ComponentSize | '' =>
  ['', ...componentSizes].includes(val)

export const isValidDatePickType = (val: string): val is DatePickType =>
  ([...datePickTypes] as string[]).includes(val)

export const isDirectionType = (val: string): val is DirectionType =>
  ([...directionTypes] as string[]).includes(val)
