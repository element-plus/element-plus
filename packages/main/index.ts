import { App } from 'vue'
import Main from '../container/src/main.vue'

Main.install = (app: App): void => {
  app.component(Main.name, Main)
}

export default Main

