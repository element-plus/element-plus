import { App } from 'vue'
import Link from './src/index.vue'

export default (app: App): void => {
  app.component(Link.name, Link)
}

export { Link }
