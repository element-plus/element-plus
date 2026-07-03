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
import { datesInQuarter, normalizeQuarterDate } from '../utils'
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
const tableRows = ref<QuarterCell[][]>([[]])
const lastRow = ref<number>()
const lastColumn = ref<number>()

const ROW_COUNT = 1
const COL_COUNT = 4
const toQuarterIndex = (row: number, col: number) => row * COL_COUNT + col

const quarterIndex = (date: Dayjs) => date.year() * 4 + (date.quarter() - 1)

const resolveQuarterDate = (quarter: number) =>
  normalizeQuarterDate(
    props.date.startOf('year').add(quarter, 'quarter'),
    lang.value,
    props.disabledDate
  )

type QuarterRangeContext = {
  minIdx: number | null
  endIdx: number | null
}

const isSelectedCell = (cell: QuarterCell) => {
  const year = props.date.year()
  const quarter = cell.text
  return castArray(props.date).some(
    (date) => date.year() === year && date.quarter() - 1 === quarter
  )
}

const createQuarterCell = (row: number, column: number): QuarterCell => ({
  row,
  column,
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

const resolveRangeEndDate = () =>
  props.rangeState.endDate ||
  props.maxDate ||
  (props.rangeState.selecting && props.minDate) ||
  null

const getQuarterRangeFlags = (
  calIdx: number,
  minIdx: number | null,
  endIdx: number | null
) => {
  const inRange =
    (minIdx !== null &&
      endIdx !== null &&
      calIdx >= minIdx &&
      calIdx <= endIdx) ||
    (minIdx !== null && endIdx !== null && calIdx <= minIdx && calIdx >= endIdx)

  if (minIdx !== null && endIdx !== null && minIdx >= endIdx) {
    return {
      inRange,
      start: calIdx === endIdx,
      end: calIdx === minIdx,
    }
  }

  return {
    inRange,
    start: minIdx !== null && calIdx === minIdx,
    end: endIdx !== null && calIdx === endIdx,
  }
}

const isQuarterDisabled = (quarter: number) =>
  props.disabled ||
  (props.disabledDate
    ? datesInQuarter(props.date, props.date.year(), quarter, lang.value).every(
        props.disabledDate
      )
    : false)

const updateQuarterCell = (
  cell: QuarterCell,
  row: number,
  col: number,
  now: Dayjs,
  rangeContext: QuarterRangeContext
) => {
  cell.type = 'normal'

  const index = toQuarterIndex(row, col)
  const calTime = props.date.startOf('year').add(index, 'quarter')
  const calIdx = quarterIndex(calTime)
  const { inRange, start, end } = getQuarterRangeFlags(
    calIdx,
    rangeContext.minIdx,
    rangeContext.endIdx
  )

  cell.inRange = inRange
  cell.start = start
  cell.end = end

  if (now.isSame(calTime)) {
    cell.type = 'today'
  }

  const cellDate = calTime.toDate()
  cell.text = index
  cell.disabled = isQuarterDisabled(index)
  cell.date = cellDate
  cell.customClass = props.cellClassName?.(cellDate)
  cell.dayjs = calTime
  cell.timestamp = calTime.valueOf()
  cell.isSelected = isSelectedCell(cell)
}

const rows = computed<QuarterCell[][]>(() => {
  const rows = tableRows.value
  const now = dayjs().locale(lang.value).startOf('quarter')
  const calEndDate = resolveRangeEndDate()
  const minIdx = props.minDate ? quarterIndex(props.minDate) : null
  const endIdx = calEndDate ? quarterIndex(calEndDate) : null
  const rangeContext = { minIdx, endIdx }

  for (let i = 0; i < ROW_COUNT; i++) {
    const row = rows[i]
    for (let j = 0; j < COL_COUNT; j++) {
      const cell = (row[j] ||= createQuarterCell(i, j))
      updateQuarterCell(cell, i, j, now, rangeContext)
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

  style.disabled = isQuarterDisabled(quarter)
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
      endDate: props.date
        .startOf('year')
        .add(toQuarterIndex(row, column), 'quarter'),
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
  const quarter = toQuarterIndex(row, column)
  if (props.selectionMode === 'range') {
    const newDate = resolveQuarterDate(quarter)
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
    const newQuarter = resolveQuarterDate(quarter)
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
