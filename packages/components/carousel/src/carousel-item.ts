import { buildProps } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'

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

export type CarouselItemProps = ExtractPropTypes<typeof carouselItemProps>
