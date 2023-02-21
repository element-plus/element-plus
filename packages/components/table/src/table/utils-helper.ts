// @ts-nocheck
import type { Store } from '../store'

function useUtils<T>(store: Store<T>) {
  const setCurrentRow = (row: T) => {
    store.commit('setCurrentRow', row)
  }
  const getSelectionRows = () => {
    return store.getSelectionRows()
  }
  const toggleRowSelection = (row: T, selected: boolean) => {
    store.toggleRowSelection(row, selected, false)
    store.updateAllSelected()
  }
  const clearSelection = () => {
    store.clearSelection()
  }
  const clearFilter = (columnKeys: string[]) => {
    store.clearFilter(columnKeys)
  }
  const toggleAllSelection = () => {
    store.commit('toggleAllSelection')
  }
  const toggleRowExpansion = (row: T, expanded?: boolean) => {
    store.toggleRowExpansionAdapter(row, expanded)
  }
  const clearSort = () => {
    store.clearSort()
  }
  const sort = (prop: string, order: string) => {
    store.commit('sort', { prop, order })
  }
  const reLoadData = (row: T, key: string, treeNode) => {
    return store.reLoadData(row, key, treeNode)
  }
  return {
    setCurrentRow,
    getSelectionRows,
    reLoadData,
    toggleRowSelection,
    clearSelection,
    clearFilter,
    toggleAllSelection,
    toggleRowExpansion,
    clearSort,
    sort,
  }
}

export default useUtils
