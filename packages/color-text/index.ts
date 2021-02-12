import { App } from 'vue'
import ColorText from './src/index.vue'

ColorText.install = (app: App): void => {
  app.component(ColorText.name, ColorText)
}

export default ColorText
