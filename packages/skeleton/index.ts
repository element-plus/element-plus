import { App } from 'vue'
import Skeleton from './src/index.vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Skeleton.install = (app: App): void => {
  app.component(Skeleton.name, Skeleton)
}

const _Skeleton: SFCWithInstall<typeof Skeleton> = Skeleton

export default _Skeleton
