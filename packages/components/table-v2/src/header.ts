import { buildProp, buildProps, definePropType } from '@element-plus/utils'
import { columns } from './common'

import type { ExtractPropTypes } from 'vue'

const requiredNumberType = buildProp({
  type: Number,
  required: true,
})

export const tableV2HeaderProps = buildProps({
  class: String,
  columns,
  fixedHeaderData: {
    type: definePropType<any[]>(Array),
  },
  headerData: {
    type: definePropType<any[]>(Array),
    required: true,
  },
  headerHeight: {
    type: definePropType<number | number[]>([Number, Array]),
    default: 50,
  },
  rowWidth: requiredNumberType,
  rowHeight: {
    type: Number,
    default: 50,
  },
  height: requiredNumberType,
  width: requiredNumberType,
})

export type TableV2HeaderProps = ExtractPropTypes<typeof tableV2HeaderProps>
