import { App } from 'vue'
import Badge from './src/index.vue'
export default (app: App): void => {
  app.component(Badge.name, Badge)
}
