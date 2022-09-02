import {
  buildProps,
  definePropType,
  isNumber,
  mutable,
} from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

export const imageProps = buildProps({
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
  loading: {
    type: String,
    values: ['eager', 'lazy'],
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
  infinite: {
    type: Boolean,
    default: true,
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true,
  },
} as const)
export type ImageProps = ExtractPropTypes<typeof imageProps>

export const imageEmits = {
  load: (evt: Event) => evt instanceof Event,
  error: (evt: Event) => evt instanceof Event,
  switch: (val: number) => isNumber(val),
  close: () => true,
  show: () => true,
}
export type ImageEmits = typeof imageEmits
