import { definePropType, buildProps } from '@element-plus/utils/props'
import type { Component, ExtractPropTypes } from 'vue'
import type TimelineItem from './timeline-item.vue'

export const timelineItemProps = buildProps({
  timestamp: {
    type: String,
    default: '',
  },
  hideTimestamp: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
  placement: {
    type: String,
    default: 'bottom',
  },
  type: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'normal',
  },
  icon: {
    type: definePropType<string | Component>([String, Object]),
    default: '',
  },
  hollow: {
    type: Boolean,
    default: false,
  },
} as const)
export type TimelineItemProps = ExtractPropTypes<typeof timelineItemProps>

export type TimelineItemInstance = InstanceType<typeof TimelineItem>
