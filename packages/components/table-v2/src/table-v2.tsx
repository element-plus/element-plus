import { computed, defineComponent, provide, unref } from 'vue'
import { get } from 'lodash-unified'
import { useNamespace } from '@element-plus/hooks'
import { isFunction, isObject } from '@element-plus/utils'
import { useTable } from './use-table'
import { tryCall } from './utils'
import { TableV2InjectionKey } from './tokens'
import { Alignment } from './constants'
import { placeholderSign } from './private'
import { tableV2Props } from './table'
// components
import Table from './table-grid'
import TableRow from './table-row'
import TableHeaderRow from './table-header-row'
import TableCell from './table-cell'
import TableHeaderCell from './table-header-cell'
import ExpandIcon from './expand-icon'

import type { VNode } from 'vue'
import type { TableGridRowSlotParams } from './table-grid'
import type { TableV2RowCellRenderParam } from './table-row'
import type { TableV2HeaderRendererParams } from './table-header'
import type { TableV2HeaderCell } from './header-cell'

import type { TableV2HeaderRowCellRendererParams } from './table-header-row'

const COMPONENT_NAME = 'ElTableV2'
const TableV2 = defineComponent({
  name: COMPONENT_NAME,
  props: tableV2Props,
  setup(props, { slots }) {
    const ns = useNamespace('table-v2')

    const {
      columnsStyles,
      columnsTotalWidth,
      // fixedColumnsOnLeft,
      // fixedColumnOnRight,
      mainColumns,
      mainTableHeight,
      depthMap,
      expandedRowKeys,
      hasFixedColumns,
      hoveringRowKey,
      mainTableRef,
      isResetting,
      isScrolling,
      resizingKey,
      vScrollbarSize,

      onColumnSorted,
      onRowHovered,
      onRowExpanded,
      onRowsRendered,
      onScroll,
    } = useTable(props)

    const bodyWidth = computed(() => {
      const { fixed, width } = props
      const ret = width - unref(vScrollbarSize)
      return fixed ? Math.max(Math.round(unref(columnsTotalWidth)), ret) : ret
    })

    const headerWidth = computed(
      () => unref(bodyWidth) + (props.fixed ? unref(vScrollbarSize) : 0)
    )

    function renderMainTable() {
      const {
        cache,
        data,
        estimatedRowHeight,
        headerHeight,
        rowHeight,
        width,
      } = props

      return (
        <Table
          ref={mainTableRef}
          cache={cache}
          class={ns.e('main')}
          columns={unref(mainColumns)}
          data={data}
          estimatedRowHeight={estimatedRowHeight}
          bodyWidth={unref(bodyWidth)}
          headerHeight={headerHeight}
          headerWidth={unref(headerWidth)}
          rowHeight={rowHeight}
          height={unref(mainTableHeight)}
          width={width}
          onRowsRendered={onRowsRendered}
          onScroll={onScroll}
        >
          {{ row: renderTableRow, header: renderHeader }}
        </Table>
      )
    }

    // function renderLeftTable() {
    //   const columns = unref(fixedColumnsOnLeft)
    //   if (columns.length === 0) return

    //   const { estimatedRowHeight, headerHeight, rowHeight, width } = props

    //   return <Table>{}</Table>
    // }

    // function renderRightTable() {}

    function renderHeader({
      columns,
      headerIndex,
      style,
    }: TableV2HeaderRendererParams) {
      const param = { columns, headerIndex }

      const headerClass = [
        ns.e('header-row'),
        tryCall(props.headerClass, param, ''),
        {
          [ns.is('resizing')]: unref(resizingKey),
          [ns.is('customized')]: Boolean(slots.header),
        },
      ]

      const headerProps = {
        ...tryCall(props.headerProps, param),
        class: headerClass,
        columns,
        headerIndex,
        style,
      }

      return (
        <TableHeaderRow {...headerProps}>
          {{
            default: slots.header,
            cell: renderHeaderCell,
          }}
        </TableHeaderRow>
      )
    }

    // function renderFooter() {}

    function renderTableRow({
      columns,
      rowData,
      rowIndex,
      style,
      isScrolling,
    }: TableGridRowSlotParams) {
      const {
        expandColumnKey,
        estimatedRowHeight,
        rowProps,
        rowClass,
        rowKey,
        rowEventHandlers,
      } = props

      const rowKls = tryCall(rowClass, { columns, rowData, rowIndex })
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
          [ns.is('expanded')]:
            canExpand && unref(expandedRowKeys).includes(_rowKey),
          [ns.is('hovered')]: !isScrolling && _rowKey === unref(hoveringRowKey),
          [ns.is('fixed')]: !depth && isFixedRow,
          [ns.is('customized')]: Boolean(slots.row),
        },
      ]

      const onRowHover = unref(hasFixedColumns) ? onRowHovered : undefined

      const _rowProps = {
        ...additionalProps,
        columns,
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

      const children = {
        ...(slots.row ? { default: slots.row } : {}),
        cell: renderRowCell,
      }

      return (
        <TableRow
          {..._rowProps}
          onRowHover={onRowHover}
          onRowExpand={onRowExpanded}
        >
          {children}
        </TableRow>
      )
    }

    function renderRowCell({
      columns,
      column,
      columnIndex,
      expandIconProps,
      isScrolling,
      rowData,
      rowIndex,
    }: TableV2RowCellRenderParam) {
      const cellStyle = unref(columnsStyles)[column.key]

      if (column.placeholderSign === placeholderSign) {
        return (
          <div class={ns.em('row-cell', 'placeholder')} style={cellStyle} />
        )
      }
      const { dataKey, dataGetter, rowKey } = props

      const CellComponent = slots.cell || ((props) => <TableCell {...props} />)
      const cellData = isFunction(dataGetter)
        ? dataGetter({ columns, column, columnIndex, rowData, rowIndex })
        : get(rowData, dataKey ?? '')

      const cellProps = {
        columns,
        column,
        columnIndex,
        cellData,
        isScrolling,
        rowData,
        rowIndex,
      }

      const Cell = CellComponent(cellProps)

      const scope = 'row-cell'
      const kls = [
        ns.e(scope),
        column.align === Alignment.CENTER && ns.em(scope, 'align-center'),
        column.align === Alignment.RIGHT && ns.em(scope, 'align-right'),
      ]

      const expanded =
        rowIndex >= 0 && unref(expandedRowKeys).includes(rowData[rowKey])

      const expandable = (rowData.children?.length ?? 0) > 0

      let Icon: VNode | undefined

      if (isObject(expandIconProps)) {
        Icon = (
          <ExpandIcon
            {...expandIconProps}
            expanded={expanded}
            expandable={expandable}
          />
        )
      }

      return (
        <div
          {...tryCall(props.cellProps, {
            columns,
            column,
            columnIndex,
            rowData,
            rowIndex,
          })}
          class={kls}
          style={cellStyle}
        >
          {Cell}
          {Icon}
        </div>
      )
    }

    function renderHeaderCell(
      renderHeaderCellProps: TableV2HeaderRowCellRendererParams
    ) {
      const { column } = renderHeaderCellProps

      if (column.placeholderSign === placeholderSign) {
        return
      }

      const { headerCellRenderer, headerClass } = column

      /**
       * render Cell children
       */
      const cellRenderer =
        headerCellRenderer ||
        ((props: TableV2HeaderCell) => <TableHeaderCell {...props} />)

      const Cell = cellRenderer({
        ...renderHeaderCellProps,
        class: ns.e('header-cell-text'),
      })

      /**
       * Render cell container and sort indicator
       */
      // const { sortBy, sortState, headerCellProps } = props

      const element = 'header-cell'
      const cellKls = [
        ns.e(element),
        ...tryCall(headerClass, renderHeaderCellProps, ''),
        column.align === Alignment.CENTER && ns.em(element, 'align-center'),
        column.align === Alignment.RIGHT && ns.em(element, 'align-right'),
        column.sortable && ns.is('sortable'),
        column.key === unref(resizingKey) && ns.is('resizing'),
      ]

      // let sorting: boolean, sortOrder: SortOrder
      // if (sortState) {
      //   const order = sortState[column.key]
      //   sorting = Boolean(oppositeOrderMap[order])
      //   sortOrder = sorting ? order : SortOrder.ASC
      // } else {
      //   sorting = column.key === sortBy.key
      //   sortOrder = sorting ? sortBy.order : SortOrder.ASC
      // }

      const cellProps = {
        ...tryCall(props.headerCellProps, renderHeaderCellProps),
        onClick: column.sortable ? onColumnSorted : undefined,
        class: cellKls,
        style: unref(columnsStyles)[column.key],
        dataKey: column.key,
      }

      return <div {...cellProps}>{Cell}</div>
    }

    provide(TableV2InjectionKey, {
      ns,
      isResetting,
      hoveringRowKey,
      isScrolling,
    })

    return () => {
      return <div class="table">{renderMainTable()}</div>
    }
  },
})

export default TableV2

export type TableV2Instance = InstanceType<typeof TableV2>
