import {
  buildProps,
  definePropType,
  isNumber,
  mutable,
} from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type Image from './image.vue'

export type ImageFitType =
  | ''
  | 'contain'
  | 'cover'
  | 'fill'
  | 'none'
  | 'scale-down'
export type ImageCrossorigin = 'anonymous' | 'use-credentials' | ''

export interface ImageProps {
  /**
   * @description when enabling preview, use this flag to control whether clicking on backdrop can exit preview mode.
   */
  hideOnClickModal?: boolean
  /**
   * @description image source, same as native.
   */
  src?: string
  /**
   * @description indicate how the image should be resized to fit its container, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).
   */
  fit?: ImageFitType
  /**
   * @description Indicates how the browser should load the image, same as [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#loading)
   */
  loading?: 'eager' | 'lazy'
  /**
   * @description whether to use lazy load.
   */
  lazy?: boolean
  /**
   * @description the container to add scroll listener when using lazy load.
   */
  scrollContainer?: string | HTMLElement
  /**
   * @description allow big image preview.
   */
  previewSrcList?: string[]
  /**
   * @description whether to append image-viewer to body. A nested parent element attribute transform should have this attribute set to `true`.
   */
  previewTeleported?: boolean
  /**
   * @description set image preview z-index.
   */
  zIndex?: number
  /**
   * @description initial preview image index, less than the length of `url-list`.
   */
  initialIndex?: number
  /**
   * @description whether the viewer preview is infinite.
   */
  infinite?: boolean
  /**
   * @description whether the image-viewer can be closed by pressing ESC.
   */
  closeOnPressEscape?: boolean
  /**
   * @description the zoom rate of the image viewer zoom event
   */
  zoomRate?: number
  /**
   * @description preview image scale.
   */
  scale?: number
  /**
   * @description the min scale of the image viewer zoom event.
   */
  minScale?: number
  /**
   * @description the max scale of the image viewer zoom event.
   */
  maxScale?: number
  /**
   * @description show preview image progress content.
   */
  showProgress?: boolean
  /**
   * @description set HTML attribute: crossorigin.
   */
  crossorigin?: ImageCrossorigin
}

/**
 * @deprecated Removed after 3.0.0, Use `ImageProps` instead.
 */
export const imageProps = buildProps({
  /**
   * @description when enabling preview, use this flag to control whether clicking on backdrop can exit preview mode.
   */
  hideOnClickModal: Boolean,
  /**
   * @description image source, same as native.
   */
  src: {
    type: String,
    default: '',
  },
  /**
   * @description indicate how the image should be resized to fit its container, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).
   */
  fit: {
    type: String,
    values: ['', 'contain', 'cover', 'fill', 'none', 'scale-down'],
    default: '',
  },
  /**
   * @description Indicates how the browser should load the image, same as [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#loading)
   */
  loading: {
    type: String,
    values: ['eager', 'lazy'],
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
   * @description preview image scale.
   */
  scale: {
    type: Number,
    default: 1,
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
  /**
   * @description set HTML attribute: crossorigin.
   */
  crossorigin: {
    type: definePropType<ImageCrossorigin>(String),
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `ImageProps` instead.
 */
export type ImagePropsPublic = ExtractPublicPropTypes<typeof imageProps>

export const imageEmits = {
  load: (evt: Event) => evt instanceof Event,
  error: (evt: Event) => evt instanceof Event,
  switch: (val: number) => isNumber(val),
  close: () => true,
  show: () => true,
}
export type ImageEmits = typeof imageEmits
export type ImageInstance = InstanceType<typeof Image> & unknown
