import { withInstall, withNoopInstall } from '@element-plus/utils/with-install'
import TableV2 from './src/table'
import Column from './src/components/column'

export const ElTableV2 = withInstall(TableV2, {
  Column,
})

export default ElTableV2
export const ElColumnV2 = withNoopInstall(Column)
