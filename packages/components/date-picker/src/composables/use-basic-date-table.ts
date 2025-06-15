import { computed, nextTick, ref, unref, watch } from 'vue'
import dayjs from 'dayjs'
import { flatten } from 'lodash-unified'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { castArray, isArray } from '@element-plus/utils'
import { buildPickerTable } from '../utils'

import type { SetupContext } from 'vue'
import type { Dayjs } from 'dayjs'
import type { DateCell } from '../date-picker.type'
import type {
  BasicDateTableEmits,
  BasicDateTableProps,
} from '../props/basic-date-table'

const isNormalDay = (type = '') => {
  return ['normal', 'today'].includes(type)
}

export const useBasicDateTable = (
  props: BasicDateTableProps,
  emit: SetupContext<BasicDateTableEmits>['emit']
) => {
  const { lang } = useLocale()
  const tbodyRef = ref<HTMLElement>()
  const currentCellRef = ref<HTMLElement>()
  // data
  const lastRow = ref<number>()
  const lastColumn = ref<number>()
  const tableRows = ref<DateCell[][]>([[], [], [], [], [], []])

  let focusWithClick = false

  // todo better way to get Day.js locale object
  const firstDayOfWeek = (props.date as any).$locale().weekStart || 7
  const WEEKS_CONSTANT = props.date
    .locale('en')
    .localeData()
    .weekdaysShort()
    .map((_) => _.toLowerCase())

  const offsetDay = computed(() => {
    // Sunday 7(0), cal the left and right offset days, 3217654, such as Monday is -1, the is to adjust the position of the first two rows of dates
    return firstDayOfWeek > 3 ? 7 - firstDayOfWeek : -firstDayOfWeek
  })

  const startDate = computed(() => {
    const startDayOfMonth = props.date.startOf('month')
    return startDayOfMonth.subtract(startDayOfMonth.day() || 7, 'day')
  })

  const WEEKS = computed(() => {
    return WEEKS_CONSTANT.concat(WEEKS_CONSTANT).slice(
      firstDayOfWeek,
      firstDayOfWeek + 7
    )
  })

  const hasCurrent = computed<boolean>(() => {
    return flatten(unref(rows)).some((row) => {
      return row.isCurrent
    })
  })

  const days = computed(() => {
    const startOfMonth = props.date.startOf('month')
    const startOfMonthDay = startOfMonth.day() || 7 // day of first day
    const dateCountOfMonth = startOfMonth.daysInMonth()

    const dateCountOfLastMonth = startOfMonth.subtract(1, 'month').daysInMonth()

    return {
      startOfMonthDay,
      dateCountOfMonth,
      dateCountOfLastMonth,
    }
  })

  const selectedDate = computed(() => {
    return props.selectionMode === 'dates'
      ? (castArray(props.parsedValue) as Dayjs[])
      : ([] as Dayjs[])
  })

  // Return value indicates should the counter be incremented
  type CellCoordinate = { columnIndex: number; rowIndex: number }
  type CellMeta = CellCoordinate & {
    count: number
  }
  const setDateText = (
    cell: DateCell,
    { count, rowIndex, columnIndex }: CellMeta
  ): boolean => {
    const { startOfMonthDay, dateCountOfMonth, dateCountOfLastMonth } =
      unref(days)
    const offset = unref(offsetDay)
    if (rowIndex >= 0 && rowIndex <= 1) {
      const numberOfDaysFromPreviousMonth =
        startOfMonthDay + offset < 0
          ? 7 + startOfMonthDay + offset
          : startOfMonthDay + offset

      if (columnIndex + rowIndex * 7 >= numberOfDaysFromPreviousMonth) {
        cell.text = count
        return true
      } else {
        cell.text =
          dateCountOfLastMonth -
          (numberOfDaysFromPreviousMonth - (columnIndex % 7)) +
          1 +
          rowIndex * 7
        cell.type = 'prev-month'
      }
    } else {
      if (count <= dateCountOfMonth) {
        cell.text = count
      } else {
        cell.text = count - dateCountOfMonth
        cell.type = 'next-month'
      }
      return true
    }
    return false
  }

  const setCellMetadata = (
    cell: DateCell,
    { columnIndex, rowIndex }: CellCoordinate,
    count: number
  ) => {
    const { disabledDate, cellClassName } = props
    const _selectedDate = unref(selectedDate)
    const shouldIncrement = setDateText(cell, { count, rowIndex, columnIndex })

    const cellDate = cell.dayjs!.toDate()
    cell.selected = _selectedDate.find((d) => d.isSame(cell.dayjs, 'day'))
    cell.isSelected = !!cell.selected
    cell.isCurrent = isCurrent(cell)
    cell.disabled = disabledDate?.(cellDate)
    cell.customClass = cellClassName?.(cellDate)
    return shouldIncrement
  }

  const setRowMetadata = (row: DateCell[]) => {
    if (props.selectionMode === 'week') {
      const [start, end] = props.showWeekNumber ? [1, 7] : [0, 6]
      const isActive = isWeekActive(row[start + 1])
      row[start].inRange = isActive
      row[start].start = isActive
      row[end].inRange = isActive
      row[end].end = isActive
    }
  }

  const rows = computed(() => {
    const { minDate, maxDate, rangeState, showWeekNumber } = props

    const offset = unref(offsetDay)
    const rows_ = unref(tableRows)
    const dateUnit = 'day'
    let count = 1

    if (showWeekNumber) {
      for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        if (!rows_[rowIndex][0]) {
          rows_[rowIndex][0] = {
            type: 'week',
            text: unref(startDate)
              .add(rowIndex * 7 + 1, dateUnit)
              .week(),
          }
        }
      }
    }

    buildPickerTable({ row: 6, column: 7 }, rows_, {
      startDate: minDate,
      columnIndexOffset: showWeekNumber ? 1 : 0,
      nextEndDate:
        rangeState.endDate ||
        maxDate ||
        (rangeState.selecting && minDate) ||
        null,
      now: dayjs().locale(unref(lang)).startOf(dateUnit),
      unit: dateUnit,
      relativeDateGetter: (idx: number) =>
        unref(startDate).add(idx - offset, dateUnit),
      setCellMetadata: (...args) => {
        if (setCellMetadata(...args, count)) {
          count += 1
        }
      },

      setRowMetadata,
    })

    return rows_
  })

  watch(
    () => props.date,
    async () => {
      if (unref(tbodyRef)?.contains(document.activeElement)) {
        await nextTick()
        await focus()
        // currentCellRef.value?.focus()
      }
    }
  )

  const focus = async () => unref(currentCellRef)?.focus()

  const isCurrent = (cell: DateCell): boolean => {
    return (
      props.selectionMode === 'date' &&
      isNormalDay(cell.type) &&
      cellMatchesDate(cell, props.parsedValue as Dayjs)
    )
  }

  const cellMatchesDate = (cell: DateCell, date: Dayjs) => {
    if (!date) return false
    return dayjs(date)
      .locale(unref(lang))
      .isSame(props.date.date(Number(cell.text)), 'day')
  }

  const getDateOfCell = (row: number, column: number) => {
    const offsetFromStart =
      row * 7 + (column - (props.showWeekNumber ? 1 : 0)) - unref(offsetDay)
    return unref(startDate).add(offsetFromStart, 'day')
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

    const row = (target.parentNode as HTMLTableRowElement).rowIndex - 1
    const column = (target as HTMLTableCellElement).cellIndex

    // can not select disabled date
    if (unref(rows)[row][column].disabled) return

    // only update rangeState when mouse moves to a new cell
    // this avoids frequent Date object creation and improves performance
    if (row !== unref(lastRow) || column !== unref(lastColumn)) {
      lastRow.value = row
      lastColumn.value = column
      emit('changerange', {
        selecting: true,
        endDate: getDateOfCell(row, column),
      })
    }
  }

  const isSelectedCell = (cell: DateCell) => {
    return (
      (!unref(hasCurrent) && cell?.text === 1 && cell.type === 'normal') ||
      cell.isCurrent
    )
  }

  const handleFocus = (event: FocusEvent) => {
    if (focusWithClick || unref(hasCurrent) || props.selectionMode !== 'date')
      return
    handlePickDate(event, true)
  }

  const handleMouseDown = (event: MouseEvent) => {
    const target = (event.target as HTMLElement).closest('td')
    if (!target) return
    focusWithClick = true
  }

  const handleMouseUp = (event: MouseEvent) => {
    const target = (event.target as HTMLElement).closest('td')
    if (!target) return
    focusWithClick = false
  }

  const handleRangePick = (newDate: Dayjs) => {
    if (!props.rangeState.selecting || !props.minDate) {
      emit('pick', { minDate: newDate, maxDate: null })
      emit('select', true)
    } else {
      if (newDate >= props.minDate) {
        emit('pick', { minDate: props.minDate, maxDate: newDate })
      } else {
        emit('pick', { minDate: newDate, maxDate: props.minDate })
      }
      emit('select', false)
    }
  }

  const handleWeekPick = (newDate: Dayjs) => {
    const weekNumber = newDate.week()
    const value = `${newDate.year()}w${weekNumber}`
    emit('pick', {
      year: newDate.year(),
      week: weekNumber,
      value,
      date: newDate.startOf('week'),
    })
  }

  const handleDatesPick = (newDate: Dayjs, selected: boolean) => {
    const newValue = selected
      ? castArray(props.parsedValue).filter(
          (d) => d?.valueOf() !== newDate.valueOf()
        )
      : castArray(props.parsedValue).concat([newDate])
    emit('pick', newValue)
  }

  const handlePickDate = (
    event: FocusEvent | MouseEvent,
    isKeyboardMovement = false
  ) => {
    const target = (event.target as HTMLElement).closest('td')

    if (!target) return

    const row = (target.parentNode as HTMLTableRowElement).rowIndex - 1
    const column = (target as HTMLTableCellElement).cellIndex
    const cell = unref(rows)[row][column]

    if (cell.disabled || cell.type === 'week') return

    const newDate = getDateOfCell(row, column)

    switch (props.selectionMode) {
      case 'range': {
        handleRangePick(newDate)
        break
      }
      case 'date': {
        emit('pick', newDate, isKeyboardMovement)
        break
      }
      case 'week': {
        handleWeekPick(newDate)
        break
      }
      case 'dates': {
        handleDatesPick(newDate, !!cell.selected)
        break
      }
      default: {
        break
      }
    }
  }

  const isWeekActive = (cell: DateCell) => {
    if (props.selectionMode !== 'week') return false
    let newDate = props.date.startOf('day')

    if (cell.type === 'prev-month') {
      newDate = newDate.subtract(1, 'month')
    }

    if (cell.type === 'next-month') {
      newDate = newDate.add(1, 'month')
    }

    newDate = newDate.date(Number.parseInt(cell.text as any, 10))

    if (props.parsedValue && !isArray(props.parsedValue)) {
      const dayOffset = ((props.parsedValue.day() - firstDayOfWeek + 7) % 7) - 1
      const weekDate = props.parsedValue.subtract(dayOffset, 'day')
      return weekDate.isSame(newDate, 'day')
    }
    return false
  }

  return {
    WEEKS,
    rows,
    tbodyRef,
    currentCellRef,

    // cellMatchesDate,
    // getDateOfCell,
    focus,
    isCurrent,
    isWeekActive,
    isSelectedCell,

    handlePickDate,
    handleMouseUp,
    handleMouseDown,
    handleMouseMove,
    handleFocus,
  }
}

export const useBasicDateTableDOM = (
  props: BasicDateTableProps,
  {
    isCurrent,
    isWeekActive,
  }: Pick<ReturnType<typeof useBasicDateTable>, 'isCurrent' | 'isWeekActive'>
) => {
  const ns = useNamespace('date-table')
  const { t } = useLocale()

  const tableKls = computed(() => [
    ns.b(),
    { 'is-week-mode': props.selectionMode === 'week' },
  ])

  const tableLabel = computed(() => t('el.datepicker.dateTablePrompt'))
  const weekLabel = computed(() => t('el.datepicker.week'))

  const getCellClasses = (cell: DateCell) => {
    const classes: string[] = []
    if (isNormalDay(cell.type) && !cell.disabled) {
      classes.push('available')
      if (cell.type === 'today') {
        classes.push('today')
      }
    } else {
      classes.push(cell.type!)
    }

    if (isCurrent(cell)) {
      classes.push('current')
    }

    if (
      cell.inRange &&
      (isNormalDay(cell.type) || props.selectionMode === 'week')
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

  const getRowKls = (cell: DateCell) => [
    ns.e('row'),
    { current: isWeekActive(cell) },
  ]

  return {
    tableKls,
    tableLabel,
    weekLabel,

    getCellClasses,
    getRowKls,
    t,
  }
}
