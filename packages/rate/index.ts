import { App } from 'vue'
import Rate from './src/index.vue'

Rate.install = (app: App): void => {
  app.component(Rate.name, Rate)
}

export default Rate
