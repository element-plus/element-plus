import {
  computed,
  getCurrentInstance,
  ref,
  shallowRef,
  toRef,
  unref,
  watch,
} from 'vue'
import { debounce } from 'lodash-unified'
import { isNumber, isObject } from '@element-plus/utils'
import { enforceUnit, sum } from './utils'
import { useColumns } from './use-columns'
import { FixedDir, SortOrder, oppositeOrderMap } from './constants'

import type { CSSProperties } from 'vue'
import type { FixedDirection, KeyType } from './types'
import type { TableV2Props } from './table'
import type { onRowRenderedParams } from './grid'
import type {
  RowExpandParams,
  RowHeightChangedParams,
  RowHoverParams,
} from './row'
// component
import type { TableGridInstance } from './table-grid'

type Nullable<T> = T | null
type ScrollPos = { scrollLeft: number; scrollTop: number }
type Heights = Record<KeyType, number>

function useTable(props: TableV2Props) {
  const vm = getCurrentInstance()!
  const { emit } = vm

  const {
    columns,
    columnsStyles,
    columnsTotalWidth,
    fixedColumnsOnLeft,
    fixedColumnOnRight,
    hasFixedColumns,
    mainColumns,
    getColumn,
  } = useColumns(toRef(props, 'columns'), toRef(props, 'fixed'))
  // state
  const expandedRowKeys = ref<KeyType[]>(props.defaultExpandedRowKeys || [])
  const depthMap = ref<Record<KeyType, number>>({})
  const hoveringRowKey = shallowRef<Nullable<KeyType>>(null)
  // const resizingKey = shallowRef<Nullable<KeyType>>(null)
  // const resizingWidth = shallowRef(0)
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
  const rowHeights = ref<Heights>({})
  const pendingRowHeights = ref<Heights>({})
  const leftTableHeights = shallowRef<Heights>({})
  const mainTableHeights = shallowRef<Heights>({})
  const rightTableHeights = shallowRef<Heights>({})

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

  const isDynamic = computed(() => isNumber(props.estimatedRowHeight))

  const bodyWidth = computed(() => {
    const { fixed, width, vScrollbarSize } = props
    const ret = width - vScrollbarSize
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
    () => unref(bodyWidth) + (props.fixed ? props.vScrollbarSize : 0)
  )

  const mainTableHeight = computed(() => {
    const { height = 0, maxHeight = 0, footerHeight, hScrollbarSize } = props

    if (maxHeight > 0) {
      const _fixedRowsHeight = unref(fixedRowsHeight)
      const _rowsHeight = unref(rowsHeight)
      const _headerHeight = unref(headerHeight)
      const total =
        _headerHeight + _fixedRowsHeight + _rowsHeight + hScrollbarSize

      return Math.min(total, maxHeight - footerHeight)
    }

    return height - footerHeight
  })

  const fixedTableHeight = computed(() => {
    const { maxHeight } = props
    const tableHeight = unref(mainTableHeight)
    if (isNumber(maxHeight) && maxHeight > 0) return tableHeight

    const totalHeight =
      unref(rowsHeight) + unref(headerHeight) + unref(fixedRowsHeight)

    return Math.min(tableHeight, totalHeight)
  })

  const mapColumn = (column: TableV2Props['columns'][number]) => column.width

  const leftTableWidth = computed(() =>
    sum(unref(fixedColumnsOnLeft).map(mapColumn))
  )

  const rightTableWidth = computed(() =>
    sum(unref(fixedColumnOnRight).map(mapColumn))
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
      _totalHeight - (scrollTop + clientHeight) + props.hScrollbarSize

    if (
      unref(lastRenderedRowIndex) >= 0 &&
      _totalHeight !== unref(rowsHeight)
    ) {
      onEndReached(heightUntilEnd)
    }
  }

  function getRowHeight(rowIndex: number) {
    const { estimatedRowHeight, rowHeight, rowKey } = props

    if (!estimatedRowHeight) return rowHeight

    return (
      unref(rowHeights)[unref(data)[rowIndex][rowKey]] || estimatedRowHeight
    )
  }

  const flushingRowHeights = debounce(() => {
    // console.log('update')
    isResetting.value = true
    // console.log(JSON.stringify(unref(pendingRowHeights)))
    rowHeights.value = { ...unref(rowHeights), ...unref(pendingRowHeights) }
    resetAfterIndex(unref(resetIndex)!, false)
    pendingRowHeights.value = {}
    // force update
    resetIndex.value = null
    mainTableRef.value?.forceUpdate()
    leftTableRef.value?.forceUpdate()
    rightTableRef.value?.forceUpdate()
    vm.proxy?.$forceUpdate()
    isResetting.value = false
  }, 0)

  function resetAfterIndex(index: number, forceUpdate = false) {
    if (!unref(isDynamic)) return
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
    hoveringRowKey.value = hovered ? rowKey : null
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

  function onColumnSorted(e: MouseEvent) {
    const { key } = (e.currentTarget as HTMLElement).dataset
    if (!key) return
    const { sortState, sortBy } = props

    let order = SortOrder.ASC

    if (isObject(sortState)) {
      order = oppositeOrderMap[sortState[key]]
    } else {
      order = oppositeOrderMap[sortBy.order]
    }

    props.onColumnSort?.({ column: getColumn(key)!, key, order })
  }

  function resetHeights(rowKey: KeyType, height: number, rowIdx: number) {
    const resetIdx = unref(resetIndex)
    if (resetIdx === null) {
      resetIndex.value = rowIdx
    } else {
      if (resetIdx > rowIdx) {
        resetIndex.value = rowIdx
      }
    }

    pendingRowHeights.value[rowKey] = height
  }

  function onRowHeightChange(
    { rowKey, height, rowIndex }: RowHeightChangedParams,
    fixedDir: FixedDirection
  ) {
    if (!fixedDir) {
      mainTableHeights.value[rowKey] = height
    } else {
      if (fixedDir === FixedDir.RIGHT) {
        rightTableHeights.value[rowKey] = height
      } else {
        leftTableHeights.value[rowKey] = height
      }
    }

    const maximumHeight = Math.max(
      ...[leftTableHeights, rightTableHeights, mainTableHeights].map(
        (records) => records.value[rowKey] || 0
      )
    )

    if (unref(rowHeights)[rowKey] !== maximumHeight) {
      resetHeights(rowKey, maximumHeight, rowIndex)
      flushingRowHeights()
    }
  }

  // When scrollTop changes, maybe reaching the bottom
  watch(
    () => unref(scrollPos).scrollTop,
    (cur, prev) => {
      if (cur > prev) onMaybeEndReached()
    }
  )

  watch(data, (val, prev) => {
    if (val !== prev) {
      lastRenderedRowIndex.value = -1
      resetAfterIndex(0, true)
    }
  })

  // when rendered row changes, maybe reaching the bottom
  watch(lastRenderedRowIndex, () => onMaybeEndReached())

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
    fixedColumnOnRight,
    mainColumns,
    // metadata
    bodyWidth,
    rootStyle,
    headerWidth,
    mainTableHeight,
    fixedTableHeight,
    leftTableWidth,
    rightTableWidth,

    // methods
    getRowHeight,
    scrollTo,
    scrollToLeft,
    scrollToTop,

    // event handlers
    onColumnSorted,
    onRowHovered,
    onRowExpanded,
    onRowsRendered,
    onRowHeightChange,
    onScroll,
    onVerticalScroll,
  }
}

export { useTable }

export type UseTableReturn = ReturnType<typeof useTable>
