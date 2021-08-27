import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import CascaderPanel from './src/index.vue'


CascaderPanel.install = (app: App): void => {
  app.component(CascaderPanel.name, CascaderPanel)
}

const _CascaderPanel = CascaderPanel as SFCWithInstall<typeof CascaderPanel>

export default _CascaderPanel
export const ElCascaderPanel = _CascaderPanel
export * from './src/types'
export * from './src/config'
