import { App } from 'vue'
import Divider from './src/index.vue'

export default (app: App): void => {
  app.component(Divider.name, Divider)
}

export { Divider }
