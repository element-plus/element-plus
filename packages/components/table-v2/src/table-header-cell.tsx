import { defineComponent } from 'vue'

import type { TableV2HeaderCell } from './header-cell'

const HeaderCell = defineComponent((props: TableV2HeaderCell, { slots }) =>
  slots.default ? (
    slots.default(props)
  ) : (
    <div class={props.class}>{props.column?.title}</div>
  )
)

HeaderCell.name = 'ElTableV2HeaderCell'

export default HeaderCell
