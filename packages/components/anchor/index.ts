import { App } from 'vue'
import Anchor from './src/anchor.vue'
import AnchorLink from './src/anchor-link.vue'

Anchor.install = (app: App): void => {
  app.component(Anchor.name, Anchor)
  app.component(AnchorLink.name, AnchorLink)
}

export default Anchor
