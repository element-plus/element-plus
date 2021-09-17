<template>
  <div class="el-calendar">
    <div class="el-calendar__header">
      <slot name="header" :date="i18nDate">
        <div class="el-calendar__title">{{ i18nDate }}</div>
        <div
          v-if="validatedRange.length === 0"
          class="el-calendar__button-group"
        >
          <el-button-group>
            <el-button size="mini" @click="selectDate('prev-month')">
              {{ t('el.datepicker.prevMonth') }}
            </el-button>
            <el-button size="mini" @click="selectDate('today')">
              {{ t('el.datepicker.today') }}
            </el-button>
            <el-button size="mini" @click="selectDate('next-month')">
              {{ t('el.datepicker.nextMonth') }}
            </el-button>
          </el-button-group>
        </div>
      </slot>
    </div>
    <div v-if="validatedRange.length === 0" class="el-calendar__body">
      <date-table :date="date" :selected-day="realSelectedDay" @pick="pickDay">
        <template v-if="$slots.dateCell" #dateCell="data">
          <slot name="dateCell" v-bind="data"></slot>
        </template>
      </date-table>
    </div>
    <div v-else class="el-calendar__body">
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
          <slot name="dateCell" v-bind="data"></slot>
        </template>
      </date-table>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from 'vue'
import dayjs from 'dayjs'

import ElButton from '@element-plus/components/button'
import { useLocaleInject } from '@element-plus/hooks'
import { debugWarn } from '@element-plus/utils/error'
import DateTable from './date-table.vue'
import type { PropType, ComputedRef } from 'vue'

import type { Dayjs } from 'dayjs'

type DateType =
  | 'prev-month'
  | 'next-month'
  | 'prev-year'
  | 'next-year'
  | 'today'

const { ButtonGroup: ElButtonGroup } = ElButton
export default defineComponent({
  name: 'ElCalendar',

  components: {
    DateTable,
    ElButton,
    ElButtonGroup,
  },

  props: {
    modelValue: {
      type: Date,
    },
    range: {
      type: Array as PropType<Array<Date>>,
      validator: (range: Date): boolean => {
        if (Array.isArray(range)) {
          return (
            range.length === 2 && range.every((item) => item instanceof Date)
          )
        }
        return false
      },
    },
  },

  emits: ['input', 'update:modelValue'],
  setup(props, ctx) {
    const { t, lang } = useLocaleInject()
    const selectedDay = ref(null)
    const now = dayjs().locale(lang.value)

    const prevMonthDayjs = computed(() => {
      return date.value.subtract(1, 'month')
    })
    const curMonthDatePrefix = computed(() => {
      return dayjs(date.value).locale(lang.value).format('YYYY-MM')
    })

    const nextMonthDayjs = computed(() => {
      return date.value.add(1, 'month')
    })

    const prevYearDayjs = computed(() => {
      return date.value.subtract(1, 'year')
    })

    const nextYearDayjs = computed(() => {
      return date.value.add(1, 'year')
    })

    const i18nDate = computed(() => {
      const pickedMonth = `el.datepicker.month${date.value.format('M')}`
      return `${date.value.year()} ${t('el.datepicker.year')} ${t(pickedMonth)}`
    })

    const realSelectedDay = computed({
      get() {
        if (!props.modelValue) return selectedDay.value
        return date.value
      },
      set(val: Dayjs) {
        selectedDay.value = val
        const result = val.toDate()

        ctx.emit('input', result)
        ctx.emit('update:modelValue', result)
      },
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

    // https://github.com/element-plus/element-plus/issues/3155
    // Calculate the validate date range according to the start and end dates
    const calculateValidatedDateRange = (
      startDayjs: dayjs.Dayjs,
      endDayjs: dayjs.Dayjs
    ) => {
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
      else if (firstMonth + 2 === lastMonth) {
        const firstMonthLastDay = firstDay.endOf('month')
        const secondMonthFisrtDay = firstDay.add(1, 'month').startOf('month')

        // Whether the last day of the first month and the second month is in the same week
        const secondMonthStartDay = firstMonthLastDay.isSame(
          secondMonthFisrtDay,
          'week'
        )
          ? secondMonthFisrtDay.add(1, 'week')
          : secondMonthFisrtDay

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
          'ElCalendar',
          'start time and end time interval must not exceed two months'
        )
        return []
      }
    }

    // if range is valid, we get a two-digit array
    const validatedRange = computed(() => {
      if (!props.range) return []
      const rangeArrDayjs = props.range.map((_) => dayjs(_).locale(lang.value))
      const [startDayjs, endDayjs] = rangeArrDayjs
      if (startDayjs.isAfter(endDayjs)) {
        debugWarn('ElCalendar', 'end time should be greater than start time')
        return []
      }
      if (startDayjs.isSame(endDayjs, 'month')) {
        // same month
        return calculateValidatedDateRange(startDayjs, endDayjs)
      } else {
        // two months
        if (startDayjs.add(1, 'month').month() !== endDayjs.month()) {
          debugWarn(
            'ElCalendar',
            'start time and end time interval must not exceed two months'
          )
          return []
        }
        return calculateValidatedDateRange(startDayjs, endDayjs)
      }
    })

    const pickDay = (day: Dayjs) => {
      realSelectedDay.value = day
    }

    const selectDate = (type: DateType) => {
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

    return {
      selectedDay,
      curMonthDatePrefix,
      i18nDate,
      realSelectedDay,
      date,
      validatedRange,
      pickDay,
      selectDate,
      t,
    }
  },
})
</script>
