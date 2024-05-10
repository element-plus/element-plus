import { buildProps, iconPropType } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type TimelineItem from './timeline-item.vue'

export const timelineItemProps = buildProps({
  /**
   * @description timestamp content
   */
  timestamp: {
    type: String,
    default: '',
  },
  /**
   * @description whether to show timestamp
   */
  hideTimestamp: {
    type: Boolean,
    default: false,
  },
  /**
   * @description whether vertically centered
   */
  center: {
    type: Boolean,
    default: false,
  },
  /**
   * @description position of timestamp
   */
  placement: {
    type: String,
    values: ['top', 'bottom'],
    default: 'bottom',
  },
  /**
   * @description node type
   */
  type: {
    type: String,
    values: ['primary', 'success', 'warning', 'danger', 'info'],
    default: '',
  },
  /**
   * @description background color of node
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * @description node size
   */
  size: {
    type: String,
    values: ['normal', 'large'],
    default: 'normal',
  },
  /**
   * @description icon component
   */
  icon: {
    type: iconPropType,
  },
  /**
   * @description icon is hollow
   */
  hollow: {
    type: Boolean,
    default: false,
  },
} as const)
export type TimelineItemProps = ExtractPropTypes<typeof timelineItemProps>

export type TimelineItemInstance = InstanceType<typeof TimelineItem>
