import type { TableV2CellProps } from './cell'

const TableV2Cell = (props: TableV2CellProps, { slots }) => {
  const { cellData, style } = props
  const displayText = cellData?.toString?.() || ''
  return (
    <div class={props.class} title={displayText} style={style}>
      {slots.default ? slots.default(props) : displayText}
    </div>
  )
}

TableV2Cell.componentName = 'ElTableV2Cell'

export default TableV2Cell
