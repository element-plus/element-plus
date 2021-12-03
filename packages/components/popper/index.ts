import { withInstall } from '@element-plus/utils/with-install'
import Popper from './src/popper.vue'

export { default as ElPopperArrow } from './src/arrow.vue'
export { default as ElPopperTrigger } from './src/trigger.vue'
export { default as ElPopperContent } from './src/content.vue'

export const ElPopper = withInstall(Popper)
export default ElPopper

export * from './src/popper'

export {
  default as popperDefaultProps,
  Effect,
} from './src/use-popper/defaults'
export * from './src/renderers'
export { default as usePopper } from './src/use-popper'
export type { Placement, Options } from '@popperjs/core'
export type { EmitType } from './src/use-popper'
export type {
  TriggerType,
  IPopperOptions,
  PopperInstance,
} from './src/use-popper/defaults'
