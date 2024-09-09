<template>
  <table
    role="grid"
    :aria-label="t('el.datepicker.monthTablePrompt')"
    :class="ns.b()"
    @click="handleMonthTableClick"
    @mousemove="handleMouseMove"
  >
    <tbody ref="tbodyRef">
      <tr v-for="(row, key) in rows" :key="key">
        <td
          v-for="(cell, key_) in row"
          :key="key_"
          :ref="(el) => isSelectedCell(cell) && (currentCellRef = el as HTMLElement)"
          :class="getCellStyle(cell)"
          :aria-selected="`${isSelectedCell(cell)}`"
          :aria-label="t(`el.datepicker.month${+cell.text + 1}`)"
          :tabindex="isSelectedCell(cell) ? 0 : -1"
          @keydown.space.prevent.stop="handleMonthTableClick"
          @keydown.enter.prevent.stop="handleMonthTableClick"
        >
          <el-date-picker-cell
            :cell="{
              ...cell,
              renderText: t('el.datepicker.months.' + months[cell.text]),
            }"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, watch } from 'vue'
import dayjs from 'dayjs'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { castArray, hasClass } from '@element-plus/utils'
import { basicMonthTableProps } from '../props/basic-month-table'
import { datesInMonth, getValidDateOfMonth } from '../utils'
import ElDatePickerCell from './basic-cell-render'

type MonthCell = {
  column: number
  row: number
  disabled: boolean
  start: boolean
  end: boolean
  text: number
  type: 'normal' | 'today'
  inRange: boolean
}

const props = defineProps(basicMonthTableProps)
const emit = defineEmits(['changerange', 'pick', 'select'])

const ns = useNamespace('month-table')

const { t, lang } = useLocale()
const tbodyRef = ref<HTMLElement>()
const currentCellRef = ref<HTMLElement>()
const months = ref(
  props.date
    .locale('en')
    .localeData()
    .monthsShort()
    .map((_) => _.toLowerCase())
)
const tableRows = ref<MonthCell[][]>([
  [] as MonthCell[],
  [] as MonthCell[],
  [] as MonthCell[],
])
const lastRow = ref<number>()
const lastColumn = ref<number>()
const rows = computed<MonthCell[][]>(() => {
  const rows = tableRows.value

  const now = dayjs().locale(lang.value).startOf('month')

  for (let i = 0; i < 3; i++) {
    const row = rows[i]
    for (let j = 0; j < 4; j++) {
      const cell = (row[j] ||= {
        row: i,
        column: j,
        type: 'normal',
        inRange: false,
        start: false,
        end: false,
        text: -1,
        disabled: false,
      })

      cell.type = 'normal'

      const index = i * 4 + j
      const calTime = props.date.startOf('year').month(index)

      const calEndDate =
        props.rangeState.endDate ||
        props.maxDate ||
        (props.rangeState.selecting && props.minDate) ||
        null

      cell.inRange =
        !!(
          props.minDate &&
          calTime.isSameOrAfter(props.minDate, 'month') &&
          calEndDate &&
          calTime.isSameOrBefore(calEndDate, 'month')
        ) ||
        !!(
          props.minDate &&
          calTime.isSameOrBefore(props.minDate, 'month') &&
          calEndDate &&
          calTime.isSameOrAfter(calEndDate, 'month')
        )

      if (props.minDate?.isSameOrAfter(calEndDate)) {
        cell.start = !!(calEndDate && calTime.isSame(calEndDate, 'month'))
        cell.end = props.minDate && calTime.isSame(props.minDate, 'month')
      } else {
        cell.start = !!(props.minDate && calTime.isSame(props.minDate, 'month'))
        cell.end = !!(calEndDate && calTime.isSame(calEndDate, 'month'))
      }

      const isToday = now.isSame(calTime)
      if (isToday) {
        cell.type = 'today'
      }

      cell.text = index
      cell.disabled = props.disabledDate?.(calTime.toDate()) || false
    }
  }
  return rows
})

const focus = () => {
  currentCellRef.value?.focus()
}

const getCellStyle = (cell: MonthCell) => {
  const style = {} as any
  const year = props.date.year()
  const today = new Date()
  const month = cell.text

  style.disabled = props.disabledDate
    ? datesInMonth(year, month, lang.value).every(props.disabledDate)
    : false
  style.current =
    castArray(props.parsedValue).findIndex(
      (date) =>
        dayjs.isDayjs(date) && date.year() === year && date.month() === month
    ) >= 0
  style.today = today.getFullYear() === year && today.getMonth() === month

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

const isSelectedCell = (cell: MonthCell) => {
  const year = props.date.year()
  const month = cell.text
  return (
    castArray(props.date).findIndex(
      (date) => date.year() === year && date.month() === month
    ) >= 0
  )
}

const handleMouseMove = (event: MouseEvent) => {
  if (!props.rangeState.selecting) return

  let target = event.target as HTMLElement
  if (target.tagName === 'SPAN') {
    target = target.parentNode?.parentNode as HTMLElement
  }
  if (target.tagName === 'DIV') {
    target = target.parentNode as HTMLElement
  }
  if (target.tagName !== 'TD') return

  const row = (target.parentNode as HTMLTableRowElement).rowIndex
  const column = (target as HTMLTableCellElement).cellIndex
  // can not select disabled date
  if (rows.value[row][column].disabled) return

  // only update rangeState when mouse moves to a new cell
  // this avoids frequent Date object creation and improves performance
  if (row !== lastRow.value || column !== lastColumn.value) {
    lastRow.value = row
    lastColumn.value = column
    emit('changerange', {
      selecting: true,
      endDate: props.date.startOf('year').month(row * 4 + column),
    })
  }
}
const handleMonthTableClick = (event: MouseEvent | KeyboardEvent) => {
  const target = (event.target as HTMLElement)?.closest(
    'td'
  ) as HTMLTableCellElement
  if (target?.tagName !== 'TD') return
  if (hasClass(target, 'disabled')) return
  const column = target.cellIndex
  const row = (target.parentNode as HTMLTableRowElement).rowIndex
  const month = row * 4 + column
  const newDate = props.date.startOf('year').month(month)
  if (props.selectionMode === 'months') {
    if (event.type === 'keydown') {
      emit('pick', castArray(props.parsedValue), false)
      return
    }
    const newMonth = getValidDateOfMonth(
      props.date.year(),
      month,
      lang.value,
      props.disabledDate
    )
    const newValue = hasClass(target, 'current')
      ? castArray(props.parsedValue).filter(
          (d) => d?.month() !== newMonth.month()
        )
      : castArray(props.parsedValue).concat([dayjs(newMonth)])
    emit('pick', newValue)
  } else if (props.selectionMode === 'range') {
    if (!props.rangeState.selecting) {
      emit('pick', { minDate: newDate, maxDate: null })
      emit('select', true)
    } else {
      if (props.minDate && newDate >= props.minDate) {
        emit('pick', { minDate: props.minDate, maxDate: newDate })
      } else {
        emit('pick', { minDate: newDate, maxDate: props.minDate })
      }
      emit('select', false)
    }
  } else {
    emit('pick', month)
  }
}

watch(
  () => props.date,
  async () => {
    if (tbodyRef.value?.contains(document.activeElement)) {
      await nextTick()
      currentCellRef.value?.focus()
    }
  }
)

defineExpose({
  /**
   * @description focus current cell
   */
  focus,
})
</script>
