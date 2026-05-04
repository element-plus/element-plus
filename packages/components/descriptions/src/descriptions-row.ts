import { buildProps, definePropType } from '@element-plus/utils'

import type { DescriptionItemVNode } from './description-item'

export interface DescriptionsRowProps {
  row?: DescriptionItemVNode[]
}

/**
 * @deprecated Removed after 3.0.0, Use `DescriptionsRowProps` instead.
 */
export const descriptionsRowProps = buildProps({
  row: {
    type: definePropType<DescriptionItemVNode[]>(Array),
    default: () => [],
  },
} as const)
