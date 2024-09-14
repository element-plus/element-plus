import { computed, ref } from 'vue'
import dayjs from 'dayjs'
import { useLocale } from '@element-plus/hooks'
import { debugWarn, isArray, isDate } from '@element-plus/utils'
import { INPUT_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type { ComputedRef, SetupContext } from 'vue'
import type { Dayjs } from 'dayjs'
import type { CalendarDateType, CalendarEmits, CalendarProps } from './calendar'

const adjacentMonth = (start: Dayjs, end: Dayjs): [Dayjs, Dayjs][] => {
  const firstMonthLastDay = start.endOf('month')
  const lastMonthFirstDay = end.startOf('month')

  // Whether the last day of the first month and the first day of the last month is in the same week
  const isSameWeek = firstMonthLastDay.isSame(lastMonthFirstDay, 'week')
  const lastMonthStartDay = isSameWeek
    ? lastMonthFirstDay.add(1, 'week')
    : lastMonthFirstDay

  return [
    [start, firstMonthLastDay],
    [lastMonthStartDay.startOf('week'), end],
  ]
}

const threeConsecutiveMonth = (start: Dayjs, end: Dayjs): [Dayjs, Dayjs][] => {
  const firstMonthLastDay = start.endOf('month')
  const secondMonthFirstDay = start.add(1, 'month').startOf('month')

  // Whether the last day of the first month and the second month is in the same week
  const secondMonthStartDay = firstMonthLastDay.isSame(
    secondMonthFirstDay,
    'week'
  )
    ? secondMonthFirstDay.add(1, 'week')
    : secondMonthFirstDay

  const secondMonthLastDay = secondMonthStartDay.endOf('month')
  const lastMonthFirstDay = end.startOf('month')

  // Whether the last day of the second month and the last day of the last month is in the same week
  const lastMonthStartDay = secondMonthLastDay.isSame(lastMonthFirstDay, 'week')
    ? lastMonthFirstDay.add(1, 'week')
    : lastMonthFirstDay

  return [
    [start, firstMonthLastDay],
    [secondMonthStartDay.startOf('week'), secondMonthLastDay],
    [lastMonthStartDay.startOf('week'), end],
  ]
}

export const useCalendar = (
  props: CalendarProps,
  emit: SetupContext<CalendarEmits>['emit'],
  componentName: string
) => {
  const { lang } = useLocale()

  const selectedDay = ref<Dayjs>()
  const now = dayjs().locale(lang.value)

  const realSelectedDay = computed<Dayjs | undefined>({
    get() {
      if (!props.modelValue) return selectedDay.value
      return date.value
    },
    set(val) {
      if (!val) return
      selectedDay.value = val
      const result = val.toDate()

      emit(INPUT_EVENT, result)
      emit(UPDATE_MODEL_EVENT, result)
    },
  })

  // if range is valid, we get a two-digit array
  const validatedRange = computed(() => {
    if (
      !props.range ||
      !isArray(props.range) ||
      props.range.length !== 2 ||
      props.range.some((item) => !isDate(item))
    )
      return []
    const rangeArrDayjs = props.range.map((_) => dayjs(_).locale(lang.value))
    const [startDayjs, endDayjs] = rangeArrDayjs
    if (startDayjs.isAfter(endDayjs)) {
      debugWarn(componentName, 'end time should be greater than start time')
      return []
    }
    if (startDayjs.isSame(endDayjs, 'month')) {
      // same month
      return calculateValidatedDateRange(startDayjs, endDayjs)
    } else {
      // two months
      if (startDayjs.add(1, 'month').month() !== endDayjs.month()) {
        debugWarn(
          componentName,
          'start time and end time interval must not exceed two months'
        )
        return []
      }
      return calculateValidatedDateRange(startDayjs, endDayjs)
    }
  })

  const date: ComputedRef<Dayjs> = computed(() => {
    if (!props.modelValue) {
      return (
        realSelectedDay.value ||
        (validatedRange.value.length ? validatedRange.value[0][0] : now)
      )
    } else {
      return dayjs(props.modelValue).locale(lang.value)
    }
  })
  const prevMonthDayjs = computed(() => date.value.subtract(1, 'month').date(1))
  const nextMonthDayjs = computed(() => date.value.add(1, 'month').date(1))
  const prevYearDayjs = computed(() => date.value.subtract(1, 'year').date(1))
  const nextYearDayjs = computed(() => date.value.add(1, 'year').date(1))

  // https://github.com/element-plus/element-plus/issues/3155
  // Calculate the validate date range according to the start and end dates
  const calculateValidatedDateRange = (
    startDayjs: Dayjs,
    endDayjs: Dayjs
  ): [Dayjs, Dayjs][] => {
    const firstDay = startDayjs.startOf('week')
    const lastDay = endDayjs.endOf('week')
    const firstMonth = firstDay.get('month')
    const lastMonth = lastDay.get('month')

    // Current mouth
    if (firstMonth === lastMonth) {
      return [[firstDay, lastDay]]
    }
    // Two adjacent months
    else if ((firstMonth + 1) % 12 === lastMonth) {
      return adjacentMonth(firstDay, lastDay)
    }
    // Three consecutive months (compatible: 2021-01-30 to 2021-02-28)
    else if (
      firstMonth + 2 === lastMonth ||
      (firstMonth + 1) % 11 === lastMonth
    ) {
      return threeConsecutiveMonth(firstDay, lastDay)
    }
    // Other cases
    else {
      debugWarn(
        componentName,
        'start time and end time interval must not exceed two months'
      )
      return []
    }
  }

  const pickDay = (day: Dayjs) => {
    realSelectedDay.value = day
  }

  const selectDate = (type: CalendarDateType) => {
    const dateMap: Record<CalendarDateType, Dayjs> = {
      'prev-month': prevMonthDayjs.value,
      'next-month': nextMonthDayjs.value,
      'prev-year': prevYearDayjs.value,
      'next-year': nextYearDayjs.value,
      today: now,
    }

    const day = dateMap[type]

    if (!day.isSame(date.value, 'day')) {
      pickDay(day)
    }
  }

  return {
    calculateValidatedDateRange,
    date,
    realSelectedDay,
    pickDay,
    selectDate,
    validatedRange,
  }
}
