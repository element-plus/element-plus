import {
  buildProps,
  definePropType,
  isNumber,
  mutable,
} from '@element-plus/utils'
import { rawImageProps } from '@element-plus/components/image-viewer'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type Image from './image.vue'

export const imageProps = buildProps({
  ...rawImageProps,
  /**
   * @description when enabling preview, use this flag to control whether clicking on backdrop can exit preview mode.
   */
  hideOnClickModal: Boolean,
  /**
   * @description indicate how the image should be resized to fit its container, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).
   */
  fit: {
    type: String,
    values: ['', 'contain', 'cover', 'fill', 'none', 'scale-down'],
    default: '',
  },
  /**
   * @description whether to use lazy load.
   */
  lazy: Boolean,
  /**
   * @description the container to add scroll listener when using lazy load.
   */
  scrollContainer: {
    type: definePropType<string | HTMLElement | undefined>([String, Object]),
  },
  /**
   * @description allow big image preview.
   */
  previewSrcList: {
    type: definePropType<string[]>(Array),
    default: () => mutable([] as const),
  },
  /**
   * @description whether to append image-viewer to body. A nested parent element attribute transform should have this attribute set to `true`.
   */
  previewTeleported: Boolean,
  /**
   * @description set image preview z-index.
   */
  zIndex: {
    type: Number,
  },
  /**
   * @description initial preview image index, less than the length of `url-list`.
   */
  initialIndex: {
    type: Number,
    default: 0,
  },
  /**
   * @description whether the viewer preview is infinite.
   */
  infinite: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether the image-viewer can be closed by pressing ESC.
   */
  closeOnPressEscape: {
    type: Boolean,
    default: true,
  },
  /**
   * @description the zoom rate of the image viewer zoom event
   */
  zoomRate: {
    type: Number,
    default: 1.2,
  },
  /**
   * @description the min scale of the image viewer zoom event.
   */
  minScale: {
    type: Number,
    default: 0.2,
  },
  /**
   * @description the max scale of the image viewer zoom event.
   */
  maxScale: {
    type: Number,
    default: 7,
  },
  /**
   * @description show preview image progress content.
   */
  showProgress: Boolean,
} as const)
export type ImageProps = ExtractPropTypes<typeof imageProps>
export type ImagePropsPublic = __ExtractPublicPropTypes<typeof imageProps>

export const imageEmits = {
  load: (evt: Event) => evt instanceof Event,
  error: (evt: Event) => evt instanceof Event,
  switch: (val: number) => isNumber(val),
  close: () => true,
  show: () => true,
}
export type ImageEmits = typeof imageEmits
export type ImageInstance = InstanceType<typeof Image> & unknown
