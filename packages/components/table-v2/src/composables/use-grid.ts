import { computed, getCurrentInstance, h, shallowRef } from 'vue'
import memo from 'memoize-one'
import {
  FixedSizeGrid,
  DynamicSizeGrid,
} from '@element-plus/components/virtual-list'
import { klsPrefix, ON_ROWS_RENDERED, ON_SCROLL } from '../constants'
import { getEstimatedTotalHeight } from '../utils'

import type { UseGridProps, HeaderRendererProps } from '../props/grid'

export const useGrid = () => {
  const vm = getCurrentInstance()!

  const props = vm.proxy!.$props as UseGridProps
  const { emit, slots } = vm

  const header = shallowRef()
  const grid = shallowRef()
  const inner = computed(() => {
    return grid.value.innerRef as HTMLDivElement
  })

  const _getTotalHeight = memo(getEstimatedTotalHeight)

  const estimatedTotalHeight = computed(() => {
    return 0
  })

  const headerHeight = computed(() => 0)

  const totalHeight = computed(() => {
    const { data = [], rowHeight, estimatedRowHeight } = props

    if (estimatedRowHeight) {
      return (
        inner.value?.clientHeight || _getTotalHeight(data, estimatedRowHeight)
      )
    }

    return data!.length * rowHeight
    // }
  })

  const fixedRowsHeight = computed(() => {
    return 0
  })

  const scrollTo = () => {
    grid.value.scrollTo?.()
  }

  const scrollToTop = () => {
    //
  }

  const scrollToLeft = () => {
    //
  }

  const scrollToRow = () => {
    //
  }

  const onScroll = () => {
    emit(ON_SCROLL)
  }

  const onItemRendered = (data) => {
    emit(ON_ROWS_RENDERED, data)
  }

  const cellRenderer = (cellProps) => {
    const rowData = props.data![cellProps.rowIndex]
    if (props.rowRenderer) {
      return props.rowRenderer({
        ...cellProps,
        columns: props.columns || slots.default,
        rowData,
      })
    }
  }

  const headerRenderer = (headerProps: HeaderRendererProps) => {
    // if either is passed from the parent, this should throw since its the users
    // responsibilities to provide correct data
    const renderer = props.headerRenderer || slots.header!
    return renderer(headerProps)
  }

  const renderer = () => {
    const {
      containerStyle,
      className,
      data,
      fixedData,
      width,
      height,
      rowHeight,
      rowRenderer,
      estimatedRowHeight,
      getRowHeight,
      headerWidth,
      bodyWidth,
      useIsScrolling,
      hoveredRow,
      rowCache,
      ...rest
    } = props

    const Grid = props.estimatedRowHeight ? DynamicSizeGrid : FixedSizeGrid
    const _headerHeight = headerHeight.value + fixedRowsHeight.value
    return h(
      'div',
      {
        class: props.className,
        style: containerStyle,
      },
      [
        h(
          Grid,
          {
            class: `${klsPrefix}__body`,
            ref: grid,
            columnWidth: estimatedRowHeight ? 0 : bodyWidth,
            columnCount: 1,
            columnCache: 0,
            data,
            estimatedRowHeight:
              typeof estimatedRowHeight === 'function'
                ? undefined
                : estimatedRowHeight,
            width,
            height: Math.min(_headerHeight, height!),
            rowHeight: estimatedRowHeight ? getRowHeight : rowHeight,
            rowCount: data!.length,
            rowCache,
            useIsScrolling,
            hoveredRow,
            onScroll,
            onItemRendered,
          },
          {
            default: cellRenderer,
          }
        ),
        _headerHeight > 0 &&
          h(
            'div',
            {
              ...rest,
              class: `${klsPrefix}__header`,
              ref: header,
              fixedData,
              rowWidth: headerWidth,
              rowHeight,
              headerHeight: props.headerHeight,
            },
            {
              default: headerRenderer,
              row: rowRenderer,
            }
          ),
      ]
    )
  }

  return {
    renderer,
  }
}
