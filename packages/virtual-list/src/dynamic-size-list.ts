import createList from './builders/buildList'

import { isHorizontal } from './utils'
import {
  AUTO_ALIGNMENT,
  CENTERED_ALIGNMENT,
  DEFAULT_DYNAMIC_LIST_ITEM_SIZE,
  DefaultListProps,
  END_ALIGNMENT,
  SMART_ALIGNMENT,
  START_ALIGNMENT,
} from './defaults'

import type { ListCache, ListItem, ItemSize } from './types'
import type { ExtractPropTypes } from 'vue'

type Props = ExtractPropTypes<typeof DefaultListProps>

const getItemFromCache = (
  props: Props,
  index: number,
  listCache: ListCache,
): ListItem => {
  const { itemSize } = props
  const { cachedItems, lastVisitedIndex } = listCache

  if (index > lastVisitedIndex) {
    let offset = 0
    if (lastVisitedIndex >= 0) {
      const item = cachedItems[lastVisitedIndex]
      offset = item.offset + item.size
    }

    for (let i = lastVisitedIndex + 1; i <= index; i++) {
      const size = (itemSize as ItemSize)(i)

      cachedItems[i] = {
        offset,
        size,
      }

      offset += size
    }

    listCache.lastVisitedIndex = index
  }

  return cachedItems[index]
}

const findItem = (
  props: Props,
  listCache: ListCache,
  offset: number,
) => {
  const { cachedItems, lastVisitedIndex } = listCache

  const lastVisitedOffset =
    lastVisitedIndex > 0 ? cachedItems[lastVisitedIndex].offset : 0

  if (lastVisitedOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return bs(
      props,
      listCache,
      lastVisitedIndex,
      0,
      offset,
    )
  } else {
    return es(
      props,
      listCache,
      Math.max(0, lastVisitedIndex),
      offset,
    )
  }
}

// bs stands for binary search which has approximately time complexity of O(Log n)
// space complexity of O(1)
// in this case we use it for search the offset of each item, since
// the cached items' offset is monotonically increasing
const bs = (
  props: Props,
  listCache: ListCache,
  high: number,
  low: number,
  offset: number,
) => {
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2)
    const currentOffset = getItemFromCache(props, mid, listCache).offset

    if (currentOffset === offset) {
      return mid
    } else if (currentOffset < offset) {
      low = mid + 1
    } else if (currentOffset > offset) {
      high = mid - 1
    }
  }

  return Math.max(0, low - 1)
}

// es stands for exponential search which has time complexity of O(Log n) and
// space complexity of O(1) in the case of finding the boundary element.
// the exponential indicator in this case is 2.
// for more detail about exponential search click this link
// https://www.freecodecamp.org/news/search-algorithms-exponential-search-explained/

const es = (
  props: Props,
  listCache: ListCache,
  index: number,
  offset: number,
) => {
  const { total } = props
  let exponent = 1

  while (
    index < total &&
    getItemFromCache(props, index, listCache).offset < offset
  ) {
    index += exponent
    exponent *= 2
  }

  return bs(
    props,
    listCache,
    Math.min(index, total - 1),
    Math.floor(index / 2),
    offset,
  )
}

const getEstimatedTotalSize = (
  { total }: Props,
  { cachedItems, estimatedItemSize, lastVisitedIndex }: ListCache,
) => {
  let totalSizeOfMeasuredItems = 0

  if (lastVisitedIndex >= total) {
    lastVisitedIndex = total - 1
  }

  if (lastVisitedIndex >= 0) {
    const item = cachedItems[lastVisitedIndex]
    totalSizeOfMeasuredItems = item.offset + item.size
  }

  const numUnmeasuredItems = total - lastVisitedIndex - 1
  const totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedItemSize
  return totalSizeOfMeasuredItems + totalSizeOfUnmeasuredItems
}

export default createList({
  name: 'ElDynamicSizeList',
  getItemOffset: (
    props,
    index,
    listCache,
  ) => getItemFromCache(props, index, listCache).offset,

  getItemSize: (
    _,
    index: number,
    { cachedItems },
  )=> cachedItems[index].size,

  getEstimatedTotalSize,

  getOffset: (
    props,
    index,
    alignment,
    scrollOffset,
    listCache,
  ) => {
    const { height, layout, width } = props

    const size = (isHorizontal(layout) ? width : height) as number
    const item = getItemFromCache(props, index, listCache)

    const estimatedTotalSize = getEstimatedTotalSize(props, listCache)

    const maxOffset = Math.max(
      0,
      Math.min(estimatedTotalSize - size, item.offset),
    )
    const minOffset = Math.max(
      0,
      item.offset - size + item.size,
    )

    if (alignment === SMART_ALIGNMENT) {
      if (
        scrollOffset >= minOffset - size &&
        scrollOffset <= maxOffset + size
      ) {
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
        } else if (scrollOffset < minOffset) {
          return minOffset
        } else {
          return maxOffset
        }
      }
    }
  },

  getStartIndexForOffset: (
    props,
    offset,
    listCache,
  ): number => findItem(props, listCache, offset),

  getStopIndexForStartIndex: (
    props,
    startIndex,
    scrollOffset,
    listCache,
  ): number => {
    const { height, total, layout, width } = props

    const size = (isHorizontal(layout) ? width : height) as number
    const item = getItemFromCache(props, startIndex, listCache)
    const maxOffset = scrollOffset + size

    let offset = item.offset + item.size
    let stopIndex = startIndex

    while (stopIndex < total - 1 && offset < maxOffset) {
      stopIndex++
      offset += getItemFromCache(props, stopIndex, listCache).size
    }

    return stopIndex
  },

  initCache(props, instance) {
    const { estimatedItemSize } = props

    const cache = {
      cachedItems: {},
      estimatedItemSize: estimatedItemSize || DEFAULT_DYNAMIC_LIST_ITEM_SIZE,
      lastVisitedIndex: -1,
    } as ListCache

    cache.clearCacheAfterIndex = (index: number,
      forceUpdate = true) => {
      cache.lastVisitedIndex = Math.min(
        cache.lastVisitedIndex,
        index - 1,
      )
      instance.exposed.getItemStyleCache(-1)

      if (forceUpdate) {
        instance.proxy.$forceUpdate()
      }
    }

    return cache as any
  },

  clearCache: false,

  validateProps: ({ itemSize }) => {
    if (process.env.NODE_ENV !== 'production') {
      if (typeof itemSize !== 'function') {
        throw Error(
          'An invalid "itemSize" prop has been specified. ' +
            'Value should be a function. ' +
            `"${itemSize === null ? 'null' : typeof itemSize}" was specified.`,
        )
      }
    }
  },
})
