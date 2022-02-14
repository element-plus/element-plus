import { withInstall } from '@element-plus/utils'
import Popper from './src/popper.vue'

export { default as ElPopperArrow } from './src/arrow.vue'
export { default as ElPopperTrigger } from './src/trigger.vue'
export { default as ElPopperContent } from './src/content.vue'

export const ElPopper = withInstall(Popper)
export default ElPopper

export * from './src/popper'
export * from './src/tokens'
export { useDeprecateAppendToBody } from './src/deprecation'

export type { Placement, Options } from '@popperjs/core'
