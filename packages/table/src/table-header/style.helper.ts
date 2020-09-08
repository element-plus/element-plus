import { getCurrentInstance } from 'vue'
import { TableColumn, AnyObject, Table } from '../table'
import { TableHeaderProps } from './table-header'

function useStyle(props: TableHeaderProps) {
  const instance = getCurrentInstance()
  const parent = instance.parent as Table
  const storeData = parent.store.states
  const isCellHidden = (index: number, columns: TableColumn[]): boolean => {
    let start = 0
    for (let i = 0; i < index; i++) {
      start += columns[i].colSpan
    }
    const after = start + columns[index].colSpan - 1
    if (props.fixed === 'left') {
      return after >= storeData.fixedLeafColumnsLength.value
    } else if (props.fixed === 'right') {
      return (
        start <
        storeData.columns.value.length -
        storeData.rightFixedLeafColumnsLength.value
      )
    } else {
      return (
        after < storeData.fixedLeafColumnsLength.value ||
        start >=
        storeData.columns.value.length -
        storeData.rightFixedLeafColumnsLength.value
      )
    }
  }

  const getHeaderRowStyle = (rowIndex: number) => {
    const headerRowStyle = parent.ctx.headerRowStyle
    if (typeof headerRowStyle === 'function') {
      return headerRowStyle.call(null, { rowIndex })
    }
    return headerRowStyle
  }

  const getHeaderRowClass = (rowIndex: number): string => {
    const classes = []
    const headerRowClassName = parent.ctx.headerRowClassName
    if (typeof headerRowClassName === 'string') {
      classes.push(headerRowClassName)
    } else if (typeof headerRowClassName === 'function') {
      classes.push(headerRowClassName.call(null, { rowIndex }))
    }

    return classes.join(' ')
  }

  const getHeaderCellStyle = (rowIndex: number, columnIndex: number, row: AnyObject, column: TableColumn) => {
    const headerCellStyle = parent.ctx.headerCellStyle
    if (typeof headerCellStyle === 'function') {
      return headerCellStyle.call(null, {
        rowIndex,
        columnIndex,
        row,
        column,
      })
    }
    return headerCellStyle
  }

  const getHeaderCellClass = (rowIndex: number, columnIndex: number, row: AnyObject, column: TableColumn) => {
    const classes = [
      column.id,
      column.order,
      column.headerAlign,
      column.className,
      column.labelClassName,
    ]
    if (rowIndex === 0 && isCellHidden(columnIndex, row as unknown as TableColumn[])) {
      classes.push('is-hidden')
    }

    if (!column.children) {
      classes.push('is-leaf')
    }

    if (column.sortable) {
      classes.push('is-sortable')
    }

    const headerCellClassName = parent.ctx.headerCellClassName
    if (typeof headerCellClassName === 'string') {
      classes.push(headerCellClassName)
    } else if (typeof headerCellClassName === 'function') {
      classes.push(
        headerCellClassName.call(null, {
          rowIndex,
          columnIndex,
          row,
          column,
        }),
      )
    }

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
