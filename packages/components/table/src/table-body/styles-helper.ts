// @ts-nocheck
import { inject } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { isArray, isFunction, isObject, isString } from '@element-plus/utils'
import {
  ensurePosition,
  getFixedColumnOffset,
  getFixedColumnsClass,
} from '../util'
import { TABLE_INJECTION_KEY } from '../tokens'
import type { TableColumnCtx } from '../table-column/defaults'
import type { TableBodyProps } from './defaults'

function useStyles<T>(props: Partial<TableBodyProps<T>>) {
  const parent = inject(TABLE_INJECTION_KEY)
  const ns = useNamespace('table')

  const getRowStyle = (row: T, rowIndex: number) => {
    const rowStyle = parent?.props.rowStyle
    if (isFunction(rowStyle)) {
      return rowStyle.call(null, {
        row,
        rowIndex,
      })
    }
    return rowStyle || null
  }

  const getRowClass = (row: T, rowIndex: number) => {
    const classes = [ns.e('row')]
    if (
      parent?.props.highlightCurrentRow &&
      row === props.store.states.currentRow.value
    ) {
      classes.push('current-row')
    }

    if (props.stripe && rowIndex % 2 === 1) {
      classes.push(ns.em('row', 'striped'))
    }
    const rowClassName = parent?.props.rowClassName
    if (isString(rowClassName)) {
      classes.push(rowClassName)
    } else if (isFunction(rowClassName)) {
      classes.push(
        rowClassName.call(null, {
          row,
          rowIndex,
        })
      )
    }
    return classes
  }

  const getCellStyle = (
    rowIndex: number,
    columnIndex: number,
    row: T,
    column: TableColumnCtx<T>
  ) => {
    const cellStyle = parent?.props.cellStyle
    let cellStyles = cellStyle ?? {}
    if (isFunction(cellStyle)) {
      cellStyles = cellStyle.call(null, {
        rowIndex,
        columnIndex,
        row,
        column,
      })
    }
    const fixedStyle = getFixedColumnOffset(
      columnIndex,
      props?.fixed,
      props.store
    )
    ensurePosition(fixedStyle, 'left')
    ensurePosition(fixedStyle, 'right')
    return Object.assign({}, cellStyles, fixedStyle)
  }

  const getCellClass = (
    rowIndex: number,
    columnIndex: number,
    row: T,
    column: TableColumnCtx<T>,
    offset: number
  ) => {
    const fixedClasses = getFixedColumnsClass(
      ns.b(),
      columnIndex,
      props?.fixed,
      props.store,
      undefined,
      offset
    )
    const classes = [column.id, column.align, column.className, ...fixedClasses]
    const cellClassName = parent?.props.cellClassName
    if (isString(cellClassName)) {
      classes.push(cellClassName)
    } else if (isFunction(cellClassName)) {
      classes.push(
        cellClassName.call(null, {
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
  const getSpan = (
    row: T,
    column: TableColumnCtx<T>,
    rowIndex: number,
    columnIndex: number
  ) => {
    let rowspan = 1
    let colspan = 1
    const fn = parent?.props.spanMethod
    if (isFunction(fn)) {
      const result = fn({
        row,
        column,
        rowIndex,
        columnIndex,
      })
      if (isArray(result)) {
        rowspan = result[0]
        colspan = result[1]
      } else if (isObject(result)) {
        rowspan = result.rowspan
        colspan = result.colspan
      }
    }
    return { rowspan, colspan }
  }
  const getColspanRealWidth = (
    columns: TableColumnCtx<T>[],
    colspan: number,
    index: number
  ): number => {
    if (colspan < 1) {
      return columns[index].realWidth
    }
    const widthArr = columns
      .map(({ realWidth, width }) => realWidth || width)
      .slice(index, index + colspan)
    return Number(
      widthArr.reduce((acc, width) => Number(acc) + Number(width), -1)
    )
  }

  return {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth,
  }
}

export default useStyles
