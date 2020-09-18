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
        <th v-for="(week, key) in WEEKS" :key="key">{{ t('el.datepicker.weeks.' + week) }}</th>
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
import { getFirstDayOfMonth, getDayCountOfMonth, getWeekNumber, getStartDateOfMonth, prevDate, nextDate, isDate, clearTime as _clearTime } from './time-picker-utils'
import { t } from '@element-plus/locale'
import { coerceTruthyValueToArray } from '@element-plus/utils/util'
const arrayFindIndex = function(arr, pred) {
  for (let i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i
    }
  }
  return -1
}

const arrayFind = function(arr, pred) {
  const idx = arrayFindIndex(arr, pred)
  return idx !== -1 ? arr[idx] : undefined
}
const WEEKS_C = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
const getDateTimestamp = function(time) {
  if (typeof time === 'number' || typeof time === 'string') {
    return _clearTime(new Date(time)).getTime()
  } else if (time instanceof Date) {
    return _clearTime(time).getTime()
  } else {
    return NaN
  }
}

// remove the first element that satisfies `pred` from arr
// return a new array if modification occurs
// return the original array otherwise
const removeFromArray = function(arr, pred) {
  const idx = typeof pred === 'function' ? arrayFindIndex(arr, pred) : arr.indexOf(pred)
  return idx >= 0 ? [...arr.slice(0, idx), ...arr.slice(idx + 1)] : arr
}
import {
  defineComponent,
  computed,
  ref,
  PropType,
  watch,
} from 'vue'
import { Dayjs } from 'dayjs'
export default defineComponent({
  props: {
    firstDayOfWeek: {
      type: Number,
      default: 7,
      validator: (val: number): boolean => val >= 1 && val <= 7,
    },
    date: {
      type: Dayjs as PropType<Dayjs>,
    },
    parsedValue: {
      type: [Array, Dayjs] as PropType<Dayjs | Array<Dayjs>>,
      default: () => ([]),
    },
    value: {},
    defaultValue: {
      // either: null, valid Date object, Array of valid Date objects
      validator: (val:any):boolean => val === null || isDate(val) || (Array.isArray(val) && val.every(isDate)),
    },
    selectionMode: {
      default: 'day',
    },
    showWeekNumber: {
      type: Boolean,
      default: false,
    },
    disabledDate: {},
    cellClassName: {},
    minDate: {},
    maxDate: {},
    rangeState: {
      default: () => ({
        endDate: null,
        selecting: false,
      }),
    },
  },

  emits: ['changerange', 'pick', 'select'],

  setup(props, ctx) {
    const year = computed(()=> {
      return props.date.year()
    })

    const month = computed(()=> {
      return props.date.month()
    })

    const offsetDay = computed(() => {
      const week = props.firstDayOfWeek
      // 周日为界限，左右偏移的天数，3217654 例如周一就是 -1，目的是调整前两行日期的位置
      return week > 3 ? 7 - week : -week
    })

    const startDate = computed(() => {
      return getStartDateOfMonth(year.value, month.value)
    })

    const WEEKS = computed(() => {
      const week = props.firstDayOfWeek
      return WEEKS_C.concat(WEEKS_C).slice(week, week + 7)
    })

    const tableRows =  ref([ [], [], [], [], [], [] ])
    const isWeekActive = cell => {
      if (props.selectionMode !== 'week') return false
      const newDate = new Date(year.value, month.value, 1)
      const year_ = newDate.getFullYear()
      const month_ = newDate.getMonth()

      if (cell.type === 'prev-month') {
        newDate.setMonth(month_ === 0 ? 11 : month_ - 1)
        newDate.setFullYear(month_ === 0 ? year_ - 1 : year_)
      }

      if (cell.type === 'next-month') {
        newDate.setMonth(month_ === 11 ? 0 : month_ + 1)
        newDate.setFullYear(month_ === 11 ? year_ + 1 : year_)
      }

      newDate.setDate(parseInt(cell.text, 10))

      if (isDate(props.date)) {
        const dayOffset = (props.date.date() - props.firstDayOfWeek + 7) % 7 - 1
        const weekDate = prevDate(props.date, dayOffset)
        return weekDate.getTime() === newDate.getTime()
      }
      return false
    }
    const rows = computed(()=>  {
      // TODO: refactory rows / getCellClasses
      const date = new Date(year.value, month.value, 1)
      let day = getFirstDayOfMonth(date) // day of first day
      const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth())
      const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), (date.getMonth() === 0 ? 11 : date.getMonth() - 1))

      day = (day === 0 ? 7 : day)

      const offset = offsetDay.value
      const rows_ = tableRows.value
      let count = 1

      const startDate_ = startDate.value
      const disabledDate = props.disabledDate
      const cellClassName = props.cellClassName
      console.log('selectedDate: ')
      const selectedDate = props.selectionMode === 'dates' ? coerceTruthyValueToArray(props.parsedValue) : []
      console.log('selectedDate: ', selectedDate)
      const now = getDateTimestamp(new Date())

      for (let i = 0; i < 6; i++) {
        const row = rows_[i]

        if (props.showWeekNumber) {
          if (!row[0]) {
            row[0] = { type: 'week', text: getWeekNumber(nextDate(startDate_, i * 7 + 1)) }
          }
        }

        for (let j = 0; j < 7; j++) {
          let cell = row[props.showWeekNumber ? j + 1 : j]
          if (!cell) {
            cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false }
          }

          cell.type = 'normal'

          const index = i * 7 + j
          const time = nextDate(startDate_, index - offset).getTime()
          cell.inRange = time >= getDateTimestamp(props.minDate) && time <= getDateTimestamp(props.maxDate)
          cell.start = props.minDate && time === getDateTimestamp(props.minDate)
          cell.end = props.maxDate && time === getDateTimestamp(props.maxDate)
          const isToday = time === now

          if (isToday) {
            cell.type = 'today'
          }

          if (i >= 0 && i <= 1) {
            const numberOfDaysFromPreviousMonth = day + offset < 0 ? 7 + day + offset : day + offset

            if (j + i * 7 >= numberOfDaysFromPreviousMonth) {
              cell.text = count++
            } else {
              cell.text = dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - j % 7) + 1 + i * 7
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

          let cellDate = new Date(time)
          cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate)
          cell.selected = arrayFind(selectedDate, date => date.getTime() === cellDate.getTime())
          cell.customClass = typeof cellClassName === 'function' && cellClassName(cellDate)
          row[props.showWeekNumber ? j + 1 : j] = cell
        }

        if (props.selectionMode === 'week') {
          const start = props.showWeekNumber ? 1 : 0
          const end = props.showWeekNumber ? 7 : 6
          const isWeekActive_ = isWeekActive(row[start + 1])

          row[start].inRange = isWeekActive_
          row[start].start = isWeekActive_
          row[end].inRange = isWeekActive_
          row[end].end = isWeekActive_
        }
      }
      return rows_
    })

    const cellMatchesDate = (cell, date) => {
      const value = new Date(date)
      return year.value === value.getFullYear() &&
          month.value === value.getMonth() &&
          Number(cell.text) === value.getDate()
    }
    const getCellClasses = cell => {
      const selectionMode = props.selectionMode
      const defaultValue = props.defaultValue ? Array.isArray(props.defaultValue) ? props.defaultValue : [props.defaultValue] : []

      let classes = []
      if ((cell.type === 'normal' || cell.type === 'today') && !cell.disabled) {
        classes.push('available')
        if (cell.type === 'today') {
          classes.push('today')
        }
      } else {
        classes.push(cell.type)
      }

      if (cell.type === 'normal' && defaultValue.some(date => cellMatchesDate(cell, date))) {
        classes.push('default')
      }

      if (selectionMode === 'day' && (cell.type === 'normal' || cell.type === 'today') && cellMatchesDate(cell, props.date)) {
        classes.push('current')
      }

      if (cell.inRange && ((cell.type === 'normal' || cell.type === 'today') || props.selectionMode === 'week')) {
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

    const lastRow = ref(null)
    const lastColumn = ref(null)

    const getDateOfCell = (row, column) =>{
      const offsetFromStart = row * 7 + (column - (props.showWeekNumber ? 1 : 0)) - offsetDay.value
      return nextDate(startDate.value, offsetFromStart)
    }

    const handleMouseMove = event => {
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
          minDate: props.minDate,
          maxDate: props.maxDate,
          rangeState: {
            selecting: true,
            endDate: getDateOfCell(row, column),
          },
        })
      }
    }

    const handleClick = event => {
      let target = event.target
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode
      }

      if (target.tagName !== 'TD') return

      const row = target.parentNode.rowIndex - 1
      const column = props.selectionMode === 'week' ? 1 : target.cellIndex
      const cell = rows.value[row][column]

      if (cell.disabled || cell.type === 'week') return

      const newDate = getDateOfCell(row, column)

      if (props.selectionMode === 'range') {
        if (!props.rangeState.selecting) {
          ctx.emit('pick', { minDate: newDate, maxDate: null })
          ctx.emit('select', true)
        } else {
          if (newDate >= props.minDate) {
            ctx.emit('pick', { minDate: props.minDate, maxDate: newDate })
          } else {
            ctx.emit('pick', { minDate: newDate, maxDate: props.minDate })
          }
          ctx.emit('select', false)
        }
      } else if (props.selectionMode === 'day') {
        ctx.emit('pick', newDate)
      } else if (props.selectionMode === 'week') {
        const weekNumber = getWeekNumber(newDate)
        const value = newDate.getFullYear() + 'w' + weekNumber
        ctx.emit('pick', {
          year: newDate.getFullYear(),
          week: weekNumber,
          value: value,
          date: newDate,
        })
      } else if (props.selectionMode === 'dates') {
        const value = props.parsedValue
        const newValue = cell.selected
          ? removeFromArray(value, date => date.getTime() === newDate.getTime())
          : value.concat([newDate])
        ctx.emit('pick', newValue)
      }
    }

    const markRange = (minDate, maxDate) => {
      minDate = getDateTimestamp(minDate)
      maxDate = getDateTimestamp(maxDate) || minDate;
      [minDate, maxDate] = [Math.min(minDate, maxDate), Math.max(minDate, maxDate)]

      for (let i = 0, k = rows.value.length; i < k; i++) {
        const row = rows.value[i]
        for (let j = 0, l = row.length; j < l; j++) {
          if (props.showWeekNumber && j === 0) continue

          const cell = row[j]
          const index = i * 7 + j + (props.showWeekNumber ? -1 : 0)
          const time = nextDate(startDate.value, index - offsetDay.value).getTime()
          cell.inRange = minDate && time >= minDate && time <= maxDate
          cell.start = minDate && time === minDate
          cell.end = maxDate && time === maxDate
        }
      }
    }

    watch(() => props.rangeState.endDate, newVal => {
      markRange(props.minDate, newVal)
    })

    watch(() => props.minDate, (newVal, oldVal) => {
      if (getDateTimestamp(newVal) !== getDateTimestamp(oldVal)) {
        markRange(props.minDate, props.maxDate)
      }
    })

    watch(() => props.maxDate, (newVal, oldVal) => {
      if (getDateTimestamp(newVal) !== getDateTimestamp(oldVal)) {
        markRange(props.minDate, props.maxDate)
      }
    })

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
