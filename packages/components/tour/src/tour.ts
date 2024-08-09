import {
  buildProps,
  definePropType,
  iconPropType,
  isBoolean,
  isNumber,
} from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { tourContentProps } from './content'
import type { CSSProperties, ExtractPropTypes } from 'vue'
import type Tour from './tour.vue'
import type { TourGap, TourMask } from './types'

export const tourProps = buildProps({
  /**
   * @description open tour
   */
  modelValue: Boolean,
  /**
   * @description what is the current step
   */
  current: {
    type: Number,
    default: 0,
  },
  /**
   * @description whether to show the arrow
   */
  showArrow: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether to show a close button
   */
  showClose: {
    type: Boolean,
    default: true,
  },
  /**
   * @description custom close icon
   */
  closeIcon: {
    type: iconPropType,
  },
  /**
   * @description position of the guide card relative to the target element
   */
  placement: tourContentProps.placement,
  /**
   * @description custom style for content
   */
  contentStyle: {
    type: definePropType<CSSProperties>([Object]),
  },
  /**
   * @description whether to enable masking, change mask style and fill color by pass custom props
   */
  mask: {
    type: definePropType<TourMask>([Boolean, Object]),
    default: true,
  },
  /**
   * @description transparent gap between mask and target
   */
  gap: {
    type: definePropType<TourGap>(Object),
    default: () => ({
      offset: 6,
      radius: 2,
    }),
  },
  /**
   * @description tour's zIndex
   */
  zIndex: {
    type: Number,
  },
  /**
   * @description support pass custom scrollIntoView options
   */
  scrollIntoViewOptions: {
    type: definePropType<boolean | ScrollIntoViewOptions>([Boolean, Object]),
    default: () => ({
      block: 'center',
    }),
  },
  /**
   * @description type, affects the background color and text color
   */
  type: {
    type: definePropType<'default' | 'primary'>(String),
  },
  /**
   * @description which element the TourContent appends to
   */
  appendTo: {
    type: definePropType<string | HTMLElement>([String, Object]),
    default: 'body',
  },
  /**
   * @description whether the Tour can be closed by pressing ESC
   */
  closeOnPressEscape: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether the target element can be clickable, when using mask
   */
  targetAreaClickable: {
    type: Boolean,
    default: true,
  },
})

export type TourProps = ExtractPropTypes<typeof tourProps>
export type TourInstance = InstanceType<typeof Tour>

export const tourEmits = {
  [UPDATE_MODEL_EVENT]: (value: boolean) => isBoolean(value),
  ['update:current']: (current: number) => isNumber(current),
  close: (current: number) => isNumber(current),
  finish: () => true,
  change: (current: number) => isNumber(current),
}
export type TourEmits = typeof tourEmits
