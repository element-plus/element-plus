import { buildProps, definePropType, iconPropType } from '@element-plus/utils'
import { tourContentProps } from './content'
import type { CSSProperties, ExtractPropTypes } from 'vue'
import type { TourBtnProps, TourMask } from './types'

export const tourStepProps = buildProps({
  /**
   * @description get the element the guide card points to. empty makes it show in center of screen
   */
  target: {
    type: definePropType<HTMLElement | null>(Object),
  },
  /**
   * @description the title of the tour content
   */
  title: String,
  /**
   * @description description
   */
  description: String,
  /**
   * @description whether to show a close button
   */
  showClose: {
    type: Boolean,
    default: true,
  },
  /**
   * @description custom close icon, default is Close
   */
  closeIcon: {
    type: iconPropType,
  },
  /**
   * @description whether to show the arrow
   */
  showArrow: {
    type: Boolean,
    default: true,
  },
  /**
   * @description position of the guide card relative to the target element
   */
  placement: tourContentProps.placement,
  /**
   * @description whether to enable masking, change mask style and fill color by pass custom props
   */
  mask: {
    type: definePropType<TourMask>([Boolean, Object]),
  },
  /**
   * @description custom style for content
   */
  contentStyle: {
    type: definePropType<CSSProperties>([Object]),
  },
  /**
   * @description properties of the previous button
   */
  prevButtonProps: {
    type: definePropType<TourBtnProps>(Object),
  },
  /**
   * @description properties of the Next button
   */
  nextButtonProps: {
    type: definePropType<TourBtnProps>(Object),
  },
  /**
   * @description support pass custom scrollIntoView options
   */
  scrollIntoViewOptions: {
    type: definePropType<boolean | ScrollIntoViewOptions>([Boolean, Object]),
  },
  /**
   * @description type, affects the background color and text color
   */
  type: {
    type: definePropType<'defalut' | 'primary'>(String),
  },
})

export type TourStepProps = ExtractPropTypes<typeof tourStepProps>

export const tourStepEmits = {
  close: () => true,
}
export type TourStepEmits = typeof tourStepEmits
