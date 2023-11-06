<template>
  <table
    aria-describedby="datepickerYearTable"
    class="el-month-table"
    @click="handleYearTableClick"
    @mousemove="handleMouseMove"
  >
    <tbody>
      <th />
      <tr v-for="(row, key) in rows" :key="key">
        <td v-for="(cell, key_) in row" :key="key_" :class="getCellStyle(cell)">
          <div>
            <a class="cell">{{ cell.text }}</a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
// @ts-nocheck
import { computed, defineComponent } from 'vue'
import dayjs from 'dayjs'
import { rangeArr, useLocale } from 'element-plus'
import { castArray } from 'lodash-es'
import { hasClass } from './utils'
import type { PropType } from 'vue'
import type { Dayjs } from 'dayjs'

const datesInYear = (year: Dayjs, lang: string) => {
  const firstDay = dayjs(String(year)).locale(lang).startOf('year')
  const lastDay = firstDay.endOf('year')
  const numOfDays = lastDay.dayOfYear()
  return rangeArr(numOfDays).map((n) => firstDay.add(n, 'day').toDate())
}

export default defineComponent({
  props: {
    disabledDate: {
      type: Function as PropType<(_: Date) => void>,
    },
    parsedValue: {
      type: Object as PropType<Dayjs>,
    },
    selectionMode: {
      type: String,
      default: 'year',
    },
    minDate: {
      type: Object as PropType<Dayjs>,
    },
    maxDate: {
      type: Object as PropType<Dayjs>,
    },
    date: {
      type: Object as PropType<Dayjs>,
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
    const { t, lang } = useLocale()
    const startYear = computed(() => {
      return Math.floor(props.date.year() / 10) * 10
    })

    const tableRows = ref([[], [], []])
    const lastRow = ref(null)
    const lastColumn = ref(null)
    const rows = computed(() => {
      // 三行
      const rows = tableRows.value
      // 当前年份, 需区分时区
      const now = dayjs().locale(lang.value).startOf('year')
      // 计算每个cell位置的数据
      for (let i = 0; i < 3; i++) {
        const row = rows[i]
        for (let j = 0; j < 4; j++) {
          if (i * 4 + j >= 10) {
            break
          }
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
          const index = i * 4 + j + startYear.value
          const calTime = dayjs().year(index)

          const calEndDate =
            props.rangeState.endDate ||
            props.maxDate ||
            (props.rangeState.selecting && props.minDate)

          // 计算是否处于时间范围区间
          cell.inRange =
            (props.minDate &&
              calTime.isSameOrAfter(props.minDate, 'year') &&
              calEndDate &&
              calTime.isSameOrBefore(calEndDate, 'year')) ||
            (props.minDate &&
              calTime.isSameOrBefore(props.minDate, 'year') &&
              calEndDate &&
              calTime.isSameOrAfter(calEndDate, 'year'))

          // 计算 cell.start 和 cell.end
          if (props.minDate?.isSameOrAfter(calEndDate)) {
            cell.start = calEndDate && calTime.isSame(calEndDate, 'year')
            cell.end = props.minDate && calTime.isSame(props.minDate, 'year')
          } else {
            cell.start = props.minDate && calTime.isSame(props.minDate, 'year')
            cell.end = calEndDate && calTime.isSame(calEndDate, 'year')
          }

          const isToday = now.isSame(calTime)
          if (isToday) {
            cell.type = 'today'
          }
          cell.text = index
          const cellDate = calTime.toDate()
          cell.disabled = props.disabledDate && props.disabledDate(cellDate)
          row[j] = cell
        }
      }

      return rows
    })

    const getCellStyle = (cell: any) => {
      const style = {} as any
      const today = dayjs().locale(lang.value)
      const year = cell.text

      style.disabled = props.disabledDate
        ? datesInYear(year, lang.value).every(props.disabledDate)
        : false

      // style.current = castArray(props.parsedValue).findIndex((date) => dayjs.isDayjs(date) && date.year() === year) >= 0

      style.today = today.year() === year

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

    const handleYearTableClick = (event: MouseEvent) => {
      let target = event.target as HTMLDivElement
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

      const selectedYear = row * 4 + column + startYear.value
      const newDate = dayjs().year(selectedYear)

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
        ctx.emit('pick', newDate)
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
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
          selecting: true,
          endDate: dayjs()
            .year(startYear.value)
            .add(row * 4 + column, 'year'),
        })
      }
    }

    return {
      t,
      rows,
      startYear,
      getCellStyle,
      handleMouseMove,
      handleYearTableClick,
    }
  },
})
</script>
