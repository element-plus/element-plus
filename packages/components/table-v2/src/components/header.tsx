import {
  computed,
  defineComponent,
  inject,
  nextTick,
  onUpdated,
  ref,
  unref,
} from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { ensureArray } from '@element-plus/utils'
import { tableV2HeaderProps } from '../header'
import { enforceUnit } from '../utils'

import type { CSSProperties, Ref, UnwrapRef } from 'vue'
import type { TableV2HeaderProps } from '../header'
import type { UseColumnsReturn } from '../composables/use-columns'

const COMPONENT_NAME = 'ElTableV2Header'
const TableV2Header = defineComponent({
  name: COMPONENT_NAME,
  props: tableV2HeaderProps,
  setup(props, { slots, expose }) {
    const ns = useNamespace('table-v2')
    const scrollLeftInfo = inject<Ref<number>>('tableV2GridScrollLeft')

    const headerRef = ref<HTMLElement>()

    const headerStyle = computed(() =>
      enforceUnit({
        width: props.width,
        height: props.height,
      })
    )

    const rowStyle = computed(() =>
      enforceUnit({
        width: props.rowWidth,
        height: props.height,
      })
    )

    const headerHeights = computed(() => ensureArray(unref(props.headerHeight)))

    const scrollToLeft = (left?: number) => {
      const headerEl = unref(headerRef)
      nextTick(() => {
        headerEl?.scroll &&
          headerEl.scroll({
            left,
          })
      })
    }

    const renderFixedRows = () => {
      const fixedRowClassName = ns.e('fixed-header-row')

      const { columns, fixedHeaderData, rowHeight } = props

      return fixedHeaderData?.map((fixedRowData, fixedRowIndex) => {
        const style: CSSProperties = enforceUnit({
          height: rowHeight,
          width: '100%',
        })

        return slots.fixed?.({
          class: fixedRowClassName,
          columns,
          rowData: fixedRowData,
          rowIndex: -(fixedRowIndex + 1),
          style,
        })
      })
    }

    const renderDynamicRows = () => {
      const dynamicRowClassName = ns.e('dynamic-header-row')
      const { columns } = props

      return unref(headerHeights).map((rowHeight, rowIndex) => {
        const style: CSSProperties = enforceUnit({
          width: '100%',
          height: rowHeight,
        })

        return slots.dynamic?.({
          class: dynamicRowClassName,
          columns,
          headerIndex: rowIndex,
          style,
        })
      })
    }

    onUpdated(() => {
      if (scrollLeftInfo?.value) {
        scrollToLeft(scrollLeftInfo.value)
      }
    })
    expose({
      /**
       * @description scroll to position based on the provided value
       */
      scrollToLeft,
    })

    return () => {
      if (props.height <= 0) return

      return (
        <div
          ref={headerRef}
          class={props.class}
          style={unref(headerStyle)}
          role="rowgroup"
        >
          <div style={unref(rowStyle)} class={ns.e('header')}>
            {renderDynamicRows()}
            {renderFixedRows()}
          </div>
        </div>
      )
    }
  },
})

export default TableV2Header

export type TableV2HeaderInstance = InstanceType<typeof TableV2Header> & {
  /**
   * @description scroll to position based on the provided value
   */
  scrollToLeft: (left?: number) => void
}

export type TableV2HeaderRendererParams = {
  class: string
  columns: TableV2HeaderProps['columns']
  columnsStyles: UnwrapRef<UseColumnsReturn['columnsStyles']>
  headerIndex: number
  style: CSSProperties
}

export type TableV2HeaderRowRendererParams = {
  rowData: any
  rowIndex: number
} & Omit<TableV2HeaderRendererParams, 'headerIndex'>
