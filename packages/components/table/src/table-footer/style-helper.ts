import { useNamespace } from '@element-plus/hooks'
import {
  ensurePosition,
  getFixedColumnOffset,
  getFixedColumnsClass,
} from '../util'
import useMapState from './mapState-helper'
import type { TableColumnCtx } from '../table-column/defaults'
import type { TableFooter } from '.'

function useStyle<T>(props: TableFooter<T>) {
  const { columns } = useMapState()
  const ns = useNamespace('table')

  const getCellClasses = (columns: TableColumnCtx<T>[], cellIndex: number) => {
    const column = columns[cellIndex]
    const classes = [
      ns.e('cell'),
      column.id,
      column.align,
      column.labelClassName,
      ...getFixedColumnsClass(ns.b(), cellIndex, column.fixed, props.store),
    ]
    if (column.className) {
      classes.push(column.className)
    }
    if (!column.children) {
      classes.push(ns.is('leaf'))
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
