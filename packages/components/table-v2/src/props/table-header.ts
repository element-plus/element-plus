import { virtualizedGridProps } from '@element-plus/components/virtual-list'
import { buildProp, definePropType, mutable } from '@element-plus/utils/props'
import { tableV2ColumnRendererProps } from './column'

import type { ExtractPropTypes } from 'vue'

const { data } = virtualizedGridProps

const size = buildProp({
  type: Number,
  default: 50,
} as const)

export const tableV2HeaderProps = {
  columns: buildProp({
    type: definePropType<any[]>(Array),
    required: true,
  } as const),
  data,
  fixedData: buildProp({
    type: definePropType<any[]>(Array),
    default: () => mutable([] as const),
  } as const),
  height: size,
  headerHeight: buildProp({
    type: definePropType<number | number[]>([Number, Array]),
    default: 50,
  } as const),
  rowHeight: size,
  rowWidth: size,
  width: size,
} as const

export type TableV2HeaderProps = ExtractPropTypes<typeof tableV2HeaderProps>
