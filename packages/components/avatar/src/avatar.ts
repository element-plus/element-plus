import { buildProp, definePropType } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'
import type { ObjectFitProperty } from 'csstype'

export const avatarProps = {
  size: buildProp({
    type: [Number, String],
    values: ['large', 'medium', 'small'],
    default: 'large',
    validator: (val): val is number => typeof val === 'number',
  } as const),

  shape: buildProp({
    type: String,
    values: ['circle', 'square'],
    default: 'circle',
  } as const),

  icon: String,
  src: {
    type: String,
    default: '',
  },
  alt: String,
  srcSet: String,
  fit: buildProp({
    type: definePropType<ObjectFitProperty>(String),
    default: 'cover',
  } as const),
} as const
export type AvatarProps = ExtractPropTypes<typeof avatarProps>

export const avatarEmits = {
  error: (evt: Event) => evt instanceof Event,
}
export type AvatarEmits = typeof avatarEmits
