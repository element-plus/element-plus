import { App } from 'vue'
import Cascader from './src/index.vue'
export default (app: App): void => {
  app.component(Cascader.name, Cascader)
}
