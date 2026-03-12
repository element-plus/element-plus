import { withInstall, withInstallDirective } from '@element-plus/utils'
import Popover from './src/popover.vue'
import PopoverDirective, { VPopover } from './src/directive'

import type { SFCWithInstall } from '@element-plus/utils'

export const GPopoverDirective: SFCWithInstall<typeof PopoverDirective> =
  withInstallDirective(PopoverDirective, VPopover)

export const GPopover: SFCWithInstall<typeof Popover> & {
  directive: typeof GPopoverDirective
} = withInstall(Popover, {
  directive: GPopoverDirective,
})
export default GPopover

export * from './src/popover'
