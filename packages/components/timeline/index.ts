import { withInstall, withNoopInstall } from '@element-plus/utils'
import Timeline from './src/timeline'
import TimelineItem from './src/timeline-item.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GTimeline: SFCWithInstall<typeof Timeline> & {
  TimelineItem: typeof TimelineItem
} = withInstall(Timeline, {
  TimelineItem,
})
export default GTimeline
export const GTimelineItem: SFCWithInstall<typeof TimelineItem> =
  withNoopInstall(TimelineItem)

export * from './src/timeline'
export * from './src/timeline-item'
export * from './src/tokens'
