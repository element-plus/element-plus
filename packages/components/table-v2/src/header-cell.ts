import { buildProps } from '@element-plus/utils'
import { classType, column } from './common'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'

export const tableV2HeaderCell = buildProps({
  class: classType,
  columnIndex: Number,
  column,
})

export type TableV2HeaderCell = ExtractPropTypes<typeof tableV2HeaderCell>
export type TableV2HeaderCellPublic = ExtractPublicPropTypes<
  typeof tableV2HeaderCell
>
