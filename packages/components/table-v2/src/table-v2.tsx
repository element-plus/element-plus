import { defineComponent, provide, unref } from 'vue'
import { get } from 'lodash-unified'
import { useNamespace } from '@element-plus/hooks'
import { isFunction } from '@element-plus/utils'
import { useTable } from './use-table'
import { tryCall } from './utils'
import { TableV2InjectionKey } from './tokens'
import { Alignment } from './constants'
import { placeholderSign } from './private'
import { tableV2Props } from './table'
// components
import Table from './table-grid'
import TableRow from './table-row'
import TableCell from './table-cell'

import type { TableGridRowSlotParams } from './table-grid'
import type { TableV2RowCellRenderParam } from './table-row'

const COMPONENT_NAME = 'ElTableV2'
const TableV2 = defineComponent({
  name: COMPONENT_NAME,
  props: tableV2Props,
  setup(props, { slots }) {
    const ns = useNamespace('table-v2')

    const {
      columns,
      columnsStyles,
      depthMap,
      expandedRowKeys,
      hasFixedColumns,
      hoveringRowKey,
      mainTableRef,
      isResetting,
      isScrolling,

      onRowHovered,
      onRowExpanded,
    } = useTable(props)

    function renderMainTable() {
      return (
        <Table ref={mainTableRef} class={ns.e('main')} columns={unref(columns)}>
          {renderTableRow}
        </Table>
      )
    }

    // function renderLeftTable() {}

    // function renderRightTable() {}

    // function renderHeader() {}

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
      const { dataKey, dataGetter } = props

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

      // TODO: Add expand icon
      // expandIconProps,
      // let ExpandIcon
      // if (isObject(expandIconProps)) {
      //   ExpandIcon = <div></div>
      // }
      // {ExpandIcon}

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
        </div>
      )
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
