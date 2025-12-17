import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'
import type Color from '../utils/color'

export const predefineProps = buildProps({
  colors: {
    type: definePropType<string[]>(Array),
    required: true,
  },
  color: {
    type: definePropType<Color>(Object),
    required: true,
  },
  enableAlpha: {
    type: Boolean,
    required: true,
  },
  disabled: Boolean,
} as const)

export type PredefineProps = ExtractPropTypes<typeof predefineProps>
export type PredefinePropsPublic = ExtractPublicPropTypes<typeof predefineProps>
