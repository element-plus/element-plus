import { componentSizeMap } from '@element-plus/constants'

import type { ComponentSize } from '@element-plus/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
