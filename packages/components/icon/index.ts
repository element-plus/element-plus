import Icon from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Icon.install = (app: App): void => {
  app.component(Icon.name, Icon)
}

const _Icon = Icon as SFCWithInstall<typeof Icon>

export default _Icon
export const ElIcon = _Icon
