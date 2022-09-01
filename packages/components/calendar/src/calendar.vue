<template>
  <div :class="ns.b()">
    <div :class="ns.e('header')">
      <slot name="header" :date="i18nDate">
        <div :class="ns.e('title')">{{ i18nDate }}</div>
        <div v-if="validatedRange.length === 0" :class="ns.e('button-group')">
          <el-button-group>
            <el-button size="small" @click="selectDate('prev-month')">
              {{ t('el.datepicker.prevMonth') }}
            </el-button>
            <el-button size="small" @click="selectDate('today')">
              {{ t('el.datepicker.today') }}
            </el-button>
            <el-button size="small" @click="selectDate('next-month')">
              {{ t('el.datepicker.nextMonth') }}
            </el-button>
          </el-button-group>
        </div>
      </slot>
    </div>
    <div v-if="validatedRange.length === 0" :class="ns.e('body')">
      <date-table :date="date" :selected-day="realSelectedDay" @pick="pickDay">
        <template v-if="$slots.dateCell" #dateCell="data">
          <slot name="dateCell" v-bind="data" />
        </template>
      </date-table>
    </div>
    <div v-else :class="ns.e('body')">
      <date-table
        v-for="(range_, index) in validatedRange"
        :key="index"
        :date="range_[0]"
        :selected-day="realSelectedDay"
        :range="range_"
        :hide-header="index !== 0"
        @pick="pickDay"
      >
        <template v-if="$slots.dateCell" #dateCell="data">
          <slot name="dateCell" v-bind="data" />
        </template>
      </date-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import dayjs from 'dayjs'
import { ElButton, ElButtonGroup } from '@element-plus/components/button'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { debugWarn } from '@element-plus/utils'
import { INPUT_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import DateTable from './date-table.vue'
import { calendarEmits, calendarProps } from './calendar'

import type { CalendarDateType } from './calendar'
import type { ComputedRef } from 'vue'
import type { Dayjs } from 'dayjs'

const COMPONENT_NAME = 'ElCalendar'

defineOptions({
  name: 'ElCalendar',
})

const props = defineProps(calendarProps)
const emit = defineEmits(calendarEmits)

const ns = useNamespace('calendar')
const { t, lang } = useLocale()

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
  if (!props.range) return []
  const rangeArrDayjs = props.range.map((_) => dayjs(_).locale(lang.value))
  const [startDayjs, endDayjs] = rangeArrDayjs
  if (startDayjs.isAfter(endDayjs)) {
    debugWarn(COMPONENT_NAME, 'end time should be greater than start time')
    return []
  }
  if (startDayjs.isSame(endDayjs, 'month')) {
    // same month
    return calculateValidatedDateRange(startDayjs, endDayjs)
  } else {
    // two months
    if (startDayjs.add(1, 'month').month() !== endDayjs.month()) {
      debugWarn(
        COMPONENT_NAME,
        'start time and end time interval must not exceed two months'
      )
      return []
    }
    return calculateValidatedDateRange(startDayjs, endDayjs)
  }
})

const date: ComputedRef<Dayjs> = computed(() => {
  if (!props.modelValue) {
    if (realSelectedDay.value) {
      return realSelectedDay.value
    } else if (validatedRange.value.length) {
      return validatedRange.value[0][0]
    }
    return now
  } else {
    return dayjs(props.modelValue).locale(lang.value)
  }
})
const prevMonthDayjs = computed(() => date.value.subtract(1, 'month').date(1))
const nextMonthDayjs = computed(() => date.value.add(1, 'month').date(1))
const prevYearDayjs = computed(() => date.value.subtract(1, 'year').date(1))
const nextYearDayjs = computed(() => date.value.add(1, 'year').date(1))

const i18nDate = computed(() => {
  const pickedMonth = `el.datepicker.month${date.value.format('M')}`
  return `${date.value.year()} ${t('el.datepicker.year')} ${t(pickedMonth)}`
})

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
  else if (firstMonth + 1 === lastMonth) {
    const firstMonthLastDay = firstDay.endOf('month')
    const lastMonthFirstDay = lastDay.startOf('month')

    // Whether the last day of the first month and the first day of the last month is in the same week
    const isSameWeek = firstMonthLastDay.isSame(lastMonthFirstDay, 'week')
    const lastMonthStartDay = isSameWeek
      ? lastMonthFirstDay.add(1, 'week')
      : lastMonthFirstDay

    return [
      [firstDay, firstMonthLastDay],
      [lastMonthStartDay.startOf('week'), lastDay],
    ]
  }
  // Three consecutive months (compatible: 2021-01-30 to 2021-02-28)
  else if (
    firstMonth + 2 === lastMonth ||
    (firstMonth + 1) % 11 === lastMonth
  ) {
    const firstMonthLastDay = firstDay.endOf('month')
    const secondMonthFirstDay = firstDay.add(1, 'month').startOf('month')

    // Whether the last day of the first month and the second month is in the same week
    const secondMonthStartDay = firstMonthLastDay.isSame(
      secondMonthFirstDay,
      'week'
    )
      ? secondMonthFirstDay.add(1, 'week')
      : secondMonthFirstDay

    const secondMonthLastDay = secondMonthStartDay.endOf('month')
    const lastMonthFirstDay = lastDay.startOf('month')

    // Whether the last day of the second month and the last day of the last month is in the same week
    const lastMonthStartDay = secondMonthLastDay.isSame(
      lastMonthFirstDay,
      'week'
    )
      ? lastMonthFirstDay.add(1, 'week')
      : lastMonthFirstDay

    return [
      [firstDay, firstMonthLastDay],
      [secondMonthStartDay.startOf('week'), secondMonthLastDay],
      [lastMonthStartDay.startOf('week'), lastDay],
    ]
  }
  // Other cases
  else {
    debugWarn(
      COMPONENT_NAME,
      'start time and end time interval must not exceed two months'
    )
    return []
  }
}

const pickDay = (day: Dayjs) => {
  realSelectedDay.value = day
}

const selectDate = (type: CalendarDateType) => {
  let day: Dayjs
  if (type === 'prev-month') {
    day = prevMonthDayjs.value
  } else if (type === 'next-month') {
    day = nextMonthDayjs.value
  } else if (type === 'prev-year') {
    day = prevYearDayjs.value
  } else if (type === 'next-year') {
    day = nextYearDayjs.value
  } else {
    day = now
  }

  if (day.isSame(date.value, 'day')) return
  pickDay(day)
}

defineExpose({
  /** @description currently selected date */
  selectedDay: realSelectedDay,
  /** @description select a specific date */
  pickDay,
  /** @description select date */
  selectDate,
  /** @description Calculate the validate date range according to the start and end dates */
  calculateValidatedDateRange,
})
</script>
