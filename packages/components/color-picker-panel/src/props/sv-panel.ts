import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type Color from '../utils/color'

export const svPanelProps = buildProps({
  color: {
    type: definePropType<Color>(Object),
    required: true,
  },
  disabled: Boolean,
} as const)

export type SvPanelProps = ExtractPropTypes<typeof svPanelProps>
export type SvPanelPropsPublic = __ExtractPublicPropTypes<typeof svPanelProps>
