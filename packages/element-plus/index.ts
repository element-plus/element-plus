import type { App } from 'vue'
import ElButton from '@element-plus/button'
import ElBadge from '@element-plus/badge'
import ElCard from '@element-plus/card'
import ElTag from '@element-plus/tag'
import ElDivider from '@element-plus/divider'
import ElTimeLine from '@element-plus/time-line'
import ElProgress from '@element-plus/progress'

export {
  ElButton, ElBadge, ElCard, ElDivider, ElTag, ElTimeLine, ElProgress,
}

export default function install(app: App): void {
  ElButton(app)
  ElBadge(app)
  ElCard(app)
  ElTag(app)
  ElDivider(app)
  ElTimeLine(app)
  ElProgress(app)
}
