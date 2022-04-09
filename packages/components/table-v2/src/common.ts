import { definePropType } from '@element-plus/utils'

import type { Column } from './types'

type AnyColumn = Column<any>

export const classType = String

export const columns = {
  type: definePropType<AnyColumn[]>(Array),
  required: true,
} as const

export const column = {
  type: definePropType<AnyColumn>(Object),
}

export const expandColumnKey = String
