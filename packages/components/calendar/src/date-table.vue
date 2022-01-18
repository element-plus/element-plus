<template>
  <table
    :class="{
      'el-calendar-table': true,
      'is-range': isInRange,
    }"
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
          'el-calendar-table__row': true,
          'el-calendar-table__row--hide-border': index === 0 && hideHeader,
        }"
      >
        <td
          v-for="(cell, key) in row"
          :key="key"
          :class="getCellClass(cell)"
          @click="handlePickDay(cell)"
        >
          <div class="el-calendar-day">
            <slot name="dateCell" :data="getSlotData(cell)">
              <span>{{ cell.text }}</span>
            </slot>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import { useLocale } from '@element-plus/hooks'
import { rangeArr } from '@element-plus/components/time-picker'
import { dateTableProps, dateTableEmits } from './date-table'
import type { Dayjs } from 'dayjs'
dayjs.extend(localeData)

type CellType = 'next' | 'prev' | 'current'
interface Cell {
  text: number
  type: CellType
}

const WEEK_DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const

export const getPrevMonthLastDays = (date: Dayjs, count: number) => {
  const lastDay = date.subtract(1, 'month').endOf('month').date()
  return rangeArr(count).map((_, index) => lastDay - (count - index - 1))
}

export const getMonthDays = (date: Dayjs) => {
  const days = date.daysInMonth()
  return rangeArr(days).map((_, index) => index + 1)
}

const toNestedArr = (days: Cell[]) =>
  rangeArr(days.length / 7).map((index) => {
    const start = index * 7
    return days.slice(start, start + 7)
  })

export default defineComponent({
  props: dateTableProps,
  emits: dateTableEmits,

  setup(props, { emit }) {
    const { t, lang } = useLocale()

    const now = dayjs().locale(lang.value)
    // todo better way to get Day.js locale object
    const firstDayOfWeek: number = (now as any).$locale().weekStart || 0

    const isInRange = computed(() => !!props.range && !!props.range.length)

    const rows = computed(() => {
      let days: Cell[] = []
      if (isInRange.value) {
        const [start, end] = props.range!
        const currentMonthRange: Cell[] = rangeArr(
          end.date() - start.date() + 1
        ).map((index) => ({
          text: start.date() + index,
          type: 'current',
        }))

        let remaining = currentMonthRange.length % 7
        remaining = remaining === 0 ? 0 : 7 - remaining
        const nextMonthRange: Cell[] = rangeArr(remaining).map((_, index) => ({
          text: index + 1,
          type: 'next',
        }))
        days = currentMonthRange.concat(nextMonthRange)
      } else {
        const firstDay = props.date.startOf('month').day() || 7
        const prevMonthDays: Cell[] = getPrevMonthLastDays(
          props.date,
          firstDay - firstDayOfWeek
        ).map((day) => ({
          text: day,
          type: 'prev',
        }))
        const currentMonthDays: Cell[] = getMonthDays(props.date).map(
          (day) => ({
            text: day,
            type: 'current',
          })
        )
        days = [...prevMonthDays, ...currentMonthDays]
        const nextMonthDays: Cell[] = rangeArr(42 - days.length).map(
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

    const getFormattedDate = (day: number, type: CellType): Dayjs => {
      switch (type) {
        case 'prev':
          return props.date.startOf('month').subtract(1, 'month').date(day)
        case 'next':
          return props.date.startOf('month').add(1, 'month').date(day)
        case 'current':
          return props.date.date(day)
      }
    }

    const getCellClass = ({ text, type }: Cell) => {
      const classes: string[] = [type]
      if (type === 'current') {
        const date = getFormattedDate(text, type)
        if (date.isSame(props.selectedDay, 'day')) {
          classes.push('is-selected')
        }
        if (date.isSame(now, 'day')) {
          classes.push('is-today')
        }
      }
      return classes
    }

    const handlePickDay = ({ text, type }: Cell) => {
      const date = getFormattedDate(text, type)
      emit('pick', date)
    }

    const getSlotData = ({ text, type }: Cell) => {
      const day = getFormattedDate(text, type)
      return {
        isSelected: day.isSame(props.selectedDay),
        type: `${type}-month`,
        day: day.format('YYYY-MM-DD'),
        date: day.toDate(),
      }
    }

    return {
      isInRange,
      weekDays,
      rows,
      getCellClass,
      handlePickDay,
      getSlotData,
    }
  },
})
</script>
