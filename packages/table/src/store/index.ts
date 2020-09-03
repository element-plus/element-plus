import { nextTick, getCurrentInstance, unref } from 'vue'
import { arrayFind } from '@element-plus/utils/util'
import useWatcher from './watcher'

function useStore() {
  const instance = getCurrentInstance() as any
  const mutations = {
    setData(states, data) {
      const dataInstanceChanged = unref(states.data) !== data
      states.data.value = data

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

      instance.store.updateTableScrollY()
    },

    insertColumn(states, column, index, parent) {
      let array = unref(states._columns)
      if (parent) {
        array = parent.children
        if (!array) array = parent.children = []
      }

      if (typeof index !== 'undefined') {
        array.splice(index, 0, column)
      } else {
        array.push(column)
      }
      states._columns.value = array
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
      let array = unref(states._columns)
      if (parent) {
        array = parent.children
        if (!array) array = parent.children = []
      }
      if (array) {
        array.splice(array.indexOf(column), 1)
      }

      states._columns.value = array
      if (instance.$ready) {
        instance.store.updateColumns() // hack for dynamics remove column
        instance.store.scheduleLayout()
      }
    },

    sort(states, options) {
      const { prop, order, init } = options
      if (prop) {
        const column = arrayFind(unref(states.columns), column => column.property === prop)
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
  const commit = function (name, ...args) {
    const mutations = instance.store.mutations
    if (mutations[name]) {
      mutations[name].apply(instance, [instance.store.states].concat(args))
    } else {
      throw new Error(`Action not found: ${name}`)
    }
  }
  const updateTableScrollY = function () {
    nextTick(instance.layout.updateScrollY.apply(instance.layout))
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
