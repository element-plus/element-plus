import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Cascader from './src/index.vue'

Cascader.install = (app: App): void => {
  app.component(Cascader.name, Cascader)
}

const _Cascader = Cascader as SFCWithInstall<typeof Cascader>

export default _Cascader
export const ElCascader = _Cascader

