import { h } from 'vue'
import { isUndefined } from '@element-plus/utils'

import type { VNode } from 'vue'
import type { hColgroupProps } from './table/defaults'
import type { TableColumnCtx } from './table-column/defaults'

export function hColgroup(props: hColgroupProps<unknown>): VNode {
  const isAuto = props.tableLayout === 'auto'
  let columns = props.columns || []
  if (isAuto) {
    if (columns.every(({ width }) => isUndefined(width))) {
      columns = []
    }
  }
  const getPropsData = (column: TableColumnCtx<unknown>) => {
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
