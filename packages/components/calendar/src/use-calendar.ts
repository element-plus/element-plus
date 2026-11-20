import { computed, ref } from 'vue'
import dayjs from 'dayjs'
import { useLocale } from '@element-plus/hooks'
import { debugWarn, isArray, isDate } from '@element-plus/utils'
import { INPUT_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type { ComputedRef, SetupContext } from 'vue'
import type { Dayjs } from 'dayjs'
import type { CalendarDateType, CalendarEmits, CalendarProps } from './calendar'

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
    return calculateValidatedDateRange(startDayjs, endDayjs)
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
    if (startDayjs.isAfter(endDayjs)) {
      debugWarn(componentName, 'end time should be greater than start time')
      return []
    }
    if (
      !startDayjs.isSame(endDayjs, 'month') &&
      !startDayjs.add(1, 'month').isSame(endDayjs, 'month')
    ) {
      debugWarn(
        componentName,
        'start time and end time interval must not exceed two months'
      )
      return []
    }

    const ranges: [Dayjs, Dayjs][] = []
    const lastDay = endDayjs.endOf('week')
    let start = startDayjs.startOf('week')
    while (!start.isSame(lastDay, 'month')) {
      const end = start.endOf('month')
      ranges.push([start, end])
      // The table fills out its last week with days from the following month.
      start = end.startOf('week').add(1, 'week')
    }
    ranges.push([start, lastDay])
    return ranges
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

  const handleDateChange = (date: Dayjs | 'today') => {
    if (date === 'today') {
      selectDate('today')
    } else {
      pickDay(date)
    }
  }

  return {
    calculateValidatedDateRange,
    date,
    realSelectedDay,
    pickDay,
    selectDate,
    validatedRange,
    handleDateChange,
  }
}
