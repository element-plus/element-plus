import { buildProps, definePropType, isObject } from '@element-plus/utils'
import { rangeArr } from '@element-plus/components/src/time-picker'
import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'
import type DateTable from './date-table.vue'

export type CalendarDateCellType = 'next' | 'prev' | 'current'
export type CalendarDateCell = {
  text: number
  type: CalendarDateCellType
}

export const getPrevMonthLastDays = (date: Dayjs, count: number) => {
  const lastDay = date.subtract(1, 'month').endOf('month').date()
  return rangeArr(count).map((_, index) => lastDay - (count - index - 1))
}

export const getMonthDays = (date: Dayjs) => {
  const days = date.daysInMonth()
  return rangeArr(days).map((_, index) => index + 1)
}

export const toNestedArr = (days: CalendarDateCell[]) =>
  rangeArr(days.length / 7).map((index) => {
    const start = index * 7
    return days.slice(start, start + 7)
  })

export const dateTableProps = buildProps({
  selectedDay: {
    type: definePropType<Dayjs>(Object),
  },
  range: {
    type: definePropType<[Dayjs, Dayjs]>(Array),
  },
  date: {
    type: definePropType<Dayjs>(Object),
    required: true,
  },
  hideHeader: {
    type: Boolean,
  },
} as const)
export type DateTableProps = ExtractPropTypes<typeof dateTableProps>

export const dateTableEmits = {
  pick: (value: Dayjs) => isObject(value),
}
export type DateTableEmits = typeof dateTableEmits

export type DateTableInstance = InstanceType<typeof DateTable>
