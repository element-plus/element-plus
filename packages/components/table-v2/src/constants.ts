export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export enum Alignment {
  CENTER = 'center',
  RIGHT = 'right',
}

export const sortOrders = [SortOrder.ASC, SortOrder.DESC] as const
