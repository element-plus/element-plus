import ElIcon from '@element-plus/components/src/icon'
import { SortDown, SortUp } from '@element-plus/icons-vue'
import { SortOrder } from '../constants'

import type { FunctionalComponent } from 'vue'

export type SortIconProps = {
  sortOrder: SortOrder
  class?: JSX.IntrinsicAttributes['class']
}

const SortIcon: FunctionalComponent<SortIconProps> = (props) => {
  const { sortOrder } = props

  return (
    <ElIcon size={14} class={props.class}>
      {sortOrder === SortOrder.ASC ? <SortUp /> : <SortDown />}
    </ElIcon>
  )
}

export default SortIcon
