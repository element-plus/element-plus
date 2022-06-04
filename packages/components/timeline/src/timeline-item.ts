import { buildProps, iconPropType } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
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
    values: ['top', 'bottom'],
    default: 'bottom',
  },
  type: {
    type: String,
    values: ['primary', 'success', 'warning', 'danger', 'info'],
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    values: ['normal', 'large'],
    default: 'normal',
  },
  icon: {
    type: iconPropType,
    default: '',
  },
  hollow: {
    type: Boolean,
    default: false,
  },
} as const)
export type TimelineItemProps = ExtractPropTypes<typeof timelineItemProps>

export type TimelineItemInstance = InstanceType<typeof TimelineItem>
