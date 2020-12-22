import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Tabs from './src/tabs.vue'

Tabs.install = (app: App): void => {
  app.component(Tabs.name, Tabs)
}

const _Tabs: SFCWithInstall<typeof Tabs> = Tabs

export default _Tabs
