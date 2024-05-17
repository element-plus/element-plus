import Cascader from './src/cascader.vue'
import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils'

Cascader.install = (app: App): void => {
  app.component(Cascader.name!, Cascader)
}

const _Cascader = Cascader as SFCWithInstall<typeof Cascader>

export default _Cascader
export const ElCascader = _Cascader

export * from './src/cascader'
export * from './src/instances'
