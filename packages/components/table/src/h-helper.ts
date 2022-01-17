import { h } from 'vue'

import type { TableColumnCtx } from './table-column/defaults'

export function hColgroup<T>(columns: TableColumnCtx<T>[]) {
  return h('colgroup', {}, [
    ...columns.map((column) =>
      h('col', {
        name: column.id,
        key: column.id,
      })
    ),
  ])
}
