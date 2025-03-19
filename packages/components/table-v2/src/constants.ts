export const enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export const enum Alignment {
  CENTER = 'center',
  RIGHT = 'right',
}

export const enum FixedDir {
  LEFT = 'left',
  RIGHT = 'right',
}

export const oppositeOrderMap = {
  [SortOrder.ASC]: SortOrder.DESC,
  [SortOrder.DESC]: SortOrder.ASC,
}

export const sortOrders = [SortOrder.ASC, SortOrder.DESC] as const
