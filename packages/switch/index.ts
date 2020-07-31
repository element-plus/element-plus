import { App } from 'vue'
import Switch from './src/index.vue'
export default (app: App): void => {
  app.component(Switch.name, Switch)
}
