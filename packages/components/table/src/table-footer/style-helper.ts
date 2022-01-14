import { computed, getCurrentInstance } from 'vue'
import {
  getFixedColumnOffset,
  getFixedColumnsClass,
  ensurePosition,
} from '../util'
import useMapState from './mapState-helper'
import type { Table } from '../table/defaults'
import type { TableColumnCtx } from '../table-column/defaults'
import type { TableFooter } from '.'

function useStyle<T>(props: TableFooter<T>) {
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
  const getCellClasses = (columns: TableColumnCtx<T>[], cellIndex: number) => {
    const column = columns[cellIndex]
    const classes = [
      'el-table__cell',
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
    return classes
  }

  const getCellStyles = (column: TableColumnCtx<T>, cellIndex: number) => {
    const fixedStyle = getFixedColumnOffset(
      cellIndex,
      column.fixed,
      props.store
    )
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
