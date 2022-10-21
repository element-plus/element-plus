import { buildProps, iconPropType, isNumber } from '@element-plus/utils'
import { componentSizes } from '@element-plus/constants'
import { avatarFallbackProps } from './avatar-fallback'
import { avatarImageProps } from './avatar-image'

import type { ExtractPropTypes } from 'vue'
import type Avatar from './avatar.vue'

export const avatarProps = buildProps({
  size: {
    type: [Number, String],
    values: componentSizes,
    default: '',
    validator: (val: unknown): val is number => isNumber(val),
  },
  shape: {
    type: String,
    values: ['circle', 'square'],
    default: 'circle',
  },
  icon: {
    type: iconPropType,
  },
  ...avatarImageProps,
  ...avatarFallbackProps,
} as const)
export type AvatarProps = ExtractPropTypes<typeof avatarProps>

export const avatarEmits = {
  error: (evt: Event) => evt instanceof Event,
}
export type AvatarEmits = typeof avatarEmits

export type AvatarInstance = InstanceType<typeof Avatar>
