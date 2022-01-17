import {
  getFixedColumnOffset,
  getFixedColumnsClass,
  ensurePosition,
} from '../util'
import useMapState from './mapState-helper'
import type { TableColumnCtx } from '../table-column/defaults'
import type { TableFooter } from '.'

function useStyle<T>(props: TableFooter<T>) {
  const { columns } = useMapState<T>()

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
    getCellClasses,
    getCellStyles,
    columns,
  }
}

export default useStyle
