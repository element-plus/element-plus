<template>
  <table
    cellspacing="0"
    cellpadding="0"
    class="el-date-table"
    :class="{ 'is-week-mode': selectionMode === 'week' }"
    @click="handleClick"
    @mousemove="handleMouseMove"
  >
    <tbody>
      <tr>
        <th v-if="showWeekNumber">{{ t('el.datepicker.week') }}</th>
        <th v-for="(week, key) in WEEKS" :key="key">
          {{ t('el.datepicker.weeks.' + week) }}
        </th>
      </tr>
      <tr
        v-for="(row, key) in rows"
        :key="key"
        class="el-date-table__row"
        :class="{ current: isWeekActive(row[1]) }"
      >
        <td
          v-for="(cell, key_) in row"
          :key="key_"
          :class="getCellClasses(cell)"
        >
          <div>
            <span>
              {{ cell.text }}
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import dayjs from 'dayjs'
import { useLocaleInject } from '@element-plus/hooks'
import { coerceTruthyValueToArray } from '@element-plus/utils/util'
import type { PropType } from 'vue'

import type { Dayjs } from 'dayjs'

export default defineComponent({
  props: {
    date: {
      type: Object as PropType<Dayjs>,
    },
    minDate: {
      type: Object as PropType<Dayjs>,
    },
    maxDate: {
      type: Object as PropType<Dayjs>,
    },
    parsedValue: {
      type: [Object, Array] as PropType<Dayjs | Dayjs[]>,
    },
    selectionMode: {
      type: String,
      default: 'day',
    },
    showWeekNumber: {
      type: Boolean,
      default: false,
    },
    disabledDate: {
      type: Function,
    },
    cellClassName: {
      type: Function,
    },
    rangeState: {
      type: Object,
      default: () => ({
        endDate: null,
        selecting: false,
      }),
    },
  },

  emits: ['changerange', 'pick', 'select'],

  setup(props, ctx) {
    const { t, lang } = useLocaleInject()
    // data
    const lastRow = ref(null)
    const lastColumn = ref(null)
    const tableRows = ref([[], [], [], [], [], []])

    const propsDate = computed(() => dayjs(props.date))
    const propsMinDate = computed(() => dayjs(props.minDate))
    const propsMaxDate = computed(() => dayjs(props.maxDate))

    // todo better way to get Day.js locale object
    const firstDayOfWeek = (propsDate.value as any).$locale().weekStart || 7
    const WEEKS_CONSTANT = propsDate.value
      .locale('en')
      .localeData()
      .weekdaysShort()
      .map((_) => _.toLowerCase())

    const offsetDay = computed(() => {
      // Sunday 7(0), cal the left and right offset days, 3217654, such as Monday is -1, the is to adjust the position of the first two rows of dates
      return firstDayOfWeek > 3 ? 7 - firstDayOfWeek : -firstDayOfWeek
    })

    const startDate = computed(() => {
      const startDayOfMonth = propsDate.value.startOf('month')
      return startDayOfMonth.subtract(startDayOfMonth.day() || 7, 'day')
    })

    const WEEKS = computed(() => {
      return WEEKS_CONSTANT.concat(WEEKS_CONSTANT).slice(
        firstDayOfWeek,
        firstDayOfWeek + 7
      )
    })

    const rows = computed(() => {
      // TODO: refactory rows / getCellClasses
      const startOfMonth = propsDate.value.startOf('month')
      const startOfMonthDay = startOfMonth.day() || 7 // day of first day
      const dateCountOfMonth = startOfMonth.daysInMonth()
      const dateCountOfLastMonth = startOfMonth
        .subtract(1, 'month')
        .daysInMonth()

      const offset = offsetDay.value
      const rows_ = tableRows.value
      let count = 1

      const selectedDate: Dayjs[] =
        props.selectionMode === 'dates'
          ? coerceTruthyValueToArray(props.parsedValue)
          : []

      const calNow = dayjs().locale(lang.value).startOf('day')

      for (let i = 0; i < 6; i++) {
        const row = rows_[i]

        if (props.showWeekNumber) {
          if (!row[0]) {
            row[0] = {
              type: 'week',
              text: startDate.value.add(i * 7 + 1, 'day').week(),
            }
          }
        }

        for (let j = 0; j < 7; j++) {
          let cell = row[props.showWeekNumber ? j + 1 : j]
          if (!cell) {
            cell = {
              row: i,
              column: j,
              type: 'normal',
              inRange: false,
              start: false,
              end: false,
            }
          }
          const index = i * 7 + j
          const calTime = startDate.value.add(index - offset, 'day')
          cell.type = 'normal'

          const calEndDate =
            props.rangeState.endDate ||
            propsMaxDate.value ||
            (props.rangeState.selecting && propsMinDate.value)

          cell.inRange =
            (propsMinDate.value &&
              calTime.isSameOrAfter(propsMinDate.value, 'day') &&
              calEndDate &&
              calTime.isSameOrBefore(calEndDate, 'day')) ||
            (propsMinDate.value &&
              calTime.isSameOrBefore(propsMinDate.value, 'day') &&
              calEndDate &&
              calTime.isSameOrAfter(calEndDate, 'day'))

          if (propsMinDate.value?.isSameOrAfter(calEndDate)) {
            cell.start = calEndDate && calTime.isSame(calEndDate, 'day')
            cell.end =
              propsMinDate.value && calTime.isSame(propsMinDate.value, 'day')
          } else {
            cell.start =
              propsMinDate.value && calTime.isSame(propsMinDate.value, 'day')
            cell.end = calEndDate && calTime.isSame(calEndDate, 'day')
          }

          const isToday = calTime.isSame(calNow, 'day')

          if (isToday) {
            cell.type = 'today'
          }

          if (i >= 0 && i <= 1) {
            const numberOfDaysFromPreviousMonth =
              startOfMonthDay + offset < 0
                ? 7 + startOfMonthDay + offset
                : startOfMonthDay + offset

            if (j + i * 7 >= numberOfDaysFromPreviousMonth) {
              cell.text = count++
            } else {
              cell.text =
                dateCountOfLastMonth -
                (numberOfDaysFromPreviousMonth - (j % 7)) +
                1 +
                i * 7
              cell.type = 'prev-month'
            }
          } else {
            if (count <= dateCountOfMonth) {
              cell.text = count++
            } else {
              cell.text = count++ - dateCountOfMonth
              cell.type = 'next-month'
            }
          }

          const cellDate = calTime.toDate()
          cell.selected = selectedDate.find(
            (_) => _.valueOf() === calTime.valueOf()
          )
          cell.disabled = props.disabledDate && props.disabledDate(cellDate)
          cell.customClass =
            props.cellClassName && props.cellClassName(cellDate)
          row[props.showWeekNumber ? j + 1 : j] = cell
        }

        if (props.selectionMode === 'week') {
          const start = props.showWeekNumber ? 1 : 0
          const end = props.showWeekNumber ? 7 : 6
          const isActive = isWeekActive(row[start + 1])
          row[start].inRange = isActive
          row[start].start = isActive
          row[end].inRange = isActive
          row[end].end = isActive
        }
      }
      return rows_
    })

    const cellMatchesDate = (cell, date) => {
      if (!date) return false
      return dayjs(date)
        .locale(lang.value)
        .isSame(propsDate.value.date(Number(cell.text)), 'day')
    }

    const getCellClasses = (cell) => {
      const classes = []
      if ((cell.type === 'normal' || cell.type === 'today') && !cell.disabled) {
        classes.push('available')
        if (cell.type === 'today') {
          classes.push('today')
        }
      } else {
        classes.push(cell.type)
      }

      if (
        props.selectionMode === 'day' &&
        (cell.type === 'normal' || cell.type === 'today') &&
        cellMatchesDate(cell, props.parsedValue)
      ) {
        classes.push('current')
      }

      if (
        cell.inRange &&
        (cell.type === 'normal' ||
          cell.type === 'today' ||
          props.selectionMode === 'week')
      ) {
        classes.push('in-range')

        if (cell.start) {
          classes.push('start-date')
        }

        if (cell.end) {
          classes.push('end-date')
        }
      }

      if (cell.disabled) {
        classes.push('disabled')
      }

      if (cell.selected) {
        classes.push('selected')
      }

      if (cell.customClass) {
        classes.push(cell.customClass)
      }

      return classes.join(' ')
    }

    const getDateOfCell = (row, column) => {
      const offsetFromStart =
        row * 7 + (column - (props.showWeekNumber ? 1 : 0)) - offsetDay.value
      return startDate.value.add(offsetFromStart, 'day')
    }

    const handleMouseMove = (event) => {
      if (!props.rangeState.selecting) return

      let target = event.target
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode
      }
      if (target.tagName !== 'TD') return

      const row = target.parentNode.rowIndex - 1
      const column = target.cellIndex

      // can not select disabled date
      if (rows.value[row][column].disabled) return

      // only update rangeState when mouse moves to a new cell
      // this avoids frequent Date object creation and improves performance
      if (row !== lastRow.value || column !== lastColumn.value) {
        lastRow.value = row
        lastColumn.value = column
        ctx.emit('changerange', {
          selecting: true,
          endDate: getDateOfCell(row, column),
        })
      }
    }

    const handleClick = (event) => {
      let target = event.target
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode
      }

      if (target.tagName !== 'TD') return

      const row = target.parentNode.rowIndex - 1
      const column = target.cellIndex
      const cell = rows.value[row][column]

      if (cell.disabled || cell.type === 'week') return

      const newDate = getDateOfCell(row, column)

      if (props.selectionMode === 'range') {
        if (!props.rangeState.selecting) {
          ctx.emit('pick', { minDate: newDate, maxDate: null })
          ctx.emit('select', true)
        } else {
          if (newDate >= propsMinDate.value) {
            ctx.emit('pick', { minDate: propsMinDate.value, maxDate: newDate })
          } else {
            ctx.emit('pick', { minDate: newDate, maxDate: propsMinDate.value })
          }
          ctx.emit('select', false)
        }
      } else if (props.selectionMode === 'day') {
        ctx.emit('pick', newDate)
      } else if (props.selectionMode === 'week') {
        const weekNumber = newDate.week()
        const value = `${newDate.year()}w${weekNumber}`
        ctx.emit('pick', {
          year: newDate.year(),
          week: weekNumber,
          value,
          date: newDate.startOf('week'),
        })
      } else if (props.selectionMode === 'dates') {
        const newValue = cell.selected
          ? coerceTruthyValueToArray(props.parsedValue).filter(
              (_) => _.valueOf() !== newDate.valueOf()
            )
          : coerceTruthyValueToArray(props.parsedValue).concat([newDate])
        ctx.emit('pick', newValue)
      }
    }

    const isWeekActive = (cell) => {
      if (props.selectionMode !== 'week') return false
      let newDate = propsDate.value.startOf('day')

      if (cell.type === 'prev-month') {
        newDate = newDate.subtract(1, 'month')
      }

      if (cell.type === 'next-month') {
        newDate = newDate.add(1, 'month')
      }

      newDate = newDate.date(parseInt(cell.text, 10))

      if (props.parsedValue && !Array.isArray(props.parsedValue)) {
        const dayOffset =
          ((props.parsedValue.day() - firstDayOfWeek + 7) % 7) - 1
        const weekDate = props.parsedValue.subtract(dayOffset, 'day')
        return weekDate.isSame(newDate, 'day')
      }
      return false
    }

    return {
      handleMouseMove,
      t,
      rows,
      isWeekActive,
      getCellClasses,
      WEEKS,
      handleClick,
    }
  },
})
</script>
