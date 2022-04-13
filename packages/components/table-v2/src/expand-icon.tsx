import { defineComponent } from 'vue'
import ElIcon from '@element-plus/components/icon'
import { CaretRight } from '@element-plus/icons-vue'

import type { TableV2RowCellRenderParam } from './table-row'

const ExpandIcon = defineComponent(
  (
    props: TableV2RowCellRenderParam['expandIconProps'] & {
      expanded: boolean
      expandable: boolean
    }
  ) => {
    const { expanded, expandable, onExpand } = props

    const expandIconProps = {
      onClick: expandable ? () => onExpand(!expanded) : undefined,
    } as any

    const style = expanded
      ? {
          transform: 'rotate(90deg)',
        }
      : undefined

    return (
      <ElIcon {...expandIconProps}>
        <CaretRight style={style} />
      </ElIcon>
    )
  }
)

export default ExpandIcon

export type ExpandIconInstance = InstanceType<typeof ExpandIcon>
