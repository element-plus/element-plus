import {
  computed,
  defineComponent,
  inject,
  provide,
  ref,
  unref,
  watch,
} from 'vue'
import {
  DynamicSizeGrid,
  FixedSizeGrid,
} from '@element-plus/components/virtual-list'
import { isNumber, isObject } from '@element-plus/utils'
import { Header } from './components'
import { TableV2InjectionKey } from './tokens'
import { tableV2GridProps } from './grid'
import { sum } from './utils'

import type { UnwrapRef } from 'vue'
import type {
  DynamicSizeGridInstance,
  GridDefaultSlotParams,
  GridItemKeyGetter,
  GridItemRenderedEvtParams,
  GridScrollOptions,
  ResetAfterIndex,
  Alignment as ScrollStrategy,
} from '@element-plus/components/virtual-list'
import type { TableV2HeaderInstance } from './components'
import type { TableV2GridProps } from './grid'

const COMPONENT_NAME = 'ElTableV2Grid'

const useTableGrid = (props: TableV2GridProps) => {
  const headerRef = ref<TableV2HeaderInstance>()
  const bodyRef = ref<DynamicSizeGridInstance>()
  const scrollLeft = ref(0)

  const totalHeight = computed(() => {
    const { data, rowHeight, estimatedRowHeight } = props

    if (estimatedRowHeight) {
      return
    }

    return data.length * (rowHeight as number)
  })

  const fixedRowHeight = computed(() => {
    const { fixedData, rowHeight } = props

    return (fixedData?.length || 0) * (rowHeight as number)
  })

  const headerHeight = computed(() => sum(props.headerHeight))

  const gridHeight = computed(() => {
    const { height } = props
    return Math.max(0, height - unref(headerHeight) - unref(fixedRowHeight))
  })

  const hasHeader = computed(() => {
    return unref(headerHeight) + unref(fixedRowHeight) > 0
  })

  const itemKey: GridItemKeyGetter = ({ data, rowIndex }) =>
    data[rowIndex][props.rowKey]

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
    bodyRef.value?.resetAfterRowIndex(index, forceUpdate)
  }

  function scrollTo(x: number, y: number): void
  function scrollTo(options: GridScrollOptions): void
  function scrollTo(leftOrOptions: number | GridScrollOptions, top?: number) {
    const header$ = unref(headerRef)
    const body$ = unref(bodyRef)

    if (isObject(leftOrOptions)) {
      header$?.scrollToLeft(leftOrOptions.scrollLeft)
      scrollLeft.value = leftOrOptions.scrollLeft!
      body$?.scrollTo(leftOrOptions)
    } else {
      header$?.scrollToLeft(leftOrOptions)
      scrollLeft.value = leftOrOptions
      body$?.scrollTo({
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

  function scrollToRow(row: number, strategy: ScrollStrategy) {
    unref(bodyRef)?.scrollToItem(row, 1, strategy)
  }

  function forceUpdate() {
    unref(bodyRef)?.$forceUpdate()
    unref(headerRef)?.$forceUpdate()
  }

  watch(
    () => props.bodyWidth,
    () => {
      if (isNumber(props.estimatedRowHeight))
        bodyRef.value?.resetAfter({ columnIndex: 0 }, false)
    }
  )

  return {
    bodyRef,
    forceUpdate,
    fixedRowHeight,
    gridHeight,
    hasHeader,
    headerHeight,
    headerRef,
    totalHeight,

    itemKey,
    onItemRendered,
    resetAfterRowIndex,
    scrollTo,
    scrollToTop,
    scrollToRow,
    scrollLeft,
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

      forceUpdate,
      itemKey,
      onItemRendered,
      resetAfterRowIndex,
      scrollTo,
      scrollToTop,
      scrollToRow,
      scrollLeft,
    } = useTableGrid(props)

    provide('tableV2GridScrollLeft', scrollLeft)

    expose({
      forceUpdate,
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
       * @description scroll to a given row
       * @params row {Number} which row to scroll to
       * @params strategy {ScrollStrategy} use what strategy to scroll to
       */
      scrollToRow,
      /**
       * @description reset rendered state after row index
       */
      resetAfterRowIndex,
    })

    const getColumnWidth = () => props.bodyWidth

    return () => {
      const {
        cache,
        columns,
        data,
        fixedData,
        useIsScrolling,
        scrollbarAlwaysOn,
        scrollbarEndGap,
        scrollbarStartGap,
        style,
        rowHeight,
        bodyWidth,
        estimatedRowHeight,
        headerWidth,
        height,
        width,

        getRowHeight,
        onScroll,
      } = props

      const isDynamicRowEnabled = isNumber(estimatedRowHeight)
      const Grid = isDynamicRowEnabled ? DynamicSizeGrid : FixedSizeGrid
      const _headerHeight = unref(headerHeight)

      return (
        <div role="table" class={[ns.e('table'), props.class]} style={style}>
          <Grid
            ref={bodyRef}
            // special attrs
            data={data}
            useIsScrolling={useIsScrolling}
            itemKey={itemKey}
            // column attrs
            columnCache={0}
            columnWidth={isDynamicRowEnabled ? getColumnWidth : bodyWidth}
            totalColumn={1}
            // row attrs
            totalRow={data.length}
            rowCache={cache}
            rowHeight={isDynamicRowEnabled ? getRowHeight : rowHeight}
            // DOM attrs
            width={width}
            height={unref(gridHeight)}
            class={ns.e('body')}
            role="rowgroup"
            scrollbarStartGap={scrollbarStartGap}
            scrollbarEndGap={scrollbarEndGap}
            scrollbarAlwaysOn={scrollbarAlwaysOn}
            // handlers
            onScroll={onScroll}
            onItemRendered={onItemRendered}
            perfMode={false}
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
              headerHeight={props.headerHeight}
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
    forceUpdate: () => void
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
     * @description scroll to a given row
     * @params row {Number} which row to scroll to
     * @params @optional strategy {ScrollStrategy} use what strategy to scroll to
     */
    scrollToRow(row: number, strategy: ScrollStrategy): void
    /**
     * @description reset rendered state after row index
     * @param { number } rowIndex
     * @param { boolean } forceUpdate
     */
    resetAfterRowIndex: ResetAfterIndex
  }>
