import { computed, defineComponent, h, ref, unref } from 'vue'
import {
  FixedSizeGrid,
  DynamicSizeGrid,
} from '@element-plus/components/virtual-list'
import { gridTableProps } from '../props/grid-table'
import { prefix } from '../constants'
import TableHeader from './header'

const GridTable = defineComponent({
  props: gridTableProps,
  setup(props, { attrs, slots }) {
    const gridRef = ref()
    const headerRef = ref()

    const headerHeightRef = computed(() => {
      const { headerHeight } = props

      if (Array.isArray(headerHeight)) {
        return headerHeight.reduce((sum, height) => sum + height, 0)
      }
      return headerHeight
    })

    const fixedHeaderHeightRef = computed(() => {
      return (props.rowHeight as number) * props.fixedData.length
    })

    const totalHeaderHeightRef = computed(() => {
      return unref(headerHeightRef) + unref(fixedHeaderHeightRef)
    })

    const estimatedTotalRowHeightRef = computed(() => {
      const { data, estimatedRowHeight } = props
      return data.length * estimatedRowHeight!
    })

    const renderHeader = () => {
      const totalHeaderHeight = unref(totalHeaderHeightRef)
      if (totalHeaderHeight <= 0) return null

      const {
        columns,
        data,
        fixedData,
        height,
        headerWidth,
        rowHeight,
        width,
      } = props

      return h(
        TableHeader as any,
        {
          class: `${prefix}__header`,
          columns,
          ref: headerRef,
          data,
          fixedData,
          height: Math.min(totalHeaderHeight, height),
          headerHeight: unref(headerHeightRef),
          width,
          rowWidth: headerWidth,
          rowHeight,
        },
        {
          header: slots.header,
          row: slots.row,
        }
      )
    }

    function renderTable() {
      const {
        data,
        estimatedRowHeight,
        height,
        rowCache,
        useIsScrolling,
        rowHeight,
        width,
        columnWidth,
      } = props
      const Grid = estimatedRowHeight ? DynamicSizeGrid : FixedSizeGrid

      return h(
        Grid,
        {
          class: `${prefix}__body`,
          ref: gridRef,
          columnWidth,
          columnCache: 0,
          data,
          width,
          height: Math.max(height - unref(totalHeaderHeightRef), 0),
          totalColumn: 1,
          totalRow: data.length,
          rowCache,
          rowHeight,
          useIsScrolling,
          onItemRendered: () => {
            //
          },
        },
        {
          default: (args) => {
            const { data, columns } = props
            return slots.default?.({
              ...args,
              data: data[args.rowIndex],
              columns,
            })
          },
        }
      )
    }

    return () => {
      return h(
        'div',
        {
          role: 'table',
          class: `${prefix}__table`,
          ...attrs,
        },
        [renderTable(), renderHeader()]
      )
    }
  },
})

export default GridTable
