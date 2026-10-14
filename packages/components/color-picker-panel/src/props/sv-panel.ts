import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type Color from '../utils/color'

export interface SvPanelProps {
  color: Color
  disabled?: boolean
}

/**
 * @deprecated Removed after 3.0.0, Use `SvPanelProps` instead.
 */
export const svPanelProps = buildProps({
  color: {
    type: definePropType<Color>(Object),
    required: true,
  },
  disabled: Boolean,
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `SvPanelProps` instead.
 */
export type SvPanelPropsPublic = ExtractPublicPropTypes<typeof svPanelProps>
