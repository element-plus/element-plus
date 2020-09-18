<template>
  <table class="el-month-table" @click="handleMonthTableClick" @mousemove="handleMouseMove">
    <tbody>
      <tr v-for="(row, key) in rows" :key="key">
        <td v-for="(cell, key_) in row" :key="key_" :class="getCellStyle(cell)">
          <div>
            <a class="cell">{{ t('el.datepicker.months.' + months[cell.text]) }}</a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">

import { isDate, range, getDayCountOfMonth, nextDate } from './time-picker-utils'
import { hasClass } from '@element-plus/utils/dom'
import { coerceTruthyValueToArray } from '@element-plus/utils/util'
import { t } from '@element-plus/locale'
import {
  defineComponent,
  computed,
  ref,
  PropType,
  watch,
} from 'vue'

const datesInMonth = (year, month) => {
  const numOfDays = getDayCountOfMonth(year, month)
  const firstDay = new Date(year, month, 1)
  return range(numOfDays).map(n => nextDate(firstDay, n))
}

const clearDate = date => {
  return new Date(date.getFullYear(), date.getMonth())
}

const getMonthTimestamp = function(time) {
  if (typeof time === 'number' || typeof time === 'string') {
    return clearDate(new Date(time)).getTime()
  } else if (time instanceof Date) {
    return clearDate(time).getTime()
  } else {
    return NaN
  }
}
export default defineComponent({
  props: {
    disabledDate: {},
    value: {},
    selectionMode: {
      type: String,
      default: 'month',
    },
    minDate: {
      type: Date as PropType<Date>,
    },
    maxDate: {
      type: Date as PropType<Date>,
    },
    defaultValue: {
      validator: (val: any):boolean => (
        // null or valid Date Object
        val === null || isDate(val) || (Array.isArray(val) && val.every(isDate))
      ),
    },
    date: {
      type: Date as PropType<Date>,
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
    const months = ref(['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'])
    const tableRows = ref([ [], [], [] ])
    const lastRow = ref(null)
    const lastColumn = ref(null)
    const rows = computed(() =>{
      // TODO: refactory rows / getCellClasses
      const rows = tableRows.value
      const disabledDate = props.disabledDate
      const selectedDate = []
      const now = getMonthTimestamp(new Date())

      for (let i = 0; i < 3; i++) {
        const row = rows[i]
        for (let j = 0; j < 4; j++) {
          let cell = row[j]
          if (!cell) {
            cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false }
          }

          cell.type = 'normal'

          const index = i * 4 + j
          const time = new Date(props.date.getFullYear(), index).getTime()
          cell.inRange = time >= getMonthTimestamp(props.minDate) && time <= getMonthTimestamp(props.maxDate)
          cell.start = props.minDate && time === getMonthTimestamp(props.minDate)
          cell.end = props.maxDate && time === getMonthTimestamp(props.maxDate)
          const isToday = time === now

          if (isToday) {
            cell.type = 'today'
          }
          cell.text = index
          let cellDate = new Date(time)
          cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate)
          cell.selected = selectedDate.find(date => date.getTime() === cellDate.getTime())
          row[j] = cell
        }
      }
      return rows
    })
    const getCellStyle = cell => {
      const style = {} as any
      const year = props.date.getFullYear()
      const today = new Date()
      const month = cell.text
      const defaultValue = props.defaultValue ? Array.isArray(props.defaultValue) ? props.defaultValue : [props.defaultValue] : []
      style.disabled = typeof props.disabledDate === 'function'
        ? datesInMonth(year, month).every(props.disabledDate)
        : false
      style.current = coerceTruthyValueToArray(props.value).findIndex(date => date.getFullYear() === year && date.getMonth() === month) >= 0
      style.today = today.getFullYear() === year && today.getMonth() === month
      style.default = defaultValue.some(date => cellMatchesDate(cell, date))

      if (cell.inRange) {
        style['in-range'] = true

        if (cell.start) {
          style['start-date'] = true
        }

        if (cell.end) {
          style['end-date'] = true
        }
      }
      return style
    }
    const cellMatchesDate = (cell, date) => {
      const value = new Date(date)
      return props.date.getFullYear() === value.getFullYear() && Number(cell.text) === value.getMonth()
    }

    const handleMouseMove = event => {
      if (!props.rangeState.selecting) return

      let target = event.target
      if (target.tagName === 'A') {
        target = target.parentNode.parentNode
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode
      }
      if (target.tagName !== 'TD') return

      const row = target.parentNode.rowIndex
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
            endDate: getMonthOfCell(row * 4 + column),
          },
        })
      }
    }
    const handleMonthTableClick = event => {
      let target = event.target
      if (target.tagName === 'A') {
        target = target.parentNode.parentNode
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode
      }
      if (target.tagName !== 'TD') return
      if (hasClass(target, 'disabled')) return
      const column = target.cellIndex
      const row = target.parentNode.rowIndex
      const month = row * 4 + column
      const newDate = getMonthOfCell(month)
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
      } else {
        ctx.emit('pick', month)
      }
    }
    const getMonthOfCell = month => {
      const year = props.date.getFullYear()
      return new Date(year, month, 1)
    }

    const markRange = (minDate, maxDate) => {
      minDate = getMonthTimestamp(minDate)
      maxDate = getMonthTimestamp(maxDate) || minDate;
      [minDate, maxDate] = [Math.min(minDate, maxDate), Math.max(minDate, maxDate)]
      for (let i = 0, k = rows.value.length; i < k; i++) {
        const row = rows.value[i]
        for (let j = 0, l = row.length; j < l; j++) {

          const cell = row[j]
          const index = i * 4 + j
          const time = new Date(props.date.getFullYear(), index).getTime()

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
      if (getMonthTimestamp(newVal) !== getMonthTimestamp(oldVal)) {
        markRange(props.minDate, props.maxDate)
      }
    })

    watch(() => props.maxDate, (newVal, oldVal) => {
      if (getMonthTimestamp(newVal) !== getMonthTimestamp(oldVal)) {
        markRange(props.minDate, props.maxDate)
      }
    })

    return {
      handleMouseMove,
      handleMonthTableClick,
      rows,
      getCellStyle,
      t,
      months,
    }
  },

})
</script>
