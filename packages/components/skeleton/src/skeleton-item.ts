import { buildProps, definePropType } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'

export type Variants =
  | 'circle'
  | 'rect'
  | 'h1'
  | 'h3'
  | 'text'
  | 'caption'
  | 'p'
  | 'image'
  | 'button'

export const skeletonItemProps = buildProps({
  variant: {
    type: definePropType<Variants>([String]),
    default: 'text',
  },
} as const)
export type SkeletonItemProps = ExtractPropTypes<typeof skeletonItemProps>
