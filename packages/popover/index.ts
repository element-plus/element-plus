import Popover from './src/index.vue'
import PopoverDirective, { VPopover } from './src/directive'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Popover.install = (app: App): void => {
  app.component(Popover.name, Popover)
  app.directive(VPopover, PopoverDirective)
}
Popover.directive = PopoverDirective

const _Popover = Popover as any as SFCWithInstall<typeof Popover> & {
  directive: typeof PopoverDirective
}

export default _Popover
