import type { InjectionKey } from 'vue'
import type { Table } from './table/defaults'

export const TABLE_INJECTION_KEY: InjectionKey<Table> = Symbol('ElTable')
