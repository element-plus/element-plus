import { watch, getCurrentInstance, ComputedRef } from 'vue'
import { hasOwn } from '@vue/shared'
import type { TableColumnCtx, TableColumn, ValueOf } from './defaults'
import { parseMinWidth, parseWidth } from '../util'

function useWatcher<T>(
  owner: ComputedRef<any>,
  props_: Partial<TableColumnCtx<T>>,
) {
  const instance = getCurrentInstance() as TableColumn<T>
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
      if (hasOwn(props_, columnKey)) {
        watch(
          () => props_[columnKey],
          newVal => {
            let value: ValueOf<TableColumnCtx<T>> = newVal
            if (columnKey === 'width' && key === 'realWidth') {
              value = parseWidth(newVal)
            }
            if (columnKey === 'minWidth' && key === 'realMinWidth') {
              value = parseMinWidth(newVal)
            }
            instance.columnConfig.value[columnKey as any] = value
            instance.columnConfig.value[key] = value
            const updateColumns = columnKey === 'fixed'
            owner.value.store.scheduleLayout(updateColumns)
          },
        )
      }
    })
  }
  const registerNormalWatchers = () => {
    const props = [
      'label',
      'filters',
      'filterMultiple',
      'sortable',
      'index',
      'formatter',
      'className',
      'labelClassName',
      'showOverflowTooltip',
    ]
    const aliases = {
      property: 'prop',
      align: 'realAlign',
      headerAlign: 'realHeaderAlign',
    }
    const allAliases = props.reduce((prev, cur) => {
      prev[cur] = cur
      return prev
    }, aliases)
    Object.keys(allAliases).forEach(key => {
      const columnKey = aliases[key]
      if (hasOwn(props_, columnKey)) {
        watch(
          () => props_[columnKey],
          newVal => {
            instance.columnConfig.value[key] = newVal
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
