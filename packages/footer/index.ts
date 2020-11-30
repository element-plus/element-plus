import { App } from 'vue'
import Footer from '../container/src/footer.vue'

Footer.install = (app: App): void => {
  app.component(Footer.name, Footer)
}

export default Footer

