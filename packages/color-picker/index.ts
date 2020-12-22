import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import ColorPicker from './src/index.vue'

ColorPicker.install = (app: App): void => {
  app.component(ColorPicker.name, ColorPicker)
}

const _ColorPicker: SFCWithInstall<typeof ColorPicker> = ColorPicker

export default _ColorPicker
