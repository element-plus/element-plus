import { watch } from 'vue'
import { debounce } from 'lodash-unified'
import { isObject } from '@element-plus/utils'
import useStore from '.'

import type { Store } from '.'
import type { DefaultRow, Table, TableProps } from '../table/defaults'

const InitialStateMap = {
  rowKey: 'rowKey',
  defaultExpandAll: 'defaultExpandAll',
  selectOnIndeterminate: 'selectOnIndeterminate',
  indent: 'indent',
  lazy: 'lazy',
  data: 'data',
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
  store.toggleAllSelection = debounce(store._toggleAllSelection, 10)
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
