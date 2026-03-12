import { withInstall } from '@element-plus/utils'
import Slider from './src/slider.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GSlider: SFCWithInstall<typeof Slider> = withInstall(Slider)
export default GSlider

export * from './src/slider'
export * from './src/constants'
