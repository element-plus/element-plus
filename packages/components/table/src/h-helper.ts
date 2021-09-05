import { h } from 'vue'

import type { TableColumnCtx } from './table-column/defaults'

export function hGutter() {
  return h('col', {
    name: 'gutter',
  })
}

export function hColgroup<T>(columns: TableColumnCtx<T>[], hasGutter = false) {
  return h('colgroup', {}, [
    ...columns.map((column) =>
      h('col', {
        name: column.id,
        key: column.id,
      })
    ),
    hasGutter && hGutter(),
  ])
}
