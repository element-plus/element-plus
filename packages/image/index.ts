import { App } from 'vue'
import Image from './src/index.vue'

export default (app: App): void => {
  app.component(Image.name, Image)
}

export { Image }
