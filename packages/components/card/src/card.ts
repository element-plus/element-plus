import { buildProp } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'
import type { StyleValue } from '@element-plus/utils/types'

export const cardProps = {
  header: {
    type: String,
    default: '',
  },
  bodyStyle: buildProp<StyleValue>({
    type: [String, Object, Array],
    default: '',
  }),
  shadow: {
    type: String,
    default: '',
  },
} as const
export type CardProps = ExtractPropTypes<typeof cardProps>
