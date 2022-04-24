import { defineComponent, provide, unref } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { useTable } from './use-table'
import { TableV2InjectionKey } from './tokens'
import { tableV2Props } from './table'
// renderers
import MainTable from './renderers/main-table'
import LeftTable from './renderers/left-table'
import RightTable from './renderers/right-table'
import Row from './renderers/row'
import Cell from './renderers/cell'
import Header from './renderers/header'
import HeaderCell from './renderers/header-cell'
import Footer from './renderers/footer'
import Empty from './renderers/empty'
import Overlay from './renderers/overlay'

import type { TableGridRowSlotParams } from './table-grid'
import type { TableV2RowCellRenderParam } from './table-row'
import type { TableV2HeaderRendererParams } from './table-header'

import type { TableV2HeaderRowCellRendererParams } from './table-header-row'

const COMPONENT_NAME = 'ElTableV2'

const TableV2 = defineComponent({
  name: COMPONENT_NAME,
  props: tableV2Props,
  setup(props, { slots }) {
    const ns = useNamespace('table-v2')

    const {
      columnsStyles,
      fixedColumnsOnLeft,
      fixedColumnsOnRight,
      mainColumns,
      mainTableHeight,
      fixedTableHeight,
      leftTableWidth,
      rightTableWidth,
      data,
      depthMap,
      expandedRowKeys,
      hasFixedColumns,
      hoveringRowKey,
      mainTableRef,
      leftTableRef,
      rightTableRef,
      isDynamic,
      isResetting,
      isScrolling,

      bodyWidth,
      emptyStyle,
      rootStyle,
      headerWidth,
      footerHeight,

      showEmpty,

      getRowHeight,
      onColumnSorted,
      onRowHeightChange,
      onRowHovered,
      onRowExpanded,
      onRowsRendered,
      onScroll,
      onVerticalScroll,
    } = useTable(props)

    // function renderFooter() {}

    provide(TableV2InjectionKey, {
      ns,
      isResetting,
      hoveringRowKey,
      isScrolling,
    })

    return () => {
      const {
        cache,
        estimatedRowHeight,
        expandColumnKey,
        fixedData,
        headerHeight,
        headerClass,
        headerProps,
        headerCellProps,
        sortBy,
        sortState,
        rowHeight,
        rowClass,
        rowEventHandlers,
        rowKey,
        rowProps,
        scrollbarAlwaysOn,
        indentSize,
        iconSize,
        useIsScrolling,
        vScrollbarSize,
        width,
      } = props

      const _data = unref(data)

      const mainTableProps = {
        cache,
        class: ns.e('main'),
        columns: unref(mainColumns),
        data: _data,
        fixedData,
        estimatedRowHeight,
        bodyWidth: unref(bodyWidth),
        headerHeight,
        headerWidth: unref(headerWidth),
        height: unref(mainTableHeight),
        mainTableRef,
        rowKey,
        rowHeight,
        scrollbarAlwaysOn,
        scrollbarStartGap: 2,
        scrollbarEndGap: vScrollbarSize,
        useIsScrolling,
        width,
        getRowHeight,
        onRowsRendered,
        onScroll,
      }

      const leftColumnsWidth = unref(leftTableWidth)
      const _fixedTableHeight = unref(fixedTableHeight)

      const leftTableProps = {
        cache,
        class: ns.e('left'),
        columns: unref(fixedColumnsOnLeft),
        data: _data,
        estimatedRowHeight,
        leftTableRef,
        rowHeight,
        bodyWidth: leftColumnsWidth,
        headerWidth: leftColumnsWidth,
        headerHeight,
        height: _fixedTableHeight,
        rowKey,
        scrollbarAlwaysOn,
        scrollbarStartGap: 2,
        scrollbarEndGap: vScrollbarSize,
        useIsScrolling,
        width: leftColumnsWidth,
        getRowHeight,
        onScroll: onVerticalScroll,
      }

      const rightColumnsWidth = unref(rightTableWidth)
      const rightColumnsWidthWithScrollbar = rightColumnsWidth + vScrollbarSize

      const rightTableProps = {
        cache,
        class: ns.e('right'),
        columns: unref(fixedColumnsOnRight),
        data: _data,
        estimatedRowHeight,
        rightTableRef,
        rowHeight,
        bodyWidth: rightColumnsWidthWithScrollbar,
        headerWidth: rightColumnsWidthWithScrollbar,
        headerHeight,
        height: _fixedTableHeight,
        rowKey,
        scrollbarAlwaysOn,
        scrollbarStartGap: 2,
        scrollbarEndGap: vScrollbarSize,
        width: rightColumnsWidthWithScrollbar,
        style: `--${unref(
          ns.namespace
        )}-table-scrollbar-size: ${vScrollbarSize}px`,
        useIsScrolling,
        getRowHeight,
        onScroll: onVerticalScroll,
      }

      const tableRowProps = {
        ns,
        depthMap: unref(depthMap),
        expandColumnKey,
        expandedRowKeys: unref(expandedRowKeys),
        estimatedRowHeight,
        hasFixedColumns: unref(hasFixedColumns),
        hoveringRowKey: unref(hoveringRowKey),
        rowProps,
        rowClass,
        rowKey,
        rowEventHandlers,
        onRowHovered,
        onRowExpanded,
        onRowHeightChange,
      }

      const tableCellProps = {
        expandColumnKey,
        indentSize,
        iconSize,
        rowKey,
        columnsStyles: unref(columnsStyles),
        expandedRowKeys: unref(expandedRowKeys),
        ns,
      }

      const tableHeaderProps = {
        ns,
        headerClass,
        headerProps,
      }

      const tableHeaderCellProps = {
        ns,

        sortBy,
        sortState,
        headerCellProps,
        columnsStyles: unref(columnsStyles),
        onColumnSorted,
      }

      const tableSlots = {
        row: (props: TableGridRowSlotParams) => (
          <Row {...props} {...tableRowProps}>
            {{
              row: slots.row,
              cell: (props: TableV2RowCellRenderParam) =>
                slots.cell ? (
                  <Cell {...props} {...tableCellProps}>
                    {slots.cell}
                  </Cell>
                ) : (
                  <Cell {...props} {...tableCellProps} />
                ),
            }}
          </Row>
        ),
        header: (props: TableV2HeaderRendererParams) => (
          <Header {...props} {...tableHeaderProps}>
            {{
              header: slots.header,
              cell: (props: TableV2HeaderRowCellRendererParams) =>
                slots['header-cell'] ? (
                  <HeaderCell {...props} {...tableHeaderCellProps}>
                    {slots['header-cell']}
                  </HeaderCell>
                ) : (
                  <HeaderCell {...props} {...tableHeaderCellProps} />
                ),
            }}
          </Header>
        ),
      }

      const rootKls = [
        ns.b(),
        ns.e('root'),
        {
          [ns.is('dynamic')]: unref(isDynamic),
        },
      ]

      const footerProps = {
        class: ns.e('footer'),
        style: unref(footerHeight),
      }

      return (
        <div class={rootKls} style={unref(rootStyle)}>
          <MainTable {...mainTableProps}>{tableSlots}</MainTable>
          <LeftTable {...leftTableProps}>{tableSlots}</LeftTable>
          <RightTable {...rightTableProps}>{tableSlots}</RightTable>
          {slots.footer && (
            <Footer {...footerProps}>{{ default: slots.footer }}</Footer>
          )}
          {unref(showEmpty) && (
            <Empty class={ns.e('empty')} style={unref(emptyStyle)}>
              {{ default: slots.empty }}
            </Empty>
          )}
          {slots.overlay && (
            <Overlay class={ns.e('overlay')}>
              {{ default: slots.overlay }}
            </Overlay>
          )}
        </div>
      )
    }
  },
})

export default TableV2

export type TableV2Instance = InstanceType<typeof TableV2>
