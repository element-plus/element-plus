import { nextTick, getCurrentInstance, unref } from 'vue'
import { arrayFind } from '@element-plus/utils/util'
import useWatcher from './watcher'
import { Table, Store, TableColumnCtx } from '../table.type'

function replaceColumn(array: TableColumnCtx[], column: TableColumnCtx) {
  return array.map(item => {
    if (item.id === column.id) {
      return column
    } else if (item.children?.length > 0) {
      item.children = replaceColumn(item.children, column)
    }
    return item
  })
}

function useStore(): Store {
  const instance = getCurrentInstance() as Table
  const mutations = {
    setData(states, data) {
      const dataInstanceChanged = unref(states.data) !== data
      states.data.value = data
      states._data.value = data
      instance.store.execQuery()
      // 数据变化，更新部分数据。
      // 没有使用 computed，而是手动更新部分数据 https://github.com/vuejs/vue/issues/6660#issuecomment-331417140
      instance.store.updateCurrentRowData()
      instance.store.updateExpandRows()
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

    insertColumn(states, column, index, parent) {
      if (index < -1) return
      const array = unref(states._columns)

      if (!parent) {
        if (array.length > index && (array[index] !== undefined)) {
          array.splice(index, 0, column)
          const nearlyEmptyIndex = array.findIndex((item, i) => i > index && item === undefined)
          if (nearlyEmptyIndex > -1) {
            array.splice(nearlyEmptyIndex, 1)
          }
        } else {
          array[index] = column
        }
        states._columns.value = array
      } else {
        if (parent && !parent.children) {
          parent.children = []
        }
        parent.children.push(column)
        const newColumns = replaceColumn(array, parent)
        states._columns.value = newColumns
      }
      if (column.type === 'selection') {
        states.selectable.value = column.selectable
        states.reserveSelection.value = column.reserveSelection
      }
      if (instance.$ready) {
        instance.store.updateColumns() // hack for dynamics insert column
        instance.store.scheduleLayout()
      }
    },

    removeColumn(states, column, parent) {
      const array = unref(states._columns) || []
      if (parent) {
        parent.children.splice(
          parent.children.findIndex(item => item.id === column.id),
          1,
        )
        states._columns.value = replaceColumn(array, parent)
      } else {
        array.splice(array.indexOf(column), 1)
        states._columns.value = array
      }

      if (instance.$ready) {
        instance.store.updateColumns() // hack for dynamics remove column
        instance.store.scheduleLayout()
      }
    },

    sort(states, options) {
      const { prop, order, init } = options
      if (prop) {
        const column = arrayFind(
          unref(states.columns),
          column => column.property === prop,
        )
        if (column) {
          column.order = order
          instance.store.updateSort(column, prop, order)
          instance.store.commit('changeSortCondition', { init })
        }
      }
    },

    changeSortCondition(states, options) {
      // 修复 pr https://github.com/ElemeFE/element/pull/15012 导致的 bug
      const { sortingColumn: column, sortProp: prop, sortOrder: order } = states
      if (unref(order) === null) {
        states.sortingColumn.value = null
        states.sortProp.value = null
      }
      const ingore = { filter: true }
      instance.store.execQuery(ingore)

      if (!options || !(options.silent || options.init)) {
        instance.emit('sort-change', {
          column: unref(column),
          prop: unref(prop),
          order: unref(order),
        })
      }

      instance.store.updateTableScrollY()
    },

    filterChange(states, options) {
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

    rowSelectedChanged(states, row) {
      instance.store.toggleRowSelection(row)
      instance.store.updateAllSelected()
    },

    setHoverRow(states, row) {
      states.hoverRow.value = row
    },

    setCurrentRow(states, row) {
      instance.store.updateCurrentRow(row)
    },
  }
  const commit = function(name, ...args) {
    const mutations = instance.store.mutations
    if (mutations[name]) {
      mutations[name].apply(instance, [instance.store.states].concat(args))
    } else {
      throw new Error(`Action not found: ${name}`)
    }
  }
  const updateTableScrollY = function() {
    nextTick(() => instance.layout.updateScrollY.apply(instance.layout))
  }
  const watcher = useWatcher()
  return {
    ...watcher,
    mutations,
    commit,
    updateTableScrollY,
  }
}

export default useStore
