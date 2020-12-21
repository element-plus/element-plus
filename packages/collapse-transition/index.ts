import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import CollapseTransition from '../transition/collapse-transition/index.vue'

CollapseTransition.install = (app: App): void => {
  app.component(CollapseTransition.name, CollapseTransition)
}

const _CollapseTransition: SFCWithInstall<typeof CollapseTransition> = CollapseTransition

export default _CollapseTransition
