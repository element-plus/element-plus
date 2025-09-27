import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type Color from '../utils/color'

export const alphaSliderProps = buildProps({
  color: {
    type: definePropType<Color>(Object),
    required: true,
  },
  vertical: Boolean,
  disabled: Boolean,
} as const)
export const hueSliderProps = alphaSliderProps

export type AlphaSliderProps = ExtractPropTypes<typeof alphaSliderProps>
export type AlphaSliderPropsPublic = __ExtractPublicPropTypes<
  typeof alphaSliderProps
>
export type HueSliderEmits = AlphaSliderProps
export type HueSliderProps = AlphaSliderPropsPublic
