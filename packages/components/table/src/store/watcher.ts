import { computed, getCurrentInstance, ref, toRefs, unref, watch } from 'vue'
import { ensureArray, hasOwn, isArray, isString } from '@element-plus/utils'
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
import type {
  DefaultRow,
  Table,
  TableRefs,
  TableSortOrder,
} from '../table/defaults'
import type { StoreFilter } from '.'

const sortData = <T extends DefaultRow>(
  data: T[],
  states: {
    sortingColumn: TableColumnCtx<T> | null
    sortProp: string | null
    sortOrder: string | number | null
  }
) => {
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

const doFlattenColumns = <T extends DefaultRow>(
  columns: TableColumnCtx<T>[]
) => {
  const result: TableColumnCtx<T>[] = []
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

function useWatcher<T extends DefaultRow>() {
  const instance = getCurrentInstance() as Table<T>
  const { size: tableSize } = toRefs(instance.proxy?.$props as any)
  const rowKey: Ref<string | null> = ref(null)
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
  const selectionIndeterminate = ref<Record<string, boolean>>({})
  const reserveSelection = ref(false)
  const selectOnIndeterminate = ref(false)
  const selectable: Ref<((row: T, index: number) => boolean) | null> = ref(null)
  const rowExpandable: Ref<((row: T, index: number) => boolean) | null> =
    ref(null)
  const filters: Ref<StoreFilter> = ref({})
  const filteredData: Ref<T[] | null> = ref(null)
  const sortingColumn: Ref<TableColumnCtx<T> | null> = ref(null)
  const sortProp: Ref<string | null> = ref(null)
  const sortOrder: Ref<string | number | null> = ref(null)
  const hoverRow: Ref<T | null> = ref(null)

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
    fixedColumns.value = _columns.value.filter((column) =>
      [true, 'left'].includes(column.fixed)
    )

    const selectColumn = _columns.value.find(
      (column) => column.type === 'selection'
    )

    let selectColFixLeft: boolean
    if (
      selectColumn &&
      selectColumn.fixed !== 'right' &&
      !fixedColumns.value.includes(selectColumn)
    ) {
      const selectColumnIndex = _columns.value.indexOf(selectColumn)
      if (selectColumnIndex === 0 && fixedColumns.value.length) {
        fixedColumns.value.unshift(selectColumn)
        selectColFixLeft = true
      }
    }

    rightFixedColumns.value = _columns.value.filter(
      (column) => column.fixed === 'right'
    )

    const notFixedColumns = _columns.value.filter(
      (column) =>
        (selectColFixLeft ? column.type !== 'selection' : true) && !column.fixed
    )

    originColumns.value = Array.from(fixedColumns.value)
      .concat(notFixedColumns)
      .concat(rightFixedColumns.value)
    const leafColumns = doFlattenColumns(notFixedColumns)
    const fixedLeafColumns = doFlattenColumns(fixedColumns.value)
    const rightFixedLeafColumns = doFlattenColumns(rightFixedColumns.value)

    leafColumnsLength.value = leafColumns.length
    fixedLeafColumnsLength.value = fixedLeafColumns.length
    rightFixedLeafColumnsLength.value = rightFixedLeafColumns.length

    columns.value = Array.from(fixedLeafColumns)
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
  const isSelected = (row: T) => {
    if (selectedMap.value) {
      return !!selectedMap.value[getRowIdentity(row, rowKey.value)]
    } else {
      return selection.value.includes(row)
    }
  }

  // 定位选中项索引
  const getSelectionIndex = (row: T) => {
    if (!rowKey.value) {
      return selection.value.indexOf(row)
    }
    const id = getRowIdentity(row, rowKey.value)
    return selection.value.findIndex(
      (item) => getRowIdentity(item, rowKey.value) === id
    )
  }

  // 构建树形数据的顺序索引映射，用于 selectable 计算
  const buildRowIndexMap = () => {
    const rowIndexMap = new Map<string, number>()
    if (!rowKey.value) return rowIndexMap
    const { childrenColumnName, lazyTreeNodeMap } = instance.store.states
    let rowIndex = 0
    // 递归遍历树形数据，构建顺序索引映射
    const _traverse = (rows: T[]) => {
      if (!isArray(rows)) return
      rows.forEach((row) => {
        const id = getRowIdentity(row, rowKey.value)
        rowIndexMap.set(id, rowIndex)
        rowIndex += 1
        const lazyChildren = lazyTreeNodeMap.value?.[id]
        const children = lazyChildren || row[childrenColumnName.value]
        if (isArray(children) && children.length) {
          _traverse(children)
        }
      })
    }
    _traverse(data.value || [])
    return rowIndexMap
  }

  // 依据子节点选中状态更新父节点选中与半选态
  const updateSelectionByChildren = (
    options: { emitChange?: boolean } = {}
  ) => {
    const { emitChange = true } = options
    if (treeStates.checkStrictly.value) {
      selectionIndeterminate.value = {}
      return
    }
    if (!rowKey.value) {
      selectionIndeterminate.value = {}
      return
    }
    const { childrenColumnName, lazyTreeNodeMap } = instance.store.states
    const rowIndexMap = buildRowIndexMap()
    const indeterminateMap: Record<string, boolean> = {}
    let selectionChanged = false
    // 在不触发外部 select 事件的前提下同步父节点选中
    const _updateSelectionForRow = (row: T, selected: boolean) => {
      const id = getRowIdentity(row, rowKey.value)
      const rowIndex = rowIndexMap.get(id) ?? 0
      const rowSelectable = selectable.value
        ? selectable.value.call(null, row, rowIndex)
        : true
      if (!rowSelectable) return
      const index = getSelectionIndex(row)
      if (selected && index === -1) {
        selection.value.push(row)
        selectionChanged = true
      } else if (!selected && index !== -1) {
        selection.value.splice(index, 1)
        selectionChanged = true
      }
    }
    // 递归统计可选与已选数量，生成半选状态映射
    const _walk = (rows: T[]) => {
      let selectedCount = 0
      let selectableCount = 0
      if (!isArray(rows)) return { selectedCount, selectableCount }
      rows.forEach((row) => {
        const id = getRowIdentity(row, rowKey.value)
        const lazyChildren = lazyTreeNodeMap.value?.[id]
        const children = lazyChildren || row[childrenColumnName.value]
        let childSelectedCount = 0
        let childSelectableCount = 0
        if (isArray(children) && children.length) {
          const childResult = _walk(children)
          childSelectedCount = childResult.selectedCount
          childSelectableCount = childResult.selectableCount
        }
        if (childSelectableCount > 0) {
          const allSelected = childSelectedCount === childSelectableCount
          const noneSelected = childSelectedCount === 0
          indeterminateMap[id] = !allSelected && !noneSelected
          _updateSelectionForRow(row, allSelected)
        } else {
          indeterminateMap[id] = false
        }
        const rowIndex = rowIndexMap.get(id) ?? 0
        const rowSelectable = selectable.value
          ? selectable.value.call(null, row, rowIndex)
          : true
        if (rowSelectable) {
          selectableCount += 1
          if (isSelected(row)) {
            selectedCount += 1
          }
        }
        selectedCount += childSelectedCount
        selectableCount += childSelectableCount
      })
      return { selectedCount, selectableCount }
    }
    _walk(data.value || [])
    selectionIndeterminate.value = indeterminateMap
    if (selectionChanged && emitChange) {
      instance.emit(
        'selection-change',
        selection.value ? selection.value.slice() : []
      )
    }
  }

  const clearSelection = () => {
    isAllSelected.value = false
    const oldSelection = selection.value
    selection.value = []
    selectionIndeterminate.value = {}
    if (oldSelection.length) {
      instance.emit('selection-change', [])
    }
  }

  const cleanSelection = () => {
    let deleted
    if (rowKey.value) {
      deleted = []
      const childrenKey = instance?.store?.states?.childrenColumnName.value
      const dataMap = getKeysMap(data.value, rowKey.value, true, childrenKey)
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
      updateSelectionByChildren({ emitChange: false })
      instance.emit('selection-change', selection.value.slice())
    }
  }

  const getSelectionRows = () => {
    return (selection.value || []).slice()
  }

  // 懒加载场景下补齐子节点的选中联动
  const cascadeToLazyChildren = (
    row: T,
    selected: boolean,
    rowIndexMap: Map<string, number>
  ) => {
    if (
      !rowKey.value ||
      treeStates.checkStrictly.value ||
      !treeStates.lazy.value
    )
      return
    const { lazyTreeNodeMap, childrenColumnName } = instance.store.states
    const id = getRowIdentity(row, rowKey.value)
    const lazyChildren = lazyTreeNodeMap.value?.[id]
    const inlineChildren = row[childrenColumnName.value]
    const treeProps = {
      children: childrenColumnName.value,
      checkStrictly: false,
    }
    // 先处理 lazy 子节点
    if (isArray(lazyChildren) && lazyChildren.length) {
      lazyChildren.forEach((child: T) => {
        const childId = getRowIdentity(child, rowKey.value)
        const rowIndex = rowIndexMap.get(childId) ?? 0
        toggleRowStatus(
          selection.value,
          child,
          selected,
          treeProps,
          selectable.value,
          rowIndex,
          rowKey.value
        )
        cascadeToLazyChildren(child, selected, rowIndexMap)
      })
    }
    // 递归处理内联子节点，保证深层 lazy 也能联动
    if (isArray(inlineChildren) && inlineChildren.length) {
      inlineChildren.forEach((child: T) => {
        cascadeToLazyChildren(child, selected, rowIndexMap)
      })
    }
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
      data.value.indexOf(row),
      rowKey.value
    )
    if (changed) {
      // lazy 且非严格模式时，补齐 lazy 子节点的选中状态
      if (treeStates.lazy.value && !treeStates.checkStrictly.value) {
        const rowIndexMap = buildRowIndexMap()
        const finalSelected = selected ?? isSelected(row)
        cascadeToLazyChildren(row, finalSelected, rowIndexMap)
      }
      updateSelectionByChildren({ emitChange: false })
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
          rowIndex,
          rowKey
        )
      ) {
        selectionChanged = true
      }
      childrenCount += getChildrenCount(getRowIdentity(row, rowKey))
    })

    if (treeStates.lazy.value && !treeStates.checkStrictly.value && rowKey) {
      // 全选时补齐已加载的 lazy 子节点，并继续向下级联
      const rowIndexMap = buildRowIndexMap()
      const { lazyTreeNodeMap } = instance.store.states
      Object.values(lazyTreeNodeMap.value).forEach((lazyRows) => {
        ;(lazyRows as T[]).forEach((child) => {
          const childId = getRowIdentity(child, rowKey)
          const rowIndex = rowIndexMap.get(childId) ?? 0
          if (
            toggleRowStatus(
              selection.value,
              child,
              value,
              treeProps,
              selectable.value,
              rowIndex,
              rowKey
            )
          ) {
            selectionChanged = true
          }
          cascadeToLazyChildren(child, value, rowIndexMap)
        })
      })
    }

    updateSelectionByChildren({ emitChange: false })

    if (selectionChanged) {
      instance.emit(
        'selection-change',
        selection.value ? selection.value.slice() : []
      )
    }
    instance.emit('select-all', (selection.value || []).slice())
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

    const checkSelectedStatus = (data: T[]) => {
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

  // 获取行半选状态
  const getRowIndeterminate = (row: T) => {
    if (!rowKey.value) return false
    const id = getRowIdentity(row, rowKey.value)
    return !!selectionIndeterminate.value[id]
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
  const updateFilters = (column: TableColumnCtx<T>, values: string[]) => {
    const filters_: Record<string, string[]> = {}
    ensureArray(column).forEach((col) => {
      filters.value[col.id] = values
      filters_[col.columnKey || col.id] = values
    })
    return filters_
  }

  const updateSort = (
    column: TableColumnCtx<T> | null,
    prop: string | null,
    order: TableSortOrder | null
  ) => {
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
    data.value = sortData(filteredData.value ?? [], {
      sortingColumn: sortingColumn.value,
      sortProp: sortProp.value,
      sortOrder: sortOrder.value,
    })
  }

  // 根据 filters 与 sort 去过滤 data
  const execQuery = (ignore: { filter: boolean } | undefined = undefined) => {
    if (!ignore?.filter) {
      execFilter()
    }
    execSort()
  }

  const clearFilter = (columnKeys?: string[] | string) => {
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

  watch(
    () => treeStates.checkStrictly.value,
    (value) => {
      if (value) {
        selectionIndeterminate.value = {}
      } else {
        updateSelectionByChildren()
      }
      updateAllSelected()
    }
  )

  watch(
    () => treeStates.lazyTreeNodeMap.value,
    () => {
      // lazy 子节点加载后，若父节点已选中则自动补齐，并重算半选/全选状态
      if (
        !treeStates.lazy.value ||
        treeStates.checkStrictly.value ||
        !rowKey.value
      )
        return
      const rowIndexMap = buildRowIndexMap()
      const { lazyTreeNodeMap, childrenColumnName } = instance.store.states
      const treeProps = {
        children: childrenColumnName.value,
        checkStrictly: false,
      }
      Object.entries(lazyTreeNodeMap.value).forEach(([parentId, lazyRows]) => {
        if (selectedMap.value?.[parentId]) {
          ;(lazyRows as T[]).forEach((child) => {
            const childId = getRowIdentity(child, rowKey.value)
            const rowIndex = rowIndexMap.get(childId) ?? 0
            toggleRowStatus(
              selection.value,
              child,
              true,
              treeProps,
              selectable.value,
              rowIndex,
              rowKey.value
            )
            cascadeToLazyChildren(child, true, rowIndexMap)
          })
        }
      })
      updateSelectionByChildren()
      updateAllSelected()
    },
    { deep: true }
  )

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
    toggleAllSelection: null as (() => void) | null,
    updateAllSelected,
    updateSelectionByChildren,
    getRowIndeterminate,
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
      selectionIndeterminate,
      reserveSelection,
      selectOnIndeterminate,
      selectable,
      rowExpandable,
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
