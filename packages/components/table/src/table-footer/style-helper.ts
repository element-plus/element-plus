import { computed, getCurrentInstance } from 'vue'
import {
  getFixedColumnOffset,
  getFixedColumnsClass,
  ensurePosition,
  ensureRightFixedStyle,
} from '../util'
import useMapState from './mapState-helper'
import type { Table } from '../table/defaults'
import type { TableColumnCtx } from '../table-column/defaults'
import type { TableFooter } from '.'
import { usePrefixClass } from '@element-plus/hooks'

function useStyle<T>(props: TableFooter<T>) {
  const tablePrefixClass = usePrefixClass('table')
  const instance = getCurrentInstance()
  const table = instance.parent as Table<T>

  const { columns } = useMapState<T>()

  const hasGutter = computed(() => {
    return (
      !props.fixed &&
      table.layout.gutterWidth > 0 &&
      table.layout.height.value &&
      table.layout.bodyScrollHeight.value > table.layout.bodyHeight.value
    )
  })

  const gutterWidth = computed(() => {
    return table.layout.gutterWidth
  })
  const getCellClasses = (
    columns: TableColumnCtx<T>[],
    cellIndex: number,
    hasGutter: boolean
  ) => {
    const column = columns[cellIndex]
    const classes = [
      `${tablePrefixClass.value}__cell`,
      column.id,
      column.align,
      column.labelClassName,
      ...getFixedColumnsClass(cellIndex, column.fixed, props.store),
    ]
    if (column.className) {
      classes.push(column.className)
    }
    if (!column.children) {
      classes.push('is-leaf')
    }
    if (hasGutter && cellIndex === columns.length - 1) {
      classes.push('last')
    }
    return classes
  }

  const getCellStyles = (
    column: TableColumnCtx<T>,
    cellIndex: number,
    hasGutter: boolean
  ) => {
    const fixedStyle = getFixedColumnOffset(
      cellIndex,
      column.fixed,
      props.store
    )
    ensureRightFixedStyle(fixedStyle, hasGutter)
    ensurePosition(fixedStyle, 'left')
    ensurePosition(fixedStyle, 'right')
    return fixedStyle
  }

  return {
    hasGutter,
    gutterWidth,
    getCellClasses,
    getCellStyles,
    columns,
  }
}

export default useStyle
