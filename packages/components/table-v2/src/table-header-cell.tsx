import type { TableV2HeaderCell } from './header-cell'

const HeaderCell = (props: TableV2HeaderCell, { slots }) =>
  slots.default ? (
    slots.default(props)
  ) : (
    <div class={props.class} title={props.column?.title}>
      {props.column?.title}
    </div>
  )

HeaderCell.componentName = 'ElTableV2HeaderCell'

export default HeaderCell
