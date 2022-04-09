import { defineComponent } from 'vue'

import type { TableV2CellProps } from './cell'

const TableV2Cell = defineComponent((props: TableV2CellProps, { slots }) => {
  return (
    <div class={props.class}>
      {slots.default
        ? slots.default(props)
        : String.prototype.toString.call(props.cellData)}
    </div>
  )
})

TableV2Cell.name = 'ElTableV2Cell'

export default TableV2Cell
