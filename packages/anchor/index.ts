import { App } from 'vue'
import Anchor from './src/anchor.vue'

Anchor.install = (app: App): void => {
  app.component(Anchor.name, Anchor)
}

export default Anchor
