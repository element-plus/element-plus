import { definePropType, mutable } from '@element-plus/utils'

import type { CSSProperties } from 'vue'
import type { Column, KeyType } from './types'

export type AnyColumn = Column<any>

/**
 * @Note even though we can use `string[] | string` as the type but for
 * convenience here we only use `string` as the acceptable value here.
 */
export const classType = String

export const columns = {
  type: definePropType<AnyColumn[]>(Array),
  required: true,
} as const

export const column = {
  type: definePropType<AnyColumn>(Object),
} as const

export const fixedDataType = {
  type: definePropType<any[]>(Array),
} as const

export const dataType = {
  ...fixedDataType,
  required: true,
} as const

export const expandColumnKey = String

export const expandKeys = {
  type: definePropType<KeyType[]>(Array),
  default: () => mutable([]),
} as const

export const requiredNumber = {
  type: Number,
  required: true,
} as const

export const rowKey = {
  type: definePropType<KeyType>([String, Number, Symbol]),
  default: 'id',
} as const

/**
 * @note even though we can use `StyleValue` but that would be difficult for us to mapping them,
 * so we only use `CSSProperties` as the acceptable value here.
 */
export const styleType = {
  type: definePropType<CSSProperties>(Object),
}
