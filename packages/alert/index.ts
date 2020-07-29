import { App } from 'vue'
import Alert from './src/index.vue'
export default (app: App): void => {
  app.component(Alert.name, Alert)
}
