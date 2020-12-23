import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import VirtualList from './src/index.vue'

VirtualList.install = (app: App): void => {
  app.component(VirtualList.name, VirtualList)
}

const _VirtualList: SFCWithInstall<typeof VirtualList> = VirtualList

export default _VirtualList
