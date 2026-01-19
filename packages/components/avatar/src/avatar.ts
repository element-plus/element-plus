import {
  buildProps,
  definePropType,
  iconPropType,
  isNumber,
} from '@element-plus/utils'
import { componentSizes } from '@element-plus/constants'

import type { CSSProperties, Component, ExtractPublicPropTypes } from 'vue'
import type { ComponentSize } from '@element-plus/constants'

export interface AvatarProps {
  /**
   * @description avatar size.
   */
  size?: ComponentSize
  /**
   * @description avatar shape.
   */
  shape?: 'circle' | 'square'
  /**
   * @description representation type to icon, more info on icon component.
   */
  icon?: string | Component
  /**
   * @description the source of the image for an image avatar.
   */
  src?: string
  /**
   * @description native attribute `alt` of image avatar.
   */
  alt?: string
  /**
   * @description native attribute srcset of image avatar.
   */
  srcSet?: string
  /**
   * @description set how the image fit its container for an image avatar.
   */
  fit?: CSSProperties['object-fit']
}

/**
 * @deprecated Removed after 3.0.0, Use `AvatarProps` instead.
 */
export const avatarProps = buildProps({
  /**
   * @description avatar size.
   */
  size: {
    type: [Number, String],
    values: componentSizes,
    validator: (val: unknown): val is number => isNumber(val),
  },
  /**
   * @description avatar shape.
   */
  shape: {
    type: String,
    values: ['circle', 'square'],
  },
  /**
   * @description representation type to icon, more info on icon component.
   */
  icon: {
    type: iconPropType,
  },
  /**
   * @description the source of the image for an image avatar.
   */
  src: {
    type: String,
    default: '',
  },
  /**
   * @description native attribute `alt` of image avatar.
   */
  alt: String,
  /**
   * @description native attribute srcset of image avatar.
   */
  srcSet: String,
  /**
   * @description set how the image fit its container for an image avatar.
   */
  fit: {
    type: definePropType<CSSProperties['object-fit']>(String),
    default: 'cover',
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `AvatarProps` instead.
 */
export type AvatarPropsPublic = ExtractPublicPropTypes<typeof avatarProps>

export const avatarEmits = {
  error: (evt: Event) => evt instanceof Event,
}
export type AvatarEmits = typeof avatarEmits
