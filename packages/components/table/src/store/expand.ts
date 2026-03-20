import { getCurrentInstance, ref } from 'vue'
import { getKeysMap, getRowIdentity, toggleRowStatus } from '../util'

import type { Ref } from 'vue'
import type { WatcherPropsData } from '.'
import type { DefaultRow, Table } from '../table/defaults'

function useExpand<T extends DefaultRow>(watcherData: WatcherPropsData<T>) {
  const instance = getCurrentInstance() as Table<T>
  const defaultExpandAll = ref(false)
  const expandRows: Ref<T[]> = ref([])

  const canRowExpand = (row: T, index: number) => {
    const expandableFn = instance.store.states.rowExpandable.value
    return expandableFn?.(row, index) ?? true
  }

  const updateExpandRows = () => {
    const data = watcherData.data.value || []
    const rowKey = watcherData.rowKey.value
    if (defaultExpandAll.value) {
      expandRows.value = instance.store.states.rowExpandable.value
        ? data.filter(canRowExpand)
        : data.slice()
    } else if (rowKey) {
      // TODO：这里的代码可以优化
      const expandRowsMap = getKeysMap(expandRows.value, rowKey)
      expandRows.value = data.filter((row, index) => {
        const rowId = getRowIdentity(row, rowKey)
        return !!expandRowsMap[rowId] && canRowExpand(row, index)
      })
    } else {
      expandRows.value = []
    }
  }

  const toggleRowExpansion = (row: T, expanded?: boolean) => {
    const dataArr = watcherData.data.value || []
    const rowIndex = dataArr.indexOf(row)
    if (rowIndex > -1 && !canRowExpand(row, rowIndex)) return

    const changed = toggleRowStatus(
      expandRows.value,
      row,
      expanded,
      undefined,
      undefined,
      undefined,
      watcherData.rowKey.value
    )
    if (changed) {
      instance.emit('expand-change', row, expandRows.value.slice())
    }
  }

  const setExpandRowKeys = (rowKeys: (string | number)[]) => {
    instance.store.assertRowKey()
    // TODO：这里的代码可以优化
    const data = watcherData.data.value || []
    const rowKey = watcherData.rowKey.value
    const keysMap = getKeysMap(data, rowKey)
    expandRows.value = rowKeys.reduce((prev: T[], cur) => {
      const info = keysMap[cur]
      if (info && canRowExpand(info.row, info.index)) {
        prev.push(info.row)
      }
      return prev
    }, [])
  }

  const isRowExpanded = (row: T): boolean => {
    const rowKey = watcherData.rowKey.value
    if (rowKey) {
      const expandMap = getKeysMap(expandRows.value, rowKey)
      return !!expandMap[getRowIdentity(row, rowKey)]
    }
    return expandRows.value.includes(row)
  }
  return {
    updateExpandRows,
    toggleRowExpansion,
    setExpandRowKeys,
    isRowExpanded,
    states: {
      expandRows,
      defaultExpandAll,
    },
  }
}

export default useExpand
