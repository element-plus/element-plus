import { h } from 'vue'
import { TableColumnCtx } from './table.type'

export function hGutter() {
  return h('col', {
    name: 'gutter',
  })
}

export function hColgroup(columns: TableColumnCtx[], hasGutter = false) {
  return h('colgroup', {}, [
    ...columns.map(column =>
      h('col', {
        name: column.id,
        key: column.id,
      }),
    ),
    hasGutter && hGutter(),
  ])
}
