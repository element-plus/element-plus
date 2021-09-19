import { buildProp } from '@element-plus/utils/props'

import type { ExtractPropTypes } from 'vue'

export const dividerProps = {
  direction: buildProp({
    type: String,
    values: ['horizontal', 'vertical'] as const,
    default: 'horizontal',
  }),
  contentPosition: buildProp({
    type: String,
    values: ['left', 'center', 'right'] as const,
    default: 'center',
  }),
} as const
export type DividerProps = ExtractPropTypes<typeof dividerProps>
