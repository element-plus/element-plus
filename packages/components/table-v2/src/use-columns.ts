import { computed, unref } from 'vue'
import { placeholderSign } from './private'

import type { CSSProperties, Ref } from 'vue'
import type { Column, Columns, KeyType } from './types'

type AnyColumn = Columns<any>

const calcColumnStyle = (
  column: Column<any>,
  fixedColumn: boolean
): CSSProperties => {
  const flex = {
    flexGrow: 0,
    flexShrink: 0,
  }

  if (column.fixed) {
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
    if (column.minWidth) style.maxWidth = column.minWidth
  }

  return style
}

function useColumns(columns: Ref<AnyColumn>, fixed: Ref<boolean>) {
  const visibleColumns = computed(() => {
    return unref(columns).filter((column) => !column.hidden)
  })

  const fixedColumnsOnLeft = computed(() =>
    unref(visibleColumns).filter(
      (column) => column.fixed === 'left' || column.fixed === true
    )
  )

  const fixedColumnOnRight = computed(() =>
    unref(visibleColumns).filter((column) => column.fixed === 'right')
  )

  const normalColumns = computed(() =>
    unref(visibleColumns).filter((column) => !column.fixed)
  )

  const mainColumns = computed(() => {
    const ret: AnyColumn = []

    unref(fixedColumnsOnLeft).forEach((column) => {
      ret.push({
        ...column,
        placeholderSign,
      })
    })

    unref(normalColumns).forEach((column) => {
      ret.push(column)
    })

    unref(fixedColumnOnRight).forEach((column) => {
      ret.push({
        ...column,
        placeholderSign,
      })
    })

    return ret
  })

  const hasFixedColumns = computed(() => {
    return unref(fixedColumnsOnLeft).length || unref(fixedColumnOnRight).length
  })

  const columnsStyles = computed(() => {
    const _columns = unref(columns)

    return _columns.reduce<Record<Column<any>['key'], CSSProperties>>(
      (style, column) => {
        style[column.key] = calcColumnStyle(column, unref(fixed))
        return style
      },
      {}
    )
  })

  const columnsTotalWidth = computed(() => {
    return unref(visibleColumns).reduce(
      (width, column) => width + column.width,
      0
    )
  })

  const getColumn = (key: KeyType) => {
    return unref(columns).find((column) => column.key === key)
  }

  const getColumnStyle = (key: KeyType) => {
    return unref(columnsStyles)[key]
  }

  const updateColumnWidth = (column: Column<any>, width: number) => {
    column.width = width
  }

  return {
    columns,
    columnsStyles,
    columnsTotalWidth,
    fixedColumnsOnLeft,
    fixedColumnOnRight,
    hasFixedColumns,
    mainColumns,
    normalColumns,
    visibleColumns,

    getColumn,
    getColumnStyle,
    updateColumnWidth,
  }
}

export { useColumns }
