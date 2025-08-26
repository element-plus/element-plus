import type { InjectionKey } from 'vue'
import type { DefaultRow, Table } from './table/defaults'

export const TABLE_INJECTION_KEY: InjectionKey<Table<DefaultRow>> =
  Symbol('ElTable')
