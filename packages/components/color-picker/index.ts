import { withInstall } from '@element-plus/utils'
import ColorPicker from './src/color-picker.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GColorPicker: SFCWithInstall<typeof ColorPicker> =
  withInstall(ColorPicker)
export default GColorPicker

export * from './src/color-picker'
