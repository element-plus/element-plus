import { App } from 'vue'
import Tag from './src/index.vue'
export default (app: App): void => {
  app.component(Tag.name, Tag)
}
