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
import { hasClass } from '@element-plus/utils/dom'
import { coerceTruthyValueToArray } from '@element-plus/utils/util'
import { rangeArr } from '@element-plus/time-picker/src/common/date-utils'
import { t } from '@element-plus/locale'
import dayjs, { Dayjs } from 'dayjs'

import {
  defineComponent,
  computed,
  ref,
  PropType,
} from 'vue'

const datesInMonth = (year, month) => {
  const firstDay = dayjs().startOf('month').month(month).year(year)
  const numOfDays = firstDay.daysInMonth()
  return rangeArr(numOfDays).map(n => firstDay.add(n, 'day').toDate())
}


export default defineComponent({
  props: {
    disabledDate: {
      type: Function as PropType<(_: Date) => void>,
    },
    defaultValue: {},
    selectionMode: {
      type: String,
      default: 'month',
    },
    minDate: {
      type: Dayjs as PropType<Dayjs>,
    },
    maxDate: {
      type: Dayjs as PropType<Dayjs>,
    },
    date: {
      type: Dayjs as PropType<Dayjs>,
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
    const months = ref(props.date.locale('en').localeData().monthsShort().map(_=>_.toLowerCase()))
    const tableRows = ref([ [], [], [] ])
    const lastRow = ref(null)
    const lastColumn = ref(null)
    const rows = computed(() =>{
      // TODO: refactory rows / getCellClasses
      const rows = tableRows.value
      const now = dayjs().startOf('month')

      for (let i = 0; i < 3; i++) {
        const row = rows[i]
        for (let j = 0; j < 4; j++) {
          let cell = row[j]
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

          cell.type = 'normal'

          const index = i * 4 + j
          const calTime =  props.date.startOf('year').month(index)

          let calEndDate = props.rangeState.endDate || props.maxDate
          if (props.rangeState.selecting) {
            calEndDate = calEndDate || props.minDate
          }
          cell.inRange = (
            props.minDate &&
              calTime.isSameOrAfter(props.minDate, 'month')
            && (
              calEndDate &&
                calTime.isSameOrBefore(calEndDate, 'month')
            ))

          cell.start = props.minDate && calTime.isSame(props.minDate, 'month')

          cell.end = calEndDate && calTime.isSame(calEndDate, 'month')

          const isToday = now.isSame(calTime)

          if (isToday) {
            cell.type = 'today'
          }
          cell.text = index
          let cellDate = calTime.toDate()
          cell.disabled = typeof props.disabledDate === 'function' && props.disabledDate(cellDate)
          row[j] = cell
        }
      }
      return rows
    })
    const getCellStyle = cell => {
      const style = {} as any
      const year = props.date.year()
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
      return props.date.year() === value.getFullYear() && Number(cell.text) === value.getMonth()
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
          rangeState: {
            selecting: true,
            endDate: props.date.startOf('year').month(row * 4 + column),
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
      const newDate = props.date.startOf('year').month(month)
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
