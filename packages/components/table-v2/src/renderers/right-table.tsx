import Table from '../table-grid'

import type { FunctionalComponent, Ref } from 'vue'
import type { TableV2GridProps } from '../grid'
import type { TableGridInstance } from '../table-grid'

type RightTableProps = TableV2GridProps & {
  rightTableRef: Ref<TableGridInstance | undefined>
}

const RightTable: FunctionalComponent<RightTableProps> = (props, { slots }) => {
  if (!props.columns.length) return

  const { rightTableRef, ...rest } = props

  return (
    <Table ref={rightTableRef} {...rest}>
      {slots}
    </Table>
  )
}

export default RightTable
