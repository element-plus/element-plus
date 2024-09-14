import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type Color from '../utils/color'

export const alphaSliderProps = buildProps({
  color: {
    type: definePropType<Color>(Object),
    required: true,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
} as const)

export type AlphaSliderProps = ExtractPropTypes<typeof alphaSliderProps>
