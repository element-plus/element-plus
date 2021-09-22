import type { ItemSizer } from './props/grid'

export function getEstimatedTotalHeight(
  data: any[],
  estimatedRowHeight: ItemSizer | number
) {
  return typeof estimatedRowHeight === 'function'
    ? data.reduce((height, rowData, rowIndex) => {
        return height + estimatedRowHeight({ rowData, rowIndex })
      }, 0)
    : data.length * estimatedRowHeight
}
