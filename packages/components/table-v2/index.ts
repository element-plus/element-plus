import { withInstall } from '@element-plus/utils'
import TableV2 from './src/table-v2'
import AutoResizer from './src/components/auto-resizer'

export {
  Alignment as TableV2Alignment,
  FixedDir as TableV2FixedDir,
  SortOrder as TableV2SortOrder,
} from './src/constants'
export { default as TableV2 } from './src/table-v2'
export * from './src/auto-resizer'
export { placeholderSign as TableV2Placeholder } from './src/private'

export const ElTableV2 = withInstall(TableV2)
export const ElAutoResizer = withInstall(AutoResizer)

export type {
  Column,
  Columns,
  SortBy,
  SortState,
  TableV2CustomizedHeaderSlotParam,
} from './src/types'
export type { TableV2Instance } from './src/table-v2'
export * from './src/table'
export * from './src/row'

export type { HeaderCellSlotProps } from './src/renderers/header-cell'
