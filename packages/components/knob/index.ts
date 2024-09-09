import { withInstall } from '@element-plus/utils'

import Knob from './src/knob.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElKnob: SFCWithInstall<typeof Knob> = withInstall(Knob)
export default ElKnob

export * from './src/knob'
