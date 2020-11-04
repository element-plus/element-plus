import { App } from 'vue'
import CascaderPanel from './src/index.vue'

export default (app: App): void => {
  app.component(CascaderPanel.name, CascaderPanel)
}

export { CascaderPanel }
export * from './src/types'
export * from './src/config'
