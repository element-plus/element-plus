import { App } from 'vue'
import Cascader from './src/index.vue'

Cascader.install = (app: App): void => {
  app.component(Cascader.name, Cascader)
}

export default Cascader
