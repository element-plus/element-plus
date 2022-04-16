import { computed, defineComponent, inject, ref, unref } from 'vue'
import {
  DynamicSizeGrid,
  FixedSizeGrid,
} from '@element-plus/components/virtual-list'
import { isObject } from '@element-plus/utils'
import Header from './table-header'
import { TableV2InjectionKey } from './tokens'
import { tableV2GridProps } from './grid'
import { sumHeights } from './utils'

import type { UnwrapRef } from 'vue'
import type {
  DynamicSizeGridInstance,
  GridDefaultSlotParams,
  GridItemRenderedEvtParams,
  GridScrollOptions,
  ResetAfterIndex,
} from '@element-plus/components/virtual-list'
import type { TableV2HeaderInstance } from './table-header'
import type { TableV2GridProps } from './grid'

const COMPONENT_NAME = 'ElTableV2Grid'

const useTableGrid = (props: TableV2GridProps) => {
  const headerRef = ref<TableV2HeaderInstance>()
  const bodyRef = ref<DynamicSizeGridInstance>()

  const totalHeight = computed(() => {
    const { data, rowHeight, estimatedRowHeight } = props

    if (estimatedRowHeight) {
      return
    }

    return data.length * rowHeight
  })

  const fixedRowHeight = computed(() => {
    const { fixedData, rowHeight } = props

    return (fixedData?.length || 0) * rowHeight
  })

  const headerHeight = computed(() => sumHeights(props.headerHeight))

  const gridHeight = computed(() => {
    const { height } = props
    return Math.max(0, height - unref(headerHeight) - unref(fixedRowHeight))
  })

  const hasHeader = computed(() => {
    return unref(headerHeight) + unref(fixedRowHeight) > 0
  })

  function onItemRendered({
    rowCacheStart,
    rowCacheEnd,
    rowVisibleStart,
    rowVisibleEnd,
  }: GridItemRenderedEvtParams) {
    props.onRowsRendered?.({
      rowCacheStart,
      rowCacheEnd,
      rowVisibleStart,
      rowVisibleEnd,
    })
  }

  function resetAfterRowIndex(index: number, forceUpdate: boolean) {
    bodyRef.value?.resetAfterRowIndex?.(index, forceUpdate)
  }

  function scrollTo(x: number, y: number): void
  function scrollTo(options: GridScrollOptions): void
  function scrollTo(leftOrOptions: number | GridScrollOptions, top?: number) {
    const header$ = unref(headerRef)
    const body$ = unref(bodyRef)

    if (!header$ || !body$) return

    if (isObject(leftOrOptions)) {
      header$.scrollToLeft(leftOrOptions.scrollLeft)
      body$.scrollTo(leftOrOptions)
    } else {
      header$.scrollToLeft(leftOrOptions)
      body$.scrollTo({
        scrollLeft: leftOrOptions,
        scrollTop: top,
      })
    }
  }

  function scrollToTop(scrollTop: number) {
    unref(bodyRef)?.scrollTo({
      scrollTop,
    })
  }

  return {
    bodyRef,
    fixedRowHeight,
    gridHeight,
    hasHeader,
    headerHeight,
    headerRef,
    totalHeight,

    onItemRendered,
    resetAfterRowIndex,
    scrollTo,
    scrollToTop,
  }
}

const TableGrid = defineComponent({
  name: COMPONENT_NAME,
  props: tableV2GridProps,
  setup(props, { slots, expose }) {
    const { ns } = inject(TableV2InjectionKey)!

    const {
      bodyRef,
      fixedRowHeight,
      gridHeight,
      hasHeader,
      headerRef,
      headerHeight,
      totalHeight,

      onItemRendered,
      resetAfterRowIndex,
      scrollTo,
      scrollToTop,
    } = useTableGrid(props)

    expose({
      /**
       * @description fetch total height
       */
      totalHeight,
      /**
       * @description scroll to a position
       */
      scrollTo,
      /**
       * @description scroll vertically to position y
       */
      scrollToTop,
      /**
       * @description reset rendered state after row index
       */
      resetAfterRowIndex,
    })

    return () => {
      const {
        cache,
        columns,
        data,
        fixedData,
        useIsScrolling,

        onScroll,

        rowHeight,
        bodyWidth,
        estimatedRowHeight,
        headerWidth,
        height,
        width,
      } = props

      const Grid = estimatedRowHeight ? DynamicSizeGrid : FixedSizeGrid
      const _headerHeight = unref(headerHeight)

      return (
        <div role="table" class={[ns.e('table'), props.class]}>
          <Grid
            ref={bodyRef}
            // special attrs
            data={data}
            useIsScrolling={useIsScrolling}
            // column attrs
            columnCache={0}
            columnWidth={bodyWidth}
            totalColumn={1}
            // row attrs
            totalRow={data.length}
            rowCache={cache}
            rowHeight={rowHeight}
            // DOM attrs
            width={width}
            height={unref(gridHeight)}
            class={ns.e('body')}
            // handlers
            onScroll={onScroll}
            onItemRendered={onItemRendered}
          >
            {{
              default: (params: GridDefaultSlotParams) => {
                const rowData = data[params.rowIndex]
                return slots.row?.({
                  ...params,
                  columns,
                  rowData,
                })
              },
            }}
          </Grid>
          {unref(hasHeader) && (
            <Header
              ref={headerRef}
              class={ns.e('header-wrapper')}
              columns={columns}
              headerData={data}
              headerHeight={_headerHeight}
              fixedHeaderData={fixedData}
              rowWidth={headerWidth}
              rowHeight={rowHeight}
              width={width}
              height={Math.min(_headerHeight + unref(fixedRowHeight), height)}
            >
              {{
                dynamic: slots.header,
                fixed: slots.row,
              }}
            </Header>
          )}
        </div>
      )
    }
  },
})

export default TableGrid

export type TableGridRowSlotParams = {
  columns: TableV2GridProps['columns']
  rowData: any
} & GridDefaultSlotParams

export type TableGridInstance = InstanceType<typeof TableGrid> &
  UnwrapRef<{
    /**
     * @description fetch total height
     */
    totalHeight: number

    /**
     * @description scrollTo a position
     * @param { number | ScrollToOptions } arg1
     * @param { number } arg2
     */
    scrollTo(leftOrOptions: number | GridScrollOptions, top?: number): void

    /**
     * @description scroll vertically to position y
     */
    scrollToTop(scrollTop: number): void
    /**
     * @description reset rendered state after row index
     * @param { number } rowIndex
     * @param { boolean } forceUpdate
     */
    resetAfterRowIndex: ResetAfterIndex
  }>
