import { computed, defineComponent, h, reactive, unref } from 'vue'
import { isUndefined } from '@element-plus/utils/util'
import GridTable from './components/grid-table'
import TableRow from './components/row'
import CellPlaceholder from './components/cell-placeholder.vue'
import { tableV2Props } from './props/table'
import { normalizeColumns, tryCall } from './utils'
import { groupColumns } from './helpers/column'

import type { CSSProperties, VNode } from 'vue'
import type { FixedDirection } from './props/column'
import type { MappedColumn } from './helpers/column'

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
      rowData,
      rowIndex,
      expandIcon,
    }: {
      isScrolling: boolean
      columns: MappedColumn[]
      column: MappedColumn
      columnIndex: number
      rowData: any
      rowIndex: number
      expandIcon: VNode
    }) {
      const { rowKey } = props
      if (column.isPlaceholder) {
        return h(CellPlaceholder, {
          key: `row-${rowKey}.${column.key}.placeholder`,
          class: calcKls(`cell-placeholder`),
          style: calcColumnStyle(column.key || ''),
        })
      }

      const { dataKey, dataGetter, cellRenderer } = column
      return h('div', 'cell')
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
