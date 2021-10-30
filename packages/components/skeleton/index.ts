import { withInstall, withNoopInstall } from '@element-plus/utils/with-install'

import Skeleton from './src/index.vue'
import SkeletonItem from './src/item.vue'

export const ElSkeleton = withInstall(Skeleton, {
  SkeletonItem,
})
export default ElSkeleton
export const ElSkeletonItem = withNoopInstall(SkeletonItem)

export * from './src/types'
