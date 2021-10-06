import { buildProps, definePropType } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'
import type { ObjectFitProperty } from 'csstype'

export const avatarProps = buildProps({
  size: {
    type: [Number, String],
    values: ['large', 'medium', 'small'],
    default: 'large',
    validator: (val: unknown): val is number => typeof val === 'number',
  },

  shape: {
    type: String,
    values: ['circle', 'square'],
    default: 'circle',
  },

  icon: String,
  src: {
    type: String,
    default: '',
  },
  alt: String,
  srcSet: String,
  fit: {
    type: definePropType<ObjectFitProperty>(String),
    default: 'cover',
  },
} as const)
export type AvatarProps = ExtractPropTypes<typeof avatarProps>

export const avatarEmits = {
  error: (evt: Event) => evt instanceof Event,
}
export type AvatarEmits = typeof avatarEmits
