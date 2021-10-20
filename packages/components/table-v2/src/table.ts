import { computed, defineComponent, h, reactive, unref } from 'vue'
import lodashGet from 'lodash/get'
import { isUndefined } from '@element-plus/utils/util'
import { debugWarn } from '@element-plus/utils/error'
import { tableV2Props } from './props/table'
import { Alignment } from './props/column'
import { normalizeColumns, tryCall } from './utils'
import { groupColumns } from './helpers/column'
import { prefix } from './constants'

import GridTable from './components/grid-table'
import TableRow from './components/row'
import CellPlaceholder from './components/cell-placeholder.vue'
import HeaderRow from './components/header-row'
import HeaderCell from './components/header-cell'
import ExpandIcon from './components/expand-icon'
import Sorter from './components/sorter'

import type { CSSProperties, VNode } from 'vue'
import type { FixedDirection } from './props/column'
import type { MappedColumn } from './helpers/column'

const componentMap = {
  // HeaderRow,
  HeaderCell,
  Sorter,
  ExpandIcon,
  // TableRow,
}

export default defineComponent({
  props: tableV2Props,
  setup(props, { slots }) {
    const cachedDepth: Record<string, number> = {}
    const cachedStyle: Record<string, CSSProperties> = {}
    const state = reactive({
      expandedRowKeys: [],
      hoveredRowKey: null,
    })

    const normalizedColumns = computed<MappedColumn[]>(() => {
      if (slots.default) {
        return normalizeColumns(slots.default())
      }
      return props.columns || []
    })

    const groupedColumnsRef = computed(() => {
      return groupColumns(unref(normalizedColumns))
    })

    const leftColumnsRef = computed(() => unref(groupedColumnsRef).leftColumns)
    const mainColumnsRef = computed(() => unref(groupedColumnsRef).mainColumns)
    const rightColumnsRef = computed(
      () => unref(groupedColumnsRef).rightColumns
    )

    const hasFixedColumnsRef = computed(
      () =>
        unref(leftColumnsRef).length > 0 || unref(rightColumnsRef).length > 0
    )

    const expandedRowKeysRef = computed(() => {
      const { expandedRowKeys } = props
      return isUndefined(expandedRowKeys)
        ? state.expandedRowKeys
        : expandedRowKeys || []
    })

    const calcKls = (name: string) => `el-table-v2__${name}`

    const getComponent = (name: keyof typeof componentMap) => {
      return props.components?.[name] || componentMap[name]
    }

    const calcColumnStyle = (key: string | number) => {
      return cachedStyle[key]
    }

    // handlers
    function onRowExpand() {
      //
    }

    function onRowHover() {
      //
    }

    function onFixedRowHeightChange(
      rowKey: string | number,
      size: number,
      rowIndex: number,
      dir: FixedDirection
    ) {
      //
    }

    function onRegularRowHeightChange(
      rowKey: string | number,
      size: number,
      rowIndex: number
    ) {
      //
    }

    // renderers

    function renderCell({
      isScrolling,
      columns,
      column,
      columnIndex,
      data,
      rowIndex,
      expandIcon,
    }: {
      isScrolling: boolean
      columns: MappedColumn[]
      column: MappedColumn
      columnIndex: number
      data: any
      rowIndex: number
      expandIcon: VNode
    }) {
      const { rowKey } = props
      const commonKey = `row-${data[rowKey]}.column-${column.key}.`
      if (column.isPlaceholder) {
        return h(CellPlaceholder, {
          key: `${commonKey}placeholder`,
          class: calcKls(`cell-placeholder`),
          style: calcColumnStyle(column.key || ''),
        })
      }

      const { dataKey, dataGetter, cellRenderer } = column

      if (!dataGetter && !dataKey) {
        debugWarn(
          prefix,
          'You must provide either dataGetter or dataKey for retrieving data for rendering cells'
        )
        return ''
      }

      const cellData = dataGetter
        ? dataGetter({
            columns,
            column,
            columnIndex,
            data,
            rowIndex,
          })
        : lodashGet(data, dataKey!, {})

      const cellKey = `${commonKey}cell`

      const cellKls = [
        calcKls('cell'),
        tryCall(column.class, { cellData }),
        {
          'is-centered': column.align === Alignment.CENTER,
          'is-right': column.align === Alignment.RIGHT,
        },
      ]

      return h(
        'div',
        {
          class: cellKls,
          role: 'gridcell',
          key: cellKey,
          style: 'flex: 1',
        },
        `cell row ${rowIndex} column ${columnIndex}`
      )
    }

    function renderHeader({
      columns,
      headerIndex,
      style,
    }: {
      columns: MappedColumn[]
      headerIndex: number
      style: CSSProperties
    }) {
      const { headerClassName, headerRenderer, expandColumnKey } = props

      const headerClass = tryCall(headerClassName, {
        columns,
        headerIndex,
      })
      const extraProps = tryCall(props.headerProps, {
        columns,
        headerIndex,
      })

      const kls = [
        calcKls('header-row'),
        headerClass,
        {
          [calcKls('header-row--resizing')]: true, //!!this.state.resizingKey,
          [calcKls('header-row--customized')]: headerRenderer,
        },
      ]

      const headerProps = {
        ...extraProps,
        role: 'row',
        key: `header-${headerIndex}`,
        class: kls,
        style,
        columns,
        headerIndex,
        expandColumnKey,
      }

      return h(HeaderRow, headerProps, {
        cell: renderHeaderCell,
        header: headerRenderer,
      })
    }

    function renderHeaderCell({ columns, column, columnIndex, headerIndex }: {
      columns: MappedColumn[],
      column: MappedColumn,
      columnIndex: number
      headerIndex: number,
    }) {

      const commonKey = `header.${headerIndex}-cell.${column.key}.`
      if (column.isPlaceholder) {
        return h('div', {
          key: `${commonKey}placeholder`,
          class: calcKls('header-cell-placeholder'),
          style: calcColumnStyle(column.key!)
        })
      }

      const { headerClassName, headerRenderer } = column;
      const { sortBy, sortState, headerCellProps } = props;
      const TableHeaderCell = getComponent('HeaderCell');
      const SortIndicator = getComponent('Sorter');

      const cellProps = { columns, column, columnIndex, headerIndex }

      const cell = headerRenderer ? headerRenderer(cellProps) || HeaderCell
      const cell = renderElement(
        headerRenderer || <TableHeaderCell className={this._prefixClass('header-cell-text')} />,
        cellProps
      );

      let sorting, sortOrder;

      if (sortState) {
        const order = sortState[column.key];
        sorting = order === SortOrder.ASC || order === SortOrder.DESC;
        sortOrder = sorting ? order : SortOrder.ASC;
      } else {
        sorting = column.key === sortBy.key;
        sortOrder = sorting ? sortBy.order : SortOrder.ASC;
      }

      const cellCls = tryCall(headerClassName, { columns, column, columnIndex, headerIndex });
      const kls = [calcKls('header-cell'), cellCls, {
        [calcKls('header-cell--align-center')]: column.align === Alignment.CENTER,
        [calcKls('header-cell--align-right')]: column.align === Alignment.RIGHT,
        [calcKls('header-cell--sortable')]: column.sortable,
        [calcKls('header-cell--sorting')]: sorting,
        [calcKls('header-cell--resizing')]: column.key === this.state.resizingKey,
      }]
      const extraProps = callOrReturn(headerCellProps, { columns, column, columnIndex, headerIndex });
      const { tagName, ...rest } = extraProps || {};
      const Tag = tagName || 'div';
      return (
        <Tag
          role="gridcell"
          key={`header-${headerIndex}-cell-${column.key}`}
          onClick={column.sortable ? this._handleColumnSort : null}
          {...rest}
          className={cls}
          style={this.columnManager.getColumnStyle(column.key)}
          data-key={column.key}
        >
          {expandIcon}
          {cell}
          {column.sortable && (
            <SortIndicator
              sortOrder={sortOrder}
              className={cn(this._prefixClass('sort-indicator'), {
                [this._prefixClass('sort-indicator--descending')]: sortOrder === SortOrder.DESC,
              })}
            />
          )}
          {column.resizable && (
            <ColumnResizer
              className={this._prefixClass('column-resizer')}
              column={column}
              onResizeStart={this._handleColumnResizeStart}
              onResizeStop={this._handleColumnResizeStop}
              onResize={this._handleColumnResize}
            />
          )}
        </Tag>
      );
    }

    function renderExpandIcon() {
      return h('div', 'expand icon')
    }

    function rowRenderer({ isScrolling, columns, data, rowIndex, style }) {
      const {
        rowClassName,
        rowEventHandlers,
        expandColumnKey,
        estimatedRowHeight,
      } = props

      const rowRenderer = props.rowRenderer || slots.row

      const rowClass = tryCall(rowClassName, {
        columns,
        data,
        rowIndex,
      })
      const extraProps = tryCall(props.rowProps, {
        columns,
        data,
        rowIndex,
      })

      const rowKey: string = data[props.rowKey]
      const depth = cachedDepth[rowKey] || 0
      const hasExpandColumnKey = !!expandColumnKey

      const kls = [
        calcKls('row'),
        {
          [calcKls('row--depth-${depth}')]: hasExpandColumnKey && rowIndex >= 0,
          [calcKls('row--expanded')]:
            hasExpandColumnKey && unref(expandedRowKeysRef).includes(rowKey),
          [calcKls('row--hovered')]:
            !isScrolling && state.hoveredRowKey === rowKey,
          [calcKls('row--fixed')]: depth === 0 && rowIndex < 0,
          [calcKls('row--customized')]: !!rowRenderer,
        },
        rowClass,
      ]

      const hasFixedColumns = unref(hasFixedColumnsRef)

      const rowProps = {
        ...extraProps,
        role: 'row',
        key: `row-${rowKey}`,
        isScrolling,
        class: kls,
        style,
        columns,
        rowIndex,
        data,
        rowKey,
        expandColumnKey,
        depth,
        rowEventHandlers,
        rowRenderer,
        // for frozen rows we use fixed rowHeight
        estimatedRowHeight: rowIndex >= 0 ? estimatedRowHeight : undefined,
        // getIsResetting: this._getIsResetting,
        onRowExpand,
        // for fixed table, we need to sync the hover state across the inner tables
        onRowHover: hasFixedColumns ? onRowHover : null,
        onRowHeightChange: hasFixedColumns
          ? onFixedRowHeightChange
          : onRegularRowHeightChange,
      }

      return h(TableRow, rowProps, {
        cell: renderCell,
        expandIcon: renderExpandIcon,
      })
    }

    function renderCentralTable() {
      const mainColumns = unref(mainColumnsRef)
      const { width, height, rowHeight, data } = props
      return h(
        GridTable,
        {
          data,
          columns: mainColumns,
          columnWidth: width,
          totalColumn: props.columns?.length || 0,
          totalRow: 100,
          height,
          width,
          rowHeight,
        },
        {
          default: rowRenderer,
        }
      )
    }

    function renderFixedLeft() {
      return 'Fixed left'
    }

    function renderFixedRight() {
      return 'Fixed right'
    }

    function renderFooter() {
      return 'Footer'
    }

    function renderTable() {
      // put stuff inside
      return h('div', {}, [
        renderCentralTable(),
        // renderFixedLeft(),
        // renderFixedRight(),
        // renderFooter(),
      ])
    }

    return renderTable
  },
})
