import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import CollapseTransition from '../transition/collapse-transition/index.vue'

CollapseTransition.install = (app: App): void => {
  app.component(CollapseTransition.name, CollapseTransition)
}

const _CollapseTransition: SFCWithInstall<typeof CollapseTransition> = CollapseTransition

export default _CollapseTransition
