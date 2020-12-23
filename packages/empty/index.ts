import { App } from 'vue'
import Empty from './src/index.vue'

Empty.install = (app: App): void => {
  app.component(Empty.name, Empty)
}

export default Empty
