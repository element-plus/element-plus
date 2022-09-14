import Statistic from './src/index.vue'
import type { App } from 'vue'

Statistic.install = (app: App): void => {
  app.component(Statistic.name, Statistic)
}

export default Statistic
