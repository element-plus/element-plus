import { reactive, getCurrentInstance } from 'vue'
import merge from '@element-plus/utils/merge'
import { getKeysMap, getRowIdentity, getColumnById, getColumnByKey, orderBy, toggleRowStatus } from '../util'
import useExpand from './expand'
// import useCurrent from './current'
import useTree from './tree'

const sortData = (data, states) => {
  const sortingColumn = states.sortingColumn
  if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
    return data
  }
  return orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy)
}

const doFlattenColumns = columns => {
  const result = []
  columns.forEach(column => {
    if (column.children) {
      // eslint-disable-next-line prefer-spread
      result.push.apply(result, doFlattenColumns(column.children))
    } else {
      result.push(column)
    }
  })
  return result
}

function useWatcher() {
  const instance = getCurrentInstance() as any
  const that = reactive({
    states: {
      // 3.0 版本后要求必须设置该属性
      rowKey: null,

      // 渲染的数据来源，是对 table 中的 data 过滤排序后的结果
      data: [],

      // 是否包含固定列
      isComplex: false,

      // 列
      _columns: [], // 不可响应的
      originColumns: [],
      columns: [],
      fixedColumns: [],
      rightFixedColumns: [],
      leafColumns: [],
      fixedLeafColumns: [],
      rightFixedLeafColumns: [],
      leafColumnsLength: 0,
      fixedLeafColumnsLength: 0,
      rightFixedLeafColumnsLength: 0,

      // 选择
      isAllSelected: false,
      selection: [],
      reserveSelection: false,
      selectOnIndeterminate: false,
      selectable: null,

      // 过滤
      filters: {}, // 不可响应的
      filteredData: null,

      // 排序
      sortingColumn: null,
      sortProp: null,
      sortOrder: null,

      hoverRow: null,
    },
  })

  // 检查 rowKey 是否存在
  const assertRowKey = () => {
    const rowKey = that.states.rowKey
    if (!rowKey) throw new Error('[ElTable] prop row-key is required')
  }

  // 更新列
  const updateColumns = () => {
    const states = that.states
    const _columns = states._columns || []
    states.fixedColumns = _columns.filter(column => column.fixed === true || column.fixed === 'left')
    states.rightFixedColumns = _columns.filter(column => column.fixed === 'right')

    if (states.fixedColumns.length > 0 && _columns[0] && _columns[0].type === 'selection' && !_columns[0].fixed) {
      _columns[0].fixed = true
      states.fixedColumns.unshift(_columns[0])
    }

    const notFixedColumns = _columns.filter(column => !column.fixed)
    states.originColumns = [].concat(states.fixedColumns).concat(notFixedColumns).concat(states.rightFixedColumns)

    const leafColumns = doFlattenColumns(notFixedColumns)
    const fixedLeafColumns = doFlattenColumns(states.fixedColumns)
    const rightFixedLeafColumns = doFlattenColumns(states.rightFixedColumns)

    states.leafColumnsLength = leafColumns.length
    states.fixedLeafColumnsLength = fixedLeafColumns.length
    states.rightFixedLeafColumnsLength = rightFixedLeafColumns.length

    states.columns = [].concat(fixedLeafColumns).concat(leafColumns).concat(rightFixedLeafColumns)
    states.isComplex = states.fixedColumns.length > 0 || states.rightFixedColumns.length > 0
  }

  // 更新 DOM
  const scheduleLayout = needUpdateColumns => {
    if (needUpdateColumns) {
      updateColumns()
    }
    instance.table.debouncedUpdateLayout()
  }

  // 选择
  const isSelected = row => {
    const { selection = [] } = that.states
    return selection.indexOf(row) > -1
  }

  const clearSelection = () => {
    const states = that.states
    states.isAllSelected = false
    const oldSelection = states.selection
    if (oldSelection.length) {
      states.selection = []
      instance.table.$emit('selection-change', [])
    }
  }

  const cleanSelection = () => {
    const states = that.states
    const { data, rowKey, selection } = states
    let deleted
    if (rowKey) {
      deleted = []
      const selectedMap = getKeysMap(selection, rowKey)
      const dataMap = getKeysMap(data, rowKey)
      for (const key in selectedMap) {
        if (selectedMap.hasOwnProperty(key) && !dataMap[key]) {
          deleted.push(selectedMap[key].row)
        }
      }
    } else {
      deleted = selection.filter(item => data.indexOf(item) === -1)
    }
    if (deleted.length) {
      const newSelection = selection.filter(item => deleted.indexOf(item) === -1)
      states.selection = newSelection
      instance.table.$emit('selection-change', newSelection.slice())
    }
  }

  const toggleRowSelection = (row, selected, emitChange = true) => {
    const changed = toggleRowStatus(that.states.selection, row, selected)
    if (changed) {
      const newSelection = (that.states.selection || []).slice()
      // 调用 API 修改选中值，不触发 select 事件
      if (emitChange) {
        instance.table.$emit('select', newSelection, row)
      }
      instance.table.$emit('selection-change', newSelection)
    }
  }

  const _toggleAllSelection = () => {
    const states = that.states
    const { data = [], selection } = states
    // when only some rows are selected (but not all), select or deselect all of them
    // depending on the value of selectOnIndeterminate
    const value = states.selectOnIndeterminate
      ? !states.isAllSelected
      : !(states.isAllSelected || selection.length)
    states.isAllSelected = value

    let selectionChanged = false
    data.forEach((row, index) => {
      if (states.selectable) {
        if (states.selectable.call(null, row, index) && toggleRowStatus(selection, row, value)) {
          selectionChanged = true
        }
      } else {
        if (toggleRowStatus(selection, row, value)) {
          selectionChanged = true
        }
      }
    })

    if (selectionChanged) {
      instance.table.$emit('selection-change', selection ? selection.slice() : [])
    }
    instance.table.$emit('select-all', selection)
  }

  const updateSelectionByRowKey = () => {
    const states = that.states
    const { selection, rowKey, data } = states
    const selectedMap = getKeysMap(selection, rowKey)
    data.forEach(row => {
      const rowId = getRowIdentity(row, rowKey)
      const rowInfo = selectedMap[rowId]
      if (rowInfo) {
        selection[rowInfo.index] = row
      }
    })
  }

  const updateAllSelected = () => {
    const states = that.states
    const { selection, rowKey, selectable } = states
    // data 为 null 时，解构时的默认值会被忽略
    const data = states.data || []
    if (data.length === 0) {
      states.isAllSelected = false
      return
    }

    let selectedMap
    if (rowKey) {
      selectedMap = getKeysMap(selection, rowKey)
    }
    const isSelected = function (row) {
      if (selectedMap) {
        return !!selectedMap[getRowIdentity(row, rowKey)]
      } else {
        return selection.indexOf(row) !== -1
      }
    }
    let isAllSelected = true
    let selectedCount = 0
    for (let i = 0, j = data.length; i < j; i++) {
      const item = data[i]
      const isRowSelectable = selectable && selectable.call(null, item, i)
      if (!isSelected(item)) {
        if (!selectable || isRowSelectable) {
          isAllSelected = false
          break
        }
      } else {
        selectedCount++
      }
    }

    if (selectedCount === 0) isAllSelected = false
    states.isAllSelected = isAllSelected
  }

  // 过滤与排序
  const updateFilters = (columns, values) => {
    if (!Array.isArray(columns)) {
      columns = [columns]
    }
    const states = that.states
    const filters = {}
    columns.forEach(col => {
      states.filters[col.id] = values
      filters[col.columnKey || col.id] = values
    })

    return filters
  }

  const updateSort = (column, prop, order) => {
    if (that.states.sortingColumn && that.states.sortingColumn !== column) {
      that.states.sortingColumn.order = null
    }
    that.states.sortingColumn = column
    that.states.sortProp = prop
    that.states.sortOrder = order
  }

  const execFilter = () => {
    const states = that.states
    const { data, filters } = states
    let _data = data

    Object.keys(filters).forEach(columnId => {
      const values = states.filters[columnId]
      if (!values || values.length === 0) return
      const column = getColumnById(that.states, columnId)
      if (column && column.filterMethod) {
        _data = _data.filter(row => {
          return values.some(value => column.filterMethod.call(null, value, row, column))
        })
      }
    })

    states.filteredData = data
  }

  const execSort = () => {
    const states = that.states
    states.data = sortData(states.filteredData, states)
  }

  // 根据 filters 与 sort 去过滤 data
  const execQuery = ignore => {
    if (!(ignore && ignore.filter)) {
      execFilter()
    }
    execSort()
  }

  const clearFilter = columnKeys => {
    const states = that.states
    const { tableHeader, fixedTableHeader, rightFixedTableHeader } = instance.table.$refs

    let panels = {}
    if (tableHeader) panels = merge(panels, tableHeader.filterPanels)
    if (fixedTableHeader) panels = merge(panels, fixedTableHeader.filterPanels)
    if (rightFixedTableHeader) panels = merge(panels, rightFixedTableHeader.filterPanels)

    const keys = Object.keys(panels)
    if (!keys.length) return

    if (typeof columnKeys === 'string') {
      columnKeys = [columnKeys]
    }

    if (Array.isArray(columnKeys)) {
      const columns = columnKeys.map(key => getColumnByKey(states, key))
      keys.forEach(key => {
        const column = columns.find(col => col.id === key)
        if (column) {
          // TODO: 优化这里的代码
          panels[key].filteredValue = []
        }
      })
      instance.commit('filterChange', {
        column: columns,
        values: [],
        silent: true,
        multi: true,
      })
    } else {
      keys.forEach(key => {
        // TODO: 优化这里的代码
        panels[key].filteredValue = []
      })

      states.filters = {}
      instance.commit('filterChange', {
        column: {},
        values: [],
        silent: true,
      })
    }
  }

  const clearSort = () => {
    const states = that.states
    if (!states.sortingColumn) return

    updateSort(null, null, null)
    instance.commit('changeSortCondition', {
      silent: true,
    })
  }
  const {
    setExpandRowKeys,
    toggleRowExpansion,
  } = useExpand(that)
  const {
    updateTreeExpandKeys,
    toggleTreeExpansion,
  } = useTree(that)
  // 适配层，expand-row-keys 在 Expand 与 TreeTable 中都有使用
  const setExpandRowKeysAdapter = val => {
    // 这里会触发额外的计算，但为了兼容性，暂时这么做
    setExpandRowKeys(val)
    updateTreeExpandKeys(val)
  }

  // 展开行与 TreeTable 都要使用
  const toggleRowExpansionAdapter = (row, expanded) => {
    const hasExpandColumn = that.states.columns.some(({ type }) => type === 'expand')
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
    updateSelectionByRowKey,
    updateAllSelected,
    updateFilters,
    updateSort,
    execFilter,
    execSort,
    execQuery,
    clearFilter,
    clearSort,
    setExpandRowKeysAdapter,
    toggleRowExpansionAdapter,
    ...that,
  }
}

export default useWatcher
