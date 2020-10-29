import { App } from 'vue'
import Popconfirm from './src/index.vue'

export default (app: App): void => {
  app.component(Popconfirm.name, Popconfirm)
}

export { Popconfirm }
