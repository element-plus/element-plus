import { GInfiniteScroll } from '@element-plus/components/infinite-scroll'
import { GLoading } from '@element-plus/components/loading'
import { GMessage } from '@element-plus/components/message'
import { GMessageBox } from '@element-plus/components/message-box'
import { GNotification } from '@element-plus/components/notification'
import { GPopoverDirective } from '@element-plus/components/popover'

import type { Plugin } from 'vue'

export default [
  GInfiniteScroll,
  GLoading,
  GMessage,
  GMessageBox,
  GNotification,
  GPopoverDirective,
] as Plugin[]
