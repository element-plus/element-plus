import {
  computed,
  defineComponent,
  inject,
  nextTick,
  onMounted,
  ref,
  unref,
} from 'vue'
import { isFunction } from '@element-plus/utils'
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
  setup(props, { expose, slots }) {
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
        return slots.cell!({
          column,
          columns,
          columnIndex,
          rowData,
          rowIndex,
          isScrolling: unref(isScrolling),
          expandIconProps:
            column.key === expandColumnKey
              ? {
                  depth,
                  rowData,
                  rowIndex,
                  onExpand,
                }
              : undefined,
        })
      })

      if (slots.default) {
        ColumnCells = slots.default({
          cells: ColumnCells,
          columns,
          depth,
          rowData,
          rowIndex,
          isScrolling: unref(isScrolling),
        })
      }

      if (unref(measurable)) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { height, ...expectHeight } = style || {}
        const _measured = unref(measured)
        return (
          <div
            ref={rowRef}
            class={props.class}
            style={_measured ? style : expectHeight}
            {...unref(eventHandlers)}
          >
            {ColumnCells}
          </div>
        )
      }

      return <div ref={rowRef}>{ColumnCells}</div>
    }
  },
})

export default TableV2Row
