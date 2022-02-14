import { ref, getCurrentInstance, unref } from 'vue'
import { getRowIdentity } from '../util'

import type { Ref } from 'vue'
import type { Table } from '../table/defaults'
import type { WatcherPropsData } from './index'

function useCurrent<T>(watcherData: WatcherPropsData<T>) {
  const instance = getCurrentInstance() as Table<T>
  const _currentRowKey = ref<string>(null)
  const currentRow: Ref<T> = ref(null)

  const setCurrentRowKey = (key: string) => {
    instance.store.assertRowKey()
    _currentRowKey.value = key
    setCurrentRowByKey(key)
  }

  const restoreCurrentRowKey = () => {
    _currentRowKey.value = null
  }

  const setCurrentRowByKey = (key: string) => {
    const { data, rowKey } = watcherData
    let _currentRow = null
    if (rowKey.value) {
      _currentRow = (unref(data) || []).find(
        (item) => getRowIdentity(item, rowKey.value) === key
      )
    }
    currentRow.value = _currentRow
  }

  const updateCurrentRow = (_currentRow: T) => {
    const oldCurrentRow = currentRow.value
    if (_currentRow && _currentRow !== oldCurrentRow) {
      currentRow.value = _currentRow
      instance.emit('current-change', currentRow.value, oldCurrentRow)
      return
    }
    if (!_currentRow && oldCurrentRow) {
      currentRow.value = null
      instance.emit('current-change', null, oldCurrentRow)
    }
  }

  const updateCurrentRowData = () => {
    const rowKey = watcherData.rowKey.value
    // data 为 null 时，解构时的默认值会被忽略
    const data = watcherData.data.value || []
    const oldCurrentRow = currentRow.value
    // 当 currentRow 不在 data 中时尝试更新数据
    if (data.indexOf(oldCurrentRow) === -1 && oldCurrentRow) {
      if (rowKey) {
        const currentRowKey = getRowIdentity(oldCurrentRow, rowKey)
        setCurrentRowByKey(currentRowKey)
      } else {
        currentRow.value = null
      }
      if (currentRow.value === null) {
        instance.emit('current-change', null, oldCurrentRow)
      }
    } else if (_currentRowKey.value) {
      // 把初始时下设置的 rowKey 转化成 rowData
      setCurrentRowByKey(_currentRowKey.value)
      restoreCurrentRowKey()
    }
  }

  return {
    setCurrentRowKey,
    restoreCurrentRowKey,
    setCurrentRowByKey,
    updateCurrentRow,
    updateCurrentRowData,
    states: {
      _currentRowKey,
      currentRow,
    },
  }
}

export default useCurrent
