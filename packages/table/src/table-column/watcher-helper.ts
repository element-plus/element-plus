import { watch, getCurrentInstance, ComputedRef } from 'vue'
import { TableColumn } from '../table'

function useWatcher(owner: ComputedRef<any>, props_: TableColumn) {
  const instance = getCurrentInstance() as unknown as TableColumn
  const registerComplexWatchers = () => {
    const props = ['fixed']
    const aliases = {
      realWidth: 'width',
      realMinWidth: 'minWidth',
    }
    const allAliases = props.reduce((prev, cur) => {
      prev[cur] = cur
      return prev
    }, aliases)

    Object.keys(allAliases).forEach(key => {
      const columnKey = aliases[key]
      if (props_[columnKey]) {
        watch(
          () => props_[columnKey],
          newVal => {
            instance.ctx.columnConfig[columnKey] = newVal
            const updateColumns = columnKey === 'fixed'
            owner.value.store.scheduleLayout(updateColumns)
          },
        )
      }
    })
  }
  const registerNormalWatchers = () => {
    const props = ['label', 'property', 'filters', 'filterMultiple', 'sortable', 'index', 'formatter', 'className', 'labelClassName', 'showOverflowTooltip']
    // 一些属性具有别名
    const aliases = {
      prop: 'property',
      realAlign: 'align',
      realHeaderAlign: 'headerAlign',
      realWidth: 'width',
    }
    const allAliases = props.reduce((prev, cur) => {
      prev[cur] = cur
      return prev
    }, aliases)

    Object.keys(allAliases).forEach(key => {
      const columnKey = aliases[key]
      if (props_[key]) {
        watch(
          () => props_[key],
          newVal => {
            instance.ctx.columnConfig[columnKey] = newVal
          },
        )
      }
    })
  }

  return {
    registerComplexWatchers,
    registerNormalWatchers,
  }
}

export default useWatcher
