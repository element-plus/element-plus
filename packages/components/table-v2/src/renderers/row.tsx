import { Row } from '../components'
import { tryCall } from '../utils'

import type { FunctionalComponent, UnwrapNestedRefs } from 'vue'
import type { UseNamespaceReturn } from '@element-plus/hooks'
import type { UseTableReturn } from '../use-table'
import type { TableV2Props } from '../table'
import type { TableGridRowSlotParams } from '../table-grid'

type RowRendererProps = TableGridRowSlotParams &
  Pick<
    TableV2Props,
    | 'expandColumnKey'
    | 'estimatedRowHeight'
    | 'rowProps'
    | 'rowClass'
    | 'rowKey'
    | 'rowEventHandlers'
  > &
  UnwrapNestedRefs<
    Pick<
      UseTableReturn,
      | 'depthMap'
      | 'expandedRowKeys'
      | 'hasFixedColumns'
      | 'hoveringRowKey'
      | 'onRowHovered'
      | 'onRowExpanded'
      | 'columnsStyles'
    >
  > & {
    ns: UseNamespaceReturn
  }

const RowRenderer: FunctionalComponent<RowRendererProps> = (
  props,
  { slots }
) => {
  const {
    columns,
    columnsStyles,
    depthMap,
    expandColumnKey,
    expandedRowKeys,
    estimatedRowHeight,
    hasFixedColumns,
    hoveringRowKey,
    rowData,
    rowIndex,
    style,
    isScrolling,
    rowProps,
    rowClass,
    rowKey,
    rowEventHandlers,
    ns,
    onRowHovered,
    onRowExpanded,
  } = props

  const rowKls = tryCall(rowClass, { columns, rowData, rowIndex }, '')
  const additionalProps = tryCall(rowProps, {
    columns,
    rowData,
    rowIndex,
  })
  const _rowKey = rowData[rowKey]
  const depth = depthMap[_rowKey] || 0
  const canExpand = Boolean(expandColumnKey)
  const isFixedRow = rowIndex < 0
  const kls = [
    ns.e('row'),
    rowKls,
    {
      [ns.e(`row-depth-${depth}`)]: canExpand && rowIndex >= 0,
      [ns.is('expanded')]: canExpand && expandedRowKeys.includes(_rowKey),
      [ns.is('hovered')]: !isScrolling && _rowKey === hoveringRowKey,
      [ns.is('fixed')]: !depth && isFixedRow,
      [ns.is('customized')]: Boolean(slots.row),
    },
  ]

  const onRowHover = hasFixedColumns ? onRowHovered : undefined

  const _rowProps = {
    ...additionalProps,
    columns,
    columnsStyles,
    class: kls,
    depth,
    expandColumnKey,
    estimatedRowHeight: isFixedRow ? undefined : estimatedRowHeight,
    isScrolling,
    rowIndex,
    rowData,
    rowKey: _rowKey,
    rowEventHandlers,
    style,
  }

  return (
    <Row {..._rowProps} onRowHover={onRowHover} onRowExpand={onRowExpanded}>
      {slots}
    </Row>
  )
}

export default RowRenderer
