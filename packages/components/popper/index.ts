import Popper from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Popper.install = (app: App): void => {
  app.component(Popper.name, Popper)
}

const _Popper = Popper as SFCWithInstall<typeof Popper>

export default _Popper
export const ElPopper = _Popper

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
