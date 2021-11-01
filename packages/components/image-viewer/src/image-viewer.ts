import { buildProps, definePropType, mutable } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'

export const imageViewerProps = buildProps({
  urlList: {
    type: definePropType<string[]>(Array),
    default: () => mutable([] as const),
  },
  zIndex: {
    type: Number,
    default: 2000,
  },
  initialIndex: {
    type: Number,
    default: 0,
  },
  infinite: {
    type: Boolean,
    default: true,
  },
  hideOnClickModal: {
    type: Boolean,
    default: false,
  },
} as const)
export type ImageViewerProps = ExtractPropTypes<typeof imageViewerProps>

export const imageViewerEmits = {
  close: () => true,
  switch: (index: number) => typeof index === 'number',
}
export type ImageViewerEmits = typeof imageViewerEmits
