import { ref, getCurrentInstance } from 'vue'
import { toggleRowStatus, getKeysMap, getRowIdentity } from '../util'

function useExpand (watcherData) {
  const instance = getCurrentInstance() as any
  const defaultExpandAll = ref(false)
  const expandRows = ref([])
  const updateExpandRows = () => {
    const data = watcherData.data.value || []
    const rowKey = watcherData.rowKey.value
    if (defaultExpandAll.value) {
      expandRows.value = data.slice()
    } else if (rowKey) {
      // TODO：这里的代码可以优化
      const expandRowsMap = getKeysMap(expandRows, rowKey)
      expandRows.value = data.reduce((prev, row) => {
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

  const toggleRowExpansion = (row, expanded) => {
    const changed = toggleRowStatus(expandRows.value, row, expanded)
    if (changed) {
      instance.table.$emit('expand-change', row, expandRows.value.slice())
      instance.scheduleLayout()
    }
  }

  const setExpandRowKeys = rowKeys => {
    instance.assertRowKey()
    // TODO：这里的代码可以优化
    const data = watcherData.data.value || []
    const rowKey = watcherData.rowKey.value
    const keysMap = getKeysMap(data, rowKey)
    expandRows.value = rowKeys.reduce((prev, cur) => {
      const info = keysMap[cur]
      if (info) {
        prev.push(info.row)
      }
      return prev
    }, [])
  }

  const isRowExpanded = row => {
    const rowKey = watcherData.rowKey.value
    if (rowKey) {
      const expandMap = getKeysMap(expandRows, rowKey)
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
