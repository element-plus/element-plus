import Skeleton from './src/index.vue'
import SkeletonItem from './src/item.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Skeleton.install = (app: App): void => {
  app.component(Skeleton.name, Skeleton)
  app.component(SkeletonItem.name, SkeletonItem)
}

Skeleton.SkeletonItem = SkeletonItem

const _Skeleton = Skeleton as any as SFCWithInstall<typeof Skeleton> & {
  SkeletonItem: typeof SkeletonItem
}

export default _Skeleton
export const ElSkeleton = _Skeleton
export const ElSkeletonItem = SkeletonItem

export * from './src/types'
