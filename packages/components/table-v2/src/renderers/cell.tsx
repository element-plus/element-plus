import { get } from 'lodash-unified'
import { isFunction, isObject } from '@element-plus/utils'
import TableCell from '../table-cell'
import ExpandIcon from '../expand-icon'
import { Alignment } from '../constants'
import { placeholderSign } from '../private'
import { enforceUnit } from '../utils'

import type { FunctionalComponent, UnwrapNestedRefs, VNode } from 'vue'
import type { TableV2RowCellRenderParam } from '../table-row'
import type { UseNamespaceReturn } from '@element-plus/hooks'
import type { UseTableReturn } from '../use-table'
import type { TableV2Props } from '../table'

type CellRendererProps = TableV2RowCellRenderParam &
  Pick<
    TableV2Props,
    'cellProps' | 'expandColumnKey' | 'indentSize' | 'iconSize' | 'rowKey'
  > &
  UnwrapNestedRefs<
    Pick<UseTableReturn, 'columnsStyles' | 'expandedRowKeys'>
  > & {
    ns: UseNamespaceReturn
  }

const CellRenderer: FunctionalComponent<CellRendererProps> = (
  {
    // renderer props
    columns,
    column,
    columnIndex,
    depth,
    expandIconProps,
    isScrolling,
    rowData,
    rowIndex,
    // from use-table
    columnsStyles,
    expandedRowKeys,
    ns,
    // derived props
    expandColumnKey,
    indentSize,
    iconSize,
    rowKey,
  },
  { slots }
) => {
  const cellStyle = enforceUnit(columnsStyles[column.key])

  if (column.placeholderSign === placeholderSign) {
    return <div class={ns.em('row-cell', 'placeholder')} style={cellStyle} />
  }
  const { dataKey, dataGetter } = column

  const CellComponent = slots.cell || ((props) => <TableCell {...props} />)
  const cellData = isFunction(dataGetter)
    ? dataGetter({ columns, column, columnIndex, rowData, rowIndex })
    : get(rowData, dataKey ?? '')

  const cellProps = {
    class: ns.e('cell-text'),
    columns,
    column,
    columnIndex,
    cellData,
    isScrolling,
    rowData,
    rowIndex,
  }

  const Cell = CellComponent(cellProps)

  const kls = [
    ns.e('row-cell'),
    column.align === Alignment.CENTER && ns.is('align-center'),
    column.align === Alignment.RIGHT && ns.is('align-right'),
  ]

  const expandable = rowIndex >= 0 && column.key === expandColumnKey
  const expanded = rowIndex >= 0 && expandedRowKeys.includes(rowData[rowKey])

  let IconOrPlaceholder: VNode | undefined
  const iconStyle = `margin-inline-start: ${depth * indentSize}px;`
  if (expandable) {
    if (isObject(expandIconProps)) {
      IconOrPlaceholder = (
        <ExpandIcon
          {...expandIconProps}
          class={[ns.e('expand-icon'), ns.is('expanded', expanded)]}
          size={iconSize}
          expanded={expanded}
          style={iconStyle}
          expandable
        />
      )
    } else {
      IconOrPlaceholder = (
        <div
          style={[
            iconStyle,
            `width: ${iconSize}px; height: ${iconSize}px;`,
          ].join(' ')}
        />
      )
    }
  }

  return (
    <div
      // {...tryCall(cellProps, {
      //   columns,
      //   column,
      //   columnIndex,
      //   rowData,
      //   rowIndex,
      // })}
      class={kls}
      style={cellStyle}
    >
      {IconOrPlaceholder}
      {Cell}
    </div>
  )
}

CellRenderer.inheritAttrs = false

export default CellRenderer
