<template>
  <div class="el-calendar">
    <div class="el-calendar__header">
      <div class="el-calendar__title">{{ i18nDate }}</div>
      <div v-if="validatedRange.length === 0" class="el-calendar__button-group">
        <el-button-group>
          <el-button
            size="mini"
            @click="selectDate('prev-month')"
          >
            {{ t('el.datepicker.prevMonth') }}
          </el-button>
          <el-button size="mini" @click="selectDate('today')">
            {{
              t('el.datepicker.today')
            }}
          </el-button>
          <el-button
            size="mini"
            @click="selectDate('next-month')"
          >
            {{ t('el.datepicker.nextMonth') }}
          </el-button>
        </el-button-group>
      </div>
    </div>
    <div v-if="validatedRange.length === 0" class="el-calendar__body">
      <date-table
        :date="date"
        :selected-day="realSelectedDay"
        @pick="pickDay"
      >
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
import ElButton from '@element-plus/button'
import ElButtonGroup from '@element-plus/button-group'
import { useLocaleInject } from '@element-plus/hooks'
import DateTable from './date-table.vue'
import {
  ref,
  ComputedRef,
  PropType,
  computed,
  defineComponent,
} from 'vue'
import dayjs, { Dayjs } from 'dayjs'

type DateType = 'prev-month' | 'today' | 'next-month'

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
            range.length === 2 &&
            range.every(
              item => item instanceof Date,
            )
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

    // if range is valid, we get a two-digit array
    const validatedRange = computed(() => {
      if (!props.range) return []
      const rangeArrDayjs = props.range.map(_ => dayjs(_).locale(lang.value))
      const [startDayjs, endDayjs] = rangeArrDayjs
      if (startDayjs.isAfter(endDayjs)) {
        console.warn(
          '[ElementCalendar]end time should be greater than start time',
        )
        return []
      }
      if (startDayjs.isSame(endDayjs, 'month')) {
        // same month
        return [[
          startDayjs.startOf('week'),
          endDayjs.endOf('week'),
        ]]
      } else {
        // two months
        if (startDayjs.add(1, 'month').month() !== endDayjs.month()) {
          console.warn(
            '[ElementCalendar]start time and end time interval must not exceed two months',
          )
          return []
        }
        const endMonthFirstDay = endDayjs.startOf('month')
        const endMonthFirstWeekDay = endMonthFirstDay.startOf('week')
        let endMonthStart = endMonthFirstDay
        if (!endMonthFirstDay.isSame(endMonthFirstWeekDay, 'month')) {
          endMonthStart = endMonthFirstDay.endOf('week').add(1, 'day')
        }
        return [
          [
            startDayjs.startOf('week'),
            startDayjs.endOf('month'),
          ],
          [
            endMonthStart,
            endDayjs.endOf('week'),
          ],
        ]
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
