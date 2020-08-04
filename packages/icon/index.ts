import { App } from 'vue'
import Icon from './src/index.vue'
export default (app: App): void => {
  app.component(Icon.name, Icon)
}
