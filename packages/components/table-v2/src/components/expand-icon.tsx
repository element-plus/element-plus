import ElIcon from '@element-plus/components/icon'
import { ArrowRight } from '@element-plus/icons-vue'

import type { StyleValue } from 'vue'
import type { TableV2RowCellRenderParam } from './row'

const ExpandIcon = (
  props: TableV2RowCellRenderParam['expandIconProps'] & {
    class?: string | string[]
    style: StyleValue
    size: number
    expanded: boolean
    expandable: boolean
  }
) => {
  const { expanded, expandable, onExpand, style, size } = props

  const expandIconProps = {
    onClick: expandable ? () => onExpand(!expanded) : undefined,
    class: props.class,
  } as any

  return (
    <ElIcon {...expandIconProps} size={size} style={style}>
      <ArrowRight />
    </ElIcon>
  )
}

export default ExpandIcon

export type ExpandIconInstance = ReturnType<typeof ExpandIcon>
