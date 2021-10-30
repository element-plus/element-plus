import { buildProps } from '@element-plus/utils/props'

import type { ExtractPropTypes } from 'vue'

export const dividerProps = buildProps({
  direction: {
    type: String,
    values: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
  contentPosition: {
    type: String,
    values: ['left', 'center', 'right'],
    default: 'center',
  },
} as const)
export type DividerProps = ExtractPropTypes<typeof dividerProps>
