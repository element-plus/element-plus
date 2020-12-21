import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Container from './src/container.vue'

Container.install = (app: App): void => {
  app.component(Container.name, Container)
}

const _Container: SFCWithInstall<typeof Container> = Container

export default _Container
