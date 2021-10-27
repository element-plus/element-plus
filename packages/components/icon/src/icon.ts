import { definePropType, buildProps } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'

export const iconProps = buildProps({
  size: {
    type: definePropType<number | string>([Number, String]),
  },
  color: {
    type: String,
  },
} as const)
export type IconProps = ExtractPropTypes<typeof iconProps>
