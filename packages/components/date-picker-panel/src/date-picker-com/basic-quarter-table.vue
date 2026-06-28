<template>
  <table
    role="grid"
    :aria-label="t('el.datepicker.quarterTablePrompt')"
    :class="ns.b()"
    @click="handleQuarterTableClick"
    @mousemove="handleMouseMove"
  >
    <tbody ref="tbodyRef">
      <tr v-for="(row, key) in rows" :key="key">
        <td
          v-for="(cell, key_) in row"
          :key="key_"
          :ref="(el) => cell.isSelected && (currentCellRef = el as HTMLElement)"
          class="available"
          :class="getCellStyle(cell)"
          :aria-selected="!!cell.isSelected"
          :aria-label="`Q${+cell.text + 1}`"
          :tabindex="cell.isSelected ? 0 : -1"
          @keydown.space.prevent.stop="handleQuarterTableClick"
          @keydown.enter.prevent.stop="handleQuarterTableClick"
        >
          <el-date-picker-cell
            :cell="{
              ...cell,
              renderText: `Q${+cell.text + 1}`,
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
import { basicQuarterTableProps } from '../props/basic-quarter-table'
import { datesInMonth, getValidDateOfQuarter } from '../utils'
import ElDatePickerCell from './basic-cell-render'

import type { Dayjs } from 'dayjs'

type QuarterCell = {
  column: number
  customClass: string | undefined
  disabled: boolean
  end: boolean
  inRange: boolean
  row: number
  selected: Dayjs | undefined
  isCurrent: boolean | undefined
  isSelected: boolean
  start: boolean
  text: number
  renderText: string | undefined
  timestamp: number | undefined
  date: Date | undefined
  dayjs: Dayjs | undefined
  type: 'normal' | 'today'
}

const props = defineProps(basicQuarterTableProps)
const emit = defineEmits(['changerange', 'pick', 'select'])

const ns = useNamespace('quarter-table')

const { t, lang } = useLocale()
const tbodyRef = ref<HTMLElement>()
const currentCellRef = ref<HTMLElement>()
const tableRows = ref<QuarterCell[][]>([[], []])
const lastRow = ref<number>()
const lastColumn = ref<number>()

const quarterIndex = (date: Dayjs) => date.year() * 4 + (date.quarter() - 1)

const datesInQuarter = (date: Dayjs, year: number, quarter: number) => {
  const firstMonth = quarter * 3
  return [0, 1, 2].reduce<Date[]>(
    (acc, i) =>
      acc.concat(datesInMonth(date, year, firstMonth + i, lang.value)),
    []
  )
}

const rows = computed<QuarterCell[][]>(() => {
  const rows = tableRows.value

  const now = dayjs().locale(lang.value).startOf('quarter')

  for (let i = 0; i < 2; i++) {
    const row = rows[i]
    for (let j = 0; j < 2; j++) {
      const cell = (row[j] ||= {
        row: i,
        column: j,
        type: 'normal',
        inRange: false,
        start: false,
        end: false,
        text: -1,
        disabled: false,
        isSelected: false,
        customClass: undefined,
        date: undefined,
        dayjs: undefined,
        isCurrent: undefined,
        selected: undefined,
        renderText: undefined,
        timestamp: undefined,
      })

      cell.type = 'normal'

      const index = i * 2 + j
      const calTime = props.date.startOf('year').add(index, 'quarter')

      const calEndDate =
        props.rangeState.endDate ||
        props.maxDate ||
        (props.rangeState.selecting && props.minDate) ||
        null

      const calIdx = quarterIndex(calTime)
      const minIdx = props.minDate ? quarterIndex(props.minDate) : null
      const endIdx = calEndDate ? quarterIndex(calEndDate) : null

      cell.inRange =
        (minIdx !== null &&
          endIdx !== null &&
          calIdx >= minIdx &&
          calIdx <= endIdx) ||
        (minIdx !== null &&
          endIdx !== null &&
          calIdx <= minIdx &&
          calIdx >= endIdx)

      if (minIdx !== null && endIdx !== null && minIdx >= endIdx) {
        cell.start = calIdx === endIdx
        cell.end = calIdx === minIdx
      } else {
        cell.start = minIdx !== null && calIdx === minIdx
        cell.end = endIdx !== null && calIdx === endIdx
      }

      const isToday = now.isSame(calTime)
      if (isToday) {
        cell.type = 'today'
      }

      const cellDate = calTime.toDate()
      cell.text = index
      cell.disabled =
        props.disabled ||
        (props.disabledDate
          ? datesInQuarter(props.date, props.date.year(), index).every(
              props.disabledDate
            )
          : false)
      cell.date = cellDate
      cell.customClass = props.cellClassName?.(cellDate)
      cell.dayjs = calTime
      cell.timestamp = calTime.valueOf()
      cell.isSelected = isSelectedCell(cell)
    }
  }
  return rows
})

const focus = () => {
  currentCellRef.value?.focus()
}

const getCellStyle = (cell: QuarterCell) => {
  const style = {} as any
  const year = props.date.year()
  const today = dayjs().locale(lang.value)
  const quarter = cell.text

  const disabledDate = props.disabledDate
  style.disabled =
    props.disabled ||
    (disabledDate
      ? datesInQuarter(props.date, year, quarter).every(disabledDate)
      : false)
  style.current = castArray(props.parsedValue).some(
    (date) =>
      dayjs.isDayjs(date) &&
      date.year() === year &&
      date.quarter() - 1 === quarter
  )
  style.today = today.year() === year && today.quarter() - 1 === quarter

  if (cell.customClass) {
    style[cell.customClass] = true
  }
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

const isSelectedCell = (cell: QuarterCell) => {
  const year = props.date.year()
  const quarter = cell.text
  return castArray(props.date).some(
    (date) => date.year() === year && date.quarter() - 1 === quarter
  )
}

const handleMouseMove = (event: MouseEvent) => {
  if (!props.rangeState.selecting) return

  const target = (event.target as HTMLElement)?.closest(
    'td'
  ) as HTMLTableCellElement
  if (target?.tagName !== 'TD') return

  const row = (target.parentNode as HTMLTableRowElement).rowIndex
  const column = target.cellIndex
  // can not select disabled date
  if (rows.value[row][column].disabled) return

  if (row !== lastRow.value || column !== lastColumn.value) {
    lastRow.value = row
    lastColumn.value = column
    emit('changerange', {
      selecting: true,
      endDate: props.date.startOf('year').add(row * 2 + column, 'quarter'),
    })
  }
}

const handleQuarterTableClick = (event: MouseEvent | KeyboardEvent) => {
  if (props.disabled) return
  const target = (event.target as HTMLElement)?.closest(
    'td'
  ) as HTMLTableCellElement
  if (target?.tagName !== 'TD') return
  if (hasClass(target, 'disabled')) return
  const column = target.cellIndex
  const row = (target.parentNode as HTMLTableRowElement).rowIndex
  const quarter = row * 2 + column
  if (props.selectionMode === 'range') {
    const newDate = getValidDateOfQuarter(
      props.date,
      props.date.year(),
      quarter,
      lang.value,
      props.disabledDate
    )
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
  } else if (props.selectionMode === 'quarters') {
    if (event.type === 'keydown') {
      emit('pick', castArray(props.parsedValue), false)
      return
    }
    const newQuarter = getValidDateOfQuarter(
      props.date,
      props.date.year(),
      quarter,
      lang.value,
      props.disabledDate
    )
    const newValue = hasClass(target, 'current')
      ? castArray(props.parsedValue).filter(
          (d) => d?.year() !== newQuarter.year() || d.quarter() - 1 !== quarter
        )
      : castArray(props.parsedValue).concat([newQuarter])
    emit('pick', newValue)
  } else {
    emit('pick', quarter)
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
