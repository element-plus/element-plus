import { h } from 'vue'
import { isUndefined } from '@element-plus/utils'

import type { TableColumnCtx } from './table-column/defaults'
import type { DefaultRow } from './table/defaults'

type Props = {
  tableLayout: 'fixed' | 'auto'
  columns?: TableColumnCtx<DefaultRow>[]
}

export function hColgroup(props: Props) {
  const isAuto = props.tableLayout === 'auto'
  let columns = props.columns || []
  if (isAuto) {
    if (columns.every(({ width }) => isUndefined(width))) {
      columns = []
    }
  }
  const getPropsData = (column: TableColumnCtx<DefaultRow>) => {
    const propsData = {
      key: `${props.tableLayout}_${column.id}`,
      style: {},
      name: undefined as string | undefined,
    }
    if (isAuto) {
      propsData.style = {
        width: `${column.width}px`,
      }
    } else {
      propsData.name = column.id
    }
    return propsData
  }

  return h(
    'colgroup',
    {},
    columns.map((column) => h('col', getPropsData(column)))
  )
}

hColgroup.props = ['columns', 'tableLayout']
