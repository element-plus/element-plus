import { withInstall, withNoopInstall } from '@element-plus/utils'
import Timeline from './src/timeline'
import TimelineItem from './src/timeline-item.vue'

export const ElTimeline = withInstall(Timeline, {
  TimelineItem,
})
export default ElTimeline
export const ElTimelineItem = withNoopInstall(TimelineItem)

export * from './src/timeline'
export * from './src/timeline-item'
