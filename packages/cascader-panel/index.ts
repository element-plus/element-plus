import { App } from 'vue'
import CascaderPanel from './src/index.vue'


CascaderPanel.install = (app: App): void => {
  app.component(CascaderPanel.name, CascaderPanel)
}

export default CascaderPanel
export * from './src/types'
export * from './src/config'
