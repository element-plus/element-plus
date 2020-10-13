import { App } from 'vue'
import Popover from './src/index.vue'
import PopoverDirective, { VPopover } from './src/directive'

export default (app: App): void => {
  app.component(Popover.name, Popover)
  app.directive(VPopover, PopoverDirective)
}
