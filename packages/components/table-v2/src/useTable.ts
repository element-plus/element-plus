import { computed, ref, unref, watch } from 'vue'

import type { CSSProperties, Ref } from 'vue'
import type { Column, Columns } from './types'

const getColumnStyle = (
  column: Column<any>,
  fixedColumn: boolean
): CSSProperties => {
  const style = {
    ...(column.style ?? {}),
    width: column.width,
  }

  if (!fixedColumn) {
    if (column.maxWidth) style.maxWidth = column.maxWidth
    if (column.minWidth) style.maxWidth = column.minWidth
  }

  return style
}

function useColumns(columns: Ref<Columns<any>>, fixed: Ref<boolean>) {
  let mappedColumnsCopy: Columns<any> = []

  const mappedColumns = computed(() => {
    const _columns = unref(columns)
    const ret = _columns.map((column) => {
      if (!column.resizable) return column

      let { width } = column
      if (column.resizable) {
        const idx = _columns.findIndex(
          (predicated) => column.key === predicated.key
        )
        if (idx >= 0 && _columns[idx].width === column.width) {
          width = mappedColumnsCopy[idx].width
        }
      }
      return {
        ...column,
        width,
      }
    })

    mappedColumnsCopy = ret
    return ret
  })

  const visibleColumns = computed(() => {
    return unref(mappedColumns).filter((column) => !column.hidden)
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
    const ret: Columns<any> = []

    unref(fixedColumnsOnLeft).forEach((column) => {
      ret.push({
        ...column,
        isPlaceholder: true,
      })
    })

    unref(normalColumns).forEach((column) => {
      ret.push(column)
    })

    unref(fixedColumnOnRight).forEach((column) => {
      ret.push({
        ...column,
        isPlaceholder: true,
      })
    })

    return ret
  })

  const columnsStyle = computed(() => {
    const columns = unref(mappedColumns)

    return columns.reduce<Record<Column<any>['key'], CSSProperties>>(
      (style, column) => {
        style[column.key] = getColumnStyle(column, unref(fixed))
        return style
      },
      {}
    )
  })

  return {
    columns: mappedColumns,
    columnsStyle,
    fixedColumnsOnLeft,
    fixedColumnOnRight,
    mainColumns,
    normalColumns,
    visibleColumns,
  }
}

function useTable() {
  // to be filled
}

export { useColumns, useTable }
