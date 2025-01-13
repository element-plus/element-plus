// @ts-nocheck
import { computed, unref } from 'vue'
import { isObject } from '@element-plus/utils'
import { SortOrder, oppositeOrderMap } from '../constants'
import { placeholderSign } from '../private'
import { calcColumnStyle } from './utils'

import type { CSSProperties, Ref } from 'vue'
import type { TableV2Props } from '../table'
import type { AnyColumns, Column, KeyType } from '../types'

function useColumns(
  props: TableV2Props,
  columns: Ref<AnyColumns>,
  fixed: Ref<boolean>
) {
  const _columns = computed(() =>
    unref(columns).map((column, index) => ({
      ...column,
      key: column.key ?? column.dataKey ?? index,
    }))
  )

  const visibleColumns = computed(() => {
    return unref(_columns).filter((column) => !column.hidden)
  })

  const fixedColumnsOnLeft = computed(() =>
    unref(visibleColumns).filter(
      (column) => column.fixed === 'left' || column.fixed === true
    )
  )

  const fixedColumnsOnRight = computed(() =>
    unref(visibleColumns).filter((column) => column.fixed === 'right')
  )

  const normalColumns = computed(() =>
    unref(visibleColumns).filter((column) => !column.fixed)
  )

  const mainColumns = computed(() => {
    const ret: AnyColumns = []

    unref(fixedColumnsOnLeft).forEach((column) => {
      ret.push({
        ...column,
        placeholderSign,
      })
    })

    unref(normalColumns).forEach((column) => {
      ret.push(column)
    })

    unref(fixedColumnsOnRight).forEach((column) => {
      ret.push({
        ...column,
        placeholderSign,
      })
    })

    return ret
  })

  const hasFixedColumns = computed(() => {
    return unref(fixedColumnsOnLeft).length || unref(fixedColumnsOnRight).length
  })

  const columnsStyles = computed(() => {
    return unref(_columns).reduce<Record<Column<any>['key'], CSSProperties>>(
      (style, column) => {
        style[column.key] = calcColumnStyle(column, unref(fixed), props.fixed)
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
    return unref(_columns).find((column) => column.key === key)
  }

  const getColumnStyle = (key: KeyType) => {
    return unref(columnsStyles)[key]
  }

  const updateColumnWidth = (column: Column<any>, width: number) => {
    column.width = width
  }

  function onColumnSorted(e: MouseEvent) {
    const { key } = (e.currentTarget as HTMLElement).dataset
    if (!key) return
    const { sortState, sortBy } = props

    let order = SortOrder.ASC

    if (isObject(sortState)) {
      order = oppositeOrderMap[sortState[key]]
    } else {
      order = oppositeOrderMap[sortBy.order]
    }

    props.onColumnSort?.({ column: getColumn(key)!, key, order })
  }

  return {
    columns: _columns,
    columnsStyles,
    columnsTotalWidth,
    fixedColumnsOnLeft,
    fixedColumnsOnRight,
    hasFixedColumns,
    mainColumns,
    normalColumns,
    visibleColumns,

    getColumn,
    getColumnStyle,
    updateColumnWidth,
    onColumnSorted,
  }
}

export { useColumns }
export type UseColumnsReturn = ReturnType<typeof useColumns>
