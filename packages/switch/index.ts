import { App } from 'vue'
import Switch from './src/index.vue'

Switch.install = (app: App): void => {
  app.component(Switch.name, Switch)
}

export default Switch
