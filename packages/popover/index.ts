import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Popover from './src/index.vue'
import PopoverDirective, { VPopover } from './src/directive'

Popover.install = (app: App): void => {
  app.component(Popover.name, Popover)
  app.directive(VPopover, PopoverDirective)
}
Popover.directive = PopoverDirective

const _Popover: SFCWithInstall<typeof Popover> = Popover

export default _Popover
