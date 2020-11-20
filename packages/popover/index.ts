import { App } from 'vue'
import Popover from './src/index.vue'
import PopoverDirective, { VPopover } from './src/directive'

Popover.install = (app: App): void => {
  app.component(Popover.name, Popover)
  app.directive(VPopover, PopoverDirective)
}
Popover.directive = PopoverDirective
export default Popover
