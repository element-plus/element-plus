import type { App } from 'vue'
import ElAvatar from '@element-plus/avatar'
import ElButton from '@element-plus/button'
import ElBadge from '@element-plus/badge'
import ElCard from '@element-plus/card'
import ElTag from '@element-plus/tag'
import ElLayout from '@element-plus/layout'
import ElDivider from '@element-plus/divider'
import ElTimeLine from '@element-plus/time-line'
import ElProgress from '@element-plus/progress'
import ElBreadcrumb from '@element-plus/breadcrumb'
import ElIcon from '@element-plus/icon'

export {
  ElAvatar,
  ElLayout,
  ElButton,
  ElBadge,
  ElCard,
  ElDivider,
  ElTag,
  ElTimeLine,
  ElProgress,
  ElBreadcrumb,
  ElIcon,
}

export default function install(app: App): void {
  ElAvatar(app)
  ElButton(app)
  ElBadge(app)
  ElCard(app)
  ElTag(app)
  ElLayout(app)
  ElDivider(app)
  ElTimeLine(app)
  ElProgress(app)
  ElBreadcrumb(app)
  ElIcon(app)
}
