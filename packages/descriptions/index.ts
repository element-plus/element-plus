import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Descriptions from './src/index.vue'

Descriptions.install = (app: App): void => {
  app.component(Descriptions.name, Descriptions)
}

const _Descriptions: SFCWithInstall<typeof Descriptions> = Descriptions

export default _Descriptions
