import { ref, getCurrentInstance, unref, watch } from 'vue'
import { hasOwn } from '@vue/shared'
import {
  getKeysMap,
  getRowIdentity,
  getColumnById,
  getColumnByKey,
  orderBy,
  toggleRowStatus,
} from '../util'
import useExpand from './expand'
import useCurrent from './current'
import useTree from './tree'

import type { Ref } from 'vue'
import type { TableColumnCtx } from '../table-column/defaults'
import type { Table, TableRefs } from '../table/defaults'
import type { StoreFilter } from './index'

const sortData = (data, states) => {
  const sortingColumn = states.sortingColumn
  if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
    return data
  }
  return orderBy(
    data,
    states.sortProp,
    states.sortOrder,
    sortingColumn.sortMethod,
    sortingColumn.sortBy
  )
}

const doFlattenColumns = (columns) => {
  const result = []
  columns.forEach((column) => {
    if (column.children) {
      // eslint-disable-next-line prefer-spread
      result.push.apply(result, doFlattenColumns(column.children))
    } else {
      result.push(column)
    }
  })
  return result
}

function useWatcher<T>() {
  const instance = getCurrentInstance() as Table<T>
  const rowKey: Ref<string> = ref(null)
  const data: Ref<T[]> = ref([])
  const _data: Ref<T[]> = ref([])
  const isComplex = ref(false)
  const _columns: Ref<TableColumnCtx<T>[]> = ref([])
  const originColumns: Ref<TableColumnCtx<T>[]> = ref([])
  const columns: Ref<TableColumnCtx<T>[]> = ref([])
  const fixedColumns: Ref<TableColumnCtx<T>[]> = ref([])
  const rightFixedColumns: Ref<TableColumnCtx<T>[]> = ref([])
  const leafColumns: Ref<TableColumnCtx<T>[]> = ref([])
  const fixedLeafColumns: Ref<TableColumnCtx<T>[]> = ref([])
  const rightFixedLeafColumns: Ref<TableColumnCtx<T>[]> = ref([])
  const leafColumnsLength = ref(0)
  const fixedLeafColumnsLength = ref(0)
  const rightFixedLeafColumnsLength = ref(0)
  const isAllSelected = ref(false)
  const selection: Ref<T[]> = ref([])
  const reserveSelection = ref(false)
  const selectOnIndeterminate = ref(false)
  const selectable: Ref<(row: T, index: number) => boolean> = ref(null)
  const filters: Ref<StoreFilter> = ref({})
  const filteredData = ref(null)
  const sortingColumn = ref(null)
  const sortProp = ref(null)
  const sortOrder = ref(null)
  const hoverRow = ref(null)

  watch(data, () => instance.state && scheduleLayout(false), {
    deep: true,
  })

  // 检查 rowKey 是否存在
  const assertRowKey = () => {
    if (!rowKey.value) throw new Error('[ElTable] prop row-key is required')
  }

  // 更新列
  const updateColumns = () => {
    fixedColumns.value = _columns.value.filter(
      (column) => column.fixed === true || column.fixed === 'left'
    )
    rightFixedColumns.value = _columns.value.filter(
      (column) => column.fixed === 'right'
    )
    if (
      fixedColumns.value.length > 0 &&
      _columns.value[0] &&
      _columns.value[0].type === 'selection' &&
      !_columns.value[0].fixed
    ) {
      _columns.value[0].fixed = true
      fixedColumns.value.unshift(_columns.value[0])
    }

    const notFixedColumns = _columns.value.filter((column) => !column.fixed)
    originColumns.value = []
      .concat(fixedColumns.value)
      .concat(notFixedColumns)
      .concat(rightFixedColumns.value)
    const leafColumns = doFlattenColumns(notFixedColumns)
    const fixedLeafColumns = doFlattenColumns(fixedColumns.value)
    const rightFixedLeafColumns = doFlattenColumns(rightFixedColumns.value)

    leafColumnsLength.value = leafColumns.length
    fixedLeafColumnsLength.value = fixedLeafColumns.length
    rightFixedLeafColumnsLength.value = rightFixedLeafColumns.length

    columns.value = []
      .concat(fixedLeafColumns)
      .concat(leafColumns)
      .concat(rightFixedLeafColumns)
    isComplex.value =
      fixedColumns.value.length > 0 || rightFixedColumns.value.length > 0
  }

  // 更新 DOM
  const scheduleLayout = (needUpdateColumns?: boolean, immediate = false) => {
    if (needUpdateColumns) {
      updateColumns()
    }
    if (immediate) {
      instance.state.doLayout()
    } else {
      instance.state.debouncedUpdateLayout()
    }
  }

  // 选择
  const isSelected = (row) => {
    return selection.value.indexOf(row) > -1
  }

  const clearSelection = () => {
    isAllSelected.value = false
    const oldSelection = selection.value
    if (oldSelection.length) {
      selection.value = []
      instance.emit('selection-change', [])
    }
  }

  const cleanSelection = () => {
    let deleted
    if (rowKey.value) {
      deleted = []
      const selectedMap = getKeysMap(selection.value, rowKey.value)
      const dataMap = getKeysMap(data.value, rowKey.value)
      for (const key in selectedMap) {
        if (hasOwn(selectedMap, key) && !dataMap[key]) {
          deleted.push(selectedMap[key].row)
        }
      }
    } else {
      deleted = selection.value.filter(
        (item) => data.value.indexOf(item) === -1
      )
    }
    if (deleted.length) {
      const newSelection = selection.value.filter(
        (item) => deleted.indexOf(item) === -1
      )
      selection.value = newSelection
      instance.emit('selection-change', newSelection.slice())
    }
  }

  const toggleRowSelection = (
    row: T,
    selected = undefined,
    emitChange = true
  ) => {
    const changed = toggleRowStatus(selection.value, row, selected)
    if (changed) {
      const newSelection = (selection.value || []).slice()
      // 调用 API 修改选中值，不触发 select 事件
      if (emitChange) {
        instance.emit('select', newSelection, row)
      }
      instance.emit('selection-change', newSelection)
    }
  }

  const _toggleAllSelection = () => {
    // when only some rows are selected (but not all), select or deselect all of them
    // depending on the value of selectOnIndeterminate
    const value = selectOnIndeterminate.value
      ? !isAllSelected.value
      : !(isAllSelected.value || selection.value.length)
    isAllSelected.value = value

    let selectionChanged = false
    let childrenCount = 0
    const rowKey = instance?.store?.states?.rowKey.value
    data.value.forEach((row, index) => {
      const rowIndex = index + childrenCount
      if (selectable.value) {
        if (
          selectable.value.call(null, row, rowIndex) &&
          toggleRowStatus(selection.value, row, value)
        ) {
          selectionChanged = true
        }
      } else {
        if (toggleRowStatus(selection.value, row, value)) {
          selectionChanged = true
        }
      }
      childrenCount += getChildrenCount(getRowIdentity(row, rowKey))
    })

    if (selectionChanged) {
      instance.emit(
        'selection-change',
        selection.value ? selection.value.slice() : []
      )
    }
    instance.emit('select-all', selection.value)
  }

  const updateSelectionByRowKey = () => {
    const selectedMap = getKeysMap(selection.value, rowKey.value)
    data.value.forEach((row) => {
      const rowId = getRowIdentity(row, rowKey.value)
      const rowInfo = selectedMap[rowId]
      if (rowInfo) {
        selection.value[rowInfo.index] = row
      }
    })
  }

  const updateAllSelected = () => {
    // data 为 null 时，解构时的默认值会被忽略
    if (data.value?.length === 0) {
      isAllSelected.value = false
      return
    }

    let selectedMap
    if (rowKey.value) {
      selectedMap = getKeysMap(selection.value, rowKey.value)
    }
    const isSelected = function (row) {
      if (selectedMap) {
        return !!selectedMap[getRowIdentity(row, rowKey.value)]
      } else {
        return selection.value.indexOf(row) !== -1
      }
    }
    let isAllSelected_ = true
    let selectedCount = 0
    let childrenCount = 0
    for (let i = 0, j = (data.value || []).length; i < j; i++) {
      const keyProp = instance?.store?.states?.rowKey.value
      const rowIndex = i + childrenCount
      const item = data.value[i]
      const isRowSelectable =
        selectable.value && selectable.value.call(null, item, rowIndex)
      if (!isSelected(item)) {
        if (!selectable.value || isRowSelectable) {
          isAllSelected_ = false
          break
        }
      } else {
        selectedCount++
      }
      childrenCount += getChildrenCount(getRowIdentity(item, keyProp))
    }

    if (selectedCount === 0) isAllSelected_ = false
    isAllSelected.value = isAllSelected_
  }

  // gets the number of all child nodes by rowKey
  const getChildrenCount = (rowKey: string) => {
    if (!instance || !instance.store) return 0
    const { treeData } = instance.store.states
    let count = 0
    const children = treeData.value[rowKey]?.children
    if (children) {
      count += children.length
      children.forEach((childKey) => {
        count += getChildrenCount(childKey)
      })
    }
    return count
  }

  // 过滤与排序
  const updateFilters = (columns, values) => {
    if (!Array.isArray(columns)) {
      columns = [columns]
    }
    const filters_ = {}
    columns.forEach((col) => {
      filters.value[col.id] = values
      filters_[col.columnKey || col.id] = values
    })
    return filters_
  }

  const updateSort = (column, prop, order) => {
    if (sortingColumn.value && sortingColumn.value !== column) {
      sortingColumn.value.order = null
    }
    sortingColumn.value = column
    sortProp.value = prop
    sortOrder.value = order
  }

  const execFilter = () => {
    let sourceData = unref(_data)
    Object.keys(filters.value).forEach((columnId) => {
      const values = filters.value[columnId]
      if (!values || values.length === 0) return
      const column = getColumnById(
        {
          columns: columns.value,
        },
        columnId
      )
      if (column && column.filterMethod) {
        sourceData = sourceData.filter((row) => {
          return values.some((value) =>
            column.filterMethod.call(null, value, row, column)
          )
        })
      }
    })

    filteredData.value = sourceData
  }

  const execSort = () => {
    data.value = sortData(filteredData.value, {
      sortingColumn: sortingColumn.value,
      sortProp: sortProp.value,
      sortOrder: sortOrder.value,
    })
  }

  // 根据 filters 与 sort 去过滤 data
  const execQuery = (ignore = undefined) => {
    if (!(ignore && ignore.filter)) {
      execFilter()
    }
    execSort()
  }

  const clearFilter = (columnKeys) => {
    const { tableHeader, fixedTableHeader, rightFixedTableHeader } =
      instance.refs as TableRefs
    let panels = {}
    if (tableHeader) panels = Object.assign(panels, tableHeader.filterPanels)
    if (fixedTableHeader)
      panels = Object.assign(panels, fixedTableHeader.filterPanels)
    if (rightFixedTableHeader)
      panels = Object.assign(panels, rightFixedTableHeader.filterPanels)

    const keys = Object.keys(panels)
    if (!keys.length) return

    if (typeof columnKeys === 'string') {
      columnKeys = [columnKeys]
    }

    if (Array.isArray(columnKeys)) {
      const columns_ = columnKeys.map((key) =>
        getColumnByKey(
          {
            columns: columns.value,
          },
          key
        )
      )
      keys.forEach((key) => {
        const column = columns_.find((col) => col.id === key)
        if (column) {
          column.filteredValue = []
        }
      })
      instance.store.commit('filterChange', {
        column: columns_,
        values: [],
        silent: true,
        multi: true,
      })
    } else {
      keys.forEach((key) => {
        const column = columns.value.find((col) => col.id === key)
        if (column) {
          column.filteredValue = []
        }
      })

      filters.value = {}
      instance.store.commit('filterChange', {
        column: {},
        values: [],
        silent: true,
      })
    }
  }

  const clearSort = () => {
    if (!sortingColumn.value) return

    updateSort(null, null, null)
    instance.store.commit('changeSortCondition', {
      silent: true,
    })
  }
  const {
    setExpandRowKeys,
    toggleRowExpansion,
    updateExpandRows,
    states: expandStates,
    isRowExpanded,
  } = useExpand({
    data,
    rowKey,
  })
  const {
    updateTreeExpandKeys,
    toggleTreeExpansion,
    updateTreeData,
    loadOrToggle,
    states: treeStates,
  } = useTree({
    data,
    rowKey,
  })
  const {
    updateCurrentRowData,
    updateCurrentRow,
    setCurrentRowKey,
    states: currentData,
  } = useCurrent({
    data,
    rowKey,
  })
  // 适配层，expand-row-keys 在 Expand 与 TreeTable 中都有使用
  const setExpandRowKeysAdapter = (val: string[]) => {
    // 这里会触发额外的计算，但为了兼容性，暂时这么做
    setExpandRowKeys(val)
    updateTreeExpandKeys(val)
  }

  // 展开行与 TreeTable 都要使用
  const toggleRowExpansionAdapter = (row: T, expanded: boolean) => {
    const hasExpandColumn = columns.value.some(({ type }) => type === 'expand')
    if (hasExpandColumn) {
      toggleRowExpansion(row, expanded)
    } else {
      toggleTreeExpansion(row, expanded)
    }
  }

  return {
    assertRowKey,
    updateColumns,
    scheduleLayout,
    isSelected,
    clearSelection,
    cleanSelection,
    toggleRowSelection,
    _toggleAllSelection,
    toggleAllSelection: null,
    updateSelectionByRowKey,
    updateAllSelected,
    updateFilters,
    updateCurrentRow,
    updateSort,
    execFilter,
    execSort,
    execQuery,
    clearFilter,
    clearSort,
    toggleRowExpansion,
    setExpandRowKeysAdapter,
    setCurrentRowKey,
    toggleRowExpansionAdapter,
    isRowExpanded,
    updateExpandRows,
    updateCurrentRowData,
    loadOrToggle,
    updateTreeData,
    states: {
      rowKey,
      data,
      _data,
      isComplex,
      _columns,
      originColumns,
      columns,
      fixedColumns,
      rightFixedColumns,
      leafColumns,
      fixedLeafColumns,
      rightFixedLeafColumns,
      leafColumnsLength,
      fixedLeafColumnsLength,
      rightFixedLeafColumnsLength,
      isAllSelected,
      selection,
      reserveSelection,
      selectOnIndeterminate,
      selectable,
      filters,
      filteredData,
      sortingColumn,
      sortProp,
      sortOrder,
      hoverRow,
      ...expandStates,
      ...treeStates,
      ...currentData,
    },
  }
}

export default useWatcher
