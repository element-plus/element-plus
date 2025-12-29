import ElIcon from '@element-plus/components/icon'
import { ArrowRight } from '@element-plus/icons-vue'

import type { StyleValue } from 'vue'
import type { TableV2RowCellRenderParam } from './row'

const ExpandIcon = (
  props: TableV2RowCellRenderParam['expandIconProps'] & {
    class?: string | string[]
    style: StyleValue
    ariaLabel?: string
    size: number
    expanded: boolean
    expandable: boolean
  }
) => {
  const { expanded, expandable, onExpand, style, size, ariaLabel } = props

  const expandIconProps = {
    onClick: expandable ? () => onExpand(!expanded) : undefined,
    ariaLabel,
    ariaExpanded: expanded,
    class: props.class,
  } as any

  return (
    <button {...expandIconProps} type="button">
      <ElIcon size={size} style={style}>
        <ArrowRight />
      </ElIcon>
    </button>
  )
}

export default ExpandIcon

export type ExpandIconInstance = ReturnType<typeof ExpandIcon>
