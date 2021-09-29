import { buildProp, definePropType, mutable } from '@element-plus/utils/props'

import type { CSSProperties, ExtractPropTypes, VNodeChild } from 'vue'

const headerRenderer = buildProp({
  type: definePropType<
    (props: {
      style: CSSProperties
      columns: any[]
      index: number
    }) => VNodeChild
  >(Function),
  required: true,
} as const)

const rowRenderer = buildProp({
  type: definePropType<
    (props: {
      style: CSSProperties
      columns: any[]
      data: any[] // data passed from user
      index: number
    }) => VNodeChild
  >(Function),
  required: true,
} as const)

export const tableV2ColumnRendererProps = {
  headerRenderer,
  rowRenderer,
}

export const tableV2ColumnProps = {
  ...tableV2ColumnRendererProps,
}

export type TableV2ColumnProps = ExtractPropTypes<typeof tableV2ColumnProps>
