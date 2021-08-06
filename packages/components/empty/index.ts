import Empty from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Empty.install = (app: App): void => {
  app.component(Empty.name, Empty)
}

const _Empty = Empty as SFCWithInstall<typeof Empty>

export default _Empty
export const ElEmpty = _Empty
