import { getCurrentInstance, ref, unref } from 'vue'
import { isNull } from 'lodash-unified'
import { getRowIdentity } from '../util'

import type { Ref } from 'vue'
import type { DefaultRow, Table } from '../table/defaults'
import type { WatcherPropsData } from '.'

function useCurrent<T extends DefaultRow>(watcherData: WatcherPropsData<T>) {
  const instance = getCurrentInstance() as Table<T>
  const _currentRowKey: Ref<string | null> = ref(null)
  const currentRow: Ref<T | null> = ref(null)

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
    let _currentRow: T | null = null
    if (rowKey.value) {
      _currentRow =
        (unref(data) || []).find(
          (item) => getRowIdentity(item, rowKey.value) === key
        ) ?? null
    }
    currentRow.value = _currentRow ?? null
    instance.emit('current-change', currentRow.value, null)
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
    if (oldCurrentRow && !data.includes(oldCurrentRow)) {
      if (rowKey) {
        const currentRowKey = getRowIdentity(oldCurrentRow, rowKey)
        setCurrentRowByKey(currentRowKey)
      } else {
        currentRow.value = null
      }
      if (isNull(currentRow.value)) {
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
