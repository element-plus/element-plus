import Popover from './src/index.vue'
import PopoverDirective, { VPopover } from './src/directive'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Popover.install = (app: App): void => {
  app.component(Popover.name, Popover)
}
;(PopoverDirective as SFCWithInstall<typeof PopoverDirective>).install = (
  app: App
) => {
  app.directive(VPopover, PopoverDirective)
}

const _PopoverDirective = PopoverDirective as SFCWithInstall<
  typeof PopoverDirective
>

Popover.directive = _PopoverDirective

const _Popover = Popover as any as SFCWithInstall<typeof Popover> & {
  directive: typeof _PopoverDirective
}

export default _Popover
export const ElPopover = _Popover
export const ElPopoverDirective = _PopoverDirective
