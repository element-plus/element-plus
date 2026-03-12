import { withInstall, withNoopInstall } from '@element-plus/utils'
import Skeleton from './src/skeleton.vue'
import SkeletonItem from './src/skeleton-item.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GSkeleton: SFCWithInstall<typeof Skeleton> & {
  SkeletonItem: typeof SkeletonItem
} = withInstall(Skeleton, {
  SkeletonItem,
})
export const GSkeletonItem: SFCWithInstall<typeof SkeletonItem> =
  withNoopInstall(SkeletonItem)
export default GSkeleton

export * from './src/skeleton'
export * from './src/skeleton-item'
