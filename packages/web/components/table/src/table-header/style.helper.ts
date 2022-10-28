import { inject } from 'vue'
import { useNamespace } from '@element-plus/hooks'
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
    if (typeof headerRowStyle === 'function') {
      return headerRowStyle.call(null, { rowIndex })
    }
    return headerRowStyle
  }

  const getHeaderRowClass = (rowIndex: number): string => {
    const classes: string[] = []
    const headerRowClassName = parent?.props.headerRowClassName
    if (typeof headerRowClassName === 'string') {
      classes.push(headerRowClassName)
    } else if (typeof headerRowClassName === 'function') {
      classes.push(headerRowClassName.call(null, { rowIndex }))
    }

    return classes.join(' ')
  }

  const getHeaderCellStyle = (
    rowIndex: number,
    columnIndex: number,
    row: T,
    column: TableColumnCtx<T>
  ) => {
    let headerCellStyles = parent?.props.headerCellStyle ?? {}
    if (typeof headerCellStyles === 'function') {
      headerCellStyles = headerCellStyles.call(null, {
        rowIndex,
        columnIndex,
        row,
        column,
      })
    }
    const fixedStyle = column.isSubColumn
      ? null
      : getFixedColumnOffset<T>(
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
    const fixedClasses = column.isSubColumn
      ? []
      : getFixedColumnsClass<T>(
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
    if (typeof headerCellClassName === 'string') {
      classes.push(headerCellClassName)
    } else if (typeof headerCellClassName === 'function') {
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
