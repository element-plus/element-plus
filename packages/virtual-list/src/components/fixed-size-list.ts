import { isString } from '@element-plus/utils/util'
import throwError from '@element-plus/utils/error'
import buildList from '../builders/buildList'
import { isHorizontal } from '../utils'
import {
  DefaultListProps,
  SMART_ALIGNMENT,
  AUTO_ALIGNMENT,
  START_ALIGNMENT,
  END_ALIGNMENT,
  CENTERED_ALIGNMENT,
} from '../defaults'

import type { ExtractPropTypes } from 'vue'

type IProps = ExtractPropTypes<typeof DefaultListProps>

const FixedSizeList = buildList({
  name: 'ElFixedSizeList',
  getItemOffset: (
    { itemSize },
    index,
  ) => index * (itemSize as number),

  getItemSize: ({ itemSize }) => itemSize as number,

  getEstimatedTotalSize: ({ total, itemSize }) => (itemSize as number) * total,

  getOffset: (
    { height, total, itemSize, layout, width },
    index,
    alignment,
    scrollOffset,
  ) => {
    const size = (isHorizontal(layout) ? width : height) as number
    if (process.env.ENV !== 'production' && isString(size)) {
      throwError('[ElVirtualList]', `
        You should set
          width/height
        to number when your layout is
          horizontal/vertical
      `)
    }
    const lastItemOffset = Math.max(
      0,
      total * (itemSize as number) - size,
    )
    const maxOffset = Math.min(
      lastItemOffset,
      index * (itemSize as number),
    )
    const minOffset = Math.max(
      0,
      (index + 1) * (itemSize as number) - size,
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
        // "Centered" offset is usually the average of the min and max.
        // But near the edges of the list, this doesn't hold true.
        const middleOffset = Math.round(
          minOffset + (maxOffset - minOffset) / 2,
        )
        if (middleOffset < Math.ceil(size / 2)) {
          return 0 // near the beginning
        } else if (middleOffset > lastItemOffset + Math.floor(size / 2)) {
          return lastItemOffset // near the end
        } else {
          return middleOffset
        }
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
    { total, itemSize },
    offset,
  ) =>
    Math.max(
      0,
      Math.min(total - 1, Math.floor(offset / (itemSize as number))),
    ),

  getStopIndexForStartIndex: (
    { height, total, itemSize, layout, width }: IProps,
    startIndex: number,
    scrollOffset: number,
  ) => {
    const offset = startIndex * (itemSize as number)
    const size = isHorizontal(layout) ? width : height
    const numVisibleItems = Math.ceil(
      ((size as number) + scrollOffset - offset) / (itemSize as number),
    )
    return Math.max(
      0,
      Math.min(
        total - 1,
        // because startIndex is inclusive, so in order to prevent array outbound indexing
        // we need to - 1 to prevent outbound behavior
        startIndex + numVisibleItems - 1,
      ),
    )
  },

  initCache() {
    return void 0
  },

  clearCache: true,

  validateProps() {
    //
  },
})

export default FixedSizeList
