import { App } from 'vue'
import Upload from './src/index.vue'
export default (app: App): void => {
  app.component(Upload.name, Upload)
}
