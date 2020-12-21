import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Table from './src/table.vue'

Table.install = (app: App): void => {
  app.component(Table.name, Table)
}

const _Table: SFCWithInstall<typeof Table> = Table

export default _Table
