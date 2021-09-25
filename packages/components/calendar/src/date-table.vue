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
          @click="pickDay(cell)"
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
import { computed, defineComponent, ref } from 'vue'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import { useLocaleInject } from '@element-plus/hooks'
import { rangeArr } from '@element-plus/components/time-picker'
import type { Dayjs } from 'dayjs'
import type { PropType } from 'vue'
dayjs.extend(localeData)

export const getPrevMonthLastDays = (date: Dayjs, amount) => {
  const lastDay = date.subtract(1, 'month').endOf('month').date()
  return rangeArr(amount).map((_, index) => lastDay - (amount - index - 1))
}

export const getMonthDays = (date: Dayjs) => {
  const days = date.daysInMonth()
  return rangeArr(days).map((_, index) => index + 1)
}

export default defineComponent({
  props: {
    selectedDay: {
      type: Object as PropType<Dayjs>,
    },
    range: {
      type: Array as PropType<Array<Dayjs>>,
    },
    date: {
      type: Object as PropType<Dayjs>,
    },
    hideHeader: {
      type: Boolean,
    },
  },
  emits: ['pick'],
  setup(props, ctx) {
    const { lang } = useLocaleInject()
    const WEEK_DAYS = ref(
      dayjs().locale(lang.value).localeData().weekdaysShort()
    )

    const now = dayjs().locale(lang.value)

    // todo better way to get Day.js locale object
    const firstDayOfWeek = (now as any).$locale().weekStart || 0

    const toNestedArr = (days) => {
      return rangeArr(days.length / 7).map((_, index) => {
        const start = index * 7
        return days.slice(start, start + 7)
      })
    }

    const getFormattedDate = (day, type): Dayjs => {
      let result
      if (type === 'prev') {
        result = props.date.startOf('month').subtract(1, 'month').date(day)
      } else if (type === 'next') {
        result = props.date.startOf('month').add(1, 'month').date(day)
      } else {
        result = props.date.date(day)
      }
      return result
    }

    const getCellClass = ({ text, type }) => {
      const classes = [type]
      if (type === 'current') {
        const date_ = getFormattedDate(text, type)
        if (date_.isSame(props.selectedDay, 'day')) {
          classes.push('is-selected')
        }
        if (date_.isSame(now, 'day')) {
          classes.push('is-today')
        }
      }
      return classes
    }

    const pickDay = ({ text, type }) => {
      const date = getFormattedDate(text, type)
      ctx.emit('pick', date)
    }

    const getSlotData = ({ text, type }) => {
      const day = getFormattedDate(text, type)
      return {
        isSelected: day.isSame(props.selectedDay),
        type: `${type}-month`,
        day: day.format('YYYY-MM-DD'),
        date: day.toDate(),
      }
    }

    const isInRange = computed(() => {
      return props.range && props.range.length
    })

    const rows = computed(() => {
      let days = []
      if (isInRange.value) {
        const [start, end] = props.range
        const currentMonthRange = rangeArr(end.date() - start.date() + 1).map(
          (_, index) => ({
            text: start.date() + index,
            type: 'current',
          })
        )

        let remaining = currentMonthRange.length % 7
        remaining = remaining === 0 ? 0 : 7 - remaining
        const nextMonthRange = rangeArr(remaining).map((_, index) => ({
          text: index + 1,
          type: 'next',
        }))
        days = currentMonthRange.concat(nextMonthRange)
      } else {
        const firstDay = props.date.startOf('month').day() || 7
        const prevMonthDays = getPrevMonthLastDays(
          props.date,
          firstDay - firstDayOfWeek
        ).map((day) => ({
          text: day,
          type: 'prev',
        }))
        const currentMonthDays = getMonthDays(props.date).map((day) => ({
          text: day,
          type: 'current',
        }))
        days = [...prevMonthDays, ...currentMonthDays]
        const nextMonthDays = rangeArr(42 - days.length).map((_, index) => ({
          text: index + 1,
          type: 'next',
        }))
        days = days.concat(nextMonthDays)
      }
      return toNestedArr(days)
    })

    const weekDays = computed(() => {
      const start = firstDayOfWeek

      if (start === 0) {
        return WEEK_DAYS.value
      } else {
        return WEEK_DAYS.value
          .slice(start)
          .concat(WEEK_DAYS.value.slice(0, start))
      }
    })

    return {
      isInRange,
      weekDays,
      rows,
      getCellClass,
      pickDay,
      getSlotData,
    }
  },
})
</script>
