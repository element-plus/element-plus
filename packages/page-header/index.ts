import { App } from 'vue'
import PageHeader from './src/index.vue'
export default (app: App): void => {
  app.component(PageHeader.name, PageHeader)
}
