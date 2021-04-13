import TableColumn from '../table/src/tableColumn'
import type { SFCWithInstall } from '@element-plus/utils/types'

const _TableColumn: SFCWithInstall<typeof TableColumn> = TableColumn as SFCWithInstall<typeof TableColumn>

_TableColumn.install = app => {
  app.component(_TableColumn.name, _TableColumn)
}

export default _TableColumn
