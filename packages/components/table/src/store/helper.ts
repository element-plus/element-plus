import { watch } from 'vue'
import { debounce } from 'lodash-unified'
import { isObject } from '@element-plus/utils'
import useStore from '.'

import type { Store } from '.'
import type { DefaultRow, Table, TableProps } from '../table/defaults'

const InitialStateMap = {
  rowKey: 'rowKey',
  defaultExpandAll: 'defaultExpandAll',
  rowExpandable: 'rowExpandable',
  selectOnIndeterminate: 'selectOnIndeterminate',
  indent: 'indent',
  lazy: 'lazy',
  ['treeProps.hasChildren']: {
    key: 'lazyColumnIdentifier',
    default: 'hasChildren',
  },
  ['treeProps.children']: {
    key: 'childrenColumnName',
    default: 'children',
  },
  ['treeProps.checkStrictly']: {
    key: 'checkStrictly',
    default: false,
  },
}

export function createStore<T extends DefaultRow>(
  table: Table<T>,
  props: TableProps<T>
) {
  if (!table) {
    throw new Error('Table is required.')
  }

  const store = useStore<T>()
  // fix https://github.com/ElemeFE/element/issues/14075
  // related pr https://github.com/ElemeFE/element/pull/14146
  // 修复在虚拟滚动下，取消全选/全选时卡顿的问题
  store.toggleAllSelection = debounce(() => {
    if (props.useVirtual) {
      const { selectOnIndeterminate, isAllSelected, selection, selectable } =
        store.states
      const value = selectOnIndeterminate.value
        ? !isAllSelected.value
        : !(isAllSelected.value || selection.value.length)
      isAllSelected.value = value

      const allRows: any[] = []
      const collectRows = (rows: any[]) => {
        rows.forEach((row) => {
          allRows.push(row)
          // 收集树形子节点
          const children = row[store.states.childrenColumnName.value]
          if (children && children.length) {
            collectRows(children)
          }
        })
      }
      collectRows(store.states.data.value || [])

      // 收集懒加载子节点
      const lazyTreeNodeMap = store.states.lazyTreeNodeMap?.value
      if (lazyTreeNodeMap) {
        Object.values(lazyTreeNodeMap).forEach((children: any) => {
          if (children && children.length) {
            collectRows(children)
          }
        })
      }

      if (value) {
        // 全选：添加所有可选行
        const newSelection: any[] = []
        let rowIndex = 0
        allRows.forEach((row) => {
          if (!selectable.value || selectable.value.call(null, row, rowIndex)) {
            newSelection.push(row)
          }
          rowIndex++
        })
        selection.value = newSelection
      } else {
        // 取消全选
        selection.value = []
      }

      table.emit(
        'selection-change',
        selection.value ? selection.value.slice() : []
      )
      table.emit('select-all', (selection.value || []).slice())
    } else {
      store._toggleAllSelection()
    }
  }, 10)
  Object.keys(InitialStateMap).forEach((key) => {
    handleValue(getArrKeysValue(props, key), key, store)
  })
  proxyTableProps(store, props)
  return store
}

function proxyTableProps<T extends DefaultRow>(
  store: Store<T>,
  props: TableProps<T>
) {
  Object.keys(InitialStateMap).forEach((key) => {
    watch(
      () => getArrKeysValue(props, key),
      (value) => {
        handleValue(value, key, store)
      }
    )
  })
}

function handleValue<T extends DefaultRow>(
  value: string | boolean | Record<string, any>,
  propsKey: string,
  store: Store<T>
) {
  let newVal = value
  let storeKey = InitialStateMap[propsKey as keyof typeof InitialStateMap]
  if (isObject(storeKey)) {
    newVal = newVal || storeKey.default
    storeKey = storeKey.key
  }
  ;((store.states as any)[storeKey] as any).value = newVal
}

function getArrKeysValue<T extends DefaultRow>(
  props: TableProps<T>,
  key: string
) {
  if ((key as keyof typeof props).includes('.')) {
    const keyList = (key as keyof typeof props).split('.')
    let value: string | Record<string, any> = props
    keyList.forEach((k) => {
      value = (value as Record<string, any>)[k]
    })
    return value
  } else {
    return (props as any)[key] as boolean | string
  }
}
