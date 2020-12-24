import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Popconfirm from './src/index.vue'

Popconfirm.install = (app: App): void => {
  app.component(Popconfirm.name, Popconfirm)
}

const _Popconfirm: SFCWithInstall<typeof Popconfirm> = Popconfirm

export default _Popconfirm
