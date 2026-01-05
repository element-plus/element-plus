import { placements } from '@popperjs/core'
import { useTooltipContentProps } from '@element-plus/components/tooltip'
import { buildProps, definePropType } from '@element-plus/utils'
import { avatarProps } from './avatar'

import type { ExtractPropTypes, ExtractPublicPropTypes, StyleValue } from 'vue'
import type { Placement, PopperEffect } from '@element-plus/components/popper'

export const avatarGroupProps = buildProps({
  /**
   * @description control the size of avatars in this avatar-group
   */
  size: avatarProps.size,
  /**
   * @description control the shape of avatars in this avatar-group
   */
  shape: avatarProps.shape,
  /**
   * @description whether to collapse avatars
   */
  collapseAvatars: Boolean,
  /**
   * @description whether show all collapsed avatars when mouse hover text of the collapse-avatar. To use this, `collapse-avatars` must be true
   */
  collapseAvatarsTooltip: Boolean,
  /**
   * @description the max avatars number to be shown. To use this, `collapse-avatars` must be true
   */
  maxCollapseAvatars: {
    type: Number,
    default: 1,
  },
  /**
   * @description tooltip theme, built-in theme: `dark` / `light`
   */
  effect: {
    type: definePropType<PopperEffect>(String),
    default: 'light',
  },
  /**
   * @description placement of tooltip
   */
  placement: {
    type: definePropType<Placement>(String),
    values: placements,
    default: 'top',
  },
  /**
   * @description custom class name for tooltip
   */
  popperClass: useTooltipContentProps.popperClass,
  /**
   * @description custom style for tooltip
   */
  popperStyle: useTooltipContentProps.popperStyle,
  /**
   * @description custom class name for the collapse-avatar
   */
  collapseClass: String,
  /**
   * @description custom style for the collapse-avatar
   */
  collapseStyle: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },
} as const)
export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>
export type AvatarGroupPropsPublic = ExtractPublicPropTypes<
  typeof avatarGroupProps
>
