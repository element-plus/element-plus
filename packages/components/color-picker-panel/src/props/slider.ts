import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'
import type Color from '../utils/color'

export interface HueSliderProps {
  color: Color
  vertical?: boolean
  disabled?: boolean
}

/**
 * @deprecated Removed after 3.0.0, Use `HueSliderProps` instead.
 */
export const alphaSliderProps = buildProps({
  color: {
    type: definePropType<Color>(Object),
    required: true,
  },
  vertical: Boolean,
  disabled: Boolean,
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `HueSliderProps` instead.
 */
export const hueSliderProps = alphaSliderProps
/**
 * @deprecated Removed after 3.0.0, Use `HueSliderProps` instead.
 */
export type AlphaSliderProps = ExtractPropTypes<typeof alphaSliderProps>
export type AlphaSliderPropsPublic = ExtractPublicPropTypes<
  typeof alphaSliderProps
>
export type HueSliderEmits = AlphaSliderProps
