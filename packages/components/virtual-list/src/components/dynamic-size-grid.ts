// @ts-nocheck
import { isFunction } from '@vue/shared'
import { isNumber, isUndefined, throwError } from '@element-plus/utils'
import createGrid from '../builders/build-grid'

import {
  AUTO_ALIGNMENT,
  CENTERED_ALIGNMENT,
  DEFAULT_DYNAMIC_LIST_ITEM_SIZE,
  END_ALIGNMENT,
  SMART_ALIGNMENT,
  START_ALIGNMENT,
} from '../defaults'
import type { GridInstance } from '../builders/build-grid'
import type { VirtualizedGridProps } from '../props'

import type { Alignment, GridCache, ItemSize, ListItem } from '../types'

const { max, min, floor } = Math
const SCOPE = 'ElDynamicSizeGrid'

type Props = VirtualizedGridProps
type CacheItemType = 'column' | 'row'
type Indices = {
  columnIndex?: number
  rowIndex?: number
}

// generates props access key via type
const ACCESS_SIZER_KEY_MAP = {
  column: 'columnWidth',
  row: 'rowHeight',
}

// generates cache access key via type
const ACCESS_LAST_VISITED_KEY_MAP = {
  column: 'lastVisitedColumnIndex',
  row: 'lastVisitedRowIndex',
}

const getItemFromCache = (
  props: Props,
  index: number,
  gridCache: GridCache,
  type: CacheItemType
) => {
  const [cachedItems, sizer, lastVisited] = [
    gridCache[type],
    props[ACCESS_SIZER_KEY_MAP[type]],
    gridCache[ACCESS_LAST_VISITED_KEY_MAP[type]],
  ] as [Record<string, ListItem>, ItemSize, number]

  if (index > lastVisited) {
    let offset = 0
    if (lastVisited >= 0) {
      const item = cachedItems[lastVisited]
      offset = item.offset + item.size
    }

    for (let i = lastVisited + 1; i <= index; i++) {
      // console.log(i, sizer(i))
      const size = sizer(i)

      cachedItems[i] = {
        offset,
        size,
      }

      offset += size
    }

    gridCache[ACCESS_LAST_VISITED_KEY_MAP[type]] = index
  }

  return cachedItems[index]
}

const bs = (
  props: Props,
  gridCache: GridCache,
  low: number,
  high: number,
  offset: number,
  type: CacheItemType
) => {
  while (low <= high) {
    const mid = low + floor((high - low) / 2)
    const currentOffset = getItemFromCache(props, mid, gridCache, type).offset

    if (currentOffset === offset) {
      return mid
    } else if (currentOffset < offset) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return max(0, low - 1)
}

const es = (
  props: Props,
  gridCache: GridCache,
  idx: number,
  offset: number,
  type: CacheItemType
) => {
  const total = type === 'column' ? props.totalColumn : props.totalRow
  let exponent = 1

  while (
    idx < total &&
    getItemFromCache(props, idx, gridCache, type).offset < offset
  ) {
    idx += exponent
    exponent *= 2
  }

  return bs(props, gridCache, floor(idx / 2), min(idx, total - 1), offset, type)
}

const findItem = (
  props: Props,
  gridCache: GridCache,
  offset: number,
  type: CacheItemType
) => {
  const [cache, lastVisitedIndex] = [
    gridCache[type],
    gridCache[ACCESS_LAST_VISITED_KEY_MAP[type]],
  ] as [Record<string, ListItem>, number]

  const lastVisitedItemOffset =
    lastVisitedIndex > 0 ? cache[lastVisitedIndex].offset : 0

  if (lastVisitedItemOffset >= offset) {
    return bs(props, gridCache, 0, lastVisitedIndex, offset, type)
  }

  return es(props, gridCache, max(0, lastVisitedIndex), offset, type)
}

const getEstimatedTotalHeight = (
  { totalRow }: Props,
  { estimatedRowHeight, lastVisitedRowIndex, row }: GridCache
) => {
  let sizeOfVisitedRows = 0

  if (lastVisitedRowIndex >= totalRow) {
    lastVisitedRowIndex = totalRow - 1
  }

  if (lastVisitedRowIndex >= 0) {
    const item = row[lastVisitedRowIndex]
    sizeOfVisitedRows = item.offset + item.size
  }

  const unvisitedItems = totalRow - lastVisitedRowIndex - 1
  const sizeOfUnvisitedItems = unvisitedItems * estimatedRowHeight

  return sizeOfVisitedRows + sizeOfUnvisitedItems
}
const getEstimatedTotalWidth = (
  { totalColumn }: Props,
  { column, estimatedColumnWidth, lastVisitedColumnIndex }: GridCache
) => {
  let sizeOfVisitedColumns = 0

  if (lastVisitedColumnIndex > totalColumn) {
    lastVisitedColumnIndex = totalColumn - 1
  }

  if (lastVisitedColumnIndex >= 0) {
    const item = column[lastVisitedColumnIndex]
    sizeOfVisitedColumns = item.offset + item.size
  }

  const unvisitedItems = totalColumn - lastVisitedColumnIndex - 1
  const sizeOfUnvisitedItems = unvisitedItems * estimatedColumnWidth

  return sizeOfVisitedColumns + sizeOfUnvisitedItems
}

const ACCESS_ESTIMATED_SIZE_KEY_MAP = {
  column: getEstimatedTotalWidth,
  row: getEstimatedTotalHeight,
}

const getOffset = (
  props: Props,
  index: number,
  alignment: Alignment,
  scrollOffset: number,
  cache: GridCache,
  type: CacheItemType,
  scrollBarWidth: number
) => {
  const [size, estimatedSizeAssociates] = [
    type === 'row' ? props.height : props.width,
    ACCESS_ESTIMATED_SIZE_KEY_MAP[type],
  ] as [number, (props: Props, cache: GridCache) => number]
  const item = getItemFromCache(props, index, cache, type)

  const estimatedSize = estimatedSizeAssociates(props, cache)

  const maxOffset = max(0, min(estimatedSize - size, item.offset))
  const minOffset = max(0, item.offset - size + scrollBarWidth + item.size)

  if (alignment === SMART_ALIGNMENT) {
    if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
      alignment = AUTO_ALIGNMENT
    } else {
      alignment = CENTERED_ALIGNMENT
    }
  }

  switch (alignment) {
    case START_ALIGNMENT: {
      return maxOffset
    }
    case END_ALIGNMENT: {
      return minOffset
    }
    case CENTERED_ALIGNMENT: {
      return Math.round(minOffset + (maxOffset - minOffset) / 2)
    }
    case AUTO_ALIGNMENT:
    default: {
      if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
        return scrollOffset
      } else if (minOffset > maxOffset) {
        return minOffset
      } else if (scrollOffset < minOffset) {
        return minOffset
      } else {
        return maxOffset
      }
    }
  }
}

const DynamicSizeGrid = createGrid({
  name: 'ElDynamicSizeGrid',
  getColumnPosition: (props, idx, cache) => {
    const item = getItemFromCache(props, idx, cache, 'column')
    return [item.size, item.offset]
  },

  getRowPosition: (props, idx, cache) => {
    const item = getItemFromCache(props, idx, cache, 'row')
    return [item.size, item.offset]
  },

  getColumnOffset: (
    props,
    columnIndex,
    alignment,
    scrollLeft,
    cache,
    scrollBarWidth
  ) =>
    getOffset(
      props,
      columnIndex,
      alignment,
      scrollLeft,
      cache,
      'column',
      scrollBarWidth
    ),

  getRowOffset: (
    props,
    rowIndex,
    alignment,
    scrollTop,
    cache,
    scrollBarWidth: number
  ) =>
    getOffset(
      props,
      rowIndex,
      alignment,
      scrollTop,
      cache,
      'row',
      scrollBarWidth
    ),

  getColumnStartIndexForOffset: (props, scrollLeft, cache) =>
    findItem(props, cache, scrollLeft, 'column'),

  getColumnStopIndexForStartIndex: (props, startIndex, scrollLeft, cache) => {
    const item = getItemFromCache(props, startIndex, cache, 'column')

    const maxOffset = scrollLeft + (props.width as number)

    let offset = item.offset + item.size
    let stopIndex = startIndex
    while (stopIndex < props.totalColumn - 1 && offset < maxOffset) {
      stopIndex++
      offset += getItemFromCache(props, startIndex, cache, 'column').size
    }
    return stopIndex
  },

  getEstimatedTotalHeight,
  getEstimatedTotalWidth,

  getRowStartIndexForOffset: (props, scrollTop, cache) =>
    findItem(props, cache, scrollTop, 'row'),

  getRowStopIndexForStartIndex: (props, startIndex, scrollTop, cache) => {
    const { totalRow, height } = props
    const item = getItemFromCache(props, startIndex, cache, 'row')
    const maxOffset = scrollTop + (height as number)

    let offset = item.size + item.offset
    let stopIndex = startIndex

    while (stopIndex < totalRow - 1 && offset < maxOffset) {
      stopIndex++
      offset += getItemFromCache(props, stopIndex, cache, 'row').size
    }

    return stopIndex
  },
  injectToInstance: (instance, cache) => {
    const resetAfter = (
      { columnIndex, rowIndex }: Indices,
      forceUpdate?: boolean
    ) => {
      forceUpdate = isUndefined(forceUpdate) ? true : forceUpdate

      if (isNumber(columnIndex)) {
        cache.value.lastVisitedColumnIndex = Math.min(
          cache.value.lastVisitedColumnIndex,
          columnIndex - 1
        )
      }

      if (isNumber(rowIndex)) {
        // console.log(rowIndex)
        cache.value.lastVisitedRowIndex = Math.min(
          cache.value.lastVisitedRowIndex,
          rowIndex - 1
        )
      }

      instance.exposed?.getItemStyleCache.value(-1, null, null)

      if (forceUpdate) instance.proxy?.$forceUpdate()
    }

    const resetAfterColumnIndex = (
      columnIndex: number,
      forceUpdate: boolean
    ) => {
      resetAfter(
        {
          columnIndex,
        },
        forceUpdate
      )
    }

    const resetAfterRowIndex = (rowIndex: number, forceUpdate: boolean) => {
      resetAfter(
        {
          rowIndex,
        },
        forceUpdate
      )
    }

    Object.assign(instance.proxy, {
      resetAfterColumnIndex,
      resetAfterRowIndex,
      resetAfter,
    })
  },
  initCache: ({
    estimatedColumnWidth = DEFAULT_DYNAMIC_LIST_ITEM_SIZE,
    estimatedRowHeight = DEFAULT_DYNAMIC_LIST_ITEM_SIZE,
  }) => {
    const cache = {
      column: {},
      estimatedColumnWidth,
      estimatedRowHeight,
      lastVisitedColumnIndex: -1,
      lastVisitedRowIndex: -1,
      row: {},
    } as GridCache

    // TODO: expose methods.
    return cache
  },

  clearCache: false,

  validateProps: ({ columnWidth, rowHeight }) => {
    if (process.env.NODE_ENV !== 'production') {
      if (!isFunction(columnWidth)) {
        throwError(
          SCOPE,
          `
          "columnWidth" must be passed as function,
            instead ${typeof columnWidth} was given.
        `
        )
      }

      if (!isFunction(rowHeight)) {
        throwError(
          SCOPE,
          `
          "rowHeight" must be passed as function,
            instead ${typeof rowHeight} was given.
        `
        )
      }
    }
  },
})

export default DynamicSizeGrid

export type ResetAfterIndex = (idx: number, forceUpdate: boolean) => void
export type ResetAfterIndices = (indices: Indices, forceUpdate: boolean) => void

export type DynamicSizeGridInstance = GridInstance & {
  resetAfterColumnIndex: ResetAfterIndex
  resetAfterRowIndex: ResetAfterIndex
  resetAfter: ResetAfterIndices
}
