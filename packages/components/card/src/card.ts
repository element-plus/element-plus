import { buildProp, definePropType } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'
import type { StyleValue } from '@element-plus/utils/types'

export const cardProps = {
  header: {
    type: String,
    default: '',
  },
  bodyStyle: buildProp({
    type: definePropType<StyleValue>([String, Object, Array]),
    default: '',
  } as const),
  shadow: {
    type: String,
    default: '',
  },
} as const
export type CardProps = ExtractPropTypes<typeof cardProps>
