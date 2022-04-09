import { definePropType } from '@element-plus/utils'

import type { Column } from './types'

export const expandColumnKey = String

export const columns = {
  type: definePropType<Column<any>[]>(Array),
  required: true,
} as const
