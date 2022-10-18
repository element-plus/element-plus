import { computed, ref, shallowRef, toRef, unref, watch } from 'vue'
import { isArray } from '@element-plus/utils'
import {
  useColumns,
  useData,
  useRow,
  useScrollbar,
  useStyles,
} from './composables'

import type { TableV2Props } from './table'
import type { TableGridInstance } from './table-grid'

function useTable(props: TableV2Props) {
  const mainTableRef = ref<TableGridInstance>()
  const leftTableRef = ref<TableGridInstance>()
  const rightTableRef = ref<TableGridInstance>()
  const {
    columns,
    columnsStyles,
    columnsTotalWidth,
    fixedColumnsOnLeft,
    fixedColumnsOnRight,
    hasFixedColumns,
    mainColumns,

    onColumnSorted,
  } = useColumns(props, toRef(props, 'columns'), toRef(props, 'fixed'))

  const {
    scrollTo,
    scrollToLeft,
    scrollToTop,
    scrollToRow,
    onScroll,
    onVerticalScroll,
    scrollPos,
  } = useScrollbar(props, {
    mainTableRef,
    leftTableRef,
    rightTableRef,

    onMaybeEndReached,
  })

  const {
    expandedRowKeys,
    hoveringRowKey,
    lastRenderedRowIndex,
    isDynamic,
    isResetting,
    rowHeights,

    resetAfterIndex,
    onRowExpanded,
    onRowHeightChange,
    onRowHovered,
    onRowsRendered,
  } = useRow(props, {
    mainTableRef,
    leftTableRef,
    rightTableRef,

    onMaybeEndReached,
  })

  const { data, depthMap } = useData(props, {
    expandedRowKeys,
    lastRenderedRowIndex,
    resetAfterIndex,
  })

  const {
    bodyWidth,
    fixedTableHeight,
    mainTableHeight,
    leftTableWidth,
    rightTableWidth,
    headerWidth,
    rowsHeight,
    windowHeight,
    footerHeight,
    emptyStyle,
    rootStyle,
    headerHeight,
  } = useStyles(props, {
    columnsTotalWidth,
    data,
    fixedColumnsOnLeft,
    fixedColumnsOnRight,
  })
  // state
  const isScrolling = shallowRef(false)

  // DOM/Component refs
  const containerRef = ref()

  const showEmpty = computed(() => {
    const noData = unref(data).length === 0

    return isArray(props.fixedData)
      ? props.fixedData.length === 0 && noData
      : noData
  })

  function getRowHeight(rowIndex: number) {
    const { estimatedRowHeight, rowHeight, rowKey } = props

    if (!estimatedRowHeight) return rowHeight

    return (
      unref(rowHeights)[unref(data)[rowIndex][rowKey]] || estimatedRowHeight
    )
  }

  function onMaybeEndReached() {
    const { onEndReached } = props
    if (!onEndReached) return

    const { scrollTop } = unref(scrollPos)

    const _totalHeight = unref(rowsHeight)
    const clientHeight = unref(windowHeight)

    const heightUntilEnd =
      _totalHeight - (scrollTop + clientHeight) + props.hScrollbarSize

    if (
      unref(lastRenderedRowIndex) >= 0 &&
      _totalHeight === scrollTop + unref(mainTableHeight) - unref(headerHeight)
    ) {
      onEndReached(heightUntilEnd)
    }
  }

  // events

  watch(
    () => props.expandedRowKeys,
    (val) => (expandedRowKeys.value = val),
    {
      deep: true,
    }
  )

  return {
    // models
    columns,
    containerRef,
    mainTableRef,
    leftTableRef,
    rightTableRef,
    // states
    isDynamic,
    isResetting,
    isScrolling,
    hoveringRowKey,
    hasFixedColumns,
    // records
    columnsStyles,
    columnsTotalWidth,
    data,
    expandedRowKeys,
    depthMap,
    fixedColumnsOnLeft,
    fixedColumnsOnRight,
    mainColumns,
    // metadata
    bodyWidth,
    emptyStyle,
    rootStyle,
    headerWidth,
    footerHeight,
    mainTableHeight,
    fixedTableHeight,
    leftTableWidth,
    rightTableWidth,
    // flags
    showEmpty,

    // methods
    getRowHeight,

    // event handlers
    onColumnSorted,
    onRowHovered,
    onRowExpanded,
    onRowsRendered,
    onRowHeightChange,
    // use scrollbars
    scrollTo,
    scrollToLeft,
    scrollToTop,
    scrollToRow,
    onScroll,
    onVerticalScroll,
  }
}

export { useTable }

export type UseTableReturn = ReturnType<typeof useTable>
