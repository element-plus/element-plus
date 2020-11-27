import { computed, getCurrentInstance } from 'vue'
import { Table, TableFooter, TableColumnCtx } from '../table.type'
import useMapState from './mapState-helper'

function useStyle(props: TableFooter) {
  const instance = getCurrentInstance()
  const table = instance.parent as Table
  const store = table.store

  const {
    leftFixedLeafCount,
    rightFixedLeafCount,
    columnsCount,
    leftFixedCount,
    rightFixedCount,
    columns,
  } = useMapState()

  const hasGutter = computed(() => {
    return !props.fixed && table.layout.gutterWidth
  })
  const isCellHidden = (
    index: number,
    columns: TableColumnCtx[],
    column: TableColumnCtx,
  ) => {
    if (props.fixed || props.fixed === 'left') {
      return index >= leftFixedLeafCount.value
    } else if (props.fixed === 'right') {
      let before = 0
      for (let i = 0; i < index; i++) {
        before += columns[i].colSpan
      }
      return before < columnsCount.value - rightFixedLeafCount.value
    } else if (!props.fixed && column.fixed) {
      // hide cell when footer instance is not fixed and column is fixed
      return true
    } else {
      return (
        index < leftFixedCount.value ||
        index >= columnsCount.value - rightFixedCount.value
      )
    }
  }
  const getRowClasses = (column: TableColumnCtx, cellIndex: number) => {
    const classes = [column.id, column.align, column.labelClassName]
    if (column.className) {
      classes.push(column.className)
    }
    if (isCellHidden(cellIndex, store.states.columns.value, column)) {
      classes.push('is-hidden')
    }
    if (!column.children) {
      classes.push('is-leaf')
    }
    return classes
  }

  return {
    hasGutter,
    getRowClasses,
    columns,
  }
}

export default useStyle
