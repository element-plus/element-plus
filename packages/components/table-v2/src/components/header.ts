import { computed, defineComponent, h, unref } from 'vue'
import { tableV2HeaderProps } from '../props/table-header'

import type { CSSProperties } from 'vue'

export default defineComponent({
  props: tableV2HeaderProps,
  setup(props, { attrs, slots }) {
    const containerStyle = computed<CSSProperties>(() => {
      const { height, width } = props
      return {
        height,
        width,
        position: 'relative',
        overflow: 'hidden',
      }
    })

    const headerStyle = computed<CSSProperties>(() => ({
      width: props.rowWidth,
      height: props.height,
    }))

    const renderFixedRow = (data: any[], index: number) => {
      const { columns, rowHeight } = props

      return slots.header?.({
        style: {
          width: '100%',
          height: rowHeight,
        },
        data,
        index,
        columns,
      })
    }

    const renderHeaderRow = (height: number, index: number) => {
      if (height <= 0) return null

      const { columns } = props

      return slots.row?.({
        style: {
          width: '100%',
          height,
        },
        columns,
        index,
      })
    }

    return () => {
      if (props.height <= 0) return null

      const headersToRender = Array.isArray(props.headerHeight)
        ? props.headerHeight
        : [props.headerHeight]
      h(
        'div',
        {
          style: unref(containerStyle),
          ...attrs,
        },
        [
          h(
            'div',
            {
              style: unref(headerStyle),
            },
            [
              headersToRender.map(renderHeaderRow),
              (props.fixedData || []).map(renderFixedRow),
            ]
          ),
        ]
      )
    }
  },
})
