import { withInstall } from '@element-plus/utils'
import Popper from './src/popper.vue'

import ElPopperArrow from './src/arrow.vue'
import ElPopperTrigger from './src/trigger.vue'
import ElPopperContent from './src/content.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export { ElPopperArrow, ElPopperTrigger, ElPopperContent }

export const ElPopper: SFCWithInstall<typeof Popper> = withInstall(Popper)
export default ElPopper

export * from './src/popper'
export * from './src/trigger'
export * from './src/content'
export * from './src/arrow'
export * from './src/constants'

export type { Placement, Options } from '@popperjs/core'
