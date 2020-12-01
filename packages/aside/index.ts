import { App } from 'vue'
import Aside from '../container/src/aside.vue'

Aside.install = (app: App): void => {
  app.component(Aside.name, Aside)
}

export default Aside

