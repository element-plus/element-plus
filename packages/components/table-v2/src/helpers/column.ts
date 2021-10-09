import { FixedDir } from '../props/column'
import type { TableV2ColumnProps } from '../props/column'

export interface MappedColumn extends TableV2ColumnProps {
  isPlaceholder?: boolean
  key?: string
}

export const groupColumns = (columns: TableV2ColumnProps[]) => {
  const leftColumns: MappedColumn[] = []
  const rightColumns: MappedColumn[] = []
  const mainColumns: MappedColumn[] = []

  columns.filter((c) => {
    // hidden column should not be included
    if (c.hidden) return

    switch (c.fixed) {
      case FixedDir.LEFT:
      case FixedDir.DEFAULT: {
        leftColumns.push(c)
        break
      }
      case FixedDir.RIGHT: {
        rightColumns.push(c)
        break
      }
      default: {
        mainColumns.push(c)
        break
      }
    }
  })

  return {
    leftColumns,
    rightColumns,
    mainColumns: leftColumns
      .slice()
      .map(mapPlaceholder)
      .concat(mainColumns)
      .concat(rightColumns.slice().map(mapPlaceholder)),
  }
}

function mapPlaceholder(l: MappedColumn) {
  return { ...l, isPlaceholder: true } as MappedColumn
}
