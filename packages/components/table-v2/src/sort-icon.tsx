import { defineComponent } from 'vue'
import ElIcon from '@element-plus/components/icon'
import { SortDown, SortUp } from '@element-plus/icons-vue'
import { SortOrder } from './constants'

export type SortIconProps = {
  sortOrder: SortOrder
  class?: string
}

const SortIcon = defineComponent((props: SortIconProps) => {
  const { sortOrder } = props

  return (
    <ElIcon size={14} class={props.class}>
      {sortOrder === SortOrder.ASC ? SortUp : SortDown}
    </ElIcon>
  )
})

export default SortIcon
