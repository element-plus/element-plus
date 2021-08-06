import Popconfirm from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Popconfirm.install = (app: App): void => {
  app.component(Popconfirm.name, Popconfirm)
}

const _Popconfirm: SFCWithInstall<typeof Popconfirm> = Popconfirm

export default _Popconfirm
export const ElPopconfirm = _Popconfirm
