import { buildProps, definePropType } from '@element-plus/utils/props'
import type { ExtractPropTypes, Component } from 'vue'
import type { ObjectFitProperty } from 'csstype'

export const avatarProps = buildProps({
  size: {
    type: [Number, String],
    values: ['large', 'default', 'small'],
    default: 'large',
    validator: (val: unknown): val is number => typeof val === 'number',
  },
  shape: {
    type: String,
    values: ['circle', 'square'],
    default: 'circle',
  },
  icon: {
    type: definePropType<string | Component>([String, Object]),
  },
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
