import { buildProps, definePropType } from '@element-plus/utils'
import { column, styleType } from './common'

import type { ExtractPropTypes } from 'vue'
import type { AnyColumn } from './common'

type ResizeTimingFn = (column: AnyColumn) => void
type ResizeHandler = (column: AnyColumn, width: number) => void

export const tableV2ColumnResizerProps = buildProps({
  column: { ...column, required: true },
  onResize: {
    type: definePropType<ResizeHandler>(Function),
  },
  onResizeStart: {
    type: definePropType<ResizeTimingFn>(Function),
  },
  onResizeStop: {
    type: definePropType<ResizeTimingFn>(Function),
  },
  minWidth: {
    type: Number,
    default: 30,
  },
  style: styleType,
} as const)

export type TableV2ColumnResizerProps = ExtractPropTypes<
  typeof tableV2ColumnResizerProps
>
