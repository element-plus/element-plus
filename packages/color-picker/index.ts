import { App } from 'vue'
import ColorPicker from './src/index.vue'
export default (app: App): void => {
  app.component(ColorPicker.name, ColorPicker)
}

export { ColorPicker }
