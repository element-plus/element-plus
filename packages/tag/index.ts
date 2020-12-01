import { App } from 'vue'
import Tag from './src/index.vue'

Tag.install = (app: App): void => {
  app.component(Tag.name, Tag)
}

export default Tag
