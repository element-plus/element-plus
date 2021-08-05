import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Container from './src/container.vue'
import Aside from './src/aside.vue'
import Footer from './src/footer.vue'
import Header from './src/header.vue'
import Main from './src/main.vue'

Container.install = (app: App): void => {
  app.component(Container.name, Container)
  app.component(Aside.name, Aside)
  app.component(Footer.name, Footer)
  app.component(Header.name, Header)
  app.component(Main.name, Main)
}

Container.Aside = Aside
Container.Footer = Footer
Container.Header = Header
Container.Main = Main

const _Container = Container as any as SFCWithInstall<typeof Container> & {
  Aside: typeof Aside
  Footer: typeof Footer
  Header: typeof Header
  Main: typeof Main
}

export default _Container
