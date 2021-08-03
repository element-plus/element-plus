import ColorPicker from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

ColorPicker.install = (app: App): void => {
  app.component(ColorPicker.name, ColorPicker)
}

const _ColorPicker: SFCWithInstall<typeof ColorPicker> = ColorPicker

export default _ColorPicker
