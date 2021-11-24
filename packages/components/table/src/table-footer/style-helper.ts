import { computed, getCurrentInstance } from 'vue'
import { getFixedColumnOffset, getFixedColumnsClass } from '../util'
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
  const getRowClasses = (column: TableColumnCtx<T>, cellIndex: number) => {
    const classes = [
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

  const getRowStyles = (
    column: TableColumnCtx<T>,
    cellIndex: number,
    hasGutter: boolean,
    gutterWidth: number
  ) => {
    const fixedStyle = getFixedColumnOffset(
      cellIndex,
      column.fixed,
      props.store
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
    return fixedStyle
  }

  return {
    hasGutter,
    gutterWidth,
    getRowClasses,
    getRowStyles,
    columns,
  }
}

export default useStyle
