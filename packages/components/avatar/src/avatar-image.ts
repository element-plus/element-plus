import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type { ObjectFitProperty } from 'csstype'
import type { ImageLoadingState } from '@element-plus/tokens'

export const avatarImageProps = buildProps({
  alt: String,
  src: {
    type: String,
    default: '',
  },
  srcSet: String,
  fit: {
    type: definePropType<ObjectFitProperty>(String),
    default: 'cover',
  },
} as const)

export const avatarImageEmits = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // or stateChange
  'state-change': (state: ImageLoadingState) =>
    ['loading', 'loaded', 'error'].includes(state),
}

export type AvatarImageProps = ExtractPropTypes<typeof avatarImageProps>
export type AvatarImageEmits = typeof avatarImageEmits
