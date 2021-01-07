import { App } from 'vue'
import Empty from './src/index.vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Empty.install = (app: App): void => {
  app.component(Empty.name, Empty)
}

const _Empty: SFCWithInstall<typeof Empty> = Empty

export default _Empty
