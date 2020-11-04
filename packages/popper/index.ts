import type { App } from 'vue'
import Popper from './src/index.vue'

export default (app: App) => {
  app.component(Popper.name, Popper)
}

export { Popper }
export { default as defaultProps, Effect } from './src/use-popper/defaults'
export type { TriggerType, IPopperOptions } from './src/use-popper/defaults'
export { default as usePopper } from './src/use-popper/index'
export * from './src/renderers/index'
