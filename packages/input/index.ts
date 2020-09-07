import { App } from 'vue'
import Input from './src/index.vue'
export default (app: App): void => {
  app.component(Input.name, Input)
}
