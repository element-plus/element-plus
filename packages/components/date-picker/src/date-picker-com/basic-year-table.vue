<template>
  <table
    role="grid"
    :aria-label="t('el.datepicker.yearTablePrompt')"
    :class="ns.b()"
    @click="handleYearTableClick"
    @mousemove="handleMouseMove"
  >
    <tbody ref="tbodyRef">
      <tr v-for="(row, key) in rows" :key="key">
        <td
          v-for="(cell, key_) in row"
          :key="key_"
          :ref="(el) => isSelectedCell(cell) && (currentCellRef = el as HTMLElement)"
          class="available"
          :class="getCellStyle(cell)"
          :aria-selected="`${isSelectedCell(cell)}`"
          :aria-label="t(`el.datepicker.year${+cell.text + 1}`)"
          :tabindex="isSelectedCell(cell) ? 0 : -1"
          @keydown.space.prevent.stop="handleYearTableClick"
          @keydown.enter.prevent.stop="handleYearTableClick"
        >
          <div>
            <a class="cell">{{ cell.text }}</a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, watch } from 'vue'
import dayjs from 'dayjs'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { rangeArr } from '@element-plus/components/time-picker'
import { castArray, hasClass } from '@element-plus/utils'
import { basicYearTableProps } from '../props/basic-year-table'

type YearCell = {
  column: number
  row: number
  disabled: boolean
  start: boolean
  end: boolean
  text: number
  type: 'normal' | 'today'
  inRange: boolean
}

const datesInYear = (year: number, lang: string) => {
  const firstDay = dayjs(String(year)).locale(lang).startOf('year')
  const lastDay = firstDay.endOf('year')
  const numOfDays = lastDay.dayOfYear()
  return rangeArr(numOfDays).map((n) => firstDay.add(n, 'day').toDate())
}

const props = defineProps(basicYearTableProps)
const emit = defineEmits(['changerange', 'pick', 'select'])

const ns = useNamespace('year-table')

const { t, lang } = useLocale()
const tbodyRef = ref<HTMLElement>()
const currentCellRef = ref<HTMLElement>()
const startYear = computed(() => {
  return Math.floor(props.date.year() / 10) * 10
})

// MyCodes
const tableRows = ref<YearCell[][]>([[], [], []])
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
          text: -1,
          disabled: false,
        }
      }
      cell.type = 'normal'
      const index = i * 4 + j + startYear.value
      const calTime = dayjs().year(index)

      const calEndDate =
        props.rangeState.endDate ||
        props.maxDate ||
        (props.rangeState.selecting && props.minDate) ||
        null

      // 计算是否处于时间范围区间ß
      cell.inRange =
        !!(
          props.minDate &&
          calTime.isSameOrAfter(props.minDate, 'year') &&
          calEndDate &&
          calTime.isSameOrBefore(calEndDate, 'year')
        ) ||
        !!(
          props.minDate &&
          calTime.isSameOrBefore(props.minDate, 'year') &&
          calEndDate &&
          calTime.isSameOrAfter(calEndDate, 'year')
        )

      // 计算 cell.start 和 cell.end
      if (props.minDate?.isSameOrAfter(calEndDate)) {
        cell.start = !!(calEndDate && calTime.isSame(calEndDate, 'year'))
        cell.end = !!(props.minDate && calTime.isSame(props.minDate, 'year'))
      } else {
        cell.start = !!(props.minDate && calTime.isSame(props.minDate, 'year'))
        cell.end = !!(calEndDate && calTime.isSame(calEndDate, 'year'))
      }

      const isToday = now.isSame(calTime)
      if (isToday) {
        cell.type = 'today'
      }
      cell.text = index
      const cellDate = calTime.toDate()
      cell.disabled =
        (props.disabledDate && props.disabledDate(cellDate)) || false
      row[j] = cell
    }
  }

  return rows
})

const getCellStyle = (cell: YearCell) => {
  const style = {} as any
  const today = dayjs().locale(lang.value)
  const year = cell.text

  style.disabled = props.disabledDate
    ? datesInYear(year, lang.value).every(props.disabledDate)
    : false

  style.current =
    castArray(props.parsedValue).findIndex(
      (date) => dayjs.isDayjs(date) && date.year() === year
    ) >= 0

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

const handleYearTableClick = (event: MouseEvent | KeyboardEvent) => {
  let target = (event.target as HTMLElement)?.closest(
    'td'
  ) as HTMLTableCellElement
  if (target.tagName === 'A') {
    target = target.parentNode?.parentNode as HTMLTableCellElement
  }
  if (target.tagName === 'DIV') {
    target = target.parentNode as HTMLTableCellElement
  }
  if (target.tagName !== 'TD') return
  if (hasClass(target, 'disabled')) return

  const column = target.cellIndex
  const row = (target.parentNode as HTMLTableRowElement).rowIndex

  const selectedYear = row * 4 + column + startYear.value
  const newDate = dayjs().year(selectedYear)

  if (props.selectionMode === 'range') {
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
    emit('pick', selectedYear)
  }
}

const handleMouseMove = (event: MouseEvent) => {
  if (!props.rangeState.selecting) return

  let target = event.target as HTMLElement
  if (target.tagName === 'A') {
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
      endDate: dayjs()
        .year(startYear.value)
        .add(row * 4 + column, 'year'),
    })
  }
}

// MyCodes end
const focus = () => {
  currentCellRef.value?.focus()
}

const getCellKls = (year: number) => {
  const kls: Record<string, boolean> = {}
  const today = dayjs().locale(lang.value)

  kls.disabled = props.disabledDate
    ? datesInYear(year, lang.value).every(props.disabledDate)
    : false

  kls.current =
    castArray(props.parsedValue).findIndex((d) => d!.year() === year) >= 0

  kls.today = today.year() === year

  return kls
}

const isSelectedCell = (cell: YearCell) => {
  const year = cell.text
  // return (
  //   (year === startYear.value &&
  //     props.date.year() < startYear.value &&
  //     props.date.year() > startYear.value + 9) ||
  //   castArray(props.date).findIndex((date) => date.year() === year) >= 0
  // )

  return castArray(props.date).findIndex((date) => date.year() === year) >= 0
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
   * @description focus on the current cell
   */
  focus,
})
</script>
