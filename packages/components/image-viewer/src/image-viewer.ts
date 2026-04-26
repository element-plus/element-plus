import {
  buildProps,
  definePropType,
  isNumber,
  mutable,
} from '@element-plus/utils'

import type { Component, ExtractPublicPropTypes } from 'vue'
import type ImageViewer from './image-viewer.vue'

export type ImageViewerAction =
  | 'zoomIn'
  | 'zoomOut'
  | 'clockwise'
  | 'anticlockwise'

export type ImageViewerCrossorigin = 'anonymous' | 'use-credentials' | ''

export interface ImageViewerProps {
  /**
   * @description preview link list.
   */
  urlList?: string[]
  /**
   * @description preview backdrop z-index.
   */
  zIndex?: number
  /**
   * @description the initial preview image index, less than or equal to the length of `url-list`.
   */
  initialIndex?: number
  /**
   * @description whether preview is infinite.
   */
  infinite?: boolean
  /**
   * @description whether user can emit close event when clicking backdrop.
   */
  hideOnClickModal?: boolean
  /**
   * @description whether to append image itself to body. A nested parent element attribute transform should have this attribute set to `true`.
   */
  teleported?: boolean
  /**
   * @description whether the image-viewer can be closed by pressing ESC.
   */
  closeOnPressEscape?: boolean
  /**
   * @description the zoom rate of the image viewer zoom event.
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
  crossorigin?: ImageViewerCrossorigin
}

/**
 * @deprecated Removed after 3.0.0, Use `ImageViewerProps` instead.
 */
export const imageViewerProps = buildProps({
  /**
   * @description preview link list.
   */
  urlList: {
    type: definePropType<string[]>(Array),
    default: () => mutable([] as const),
  },
  /**
   * @description preview backdrop z-index.
   */
  zIndex: {
    type: Number,
  },
  /**
   * @description the initial preview image index, less than or equal to the length of `url-list`.
   */
  initialIndex: {
    type: Number,
    default: 0,
  },
  /**
   * @description whether preview is infinite.
   */
  infinite: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether user can emit close event when clicking backdrop.
   */
  hideOnClickModal: Boolean,
  /**
   * @description whether to append image itself to body. A nested parent element attribute transform should have this attribute set to `true`.
   */
  teleported: Boolean,
  /**
   * @description whether the image-viewer can be closed by pressing ESC.
   */
  closeOnPressEscape: {
    type: Boolean,
    default: true,
  },
  /**
   * @description the zoom rate of the image viewer zoom event.
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
    type: definePropType<ImageViewerCrossorigin>(String),
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `ImageViewerProps` instead.
 */
export type ImageViewerPropsPublic = ExtractPublicPropTypes<
  typeof imageViewerProps
>

export const imageViewerEmits = {
  close: () => true,
  error: (evt: Event) => evt instanceof Event,
  switch: (index: number) => isNumber(index),
  rotate: (deg: number) => isNumber(deg),
}
export type ImageViewerEmits = typeof imageViewerEmits

export interface ImageViewerMode {
  name: string
  icon: Component
}

export type ImageViewerInstance = InstanceType<typeof ImageViewer> & unknown
