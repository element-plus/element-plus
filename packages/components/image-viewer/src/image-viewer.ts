import {
  buildProps,
  definePropType,
  isNumber,
  mutable,
} from '@element-plus/utils'

import type { Component, ExtractPropTypes } from 'vue'
import type ImageViewer from './image-viewer.vue'

export type ImageViewerAction =
  | 'zoomIn'
  | 'zoomOut'
  | 'clockwise'
  | 'anticlockwise'

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
  showProgress: {
    type: Boolean,
    default: false,
  },
  /**
   * @description set HTML attribute: crossorigin.
   */
  crossorigin: {
    type: definePropType<'anonymous' | 'use-credentials' | ''>(String),
  },
} as const)
export type ImageViewerProps = ExtractPropTypes<typeof imageViewerProps>

export const imageViewerEmits = {
  close: () => true,
  switch: (index: number) => isNumber(index),
  rotate: (deg: number) => isNumber(deg),
}
export type ImageViewerEmits = typeof imageViewerEmits

export interface ImageViewerMode {
  name: string
  icon: Component
}

export type ImageViewerInstance = InstanceType<typeof ImageViewer>
