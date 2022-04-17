import HeaderCell from '../table-header-cell'
import ColumnResizer from '../table-column-resizer'
import SortIcon from '../sort-icon'
import { Alignment, SortOrder, oppositeOrderMap } from '../constants'
import { placeholderSign } from '../private'
import { tryCall } from '../utils'

import type { FunctionalComponent, UnwrapNestedRefs } from 'vue'
import type { UseNamespaceReturn } from '@element-plus/hooks'
import type { TableV2HeaderRowCellRendererParams } from '../table-header-row'
import type { UseTableReturn } from '../use-table'
import type { TableV2Props } from '../table'
import type { TableV2HeaderCell } from '../header-cell'

type HeaderCellRendererProps = TableV2HeaderRowCellRendererParams &
  UnwrapNestedRefs<
    Pick<
      UseTableReturn,
      | 'columnsStyles'
      | 'resizingKey'
      | 'onColumnSorted'
      | 'onColumnResized'
      | 'onColumnResizeEnd'
      | 'onColumnResizeStart'
    >
  > &
  Pick<TableV2Props, 'sortBy' | 'sortState' | 'headerCellProps'> & {
    ns: UseNamespaceReturn
  }

const HeaderCellRenderer: FunctionalComponent<HeaderCellRendererProps> = (
  props
) => {
  const {
    column,
    ns,
    resizingKey,
    columnsStyles,
    onColumnResizeEnd,
    onColumnResizeStart,
    onColumnResized,
    onColumnSorted,
  } = props

  if (column.placeholderSign === placeholderSign) {
    return
  }

  const { headerCellRenderer, headerClass, sortable, resizable } = column

  /**
   * render Cell children
   */
  const cellRenderer =
    headerCellRenderer ||
    ((props: TableV2HeaderCell) => <HeaderCell {...props} />)

  const Cell = cellRenderer({
    ...props,
    class: ns.e('header-cell-text'),
  })

  /**
   * Render cell container and sort indicator
   */
  const { sortBy, sortState, headerCellProps } = props

  const cellKls = [
    ns.e('header-cell'),
    ...tryCall(headerClass, props, ''),
    column.align === Alignment.CENTER && ns.is('align-center'),
    column.align === Alignment.RIGHT && ns.is('align-right'),
    sortable && ns.is('sortable'),
    column.key === resizingKey && ns.is('resizing'),
  ]

  let sorting: boolean, sortOrder: SortOrder
  if (sortState) {
    const order = sortState[column.key]
    sorting = Boolean(oppositeOrderMap[order])
    sortOrder = sorting ? order : SortOrder.ASC
  } else {
    sorting = column.key === sortBy.key
    sortOrder = sorting ? sortBy.order : SortOrder.ASC
  }

  const cellProps = {
    ...tryCall(headerCellProps, props),
    onClick: column.sortable ? onColumnSorted : undefined,
    class: cellKls,
    style: columnsStyles[column.key],
    ['data-key']: column.key,
  }

  return (
    <div {...cellProps}>
      {Cell}
      {sortable && <SortIcon sortOrder={sortOrder} />}
      {resizable && (
        <ColumnResizer
          class={ns.e('column-resizer')}
          column={column}
          onResize={onColumnResized}
          onResizeStart={onColumnResizeStart}
          onResizeStop={onColumnResizeEnd}
        />
      )}
    </div>
  )
}

export default HeaderCellRenderer
