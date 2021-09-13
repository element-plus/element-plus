import { buildProp } from '@element-plus/utils/props'

import type { ExtractPropTypes } from 'vue'
import type { ZIndexProperty } from 'csstype'

export const affixProps = {
  zIndex: buildProp<ZIndexProperty>({
    type: [Number, String],
    default: 100,
  }),
  target: {
    type: String,
    default: '',
  },
  offset: {
    type: Number,
    default: 0,
  },
  position: buildProp({
    type: String,
    values: ['top', 'bottom'],
    default: 'top',
  } as const),
} as const
export type AffixProps = ExtractPropTypes<typeof affixProps>

export const affixEmits = {
  scroll: ({ scrollTop, fixed }: { scrollTop: number; fixed: boolean }) =>
    typeof scrollTop === 'number' && typeof fixed === 'boolean',
  change: (fixed: boolean) => typeof fixed === 'boolean',
}
export type AffixEmits = typeof affixEmits
