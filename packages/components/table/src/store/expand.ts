import { ref, getCurrentInstance } from 'vue'
import { toggleRowStatus, getKeysMap, getRowIdentity } from '../util'

import type { Ref } from 'vue'
import type { WatcherPropsData } from './index'
import type { Table } from '../table/defaults'

function useExpand<T>(watcherData: WatcherPropsData<T>) {
  const instance = getCurrentInstance() as Table<T>
  const defaultExpandAll = ref(false)
  const expandRows: Ref<T[]> = ref([])
  const updateExpandRows = () => {
    const data = watcherData.data.value || []
    const rowKey = watcherData.rowKey.value
    if (defaultExpandAll.value) {
      expandRows.value = data.slice()
    } else if (rowKey) {
      // TODO：这里的代码可以优化
      const expandRowsMap = getKeysMap(expandRows.value, rowKey)
      expandRows.value = data.reduce((prev: T[], row: T) => {
        const rowId = getRowIdentity(row, rowKey)
        const rowInfo = expandRowsMap[rowId]
        if (rowInfo) {
          prev.push(row)
        }
        return prev
      }, [])
    } else {
      expandRows.value = []
    }
  }

  const toggleRowExpansion = (row: T, expanded?: boolean) => {
    const changed = toggleRowStatus(expandRows.value, row, expanded)
    if (changed) {
      instance.emit('expand-change', row, expandRows.value.slice())
      instance.store.scheduleLayout()
    }
  }

  const setExpandRowKeys = (rowKeys: string[]) => {
    instance.store.assertRowKey()
    // TODO：这里的代码可以优化
    const data = watcherData.data.value || []
    const rowKey = watcherData.rowKey.value
    const keysMap = getKeysMap(data, rowKey)
    expandRows.value = rowKeys.reduce((prev: T[], cur: string) => {
      const info = keysMap[cur]
      if (info) {
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
    return expandRows.value.indexOf(row) !== -1
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
