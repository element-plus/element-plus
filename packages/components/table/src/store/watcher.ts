// @ts-nocheck
import { computed, getCurrentInstance, ref, toRefs, unref, watch } from 'vue'
import { hasOwn, isArray, isString } from '@element-plus/utils'
import {
  getColumnById,
  getColumnByKey,
  getKeysMap,
  getRowIdentity,
  orderBy,
  toggleRowStatus,
} from '../util'
import useExpand from './expand'
import useCurrent from './current'
import useTree from './tree'

import type { Ref } from 'vue'
import type { TableColumnCtx } from '../table-column/defaults'
import type { DefaultRow, Table, TableRefs } from '../table/defaults'
import type { StoreFilter } from '.'

const sortData = (data, states) => {
  const sortingColumn = states.sortingColumn
  if (!sortingColumn || isString(sortingColumn.sortable)) {
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
    if (column.children && column.children.length > 0) {
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
  const { size: tableSize } = toRefs(instance.proxy?.$props as any)
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
  const updateOrderFns: (() => void)[] = []
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

  const selectedMap = computed(() => {
    return rowKey.value ? getKeysMap(selection.value, rowKey.value) : undefined
  })

  watch(
    data,
    () => {
      if (instance.state) {
        scheduleLayout(false)
        const needUpdateFixed = instance.props.tableLayout === 'auto'
        if (needUpdateFixed) {
          instance.refs.tableHeaderRef?.updateFixedColumnStyle()
        }
      }
    },
    {
      deep: true,
    }
  )

  // 检查 rowKey 是否存在
  const assertRowKey = () => {
    if (!rowKey.value) throw new Error('[ElTable] prop row-key is required')
  }

  // 更新 fixed
  const updateChildFixed = (column: TableColumnCtx<T>) => {
    column.children?.forEach((childColumn) => {
      childColumn.fixed = column.fixed
      updateChildFixed(childColumn)
    })
  }

  // 更新列
  const updateColumns = () => {
    _columns.value.forEach((column) => {
      updateChildFixed(column)
    })
    fixedColumns.value = _columns.value.filter(
      (column) =>
        column.type !== 'selection' && [true, 'left'].includes(column.fixed)
    )

    let selectColFixLeft
    if (_columns.value?.[0]?.type === 'selection') {
      const selectColumn = _columns.value[0]
      selectColFixLeft =
        [true, 'left'].includes(selectColumn.fixed) ||
        (fixedColumns.value.length && selectColumn.fixed !== 'right')
      if (selectColFixLeft) {
        fixedColumns.value.unshift(selectColumn)
      }
    }

    rightFixedColumns.value = _columns.value.filter(
      (column) => column.fixed === 'right'
    )

    const notFixedColumns = _columns.value.filter(
      (column) =>
        (selectColFixLeft ? column.type !== 'selection' : true) && !column.fixed
    )

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
  const isSelected = (row: DefaultRow) => {
    if (selectedMap.value) {
      return !!selectedMap.value[getRowIdentity(row, rowKey.value)]
    } else {
      return selection.value.includes(row)
    }
  }

  const clearSelection = () => {
    isAllSelected.value = false
    const oldSelection = selection.value
    selection.value = []
    if (oldSelection.length) {
      instance.emit('selection-change', [])
    }
  }

  const cleanSelection = () => {
    let deleted
    if (rowKey.value) {
      deleted = []
      const dataMap = getKeysMap(data.value, rowKey.value)
      for (const key in selectedMap.value) {
        if (hasOwn(selectedMap.value, key) && !dataMap[key]) {
          deleted.push(selectedMap.value[key].row)
        }
      }
    } else {
      deleted = selection.value.filter((item) => !data.value.includes(item))
    }
    if (deleted.length) {
      const newSelection = selection.value.filter(
        (item) => !deleted.includes(item)
      )
      selection.value = newSelection
      instance.emit('selection-change', newSelection.slice())
    }
  }

  const getSelectionRows = () => {
    return (selection.value || []).slice()
  }

  const toggleRowSelection = (
    row: T,
    selected?: boolean,
    emitChange = true,
    ignoreSelectable = false
  ) => {
    const treeProps = {
      children: instance?.store?.states?.childrenColumnName.value,
      checkStrictly: instance?.store?.states?.checkStrictly.value,
    }
    const changed = toggleRowStatus(
      selection.value,
      row,
      selected,
      treeProps,
      ignoreSelectable ? undefined : selectable.value,
      data.value.indexOf(row)
    )
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
    const { childrenColumnName } = instance.store.states
    const treeProps = {
      children: childrenColumnName.value,
      checkStrictly: false, // Disable checkStrictly when selecting all
    }

    data.value.forEach((row, index) => {
      const rowIndex = index + childrenCount
      if (
        toggleRowStatus(
          selection.value,
          row,
          value,
          treeProps,
          selectable.value,
          rowIndex
        )
      ) {
        selectionChanged = true
      }
      childrenCount += getChildrenCount(getRowIdentity(row, rowKey))
    })

    if (selectionChanged) {
      instance.emit(
        'selection-change',
        selection.value ? selection.value.slice() : []
      )
    }
    instance.emit('select-all', (selection.value || []).slice())
  }

  const updateSelectionByRowKey = () => {
    data.value.forEach((row) => {
      const rowId = getRowIdentity(row, rowKey.value)
      const rowInfo = selectedMap.value![rowId]
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

    const { childrenColumnName } = instance.store.states
    let rowIndex = 0
    let selectedCount = 0

    const checkSelectedStatus = (data: DefaultRow[]) => {
      for (const row of data) {
        const isRowSelectable =
          selectable.value && selectable.value.call(null, row, rowIndex)

        if (!isSelected(row)) {
          if (!selectable.value || isRowSelectable) {
            return false
          }
        } else {
          selectedCount++
        }
        rowIndex++

        if (
          row[childrenColumnName.value]?.length &&
          !checkSelectedStatus(row[childrenColumnName.value])
        ) {
          return false
        }
      }
      return true
    }

    const isAllSelected_ = checkSelectedStatus(data.value || [])
    isAllSelected.value = selectedCount === 0 ? false : isAllSelected_
  }

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
    if (!isArray(columns)) {
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
    const { tableHeaderRef } = instance.refs as TableRefs
    if (!tableHeaderRef) return
    const panels = Object.assign({}, tableHeaderRef.filterPanels)

    const keys = Object.keys(panels)
    if (!keys.length) return

    if (isString(columnKeys)) {
      columnKeys = [columnKeys]
    }

    if (isArray(columnKeys)) {
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
    updateKeyChildren,
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
  const toggleRowExpansionAdapter = (row: T, expanded?: boolean) => {
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
    getSelectionRows,
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
    updateKeyChildren,
    states: {
      tableSize,
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
      updateOrderFns,
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
