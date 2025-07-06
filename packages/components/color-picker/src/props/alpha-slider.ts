import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type Color from '../utils/color'

export const alphaSliderProps = buildProps({
  color: {
    type: definePropType<Color>(Object),
    required: true,
  },
  vertical: Boolean,
} as const)

export type AlphaSliderProps = ExtractPropTypes<typeof alphaSliderProps>
export type AlphaSliderPropsPublic = __ExtractPublicPropTypes<
  typeof alphaSliderProps
>
