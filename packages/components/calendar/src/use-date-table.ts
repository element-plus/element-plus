import { computed } from 'vue'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData.js'
import { useLocale } from '@element-plus/hooks'
import { rangeArr } from '@element-plus/components/time-picker'
import { WEEK_DAYS } from '@element-plus/constants'
import { getMonthDays, getPrevMonthLastDays, toNestedArr } from './date-table'

import type { SetupContext } from 'vue'
import type { Dayjs } from 'dayjs'
import type {
  CalendarDateCell,
  CalendarDateCellType,
  DateTableEmits,
  DateTableProps,
} from './date-table'

export const useDateTable = (
  props: DateTableProps,
  emit: SetupContext<DateTableEmits>['emit']
) => {
  dayjs.extend(localeData)
  // https://day.js.org/docs/en/i18n/locale-data
  const firstDayOfWeek: number = dayjs.localeData().firstDayOfWeek()

  const { t, lang } = useLocale()
  const now = dayjs().locale(lang.value)

  const isInRange = computed(() => !!props.range && !!props.range.length)

  const rows = computed(() => {
    let days: CalendarDateCell[] = []
    if (isInRange.value) {
      const [start, end] = props.range!
      const currentMonthRange: CalendarDateCell[] = rangeArr(
        end.date() - start.date() + 1
      ).map((index) => ({
        text: start.date() + index,
        type: 'current',
      }))

      let remaining = currentMonthRange.length % 7
      remaining = remaining === 0 ? 0 : 7 - remaining
      const nextMonthRange: CalendarDateCell[] = rangeArr(remaining).map(
        (_, index) => ({
          text: index + 1,
          type: 'next',
        })
      )
      days = currentMonthRange.concat(nextMonthRange)
    } else {
      const firstDay = props.date.startOf('month').day()
      const prevMonthDays: CalendarDateCell[] = getPrevMonthLastDays(
        props.date,
        (firstDay - firstDayOfWeek + 7) % 7
      ).map((day) => ({
        text: day,
        type: 'prev',
      }))
      const currentMonthDays: CalendarDateCell[] = getMonthDays(props.date).map(
        (day) => ({
          text: day,
          type: 'current',
        })
      )
      days = [...prevMonthDays, ...currentMonthDays]
      const remaining = 7 - (days.length % 7 || 7)
      const nextMonthDays: CalendarDateCell[] = rangeArr(remaining).map(
        (_, index) => ({
          text: index + 1,
          type: 'next',
        })
      )
      days = days.concat(nextMonthDays)
    }
    return toNestedArr(days)
  })

  const weekDays = computed(() => {
    const start = firstDayOfWeek
    if (start === 0) {
      return WEEK_DAYS.map((_) => t(`el.datepicker.weeks.${_}`))
    } else {
      return WEEK_DAYS.slice(start)
        .concat(WEEK_DAYS.slice(0, start))
        .map((_) => t(`el.datepicker.weeks.${_}`))
    }
  })

  const getFormattedDate = (day: number, type: CalendarDateCellType): Dayjs => {
    switch (type) {
      case 'prev':
        return props.date.startOf('month').subtract(1, 'month').date(day)
      case 'next':
        return props.date.startOf('month').add(1, 'month').date(day)
      case 'current':
        return props.date.date(day)
    }
  }

  const handlePickDay = ({ text, type }: CalendarDateCell) => {
    const date = getFormattedDate(text, type)
    emit('pick', date)
  }

  const getSlotData = ({ text, type }: CalendarDateCell) => {
    const day = getFormattedDate(text, type)
    return {
      isSelected: day.isSame(props.selectedDay),
      type: `${type}-month`,
      day: day.format('YYYY-MM-DD'),
      date: day.toDate(),
    }
  }

  return {
    now,
    isInRange,
    rows,
    weekDays,
    getFormattedDate,
    handlePickDay,
    getSlotData,
  }
}
