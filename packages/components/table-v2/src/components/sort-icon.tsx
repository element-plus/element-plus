import GIcon from '@element-plus/components/icon'
import { SortDown, SortUp } from '@element-plus/icons-vue'
import { SortOrder } from '../constants'

import type { FunctionalComponent } from 'vue'

export type SortIconProps = {
  sortOrder: SortOrder
  ariaLabel?: string
  class?: JSX.IntrinsicAttributes['class']
}

const SortIcon: FunctionalComponent<SortIconProps> = (props) => {
  const { sortOrder } = props

  return (
    <button type="button" aria-label={props.ariaLabel} class={props.class}>
      <GIcon size={14}>
        {sortOrder === SortOrder.ASC ? <SortUp /> : <SortDown />}
      </GIcon>
    </button>
  )
}

export default SortIcon
