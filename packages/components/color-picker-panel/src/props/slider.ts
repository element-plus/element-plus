import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type Color from '../utils/color'

export const sliderProps = buildProps({
  color: {
    type: definePropType<Color>(Object),
    required: true,
  },
  vertical: Boolean,
  disabled: Boolean,
} as const)

export type SliderProps = ExtractPropTypes<typeof sliderProps>
export type SliderPropsPublic = __ExtractPublicPropTypes<typeof sliderProps>
