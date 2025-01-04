// @ts-nocheck
import { h } from 'vue'
import { isUndefined } from '@element-plus/utils'

export function hColgroup(props) {
  const isAuto = props.tableLayout === 'auto'
  let columns = props.columns || []
  if (isAuto) {
    if (columns.every(({ width }) => isUndefined(width))) {
      columns = []
    }
  }
  const getPropsData = (column) => {
    const propsData = {
      key: `${props.tableLayout}_${column.id}`,
      style: {},
      name: undefined,
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
