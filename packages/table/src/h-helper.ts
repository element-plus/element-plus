import { h } from 'vue'
import { TableColumn } from './table'

export function hGutter() {
  return h(
    'col',
    {
      name: 'gutter',
    },
  )
}

export function hColgroup(columns: TableColumn[], hasGutter = false) {
  return h(
    'colgroup',
    {},
    [
      ...columns.map(column =>
        h('col', {
          name: column.id,
          key: column.id,
        }),
      ),
      hasGutter && hGutter(),
    ],
  )
}
