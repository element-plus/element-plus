import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type Color from '../utils/color'

export interface AlphaSliderProps {
  color: Color
  vertical?: boolean
  disabled?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface HueSliderProps extends AlphaSliderProps {}

/**
 * @deprecated Removed after 3.0.0, Use `AlphaSliderProps` instead.
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
 * @deprecated Removed after 3.0.0, Use `AlphaSliderProps` instead.
 */
export type AlphaSliderPropsPublic = ExtractPublicPropTypes<
  typeof alphaSliderProps
>
