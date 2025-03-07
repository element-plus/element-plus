// @ts-nocheck
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
import type { ScrollStrategy } from './composables/use-scrollbar'
import type {
  TableV2HeaderRendererParams,
  TableV2HeaderRowCellRendererParams,
  TableV2RowCellRenderParam,
} from './components'

const COMPONENT_NAME = 'ElTableV2'

const TableV2 = defineComponent({
  name: COMPONENT_NAME,
  props: tableV2Props,
  setup(props, { slots, expose }) {
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

      // exposes
      scrollTo,
      scrollToLeft,
      scrollToTop,
      scrollToRow,

      getRowHeight,
      onColumnSorted,
      onRowHeightChange,
      onRowHovered,
      onRowExpanded,
      onRowsRendered,
      onScroll,
      onVerticalScroll,
    } = useTable(props)

    expose({
      /**
       * @description scroll to a given position
       * @params params {{ scrollLeft?: number, scrollTop?: number }} where to scroll to.
       */
      scrollTo,
      /**
       * @description scroll to a given position horizontally
       * @params scrollLeft {Number} where to scroll to.
       */
      scrollToLeft,
      /**
       * @description scroll to a given position vertically
       * @params scrollTop { Number } where to scroll to.
       */
      scrollToTop,
      /**
       * @description scroll to a given row
       * @params row {Number} which row to scroll to
       * @params @optional strategy {ScrollStrategy} use what strategy to scroll to
       */
      scrollToRow,
    })

    provide(TableV2InjectionKey, {
      ns,
      isResetting,
      isScrolling,
    })

    return () => {
      const {
        cache,
        cellProps,
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
        bodyWidth: unref(bodyWidth) + vScrollbarSize,
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
        fixedData,
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
        fixedData,
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
      const _columnsStyles = unref(columnsStyles)

      const tableRowProps = {
        ns,
        depthMap: unref(depthMap),
        columnsStyles: _columnsStyles,
        expandColumnKey,
        expandedRowKeys: unref(expandedRowKeys),
        estimatedRowHeight,
        hasFixedColumns: unref(hasFixedColumns),
        rowProps,
        rowClass,
        rowKey,
        rowEventHandlers,
        onRowHovered,
        onRowExpanded,
        onRowHeightChange,
      }

      const tableCellProps = {
        cellProps,
        expandColumnKey,
        indentSize,
        iconSize,
        rowKey,
        expandedRowKeys: unref(expandedRowKeys),
        ns,
      }

      const tableHeaderProps = {
        ns,
        headerClass,
        headerProps,
        columnsStyles: _columnsStyles,
      }

      const tableHeaderCellProps = {
        ns,

        sortBy,
        sortState,
        headerCellProps,
        onColumnSorted,
      }

      const tableSlots = {
        row: (props: TableGridRowSlotParams) => (
          <Row {...props} {...tableRowProps}>
            {{
              row: slots.row,
              cell: (props: TableV2RowCellRenderParam) =>
                slots.cell ? (
                  <Cell
                    {...props}
                    {...tableCellProps}
                    style={_columnsStyles[props.column.key]}
                  >
                    {slots.cell(props)}
                  </Cell>
                ) : (
                  <Cell
                    {...props}
                    {...tableCellProps}
                    style={_columnsStyles[props.column.key]}
                  />
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
                  <HeaderCell
                    {...props}
                    {...tableHeaderCellProps}
                    style={_columnsStyles[props.column.key]}
                  >
                    {slots['header-cell'](props)}
                  </HeaderCell>
                ) : (
                  <HeaderCell
                    {...props}
                    {...tableHeaderCellProps}
                    style={_columnsStyles[props.column.key]}
                  />
                ),
            }}
          </Header>
        ),
      }

      const rootKls = [
        props.class,
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

export type TableV2Instance = InstanceType<typeof TableV2> & {
  /**
   * @description scroll to a given position
   * @params params {{ scrollLeft?: number, scrollTop?: number }} where to scroll to.
   */
  scrollTo: (param: { scrollLeft?: number; scrollTop?: number }) => void
  /**
   * @description scroll to a given position horizontally
   * @params scrollLeft {Number} where to scroll to.
   */
  scrollToLeft: (scrollLeft: number) => void
  /**
   * @description scroll to a given position vertically
   * @params scrollTop { Number } where to scroll to.
   */
  scrollToTop: (scrollTop: number) => void
  /**
   * @description scroll to a given row
   * @params row {Number} which row to scroll to
   * @params strategy {ScrollStrategy} use what strategy to scroll to
   */
  scrollToRow(row: number, strategy?: ScrollStrategy): void
}
