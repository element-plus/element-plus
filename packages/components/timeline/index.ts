import { withInstall, withNoopInstall } from '@element-plus/utils'
import Timeline from './src/timeline'
import TimelineItem from './src/timeline-item.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElTimeline: SFCWithInstall<typeof Timeline> & {
  TimelineItem: typeof TimelineItem
} = withInstall(Timeline, {
  TimelineItem,
})
export default ElTimeline
export const ElTimelineItem: SFCWithInstall<typeof TimelineItem> =
  withNoopInstall(TimelineItem)

export * from './src/timeline'
export * from './src/timeline-item'
