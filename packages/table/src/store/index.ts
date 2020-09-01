import { nextTick, getCurrentInstance, unref } from 'vue'
import { arrayFind } from '@element-plus/utils/util'
import useWatcher from './watcher'

function useStore() {
  const instance = getCurrentInstance() as any
  const mutations = {
    setData(states, data) {
      const dataInstanceChanged = unref(states._data) !== data
      states._data.value = data

      this.execQuery()
      // 数据变化，更新部分数据。
      // 没有使用 computed，而是手动更新部分数据 https://github.com/vuejs/vue/issues/6660#issuecomment-331417140
      this.updateCurrentRowData()
      this.updateExpandRows()
      if (unref(states.reserveSelection)) {
        this.assertRowKey()
        this.updateSelectionByRowKey()
      } else {
        if (dataInstanceChanged) {
          this.clearSelection()
        } else {
          this.cleanSelection()
        }
      }
      this.updateAllSelected()

      this.updateTableScrollY()
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

      if (column.type === 'selection') {
        states.selectable.value = column.selectable
        states.reserveSelection.value = column.reserveSelection
      }

      if (this.$ready) {
        this.updateColumns() // hack for dynamics insert column
        this.scheduleLayout()
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

      if (this.$ready) {
        this.updateColumns() // hack for dynamics remove column
        this.scheduleLayout()
      }
    },

    sort(states, options) {
      const { prop, order, init } = options
      if (prop) {
        const column = arrayFind(unref(states.columns), column => column.property === prop)
        if (column) {
          column.order = order
          this.updateSort(column, prop, order)
          this.commit('changeSortCondition', { init })
        }
      }
    },

    changeSortCondition(states, options) {
      // 修复 pr https://github.com/ElemeFE/element/pull/15012 导致的 bug
      const { sortingColumn: column, sortProp: prop, sortOrder: order } = states
      if (order === null) {
        states.sortingColumn.value = null
        states.sortProp.value = null
      }
      const ingore = { filter: true }
      this.execQuery(ingore)

      if (!options || !(options.silent || options.init)) {
        this.table.$emit('sort-change', {
          column: unref(column),
          prop: unref(prop),
          order: unref(order),
        })
      }

      this.updateTableScrollY()
    },

    filterChange(states, options) {
      const { column, values, silent } = options
      const newFilters = this.updateFilters(column, values)

      this.execQuery()

      if (!silent) {
        this.table.$emit('filter-change', newFilters)
      }

      this.updateTableScrollY()
    },

    toggleAllSelection() {
      this.toggleAllSelection()
    },

    rowSelectedChanged(states, row) {
      this.toggleRowSelection(row)
      this.updateAllSelected()
    },

    setHoverRow(states, row) {
      states.hoverRow.value = row
    },

    setCurrentRow(states, row) {
      this.updateCurrentRow(row)
    },
  }
  const commit = function (name, ...args) {
    const mutations = this.mutations
    if (mutations[name]) {
      mutations[name].apply(this, [this.store.states].concat(args))
    } else {
      throw new Error(`Action not found: ${name}`)
    }
  }
  const updateTableScrollY = function () {
    nextTick(instance.ctx.layout.updateScrollY.apply(instance.ctx.layout))
  }
  instance.mutations = mutations
  instance.commit = commit
  instance.updateTableScrollY = updateTableScrollY
  const watcher = useWatcher()
  return {
    ...watcher,
  }
}

export default useStore
