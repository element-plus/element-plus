<template>
  <table
    role="grid"
    :aria-label="t('el.datepicker.quarterTablePrompt')"
    :class="ns.b()"
    @click="handleQuarterTableClick"
    @mousemove="handleRangeHover"
    @mouseleave="handleTableMouseLeave"
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

import type { Dayjs, OpUnitType } from 'dayjs'

const QUARTER_UNIT = 'quarter' as OpUnitType

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
const lastColumn = ref<number>()

const COL_COUNT = 4

const resolveQuarterDate = (quarter: number) =>
  normalizeQuarterDate(
    props.date.startOf('year').add(quarter, 'quarter'),
    lang.value,
    props.disabledDate
  )

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

const isQuarterDisabled = (quarter: number) =>
  props.disabled ||
  (props.disabledDate
    ? datesInQuarter(props.date, props.date.year(), quarter, lang.value).every(
        props.disabledDate
      )
    : false)

const updateQuarterCell = (
  cell: QuarterCell,
  col: number,
  now: Dayjs,
  calEndDate: Dayjs | null
) => {
  cell.type = 'normal'

  const calTime = props.date.startOf('year').add(col, 'quarter')

  cell.inRange =
    !!(
      props.minDate &&
      calTime.isSameOrAfter(props.minDate, QUARTER_UNIT) &&
      calEndDate &&
      calTime.isSameOrBefore(calEndDate, QUARTER_UNIT)
    ) ||
    !!(
      props.minDate &&
      calTime.isSameOrBefore(props.minDate, QUARTER_UNIT) &&
      calEndDate &&
      calTime.isSameOrAfter(calEndDate, QUARTER_UNIT)
    )

  if (props.minDate?.isSameOrAfter(calEndDate, QUARTER_UNIT)) {
    cell.start = !!(calEndDate && calTime.isSame(calEndDate, QUARTER_UNIT))
    cell.end = !!(props.minDate && calTime.isSame(props.minDate, QUARTER_UNIT))
  } else {
    cell.start = !!(
      props.minDate && calTime.isSame(props.minDate, QUARTER_UNIT)
    )
    cell.end = !!(calEndDate && calTime.isSame(calEndDate, QUARTER_UNIT))
  }

  if (now.isSame(calTime)) {
    cell.type = 'today'
  }

  const cellDate = calTime.toDate()
  cell.text = col
  cell.disabled = isQuarterDisabled(col)
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
  const row = rows[0]

  for (let col = 0; col < COL_COUNT; col++) {
    const cell = (row[col] ||= createQuarterCell(0, col))
    updateQuarterCell(cell, col, now, calEndDate)
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

const handleRangeHover = (event: MouseEvent) => {
  if (!props.rangeState.selecting) return

  const target = (event.target as HTMLElement)?.closest(
    'td'
  ) as HTMLTableCellElement
  if (target?.tagName !== 'TD') return

  const column = target.cellIndex
  // can not select disabled date
  if (rows.value[0][column].disabled) return

  if (column !== lastColumn.value) {
    lastColumn.value = column
    emit('changerange', {
      selecting: true,
      endDate: props.date.startOf('year').add(column, 'quarter'),
    })
  }
}

const handleTableMouseLeave = () => {
  lastColumn.value = undefined
}

const handleQuarterTableClick = (event: MouseEvent | KeyboardEvent) => {
  if (props.disabled) return
  const target = (event.target as HTMLElement)?.closest(
    'td'
  ) as HTMLTableCellElement
  if (target?.tagName !== 'TD') return
  if (hasClass(target, 'disabled')) return
  const column = target.cellIndex
  const quarter = column
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
