import type { CSSProperties } from 'vue'
import type { AnyColumns } from '../types'

export const calcColumnStyle = (
  column: AnyColumns[number],
  fixedColumn: boolean,
  fixed: boolean
): CSSProperties => {
  const flex = {
    flexGrow: 0,
    flexShrink: 0,
    ...(fixed
      ? {}
      : {
          flexGrow: column.flexGrow || 0,
          flexShrink: column.flexShrink || 1,
        }),
  }

  if (!fixed) {
    flex.flexShrink = 1
  }

  const style = {
    ...(column.style ?? {}),
    ...flex,
    flexBasis: 'auto',
    width: column.width,
  }

  if (!fixedColumn) {
    if (column.maxWidth) style.maxWidth = column.maxWidth
    if (column.minWidth) style.minWidth = column.minWidth
  }

  return style
}
