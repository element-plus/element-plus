import { App } from 'vue'
import ColorPicker from './src/index.vue'

ColorPicker.install = (app: App): void => {
  app.component(ColorPicker.name, ColorPicker)
}

export default ColorPicker
