import { getCurrentInstance, computed } from 'vue'

import type { TableColumnCtx } from '../table-column/defaults'
import type { Table } from '../table/defaults'
import type { TableHeaderProps } from '.'

const getAllColumns = <T>(
  columns: TableColumnCtx<T>[]
): TableColumnCtx<T>[] => {
  const result = []
  columns.forEach((column) => {
    if (column.children) {
      result.push(column)
      // eslint-disable-next-line prefer-spread
      result.push.apply(result, getAllColumns(column.children))
    } else {
      result.push(column)
    }
  })
  return result
}

const convertToRows = <T>(
  originColumns: TableColumnCtx<T>[]
): TableColumnCtx<T>[] => {
  let maxLevel = 1
  const traverse = (column: TableColumnCtx<T>, parent: TableColumnCtx<T>) => {
    if (parent) {
      column.level = parent.level + 1
      if (maxLevel < column.level) {
        maxLevel = column.level
      }
    }
    if (column.children) {
      let colSpan = 0
      column.children.forEach((subColumn) => {
        traverse(subColumn, column)
        colSpan += subColumn.colSpan
      })
      column.colSpan = colSpan
    } else {
      column.colSpan = 1
    }
  }

  originColumns.forEach((column) => {
    column.level = 1
    traverse(column, undefined)
  })

  const rows = []
  for (let i = 0; i < maxLevel; i++) {
    rows.push([])
  }

  const allColumns = getAllColumns(originColumns)

  allColumns.forEach((column) => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1
    } else {
      column.rowSpan = 1
    }
    rows[column.level - 1].push(column)
  })

  return rows
}

function useUtils<T>(props: TableHeaderProps<T>) {
  const instance = getCurrentInstance()
  const parent = instance.parent as Table<T>
  const columnRows = computed(() => {
    return convertToRows(props.store.states.originColumns.value)
  })
  const isGroup = computed(() => {
    const result = columnRows.value.length > 1
    if (result) parent.state.isGroup.value = true
    return result
  })
  const toggleAllSelection = (event: Event) => {
    event.stopPropagation()
    parent.store.commit('toggleAllSelection')
  }
  return {
    isGroup,
    toggleAllSelection,
    columnRows,
  }
}

export default useUtils
