import { withInstall, withNoopInstall } from '@element-plus/utils'

import Skeleton from './src/skeleton.vue'
import SkeletonItem from './src/skeleton-item.vue'

export const ElSkeleton = withInstall(Skeleton, {
  SkeletonItem,
})
export default ElSkeleton
export const ElSkeletonItem = withNoopInstall(SkeletonItem)

export * from './src/skeleton'
export * from './src/skeleton-item'
