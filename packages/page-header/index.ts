import { App } from 'vue'
import PageHeader from './src/index.vue'

PageHeader.install = (app: App): void => {
  app.component(PageHeader.name, PageHeader)
}

export default PageHeader

