import { App } from 'vue'
import TreeSelect from './src/index.vue'

TreeSelect.install = (app: App): void => {
  app.component(TreeSelect.name, TreeSelect)
}

export default TreeSelect
