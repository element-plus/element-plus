import { App } from 'vue'
import Container from './src/container.vue'

Container.install = (app: App): void => {
  app.component(Container.name, Container)
}

export default Container
