import { App } from 'vue'
import Radio from './src/index.vue'
export default (app: App): void => {
  app.component(Radio.name, Radio)
}
