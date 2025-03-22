import { buildProp, definePropType } from '@element-plus/utils'

import type { CSSProperties } from 'vue'
import type { Column, KeyType } from './types'

export type AnyColumn = Column<any>

/**
 * @Note even though we can use `string[] | string` as the type but for
 * convenience here we only use `string` as the acceptable value here.
 */
export const classType = String

export const columns = buildProp({
  type: definePropType<AnyColumn[]>(Array),
  required: true,
})

export const column = {
  type: definePropType<AnyColumn>(Object),
}

export const fixedDataType = {
  type: definePropType<any[]>(Array),
}

export const dataType = buildProp({
  ...fixedDataType,
  required: true,
})

export const expandColumnKey = String

export const expandKeys = buildProp({
  type: definePropType<KeyType[]>(Array),
  default: () => [],
})

export const requiredNumber = buildProp({
  type: Number,
  required: true,
})

export const rowKey = buildProp({
  type: definePropType<KeyType>([String, Number, Symbol]),
  default: 'id',
})

/**
 * @note even though we can use `StyleValue` but that would be difficult for us to mapping them,
 * so we only use `CSSProperties` as the acceptable value here.
 */
export const styleType = {
  type: definePropType<CSSProperties>(Object),
}
