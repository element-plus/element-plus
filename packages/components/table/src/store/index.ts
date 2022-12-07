// @ts-nocheck
import { getCurrentInstance, nextTick, unref } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import useWatcher from './watcher'

import type { Ref } from 'vue'
import type { TableColumnCtx } from '../table-column/defaults'
import type { Filter, Sort, Table } from '../table/defaults'

interface WatcherPropsData<T> {
  data: Ref<T[]>
  rowKey: Ref<string>
}

function replaceColumn<T>(
  array: TableColumnCtx<T>[],
  column: TableColumnCtx<T>
) {
  return array.map((item) => {
    if (item.id === column.id) {
      return column
    } else if (item.children?.length) {
      item.children = replaceColumn(item.children, column)
    }
    return item
  })
}

function sortColumn<T>(array: TableColumnCtx<T>[]) {
  array.forEach((item) => {
    item.no = item.getColumnIndex?.()
    if (item.children?.length) {
      sortColumn(item.children)
    }
  })
  array.sort((cur, pre) => cur.no - pre.no)
}

function useStore<T>() {
  const instance = getCurrentInstance() as Table<T>
  const watcher = useWatcher<T>()
  const ns = useNamespace('table')
  type StoreStates = typeof watcher.states
  const mutations = {
    setData(states: StoreStates, data: T[]) {
      const dataInstanceChanged = unref(states._data) !== data
      states.data.value = data
      states._data.value = data
      instance.store.execQuery()
      // 数据变化，更新部分数据。
      // 没有使用 computed，而是手动更新部分数据 https://github.com/vuejs/vue/issues/6660#issuecomment-331417140
      instance.store.updateCurrentRowData()
      instance.store.updateExpandRows()
      instance.store.updateTreeData(
        instance.store.states.defaultExpandAll.value
      )
      if (unref(states.reserveSelection)) {
        instance.store.assertRowKey()
        instance.store.updateSelectionByRowKey()
      } else {
        if (dataInstanceChanged) {
          instance.store.clearSelection()
        } else {
          instance.store.cleanSelection()
        }
      }
      instance.store.updateAllSelected()
      if (instance.$ready) {
        instance.store.scheduleLayout()
      }
    },

    insertColumn(
      states: StoreStates,
      column: TableColumnCtx<T>,
      parent: TableColumnCtx<T>,
      updateColumnOrder: () => void
    ) {
      const array = unref(states._columns)
      let newColumns = []
      if (!parent) {
        array.push(column)
        newColumns = array
      } else {
        if (parent && !parent.children) {
          parent.children = []
        }
        parent.children.push(column)
        newColumns = replaceColumn(array, parent)
      }
      sortColumn(newColumns)
      states._columns.value = newColumns
      states.updateOrderFns.value.push(updateColumnOrder)
      if (column.type === 'selection') {
        states.selectable.value = column.selectable
        states.reserveSelection.value = column.reserveSelection
      }
      if (instance.$ready) {
        instance.store.updateColumns() // hack for dynamics insert column
        instance.store.scheduleLayout()
      }
    },

    updateColumnOrder(
      states: StoreStates,
      targetTreePath: Array<number>,
      column: TableColumnCtx<T>
    ) {
      const getColumnTreePath = (columns: TableColumnCtx<T>[]) => {
        if (!columns || !columns.length) return

        const stack = []
        let pathRes = null

        const dfs = (columns) => {
          if (!columns?.length) return

          const res = Array.prototype.indexOf.call(columns, column)
          if (res > -1) {
            stack.push(res)
            pathRes = stack.slice()
            return
          }

          for (const [i, column_] of columns.entries()) {
            stack.push(i)
            dfs(column_.children)
            stack.pop()
          }
        }

        dfs(columns)

        return pathRes
      }

      const sourceTreePath = getColumnTreePath(states._columns.value)

      if (
        !targetTreePath ||
        !sourceTreePath ||
        targetTreePath.toString() === sourceTreePath.toString()
      )
        return

      const maxLen = Math.max(targetTreePath.length, sourceTreePath.length)
      let sourceStr = 'states._columns.value',
        targetStr = 'states._columns.value'
      for (let i = 0; i < maxLen; i++) {
        if (i <= 0) {
          sourceStr += `[${sourceTreePath[i]}]`
          targetStr += `[${targetTreePath[i]}]`
          continue
        }
        if (typeof sourceTreePath[i] !== 'undefined')
          sourceStr += `.children[${sourceTreePath[i]}]`
        if (typeof targetTreePath[i] !== 'undefined')
          targetStr += `.children[${targetTreePath[i]}]`
      }

      try {
        eval(`[${sourceStr},${targetStr}]=[${targetStr},${sourceStr}];`)
      } catch {}

      if (instance.$ready) {
        instance.store.updateColumns()
      }
    },

    removeColumn(
      states: StoreStates,
      column: TableColumnCtx<T>,
      parent: TableColumnCtx<T>,
      updateColumnOrder: () => void
    ) {
      const array = unref(states._columns) || []
      if (parent) {
        parent.children.splice(
          parent.children.findIndex((item) => item.id === column.id),
          1
        )
        // fix #10699, delete parent.children immediately will trigger again
        nextTick(() => {
          if (parent.children?.length === 0) {
            delete parent.children
          }
        })
        states._columns.value = replaceColumn(array, parent)
      } else {
        const index = array.indexOf(column)
        if (index > -1) {
          array.splice(index, 1)
          states._columns.value = array
        }
      }

      const updateFnIndex =
        states.updateOrderFns.value.indexOf(updateColumnOrder)
      updateFnIndex > -1 && states.updateOrderFns.value.splice(updateFnIndex, 1)

      if (instance.$ready) {
        instance.store.updateColumns() // hack for dynamics remove column
        instance.store.scheduleLayout()
      }
    },

    sort(states: StoreStates, options: Sort) {
      const { prop, order, init } = options
      if (prop) {
        const column = unref(states.columns).find(
          (column) => column.property === prop
        )
        if (column) {
          column.order = order
          instance.store.updateSort(column, prop, order)
          instance.store.commit('changeSortCondition', { init })
        }
      }
    },

    changeSortCondition(states: StoreStates, options: Sort) {
      // 修复 pr https://github.com/ElemeFE/element/pull/15012 导致的 bug
      // https://github.com/element-plus/element-plus/pull/4640
      const { sortingColumn, sortProp, sortOrder } = states
      const columnValue = unref(sortingColumn),
        propValue = unref(sortProp),
        orderValue = unref(sortOrder)
      if (orderValue === null) {
        states.sortingColumn.value = null
        states.sortProp.value = null
      }
      const ignore = { filter: true }
      instance.store.execQuery(ignore)

      if (!options || !(options.silent || options.init)) {
        instance.emit('sort-change', {
          column: columnValue,
          prop: propValue,
          order: orderValue,
        })
      }

      instance.store.updateTableScrollY()
    },

    filterChange(_states: StoreStates, options: Filter<T>) {
      const { column, values, silent } = options
      const newFilters = instance.store.updateFilters(column, values)
      instance.store.execQuery()

      if (!silent) {
        instance.emit('filter-change', newFilters)
      }
      instance.store.updateTableScrollY()
    },

    toggleAllSelection() {
      instance.store.toggleAllSelection()
    },

    rowSelectedChanged(_states, row: T) {
      instance.store.toggleRowSelection(row)
      instance.store.updateAllSelected()
    },

    setHoverRow(states: StoreStates, row: T) {
      states.hoverRow.value = row
    },

    setCurrentRow(_states, row: T) {
      instance.store.updateCurrentRow(row)
    },
  }
  const commit = function (name: keyof typeof mutations, ...args) {
    const mutations = instance.store.mutations
    if (mutations[name]) {
      mutations[name].apply(instance, [instance.store.states].concat(args))
    } else {
      throw new Error(`Action not found: ${name}`)
    }
  }
  const updateTableScrollY = function () {
    nextTick(() => instance.layout.updateScrollY.apply(instance.layout))
  }
  return {
    ns,
    ...watcher,
    mutations,
    commit,
    updateTableScrollY,
  }
}

export default useStore

class HelperStore<T> {
  Return = useStore<T>()
}

type StoreFilter = Record<string, string[]>
type Store<T> = HelperStore<T>['Return']
export type { WatcherPropsData, Store, StoreFilter }
