import { defineComponent, h, renderSlot } from 'vue'

import { tableV2HeaderRowProps } from '../props/header-row'

export default defineComponent({
  name: 'TableV2HeaderRow',
  props: tableV2HeaderRowProps,
  setup(props, { slots }) {
    return () => {
      const { columns, headerIndex, variant, style } = props
      const cells = columns.map((column, columnIndex) => {
        return renderSlot(slots, 'cell', {
          columns,
          column,
          columnIndex,
          headerIndex,
        })
      })

      return h(
        variant,
        {
          class: props.class,
          style,
        },
        [
          slots.header
            ? renderSlot(slots, 'header', {
                cells,
                columns,
                headerIndex,
              })
            : cells,
        ]
      )
    }
  },
})
