import type { App } from 'vue'
import Popper from './src/index.vue'

export default (app: App) => {
  app.component(Popper.name, Popper)
}

export { Popper }
export * from './src/use-popper/defaults'
export * from './src/renderers/index'
