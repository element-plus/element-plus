import {
  computed,
  getCurrentInstance,
  ref,
  shallowRef,
  toRef,
  unref,
  watch,
} from 'vue'
import { isNumber, isObject, isUndefined } from '@element-plus/utils'
import { sum } from './utils'
import { useColumns } from './use-columns'
import { SortOrder, oppositeOrderMap } from './constants'

import type { CSSProperties } from 'vue'
import type { FixedDirection, KeyType } from './types'
import type { TableV2Props } from './table'
import type { onRowRenderedParams } from './grid'
import type { RowExpandParams, RowHoverParams } from './row'
// component
import type { TableGridInstance } from './table-grid'

type Nullable<T> = T | null
type ScrollPos = { scrollLeft: number; scrollTop: number }
type Heights = Record<KeyType, CSSProperties['height']>

function useTable(props: TableV2Props) {
  const emit = getCurrentInstance()!.emit

  const {
    columns,
    columnsStyles,
    columnsTotalWidth,
    fixedColumnsOnLeft,
    fixedColumnOnRight,
    hasFixedColumns,
    mainColumns,
    getColumn,
    updateColumnWidth,
  } = useColumns(toRef(props, 'columns'), toRef(props, 'fixed'))
  // state
  const expandedRowKeys = ref<KeyType[]>(props.defaultExpandedRowKeys || [])
  const depthMap = ref<Record<KeyType, number>>({})
  const hoveringRowKey = shallowRef<Nullable<KeyType>>(null)
  const resizingKey = shallowRef<Nullable<KeyType>>(null)
  const resizingWidth = shallowRef(0)
  const resetIndex = shallowRef<Nullable<number>>(null)
  const isResetting = shallowRef(false)
  const isScrolling = shallowRef(false)

  // DOM/Component refs
  const containerRef = ref()
  const mainTableRef = ref<TableGridInstance>()
  const leftTableRef = ref<TableGridInstance>()
  const rightTableRef = ref<TableGridInstance>()

  const scrollPos = ref<ScrollPos>({ scrollLeft: 0, scrollTop: 0 })
  const lastRenderedRowIndex = ref(-1)
  const rowHeights = shallowRef<Heights>({})
  const leftTableHeights = shallowRef<Heights>({})
  const mainTableHeights = shallowRef<Heights>({})
  const rightTableHeights = shallowRef<Heights>({})
  const hScrollbarSize = shallowRef(0)
  const vScrollbarSize = shallowRef(0)

  const rowsHeight = computed(() => {
    const { rowHeight, estimatedRowHeight } = props
    const _data = unref(data)
    if (isNumber(estimatedRowHeight)) {
      return _data.length * estimatedRowHeight
    }

    return _data.length * rowHeight
  })

  const flattenedData = computed(() => {
    const depths = {}
    const { data, rowKey } = props

    const _expandedRowKeys = unref(expandedRowKeys)

    if (!_expandedRowKeys || !_expandedRowKeys.length) return data

    const array: any[] = []
    const keysSet = new Set()
    _expandedRowKeys.forEach((x) => keysSet.add(x))

    let copy: any[] = data.slice()
    copy.forEach((x) => (depths[x[rowKey]] = 0))
    while (copy.length > 0) {
      const item = copy.shift()!

      array.push(item)
      if (
        keysSet.has(item[rowKey]) &&
        Array.isArray(item.children) &&
        item.children.length > 0
      ) {
        copy = [...item.children, ...copy]
        item.children.forEach(
          (child: any) => (depths[child[rowKey]] = depths[item[rowKey]] + 1)
        )
      }
    }

    depthMap.value = depths
    return array
  })

  const data = computed(() => {
    const { data, expandColumnKey } = props
    return expandColumnKey ? unref(flattenedData) : data
  })

  const mainTableHeight = computed(() => {
    const { height = 0, maxHeight = 0, footerHeight } = props

    if (maxHeight > 0) {
      const _fixedRowsHeight = unref(fixedRowsHeight)
      const _rowsHeight = unref(rowsHeight)
      const _headerHeight = unref(headerHeight)
      const total =
        _headerHeight + _fixedRowsHeight + _rowsHeight + unref(hScrollbarSize)

      return Math.min(total, maxHeight - footerHeight)
    }

    return height - footerHeight
  })

  const fixedTableHeight = computed(() => {
    const tableHeight =
      unref(mainTableHeight) -
      (unref(data).length > 0 ? unref(hScrollbarSize) : 0)
    if (isNumber(props.maxHeight) && props.maxHeight > 0) return tableHeight

    const totalHeight =
      unref(rowsHeight) + unref(headerHeight) + unref(fixedRowsHeight)

    return Math.min(tableHeight, totalHeight)
  })

  const leftTableWidth = computed(() =>
    sum(unref(fixedColumnsOnLeft).map((column) => column.width))
  )

  const headerHeight = computed(() => sum(props.headerHeight))

  const fixedRowsHeight = computed(() => {
    return (props.fixedData?.length || 0) * props.rowHeight
  })

  const windowHeight = computed(() => {
    return unref(mainTableHeight) - unref(headerHeight) - unref(fixedRowsHeight)
  })

  function doScroll(params: ScrollPos) {
    const { scrollTop } = params

    mainTableRef.value?.scrollTo(params)
    leftTableRef.value?.scrollToTop(scrollTop)
    rightTableRef.value?.scrollToTop(scrollTop)
  }

  // methods
  function scrollTo(params: ScrollPos) {
    scrollPos.value = params

    doScroll(params)
  }

  function scrollToTop(scrollTop: number) {
    scrollPos.value.scrollTop = scrollTop

    doScroll(unref(scrollPos))
  }

  function scrollToLeft(scrollLeft: number) {
    scrollPos.value.scrollLeft = scrollLeft

    mainTableRef.value?.scrollTo?.(unref(scrollPos))
  }

  function onMaybeEndReached() {
    const { onEndReached } = props
    if (!onEndReached) return

    const { scrollTop } = unref(scrollPos)

    const _totalHeight = unref(rowsHeight)
    const clientHeight = unref(windowHeight)

    const heightUntilEnd =
      _totalHeight - (scrollTop + clientHeight) + unref(hScrollbarSize)

    if (
      unref(lastRenderedRowIndex) >= 0 &&
      _totalHeight !== unref(rowsHeight)
    ) {
      onEndReached(heightUntilEnd)
    }
  }

  function updateRows() {
    isResetting.value = true
    resetAfterIndex(unref(resetIndex)!, false)
    // force update
    resetIndex.value = null
    isResetting.value = false
  }

  function resetAfterIndex(index: number, forceUpdate = false) {
    if (isUndefined(props.estimatedRowHeight)) return
    ;[mainTableRef, leftTableRef, rightTableRef].forEach((tableRef) => {
      const table = unref(tableRef)
      if (table) table.resetAfterRowIndex(index, forceUpdate)
    })
  }
  // events

  function onScroll(params: ScrollPos) {
    scrollTo(params)
    props.onScroll?.(params)
  }

  function onVerticalScroll({ scrollTop }: ScrollPos) {
    const { scrollTop: currentScrollTop } = unref(scrollPos)
    if (scrollTop !== currentScrollTop) scrollToTop(scrollTop)
  }

  function onRowsRendered(params: onRowRenderedParams) {
    props.onRowRendered?.(params)

    if (params.rowCacheEnd > unref(lastRenderedRowIndex)) {
      lastRenderedRowIndex.value = params.rowCacheEnd
    }
  }

  function onRowHovered({ hovered, rowKey }: RowHoverParams<any>) {
    if (hovered) hoveringRowKey.value = rowKey
  }

  function onRowExpanded({
    expanded,
    rowData,
    rowIndex,
    rowKey,
  }: RowExpandParams<any>) {
    const _expandedRowKeys = [...unref(expandedRowKeys)]
    const currentKeyIndex = _expandedRowKeys.indexOf(rowKey)
    if (expanded) {
      if (currentKeyIndex === -1) _expandedRowKeys.push(rowKey)
    } else {
      if (currentKeyIndex > -1) _expandedRowKeys.splice(currentKeyIndex, 1)
    }
    expandedRowKeys.value = _expandedRowKeys

    emit('update:expandedRowKeys', _expandedRowKeys)
    props.onRowExpand?.({
      expanded,
      rowData,
      rowIndex,
      rowKey,
    })
    // If this is not controlled, then use this to notify changes
    props.onExpandedRowsChange?.(_expandedRowKeys)
  }

  function onColumnResized(
    { key }: TableV2Props['columns'][number],
    width: number
  ) {
    resizingWidth.value = width
    const column = getColumn(key)!

    updateColumnWidth(column, width)
    props.onColumnResize?.(column, width)
  }

  function onColumnResizeStart({ key }: TableV2Props['columns'][number]) {
    resizingKey.value = key
  }

  function onColumnResizeEnd() {
    const _resizingKey = unref(resizingKey)
    const _resizingWidth = unref(resizingWidth)

    resizingKey.value = null
    resizingWidth.value = 0

    if (!_resizingKey || !_resizingWidth) return

    props.onColumnResizeEnded?.(getColumn(_resizingKey)!, _resizingWidth)
  }

  function onColumnSorted(key: KeyType) {
    const { sortState, sortBy } = props

    let order = SortOrder.ASC

    if (isObject(sortState)) {
      order = oppositeOrderMap[sortState[key]]
    } else {
      order = oppositeOrderMap[sortBy.order]
    }

    props.onColumnSort?.({ column: getColumn(key)!, key, order })
  }

  function onRowHeightChanged(rowKey: KeyType, height: number, rowIdx: number) {
    const resetIdx = unref(resetIndex)
    if (resetIdx === null) {
      resetIndex.value = rowIdx
    } else {
      if (resetIdx > rowIdx) {
        resetIndex.value = rowIdx
      }
    }

    rowHeights.value[rowKey] = height
  }

  function onFixedRowHeightChanged(
    {
      rowKey,
      height,
      rowIndex,
    }: {
      rowKey: KeyType
      height: number
      rowIndex: number
    },
    fixedDir: FixedDirection
  ) {
    if (!fixedDir) {
      mainTableHeights.value[rowKey] = height
    } else {
      if (fixedDir === 'right') {
        rightTableHeights.value[rowKey] = height
      } else {
        leftTableHeights.value[rowKey] = height
      }
    }

    const _rowHeights = unref(rowHeights)
    if (_rowHeights[rowKey] !== height) {
      onRowHeightChanged(rowKey, height, rowIndex)
    }
  }

  // When scrollTop changes, maybe reaching the bottom
  watch(
    () => unref(scrollPos).scrollTop,
    (cur, prev) => {
      if (cur > prev) onMaybeEndReached()
    }
  )

  // when rendered row changes, maybe reaching the bottom
  watch(lastRenderedRowIndex, () => onMaybeEndReached())

  watch(
    () => props.expandedRowKeys,
    (val) => (expandedRowKeys.value = val),
    {
      deep: true,
    }
  )

  watch(rowHeights, () => {
    updateRows()
  })

  return {
    // models
    columns,
    containerRef,
    mainTableRef,
    leftTableRef,
    rightTableRef,
    // states
    isResetting,
    isScrolling,
    hoveringRowKey,
    hasFixedColumns,
    hScrollbarSize,
    resizingKey,
    vScrollbarSize,
    // records
    columnsStyles,
    columnsTotalWidth,
    data,
    expandedRowKeys,
    depthMap,
    fixedColumnsOnLeft,
    fixedColumnOnRight,
    mainColumns,
    // metadata
    mainTableHeight,
    fixedTableHeight,
    leftTableWidth,

    // methods
    scrollTo,
    scrollToLeft,
    scrollToTop,

    // event handlers
    onColumnSorted,
    onColumnResized,
    onColumnResizeStart,
    onColumnResizeEnd,
    onRowHovered,
    onRowExpanded,
    onRowsRendered,
    onRowHeightChanged,
    onFixedRowHeightChanged,
    onScroll,
    onVerticalScroll,
  }
}

export { useTable }

export type UseTableReturn = ReturnType<typeof useTable>
