import { renderSlot } from 'vue'
import type { FunctionalComponent } from 'vue'
import type { TableV2CellProps } from '../cell'

const TableV2Cell: FunctionalComponent<TableV2CellProps> = (
  props: TableV2CellProps,
  { slots }
) => {
  const { cellData, style } = props
  const displayText = cellData?.toString?.() || ''
  const defaultSlot = renderSlot(slots, 'default', props, () => [displayText])
  return (
    <div class={props.class} title={displayText} style={style}>
      {defaultSlot}
    </div>
  )
}

TableV2Cell.displayName = 'ElTableV2Cell'
TableV2Cell.inheritAttrs = false

export default TableV2Cell
