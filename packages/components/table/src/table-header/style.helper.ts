import { getCurrentInstance } from 'vue'
import { getFixedColumnsClass, getFixedColumnOffset } from '../util'
import type { TableColumnCtx } from '../table-column/defaults'
import type { Table } from '../table/defaults'
import type { TableHeaderProps } from '.'

function useStyle<T>(props: TableHeaderProps<T>) {
  const instance = getCurrentInstance()
  const parent = instance.parent as Table<T>

  const getHeaderRowStyle = (rowIndex: number) => {
    const headerRowStyle = parent.props.headerRowStyle
    if (typeof headerRowStyle === 'function') {
      return headerRowStyle.call(null, { rowIndex })
    }
    return headerRowStyle
  }

  const getHeaderRowClass = (rowIndex: number): string => {
    const classes = []
    const headerRowClassName = parent.props.headerRowClassName
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
    column: TableColumnCtx<T>,
    hasGutter: boolean,
    gutterWidth: number
  ) => {
    let headerCellStyles = parent.props.headerCellStyle ?? {}
    if (typeof headerCellStyles === 'function') {
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
    if (fixedStyle) {
      if (hasGutter) {
        if (fixedStyle.right !== undefined) {
          fixedStyle.right += gutterWidth
        }
      }
      if (fixedStyle.left !== undefined) {
        fixedStyle.left += 'px'
      } else if (fixedStyle.right !== undefined) {
        fixedStyle.right += 'px'
      }
    }
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

    const headerCellClassName = parent.props.headerCellClassName
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

    classes.push('el-table__cell')

    return classes.join(' ')
  }

  return {
    getHeaderRowStyle,
    getHeaderRowClass,
    getHeaderCellStyle,
    getHeaderCellClass,
  }
}

export default useStyle
