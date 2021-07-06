import { App } from 'vue'
import AnchorLink from '../anchor/src/anchor-link.vue'

AnchorLink.install = (app: App): void => {
  app.component(AnchorLink.name, AnchorLink)
}

export default AnchorLink
