import { buildProp } from '@element-plus/utils/props'

import type { ExtractPropTypes } from 'vue'

export const dividerProps = {
  direction: buildProp({
    type: String,
    values: ['horizontal', 'vertical'],
    default: 'horizontal',
  } as const),
  contentPosition: buildProp({
    type: String,
    values: ['left', 'center', 'right'],
    default: 'center',
  } as const),
} as const
export type DividerProps = ExtractPropTypes<typeof dividerProps>
