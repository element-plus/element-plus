import { renderSlot } from 'vue'
import { HeaderCell, SortIcon } from '../components'
import { Alignment, SortOrder, oppositeOrderMap } from '../constants'
import { placeholderSign } from '../private'
import { componentToSlot, enforceUnit, tryCall } from '../utils'

import type { FunctionalComponent, UnwrapNestedRefs } from 'vue'
import type { Translator, UseNamespaceReturn } from '@element-plus/hooks'
import type { TableV2HeaderRowCellRendererParams } from '../components'
import type { UseTableReturn } from '../use-table'
import type { TableV2Props } from '../table'

export type HeaderCellRendererProps = TableV2HeaderRowCellRendererParams &
  UnwrapNestedRefs<
    Pick<
      UseTableReturn,
      | 'onColumnSorted'
      | 'handleHeaderCellMousemove'
      | 'handleHeaderCellMouseout'
      | 'handleHeaderCellMousedown'
    >
  > &
  Pick<TableV2Props, 'sortBy' | 'sortState' | 'headerCellProps' | 'border'> & {
    ns: UseNamespaceReturn
    t: Translator
  }

const HeaderCellRenderer: FunctionalComponent<HeaderCellRendererProps> = (
  props,
  { slots }
) => {
  const {
    column,
    ns,
    t,
    style,
    onColumnSorted,
    handleHeaderCellMousemove,
    handleHeaderCellMouseout,
    handleHeaderCellMousedown,
  } = props

  const cellStyle = enforceUnit(style)

  if (column.placeholderSign === placeholderSign) {
    return (
      <div class={ns.em('header-row-cell', 'placeholder')} style={cellStyle} />
    )
  }

  const { headerCellRenderer, headerClass, sortable } = column

  /**
   * render Cell children
   */

  const cellProps = {
    ...props,
    class: ns.e('header-cell-text'),
  }

  const columnCellRenderer =
    componentToSlot<typeof cellProps>(headerCellRenderer)

  const Cell = columnCellRenderer
    ? columnCellRenderer(cellProps)
    : renderSlot(slots, 'default', cellProps, () => [
        <HeaderCell {...cellProps} />,
      ])

  /**
   * Render cell container and sort indicator
   */
  const { sortBy, sortState, headerCellProps } = props

  let sorting: boolean, sortOrder: SortOrder, ariaSort: string | undefined
  if (sortState) {
    const order = sortState[column.key!]
    sorting = Boolean(oppositeOrderMap[order])
    sortOrder = sorting ? order : SortOrder.ASC
  } else {
    sorting = column.key === sortBy.key
    sortOrder = sorting ? sortBy.order : SortOrder.ASC
  }
  if (sortOrder === SortOrder.ASC) {
    ariaSort = 'ascending'
  } else if (sortOrder === SortOrder.DESC) {
    ariaSort = 'descending'
  } else {
    ariaSort = undefined
  }

  const cellKls = [
    ns.e('header-cell'),
    props.border && ns.is('bordered'),
    tryCall(headerClass, props, ''),
    column.align === Alignment.CENTER && ns.is('align-center'),
    column.align === Alignment.RIGHT && ns.is('align-right'),
    sortable && ns.is('sortable'),
  ]

  const resizable = props.border && column.resizable !== false

  const cellWrapperProps = {
    ...tryCall(headerCellProps, props),
    onClick: column.sortable ? onColumnSorted : undefined,
    ariaSort: sortable ? ariaSort : undefined,
    class: cellKls,
    style: cellStyle,
    ['data-key']: column.key,
    onMousemove: resizable
      ? (e: MouseEvent) => handleHeaderCellMousemove(e, column)
      : undefined,
    onMouseout: resizable ? handleHeaderCellMouseout : undefined,
    onMousedown: resizable
      ? (e: MouseEvent) => handleHeaderCellMousedown(e, column)
      : undefined,
  }

  return (
    <div {...cellWrapperProps} role="columnheader">
      {Cell}

      {sortable && (
        <SortIcon
          class={[ns.e('sort-icon'), sorting && ns.is('sorting')]}
          sortOrder={sortOrder}
          ariaLabel={t('el.table.sortLabel', { column: column.title || '' })}
        />
      )}
    </div>
  )
}

export default HeaderCellRenderer
export type HeaderCellSlotProps = HeaderCellRendererProps & { class: string }
