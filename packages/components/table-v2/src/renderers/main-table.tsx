import Table from '../table-grid'

import type { FunctionalComponent, Ref } from 'vue'
import type { TableV2GridProps } from '../grid'
import type { TableGridInstance } from '../table-grid'

export type MainTableRendererProps = TableV2GridProps & {
  mainTableRef: Ref<TableGridInstance | undefined>
}

const MainTable: FunctionalComponent<MainTableRendererProps> = (
  props: MainTableRendererProps,
  { slots }
) => {
  const { mainTableRef, ...rest } = props
  return (
    <Table ref={mainTableRef} {...rest}>
      {slots}
    </Table>
  )
}

export default MainTable
