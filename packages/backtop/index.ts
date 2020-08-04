import { App } from 'vue'
import Backtop from './src/index.vue'
export default (app: App): void => {
  app.component(Backtop.name, Backtop)
}
