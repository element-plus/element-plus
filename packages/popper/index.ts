import type { App } from 'vue'
import Popper from './src/index.vue'

export default (app: App) => {
  app.component(Popper.name, Popper)
}

export { Popper }
export { default as defaultProps, Effect } from './src/use-popper'
export type { TriggerType } from './src/use-popper'
export * from './src/renderers/index'
