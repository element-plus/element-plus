import Store from './index'
import debounce from 'lodash/debounce'
import { Table } from '../table.type'

export function createStore(table: Table, initialState = {}) {
  if (!table) {
    throw new Error('Table is required.')
  }

  const store = Store()
  // fix https://github.com/ElemeFE/element/issues/14075
  // related pr https://github.com/ElemeFE/element/pull/14146
  store.toggleAllSelection = debounce(store._toggleAllSelection, 10)
  Object.keys(initialState).forEach(key => {
    store.states[key].value = initialState[key]
  })
  return store
}

export function mapStates<T>(mapper: T): any {
  const res = {}
  Object.keys(mapper).forEach(key => {
    const value = mapper[key]
    let fn
    if (typeof value === 'string') {
      fn = function () {
        return this.store.states[value]
      }
    } else if (typeof value === 'function') {
      fn = function () {
        return value.call(this, this.store.states)
      }
    } else {
      console.error('invalid value type')
    }
    if (fn) {
      res[key] = fn
    }
  })
  return res as any
}
