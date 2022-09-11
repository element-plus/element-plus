import { get } from 'lodash-unified'
import { isFunction, isObject } from '@element-plus/utils'
import { ExpandIcon, TableCell } from '../components'
import { Alignment } from '../constants'
import { placeholderSign } from '../private'
import { componentToSlot, enforceUnit, tryCall } from '../utils'

import type { FunctionalComponent, UnwrapNestedRefs, VNode } from 'vue'
import type { CellRendererParams } from '../types'
import type { TableV2RowCellRenderParam } from '../components'
import type { UseNamespaceReturn } from '@element-plus/hooks'
import type { UseTableReturn } from '../use-table'
import type { TableV2Props } from '../table'

type CellRendererProps = TableV2RowCellRenderParam &
  Pick<
    TableV2Props,
    'cellProps' | 'expandColumnKey' | 'indentSize' | 'iconSize' | 'rowKey'
  > &
  UnwrapNestedRefs<Pick<UseTableReturn, 'expandedRowKeys'>> & {
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
    style,
    expandedRowKeys,
    ns,
    // derived props
    cellProps: _cellProps,
    expandColumnKey,
    indentSize,
    iconSize,
    rowKey,
  },
  { slots }
) => {
  const cellStyle = enforceUnit(style)

  if (column.placeholderSign === placeholderSign) {
    return <div class={ns.em('row-cell', 'placeholder')} style={cellStyle} />
  }
  const { cellRenderer, dataKey, dataGetter } = column

  const columnCellRenderer = componentToSlot(cellRenderer)

  const CellComponent =
    columnCellRenderer ||
    slots.default ||
    ((props: CellRendererParams<any>) => <TableCell {...props} />)

  const cellData = isFunction(dataGetter)
    ? dataGetter({ columns, column, columnIndex, rowData, rowIndex })
    : get(rowData, dataKey ?? '')

  const extraCellProps = tryCall(_cellProps, {
    cellData,
    columns,
    column,
    columnIndex,
    rowIndex,
    rowData,
  })

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
    <div class={kls} style={cellStyle} {...extraCellProps}>
      {IconOrPlaceholder}
      {Cell}
    </div>
  )
}

CellRenderer.inheritAttrs = false

export default CellRenderer
