import { computed, ref, unref, watch } from 'vue'
import { placeholderSign } from './private'

import type { CSSProperties, Ref } from 'vue'
import type { Column, Columns, KeyType } from './types'

type AnyColumn = Columns<any>

const calcColumnStyle = (
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

const mapColumns = (columns: AnyColumn, currentColumns: AnyColumn) => {
  return columns.map((column) => {
    if (!column.resizable) return column

    let { width } = column
    if (column.resizable) {
      const idx = columns.findIndex(
        (predicated) => column.key === predicated.key
      )
      if (idx >= 0 && columns[idx].width === column.width) {
        width = currentColumns[idx].width
      }
    }
    return {
      ...column,
      width,
    }
  })
}

function useColumns(columns: Ref<AnyColumn>, fixed: Ref<boolean>) {
  let __columns: AnyColumn = []

  const _columns = ref<AnyColumn>([])

  const visibleColumns = computed(() => {
    return unref(_columns).filter((column) => !column.hidden)
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
    const columns = unref(_columns)

    return columns.reduce<Record<Column<any>['key'], CSSProperties>>(
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

  watch(
    columns,
    (val) => {
      _columns.value = mapColumns(val, __columns)
      __columns = unref(_columns)
    },
    {
      deep: true,
    }
  )

  const getColumn = (key: KeyType) => {
    return unref(_columns).find((column) => column.key === key)
  }

  const getColumnStyle = (key: KeyType) => {
    return unref(columnsStyles)[key]
  }

  const updateColumnWidth = (column: Column<any>, width: number) => {
    column.width = width
  }

  return {
    columns: _columns,
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
