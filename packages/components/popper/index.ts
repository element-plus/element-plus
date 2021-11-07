import { withInstall } from '@element-plus/utils/with-install'
import Popper from './src/popper.vue'

export const ElPopper = withInstall(Popper)
export default ElPopper

export * from './src/use-popper/popper'
export { default as usePopper } from './src/use-popper/index'
export type { Placement, Options } from '@popperjs/core'
export * from './src/renderers/index'
