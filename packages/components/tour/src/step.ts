import { buildProps, definePropType, iconPropType } from '@element-plus/utils'
import { tourContentProps } from './content'

import type { CSSProperties, Component, ExtractPublicPropTypes } from 'vue'
import type { TourBtnProps, TourMask } from './types'
import type { TourContentProps } from './content'

export interface TourStepProps {
  /**
   * @description get the element the guide card points to. empty makes it show in center of screen
   */
  target?: string | HTMLElement | (() => HTMLElement | null) | null
  /**
   * @description the title of the tour content
   */
  title?: string
  /**
   * @description description
   */
  description?: string
  /**
   * @description whether to show a close button
   */
  showClose?: boolean
  /**
   * @description custom close icon, default is Close
   */
  closeIcon?: string | Component
  /**
   * @description whether to show the arrow
   */
  showArrow?: boolean
  /**
   * @description position of the guide card relative to the target element
   */
  placement?: TourContentProps['placement']
  /**
   * @description whether to enable masking, change mask style and fill color by pass custom props
   */
  mask?: TourMask
  /**
   * @description custom style for content
   */
  contentStyle?: CSSProperties
  /**
   * @description properties of the previous button
   */
  prevButtonProps?: TourBtnProps
  /**
   * @description properties of the Next button
   */
  nextButtonProps?: TourBtnProps
  /**
   * @description support pass custom scrollIntoView options
   */
  scrollIntoViewOptions?: boolean | ScrollIntoViewOptions
  /**
   * @description type, affects the background color and text color
   */
  type?: 'default' | 'primary'
}

/**
 * @deprecated Removed after 3.0.0, Use `TourStepProps` instead.
 */
export const tourStepProps = buildProps({
  /**
   * @description get the element the guide card points to. empty makes it show in center of screen
   */
  target: {
    type: definePropType<
      string | HTMLElement | (() => HTMLElement | null) | null
    >([String, Object, Function]),
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
    default: undefined,
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
    default: undefined,
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
    default: undefined,
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
    default: undefined,
  },
  /**
   * @description type, affects the background color and text color
   */
  type: {
    type: definePropType<'default' | 'primary'>(String),
  },
})

/**
 * @deprecated Removed after 3.0.0, Use `TourStepProps` instead.
 */
export type TourStepPropsPublic = ExtractPublicPropTypes<typeof tourStepProps>

export const tourStepEmits = {
  close: () => true,
}
export type TourStepEmits = typeof tourStepEmits
