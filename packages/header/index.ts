import { App } from 'vue'
import Header from '../container/src/header.vue'

Header.install = (app: App): void => {
  app.component(Header.name, Header)
}

export default Header

