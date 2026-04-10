import ElIcon from '@element-plus/components/icon'
import { SortDown, SortUp } from '@element-plus/icons-vue'
import { SortOrder } from '../constants'

import type { ClassValue, FunctionalComponent } from 'vue'

export type SortIconProps = {
  sortOrder: SortOrder
  ariaLabel?: string
  class?: ClassValue
}

const SortIcon: FunctionalComponent<SortIconProps> = (props) => {
  const { sortOrder } = props

  return (
    <button type="button" aria-label={props.ariaLabel} class={props.class}>
      <ElIcon size={14}>
        {sortOrder === SortOrder.ASC ? <SortUp /> : <SortDown />}
      </ElIcon>
    </button>
  )
}

export default SortIcon
