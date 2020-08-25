import { reactive, getCurrentInstance } from 'vue'
import { toggleRowStatus, getKeysMap, getRowIdentity } from '../util'

function useExpand (watcherData) {
  const instance = getCurrentInstance() as any
  const that = reactive({
    states: {
      defaultExpandAll: false,
      expandRows: [],
    },
  })
  const updateExpandRows = () => {
    const { data = [], rowKey } = watcherData.states
    const { defaultExpandAll, expandRows } = that.states
    if (defaultExpandAll) {
      that.states.expandRows = data.slice()
    } else if (rowKey) {
      // TODO：这里的代码可以优化
      const expandRowsMap = getKeysMap(expandRows, rowKey)
      that.states.expandRows = data.reduce((prev, row) => {
        const rowId = getRowIdentity(row, rowKey)
        const rowInfo = expandRowsMap[rowId]
        if (rowInfo) {
          prev.push(row)
        }
        return prev
      }, [])
    } else {
      that.states.expandRows = []
    }
  }

  const toggleRowExpansion = (row, expanded) => {
    const changed = toggleRowStatus(that.states.expandRows, row, expanded)
    if (changed) {
      instance.table.$emit('expand-change', row, that.states.expandRows.slice())
      instance.scheduleLayout()
    }
  }

  const setExpandRowKeys = rowKeys => {
    instance.assertRowKey()
    // TODO：这里的代码可以优化
    const { data, rowKey } = watcherData.states
    const keysMap = getKeysMap(data, rowKey)
    that.states.expandRows = rowKeys.reduce((prev, cur) => {
      const info = keysMap[cur]
      if (info) {
        prev.push(info.row)
      }
      return prev
    }, [])
  }

  const isRowExpanded = row => {
    const { rowKey } = watcherData.states
    const { expandRows = [] } = that.states
    if (rowKey) {
      const expandMap = getKeysMap(expandRows, rowKey)
      return !!expandMap[getRowIdentity(row, rowKey)]
    }
    return expandRows.indexOf(row) !== -1
  }
  return {
    updateExpandRows,
    toggleRowExpansion,
    setExpandRowKeys,
    isRowExpanded,
    ...that,
  }
}

export default useExpand
