import { withInstall } from '@element-plus/utils/with-install'

import Popper from './src/popper'

export const ElPopper = withInstall(Popper)
export default ElPopper

export {
  default as popperDefaultProps,
  Effect,
} from './src/use-popper/defaults'
export * from './src/renderers'
export { usePopper } from './src/use-popper'
export type { Placement, Options } from '@popperjs/core'
export type { EmitType } from './src/use-popper'
export type {
  TriggerType,
  IPopperOptions,
  PopperInstance,
} from './src/use-popper/defaults'
