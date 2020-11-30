import { App } from 'vue'
import Input from './src/index.vue'

Input.install = (app: App): void => {
  app.component(Input.name, Input)
}

export default Input
