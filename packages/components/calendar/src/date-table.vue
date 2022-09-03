<template>
  <table
    :class="[nsTable.b(), nsTable.is('range', isInRange)]"
    cellspacing="0"
    cellpadding="0"
  >
    <thead v-if="!hideHeader">
      <th v-for="day in weekDays" :key="day">{{ day }}</th>
    </thead>

    <tbody>
      <tr
        v-for="(row, index) in rows"
        :key="index"
        :class="{
          [nsTable.e('row')]: true,
          [nsTable.em('row', 'hide-border')]: index === 0 && hideHeader,
        }"
      >
        <td
          v-for="(cell, key) in row"
          :key="key"
          :class="getCellClass(cell)"
          @click="handlePickDay(cell)"
        >
          <div :class="nsDay.b()">
            <slot name="dateCell" :data="getSlotData(cell)">
              <span>{{ cell.text }}</span>
            </slot>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData.js'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { rangeArr } from '@element-plus/components/time-picker'
import { WEEK_DAYS } from '@element-plus/constants'
import {
  dateTableEmits,
  dateTableProps,
  getMonthDays,
  getPrevMonthLastDays,
  toNestedArr,
} from './date-table'

import type { CalendarDateCell, CalendarDateCellType } from './date-table'
import type { Dayjs } from 'dayjs'

defineOptions({
  name: 'DateTable',
})

const props = defineProps(dateTableProps)
const emit = defineEmits(dateTableEmits)

dayjs.extend(localeData)

const { t, lang } = useLocale()
const nsTable = useNamespace('calendar-table')
const nsDay = useNamespace('calendar-day')

const now = dayjs().locale(lang.value)
// todo better way to get Day.js locale object
const firstDayOfWeek: number = (now as any).$locale().weekStart || 0

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
      firstDay - firstDayOfWeek
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

const getCellClass = ({ text, type }: CalendarDateCell) => {
  const classes: string[] = [type]
  if (type === 'current') {
    const date = getFormattedDate(text, type)
    if (date.isSame(props.selectedDay, 'day')) {
      classes.push(nsDay.is('selected'))
    }
    if (date.isSame(now, 'day')) {
      classes.push(nsDay.is('today'))
    }
  }
  return classes
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

defineExpose({
  /** @description toggle date panel */
  getFormattedDate,
})
</script>
