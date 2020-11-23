import { App } from 'vue'
import Image from './src/index.vue'

Image.install = (app: App): void => {
  app.component(Image.name, Image)
}

export default Image
