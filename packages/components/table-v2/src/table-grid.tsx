import {
  computed,
  defineComponent,
  inject,
  nextTick,
  onActivated,
  provide,
  ref,
  unref,
  watch,
} from 'vue'
import { DynamicSizeGrid } from '@element-plus/components/virtual-list'
import { isNumber, isObject } from '@element-plus/utils'
import { Header } from './components'
import { TABLE_V2_GRID_INJECTION_KEY, TableV2InjectionKey } from './tokens'
import { tableV2GridProps } from './grid'
import { sum } from './utils'

import type { CSSProperties, UnwrapRef } from 'vue'
import type {
  DynamicSizeGridInstance,
  GridChunkSlotParams,
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
    const body = unref(bodyRef)
    if (!body) return

    const prevScrollLeft = scrollLeft.value

    body.scrollToItem(row, 0, strategy)

    if (prevScrollLeft) {
      scrollTo({
        scrollLeft: prevScrollLeft,
      })
    }
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

    provide(TABLE_V2_GRID_INJECTION_KEY, scrollLeft)

    onActivated(async () => {
      await nextTick()
      const scrollTop = bodyRef.value?.states.scrollTop
      scrollTop && scrollToTop(Math.round(scrollTop) + 1)
    })

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

    return () => {
      const {
        cache,
        columnCache,
        columns,
        data,
        fixedData,
        useIsScrolling,
        scrollbarAlwaysOn,
        scrollbarEndGap,
        scrollbarStartGap,
        style,
        rowHeight,
        headerWidth,
        height,
        width,

        getRowHeight,
        onScroll,
      } = props

      const _headerHeight = unref(headerHeight)

      const estimatedColumnWidth = computed(() => {
        return columns.reduce((acc, cur) => acc + cur.width, 0) / columns.length
      })

      function getColumnWidth(i: number) {
        return columns[i].width
      }
      function getRowStyle(
        rowIndex: number,
        startColumnIndex: number,
        getItemStyle: (rowIndex: number, columnIndex: number) => CSSProperties
      ) {
        const style = getItemStyle(rowIndex, startColumnIndex)
        console.log('style :', style)
        return {
          position: style.position,
          left: style.left,
          top: style.top,
          height: style.height,
        }
      }

      return (
        <div role="table" class={[ns.e('table'), props.class]} style={style}>
          <DynamicSizeGrid
            ref={bodyRef}
            // special attrs
            data={data}
            useIsScrolling={useIsScrolling}
            itemKey={itemKey}
            // column attrs
            columnCache={columnCache}
            columnWidth={getColumnWidth}
            totalColumn={columns.length}
            // row attrs
            totalRow={data.length}
            rowCache={cache}
            rowHeight={getRowHeight ?? (() => rowHeight)}
            // DOM attrs
            width={width}
            estimatedColumnWidth={
              data.length > 0 ? unref(estimatedColumnWidth) : 0
            }
            height={unref(gridHeight)}
            class={ns.e('body')}
            role="rowgroup"
            scrollbarStartGap={scrollbarStartGap}
            scrollbarEndGap={scrollbarEndGap}
            scrollbarAlwaysOn={scrollbarAlwaysOn}
            // handlers
            onScroll={onScroll}
            chunkMode={true}
            onItemRendered={onItemRendered}
            perfMode={false}
          >
            {{
              chunk: (params: GridChunkSlotParams) => {
                return Array.from({
                  length: params.rowRange[1] - params.rowRange[0] + 1,
                }).map((_, rowRangeIndex) => {
                  const _rowIndex = params.rowRange[0] + rowRangeIndex
                  return slots.row?.({
                    rowIndex: _rowIndex,
                    style: {
                      minWidth: '100%',
                      ...getRowStyle(
                        _rowIndex,
                        params.columnRange[0],
                        params.getItemStyle
                      ),
                    },
                    activeColumnStartIndex: params.columnRange[0],
                    activeColumns: props.columns.slice(
                      params.columnRange[0],
                      params.columnRange[1] + 1
                    ),
                    columns: props.columns,
                    rowData: data[_rowIndex],
                  })
                })
              },
            }}
          </DynamicSizeGrid>
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
  activeColumns: TableV2GridProps['columns']
  activeColumnStartIndex: number
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
