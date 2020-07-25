import { App } from 'vue'
import Badge from './src/index.vue'
export default (app: App) => {
  app.component(Badge.name, Badge)
}
