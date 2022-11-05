import { inject } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { isFunction, isString } from '@element-plus/utils'
import {
  ensurePosition,
  getFixedColumnOffset,
  getFixedColumnsClass,
} from '../util'
import { TABLE_INJECTION_KEY } from '../tokens'
import type { TableColumnCtx } from '../table-column/defaults'
import type { TableHeaderProps } from '.'

function useStyle<T>(props: TableHeaderProps<T>) {
  const parent = inject(TABLE_INJECTION_KEY)
  const ns = useNamespace('table')

  const getHeaderRowStyle = (rowIndex: number) => {
    const headerRowStyle = parent?.props.headerRowStyle
    return isFunction(headerRowStyle)
      ? headerRowStyle.call(null, { rowIndex })
      : headerRowStyle
  }

  const getHeaderRowClass = (rowIndex: number): string => {
    const headerRowClassName = parent?.props.headerRowClassName
    if (isString(headerRowClassName)) {
      return headerRowClassName
    } else if (isFunction(headerRowClassName)) {
      return headerRowClassName.call(null, { rowIndex })
    }
    return ''
  }

  const getHeaderCellStyle = (
    rowIndex: number,
    columnIndex: number,
    row: T,
    column: TableColumnCtx<T>
  ) => {
    let headerCellStyles = parent?.props.headerCellStyle ?? {}
    if (isFunction(headerCellStyles)) {
      headerCellStyles = headerCellStyles.call(null, {
        rowIndex,
        columnIndex,
        row,
        column,
      })
    }
    const fixedStyle = getFixedColumnOffset<T>(
      columnIndex,
      column.fixed,
      props.store,
      row as unknown as TableColumnCtx<T>[]
    )
    ensurePosition(fixedStyle, 'left')
    ensurePosition(fixedStyle, 'right')
    return Object.assign({}, headerCellStyles, fixedStyle)
  }

  const getHeaderCellClass = (
    rowIndex: number,
    columnIndex: number,
    row: T,
    column: TableColumnCtx<T>
  ) => {
    const fixedClasses = getFixedColumnsClass<T>(
      ns.b(),
      columnIndex,
      column.fixed,
      props.store,
      row as unknown as TableColumnCtx<T>[]
    )
    const classes = [
      column.id,
      column.order,
      column.headerAlign,
      column.className,
      column.labelClassName,
      ...fixedClasses,
    ]

    if (!column.children) {
      classes.push('is-leaf')
    }

    if (column.sortable) {
      classes.push('is-sortable')
    }

    const headerCellClassName = parent?.props.headerCellClassName
    if (isString(headerCellClassName)) {
      classes.push(headerCellClassName)
    } else if (isFunction(headerCellClassName)) {
      classes.push(
        headerCellClassName.call(null, {
          rowIndex,
          columnIndex,
          row,
          column,
        })
      )
    }

    classes.push(ns.e('cell'))

    return classes.filter((className) => Boolean(className)).join(' ')
  }

  return {
    getHeaderRowStyle,
    getHeaderRowClass,
    getHeaderCellStyle,
    getHeaderCellClass,
  }
}

export default useStyle
