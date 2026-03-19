import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type { Placement, Strategy, VirtualElement } from '@floating-ui/dom'

export const tourStrategies = ['absolute', 'fixed'] as const

export const tourPlacements = [
  'top-start',
  'top-end',
  'top',
  'bottom-start',
  'bottom-end',
  'bottom',
  'left-start',
  'left-end',
  'left',
  'right-start',
  'right-end',
  'right',
] as const

export interface TourContentProps {
  /**
   * @description position of the guide card relative to the target element
   */
  placement?: Placement
  /**
   * @description the reference dom
   */
  reference?: HTMLElement | VirtualElement | null
  /**
   * @description position strategy of the content
   */
  strategy?: Strategy
  /**
   * @description offset of the arrow
   */
  offset?: number
  /**
   * @description whether to show the arrow
   */
  showArrow?: boolean
  /**
   * @description content's zIndex
   */
  zIndex?: number
}

/**
 * @deprecated Removed after 3.0.0, Use `TourContentProps` instead.
 */
export const tourContentProps = buildProps({
  /**
   * @description position of the guide card relative to the target element
   */
  placement: {
    type: definePropType<Placement>(String),
    values: tourPlacements,
    default: 'bottom',
  },
  /**
   * @description the reference dom
   */
  reference: {
    type: definePropType<HTMLElement | VirtualElement | null>(Object),
    default: null,
  },
  /**
   * @description position strategy of the content
   */
  strategy: {
    type: definePropType<Strategy>(String),
    values: tourStrategies,
    default: 'absolute',
  },
  /**
   * @description offset of the arrow
   */
  offset: {
    type: Number,
    default: 10,
  },
  /**
   * @description whether to show the arrow
   */
  showArrow: Boolean,
  /**
   * @description content's zIndex
   */
  zIndex: {
    type: Number,
    default: 2001,
  },
})

/**
 * @deprecated Removed after 3.0.0, Use `TourContentProps` instead.
 */
export type TourContentPropsPublic = ExtractPublicPropTypes<
  typeof tourContentProps
>

export const tourContentEmits = {
  close: () => true,
}
export type TourContentEmits = typeof tourContentEmits
