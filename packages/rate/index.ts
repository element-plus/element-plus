import { App } from 'vue'
import Rate from './src/index.vue'
export default (app: App): void => {
  app.component(Rate.name, Rate)
}
