import { withInstall, withNoopInstall } from '@element-plus/utils/with-install'
import Timeline from './src/index.vue'
import TimelineItem from './src/item.vue'

export const ElTimeline = withInstall(Timeline, {
  TimelineItem,
})
export default ElTimeline
export const ElTimelineItem = withNoopInstall(TimelineItem)
