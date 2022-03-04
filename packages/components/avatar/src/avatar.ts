import { buildProps, definePropType, iconPropType } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type { ObjectFitProperty } from 'csstype'
import type Avatar from './avatar.vue'

export const avatarProps = buildProps({
  size: {
    type: [Number, String],
    values: ['large', 'default', 'small'],
    default: 'default',
    validator: (val: unknown): val is number => typeof val === 'number',
  },
  shape: {
    type: String,
    values: ['circle', 'square'],
    default: 'circle',
  },
  icon: {
    type: iconPropType,
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

export type AvatarInstance = InstanceType<typeof Avatar>
