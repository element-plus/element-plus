import { withInstall } from '@element-plus/utils'
import ColorPickerPanel from './src/color-picker-panel.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GColorPickerPanel: SFCWithInstall<typeof ColorPickerPanel> =
  withInstall(ColorPickerPanel)
export default GColorPickerPanel

export * from './src/color-picker-panel'
