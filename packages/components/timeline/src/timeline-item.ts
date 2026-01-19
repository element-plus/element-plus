import { buildProps, iconPropType } from '@element-plus/utils'

import type { Component, ExtractPublicPropTypes } from 'vue'
import type TimelineItem from './timeline-item.vue'

export interface TimelineItemProps {
  /**
   * @description timestamp content
   */
  timestamp?: string
  /**
   * @description whether to show timestamp
   */
  hideTimestamp?: boolean
  /**
   * @description whether vertically centered
   */
  center?: boolean
  /**
   * @description position of timestamp
   */
  placement?: 'top' | 'bottom'
  /**
   * @description node type
   */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''
  /**
   * @description background color of node
   */
  color?: string
  /**
   * @description node size
   */
  size?: 'normal' | 'large'
  /**
   * @description icon component
   */
  icon?: string | Component
  /**
   * @description icon is hollow
   */
  hollow?: boolean
}

/**
 * @deprecated Removed after 3.0.0, Use `TimelineItemProps` instead.
 */
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
  hideTimestamp: Boolean,
  /**
   * @description whether vertically centered
   */
  center: Boolean,
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
  hollow: Boolean,
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `TimelineItemProps` instead.
 */
export type TimelineItemPropsPublic = ExtractPublicPropTypes<
  typeof timelineItemProps
>

export type TimelineItemInstance = InstanceType<typeof TimelineItem> & unknown
