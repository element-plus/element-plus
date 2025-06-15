import { withInstall } from '@element-plus/utils'

import Slider from './src/slider.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElSlider: SFCWithInstall<typeof Slider> = withInstall(Slider)
export default ElSlider

export * from './src/slider'
export * from './src/constants'
