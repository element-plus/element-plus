import {
  buildProps,
  definePropType,
  isNumber,
  mutable,
} from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

export const imageProps = buildProps({
  appendToBody: {
    type: Boolean,
    default: undefined,
  },
  hideOnClickModal: {
    type: Boolean,
    default: false,
  },
  src: {
    type: String,
    default: '',
  },
  fit: {
    type: String,
    values: ['', 'contain', 'cover', 'fill', 'none', 'scale-down'],
    default: '',
  },
  lazy: {
    type: Boolean,
    default: false,
  },
  scrollContainer: {
    type: definePropType<string | HTMLElement | undefined>([String, Object]),
  },
  previewSrcList: {
    type: definePropType<string[]>(Array),
    default: () => mutable([] as const),
  },
  previewTeleported: {
    type: Boolean,
    default: false,
  },
  zIndex: {
    type: Number,
  },
  initialIndex: {
    type: Number,
    default: 0,
  },
} as const)
export type ImageProps = ExtractPropTypes<typeof imageProps>

export const imageEmits = {
  error: (evt: Event) => evt instanceof Event,
  switch: (val: number) => isNumber(val),
  close: () => true,
}
export type ImageEmits = typeof imageEmits
