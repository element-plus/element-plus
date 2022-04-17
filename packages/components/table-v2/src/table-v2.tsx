import { computed, defineComponent, provide, unref } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { useTable } from './use-table'
import { enforceUnit } from './utils'
import { TableV2InjectionKey } from './tokens'
import { tableV2Props } from './table'
// renderers
import MainTable from './renderers/main-table'
import Row from './renderers/row'
import Cell from './renderers/cell'
import Header from './renderers/header'
import HeaderCell from './renderers/header-cell'

import type { CSSProperties } from 'vue'
import type { TableV2GridProps } from './grid'
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
      columnsTotalWidth,
      // fixedColumnsOnLeft,
      // fixedColumnOnRight,
      mainColumns,
      mainTableHeight,
      data,
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
      onColumnResized,
      onColumnResizeStart,
      onColumnResizeEnd,
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

    const rootStyle = computed<CSSProperties>(() => {
      const { style = {}, height, width } = props
      return enforceUnit({
        ...style,
        height,
        width,
      })
    })

    const headerWidth = computed(
      () => unref(bodyWidth) + (props.fixed ? unref(vScrollbarSize) : 0)
    )

    // function renderLeftTable() {
    //   const columns = unref(fixedColumnsOnLeft)
    //   if (columns.length === 0) return

    //   const { estimatedRowHeight, headerHeight, rowHeight, width } = props

    //   return <Table>{}</Table>
    // }

    // function renderRightTable() {}

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
        indentSize,
        iconSize,
        useIsScrolling,
        width,
      } = props

      const mainTableProps: TableV2GridProps = {
        cache,
        class: ns.e('main'),
        columns: unref(mainColumns),
        data: unref(data),
        fixedData,
        estimatedRowHeight,
        bodyWidth: unref(bodyWidth),
        headerHeight,
        headerWidth: unref(headerWidth),
        rowHeight,
        height: unref(mainTableHeight),
        useIsScrolling,
        width,
        onRowsRendered,
        onScroll,
      }

      const tableRowProps = {
        ns,
        depthMap: unref(depthMap),
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
        resizingKey: unref(resizingKey),
      }

      const tableHeaderCellProps = {
        ns,

        sortBy,
        sortState,
        headerCellProps,
        resizingKey: unref(resizingKey),
        columnsStyles: unref(columnsStyles),
        onColumnResizeEnd,
        onColumnResizeStart,
        onColumnResized,
        onColumnSorted,
      }

      return (
        <div class={[ns.b(), ns.e('root')]} style={unref(rootStyle)}>
          <MainTable mainTableRef={mainTableRef} {...mainTableProps}>
            {{
              row: (props: TableGridRowSlotParams) => (
                <Row {...props} {...tableRowProps}>
                  {{
                    row: slots.row,
                    cell: (props: TableV2RowCellRenderParam) => (
                      <Cell {...props} {...tableCellProps} />
                    ),
                  }}
                </Row>
              ),
              header: (props: TableV2HeaderRendererParams) => (
                <Header {...props} {...tableHeaderProps}>
                  {{
                    header: slots.header,
                    cell: (props: TableV2HeaderRowCellRendererParams) => (
                      <HeaderCell {...props} {...tableHeaderCellProps} />
                    ),
                  }}
                </Header>
              ),
            }}
          </MainTable>
        </div>
      )
    }
  },
})

export default TableV2

export type TableV2Instance = InstanceType<typeof TableV2>
