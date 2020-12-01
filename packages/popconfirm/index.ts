import { App } from 'vue'
import Popconfirm from './src/index.vue'

Popconfirm.install = (app: App): void => {
  app.component(Popconfirm.name, Popconfirm)
}

export default Popconfirm
