import { App } from 'vue'
import Badge from './src/index.vue'

Badge.install = (app: App): void => {
  app.component(Badge.name, Badge)
}

export default Badge
