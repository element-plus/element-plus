import { buildProps, definePropType } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'
import type { StyleValue } from '@element-plus/utils/types'

export const cardProps = buildProps({
  header: {
    type: String,
    default: '',
  },
  bodyStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: '',
  },
  shadow: {
    type: String,
    default: '',
  },
} as const)
export type CardProps = ExtractPropTypes<typeof cardProps>
