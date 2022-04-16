import {
  computed,
  defineComponent,
  inject,
  nextTick,
  onMounted,
  ref,
  unref,
} from 'vue'
import { isArray, isFunction } from '@element-plus/utils'
import { tableV2RowProps } from './row'
import { TableV2InjectionKey } from './tokens'
import { placeholderSign } from './private'

import type { CSSProperties, RendererElement, RendererNode, VNode } from 'vue'
import type { RowEventHandlers, TableV2RowProps } from './row'

type CustomizedCellsType = VNode<
  RendererNode,
  RendererElement,
  {
    [key: string]: any
  }
>[]

type DefaultCellsType = VNode<
  RendererNode,
  RendererElement,
  {
    [key: string]: any
  }
>[][]

type ColumnCellsType = DefaultCellsType | CustomizedCellsType

const useTableRow = (props: TableV2RowProps) => {
  const { isScrolling } = inject(TableV2InjectionKey)!

  const measured = ref(false)
  const rowRef = ref<HTMLElement>()
  const measurable = computed(() => {
    return props.estimatedRowHeight && props.rowIndex >= 0
  })

  const doMeasure = (isInit = false) => {
    const $rowRef = unref(rowRef)

    if (!$rowRef) return
    const { columns, onRowHeightChange, rowKey, rowIndex, style } = props
    const { height } = $rowRef.getBoundingClientRect()

    measured.value = true

    nextTick(() => {
      if (isInit || height !== (style as CSSProperties)?.height) {
        const firstColumn = columns[0]
        const isPlaceholder = firstColumn.isPlaceholder === placeholderSign
        onRowHeightChange?.(
          rowKey,
          height,
          rowIndex,
          firstColumn && isPlaceholder && Boolean(firstColumn.fixed)
        )
      }
    })
  }

  const eventHandlers = computed(() => {
    const { rowData, rowIndex, rowKey, onRowHover } = props
    const handlers = props.rowEventHandlers || ({} as RowEventHandlers<any>)
    const eventHandlers = {}

    Object.entries(handlers).forEach(([eventName, handler]) => {
      if (isFunction(handler)) {
        eventHandlers[eventName] = (event: Event) => {
          handler({
            event,
            rowData,
            rowIndex,
            rowKey,
          })
        }
      }
    })

    if (onRowHover) {
      ;(
        [
          { name: 'onMouseleave', hovered: false },
          { name: 'onMouseenter', hovered: true },
        ] as const
      ).forEach(({ name, hovered }) => {
        eventHandlers[name] = (event: MouseEvent) => {
          onRowHover({
            event,
            hovered,
            rowData,
            rowIndex,
            rowKey,
          })

          eventHandlers[name]?.(event)
        }
      })
    }
    return eventHandlers
  })

  const onExpand = (expanded: boolean) => {
    const { onRowExpand, rowData, rowIndex, rowKey } = props

    onRowExpand?.({
      expanded,
      rowData,
      rowIndex,
      rowKey,
    })
  }

  onMounted(() => {
    if (unref(measurable)) {
      doMeasure()
    }
  })

  return { isScrolling, measurable, measured, rowRef, eventHandlers, onExpand }
}

const COMPONENT_NAME = 'ElTableV2TableRow'

const TableV2Row = defineComponent({
  name: COMPONENT_NAME,
  props: tableV2RowProps,
  setup(props, { expose, slots, attrs }) {
    const {
      eventHandlers,
      isScrolling,
      measurable,
      measured,
      rowRef,

      onExpand,
    } = useTableRow(props)

    expose({
      /**
       * @description manually dispatching expand action on row.
       */
      onExpand,
    })

    return () => {
      const { columns, expandColumnKey, depth, rowData, rowIndex, style } =
        props

      let ColumnCells: ColumnCellsType = columns.map((column, columnIndex) => {
        const expandable =
          isArray(rowData.children) &&
          rowData.children.length > 0 &&
          column.key === expandColumnKey

        return slots.cell!({
          column,
          columns,
          columnIndex,
          depth,
          rowData,
          rowIndex,
          isScrolling: unref(isScrolling),
          expandIconProps: expandable
            ? {
                rowData,
                rowIndex,
                onExpand,
              }
            : undefined,
        })
      })

      if (slots.default) {
        ColumnCells = slots.default({
          cells: ColumnCells.map((node) => {
            if (isArray(node) && node.length === 1) {
              return node[0]
            }
            return node
          }),
          columns,
          depth,
          rowData,
          rowIndex,
          isScrolling: unref(isScrolling),
        })
      }

      if (unref(measurable)) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { height, ...exceptHeightStyle } = style || {}
        const _measured = unref(measured)
        return (
          <div
            ref={rowRef}
            class={props.class}
            style={_measured ? style : exceptHeightStyle}
            {...attrs}
            {...unref(eventHandlers)}
          >
            {ColumnCells}
          </div>
        )
      }

      return (
        <div
          {...attrs}
          ref={rowRef}
          class={props.class}
          style={style}
          {...unref(eventHandlers)}
        >
          {ColumnCells}
        </div>
      )
    }
  },
})

export default TableV2Row

export type TableV2RowCellRenderParam = {
  column: TableV2RowProps['columns'][number]
  columns: TableV2RowProps['columns']
  columnIndex: number
  depth: number
  rowData: any
  rowIndex: number
  isScrolling: boolean
  expandIconProps?: {
    rowData: any
    rowIndex: number
    onExpand: (expand: boolean) => void
  }
}
