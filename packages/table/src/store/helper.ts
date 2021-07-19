import useStore, { Store } from './index'
import debounce from 'lodash/debounce'
import { Table } from '../table/defaults'
import { TableProps } from '../table/defaults'
import { watch } from 'vue'

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
}

export function createStore<T>(table: Table<T>, props: TableProps<T>) {
  if (!table) {
    throw new Error('Table is required.')
  }

  const store = useStore<T>()
  // fix https://github.com/ElemeFE/element/issues/14075
  // related pr https://github.com/ElemeFE/element/pull/14146
  store.toggleAllSelection = debounce(store._toggleAllSelection, 10)
  Object.keys(InitialStateMap).forEach(key => {
    handleValue(getArrKeysValue(props, key), key, store)
  })
  proxyTableProps(store, props)
  return store
}

function proxyTableProps<T>(store: Store<T>, props: TableProps<T>) {
  Object.keys(InitialStateMap).forEach(key => {
    watch(
      () => getArrKeysValue(props, key),
      value => {
        handleValue(value, key, store)
      },
    )
  })
}

function handleValue<T>(value, propsKey: string, store: Store<T>) {
  let newVal = value
  let storeKey = InitialStateMap[propsKey]
  if (typeof InitialStateMap[propsKey] === 'object') {
    storeKey = storeKey.key
    newVal = newVal || InitialStateMap[propsKey].default
  }
  store.states[storeKey].value = newVal
}

function getArrKeysValue<T>(props: TableProps<T>, keys: string) {
  if (keys.includes('.')) {
    const keyList = keys.split('.')
    let value = props
    keyList.forEach(key => {
      value = value[key]
    })
    return value
  } else {
    return props[keys]
  }
}
