import { buildProps, definePropType } from '@element-plus/utils'
import { columns } from './common'

import type { CSSProperties, ExtractPropTypes } from 'vue'
import type { KeyType } from './types'

export const tableV2HeaderRowProps = buildProps({
  class: String,
  columns,
  columnsStyles: {
    type: definePropType<Record<KeyType, CSSProperties>>(Object),
    required: true,
  },
  headerIndex: Number,
  style: { type: definePropType<CSSProperties>(Object) },
} as const)

export type TableV2HeaderRowProps = ExtractPropTypes<
  typeof tableV2HeaderRowProps
>
