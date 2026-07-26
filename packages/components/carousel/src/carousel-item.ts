import { buildProps } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'

export interface CarouselItemProps {
  /**
   * @description name of the item, can be used in `setActiveItem`
   */
  name?: string
  /**
   * @description text content for the corresponding indicator
   */
  label?: string | number
}

/**
 * @deprecated Removed after 3.0.0, Use `CarouselItemProps` instead.
 */
export const carouselItemProps = buildProps({
  /**
   * @description name of the item, can be used in `setActiveItem`
   */
  name: { type: String, default: '' },
  /**
   * @description text content for the corresponding indicator
   */
  label: {
    type: [String, Number],
    default: '',
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `CarouselItemProps` instead.
 */
export type CarouselItemPropsPublic = ExtractPublicPropTypes<
  typeof carouselItemProps
>
