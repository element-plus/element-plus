import { computed, getCurrentInstance, ref, shallowRef, unref } from 'vue'
import { debounce } from 'lodash-unified'
import { isNumber } from '@element-plus/utils'
import { FixedDir } from '../constants'

import type { ComponentInternalInstance, Ref, ShallowRef } from 'vue'
import type { TableV2Props } from '../table'
import type {
  RowExpandParams,
  RowHeightChangedParams,
  RowHoverParams,
} from '../row'
import type { FixedDirection, KeyType } from '../types'
import type { onRowRenderedParams } from '../grid'
import type { TableGridInstance } from '../table-grid'
import type { UseNamespaceReturn } from '@element-plus/hooks'

type Heights = Record<KeyType, number>
type GridInstanceRef = Ref<TableGridInstance | undefined>

type UseRowProps = {
  mainTableRef: GridInstanceRef
  leftTableRef: GridInstanceRef
  rightTableRef: GridInstanceRef
  tableInstance: ComponentInternalInstance
  ns: UseNamespaceReturn
  isScrolling: ShallowRef<boolean>
}

export const useRow = (
  props: TableV2Props,
  {
    mainTableRef,
    leftTableRef,
    rightTableRef,
    tableInstance,
    ns,
    isScrolling,
  }: UseRowProps
) => {
  const vm = getCurrentInstance()!
  const { emit } = vm
  const isResetting = shallowRef(false)
  const expandedRowKeys = ref<KeyType[]>(props.defaultExpandedRowKeys || [])
  const lastRenderedRowIndex = ref(-1)
  const resetIndex = shallowRef<number | null>(null)
  const rowHeights = ref<Heights>({})
  const pendingRowHeights = ref<Heights>({})
  const leftTableHeights = shallowRef<Heights>({})
  const mainTableHeights = shallowRef<Heights>({})
  const rightTableHeights = shallowRef<Heights>({})
  const isDynamic = computed(() => isNumber(props.estimatedRowHeight))

  function onRowsRendered(params: onRowRenderedParams) {
    props.onRowsRendered?.(params)

    if (params.rowCacheEnd > unref(lastRenderedRowIndex)) {
      lastRenderedRowIndex.value = params.rowCacheEnd
    }
  }

  function onRowHovered({ hovered, rowKey }: RowHoverParams) {
    if (isScrolling.value) {
      return
    }
    const tableRoot = tableInstance!.vnode.el as HTMLElement
    const rows = tableRoot.querySelectorAll(`[rowkey="${String(rowKey)}"]`)
    rows.forEach((row) => {
      if (hovered) {
        row.classList.add(ns.is('hovered'))
      } else {
        row.classList.remove(ns.is('hovered'))
      }
    })
  }

  function onRowExpanded({
    expanded,
    rowData,
    rowIndex,
    rowKey,
  }: RowExpandParams) {
    const _expandedRowKeys = [...unref(expandedRowKeys)]
    const currentKeyIndex = _expandedRowKeys.indexOf(rowKey)
    if (expanded) {
      if (currentKeyIndex === -1) _expandedRowKeys.push(rowKey)
    } else {
      if (currentKeyIndex > -1) _expandedRowKeys.splice(currentKeyIndex, 1)
    }
    expandedRowKeys.value = _expandedRowKeys

    emit('update:expandedRowKeys', _expandedRowKeys)
    props.onRowExpand?.({
      expanded,
      rowData,
      rowIndex,
      rowKey,
    })
    // If this is not controlled, then use this to notify changes
    props.onExpandedRowsChange?.(_expandedRowKeys)
  }

  const flushingRowHeights = debounce(() => {
    isResetting.value = true
    rowHeights.value = { ...unref(rowHeights), ...unref(pendingRowHeights) }
    resetAfterIndex(unref(resetIndex)!, false)
    pendingRowHeights.value = {}
    // force update
    resetIndex.value = null
    mainTableRef.value?.forceUpdate()
    leftTableRef.value?.forceUpdate()
    rightTableRef.value?.forceUpdate()
    vm.proxy?.$forceUpdate()
    isResetting.value = false
  }, 0)

  function resetAfterIndex(index: number, forceUpdate = false) {
    if (!unref(isDynamic)) return
    ;[mainTableRef, leftTableRef, rightTableRef].forEach((tableRef) => {
      const table = unref(tableRef)
      if (table) table.resetAfterRowIndex(index, forceUpdate)
    })
  }

  function resetHeights(rowKey: KeyType, height: number, rowIdx: number) {
    const resetIdx = unref(resetIndex)
    if (resetIdx === null) {
      resetIndex.value = rowIdx
    } else {
      if (resetIdx > rowIdx) {
        resetIndex.value = rowIdx
      }
    }

    pendingRowHeights.value[rowKey] = height
  }

  function onRowHeightChange(
    { rowKey, height, rowIndex }: RowHeightChangedParams,
    fixedDir: FixedDirection
  ) {
    if (!fixedDir) {
      mainTableHeights.value[rowKey] = height
    } else {
      if (fixedDir === FixedDir.RIGHT) {
        rightTableHeights.value[rowKey] = height
      } else {
        leftTableHeights.value[rowKey] = height
      }
    }

    const maximumHeight = Math.max(
      ...[leftTableHeights, rightTableHeights, mainTableHeights].map(
        (records) => records.value[rowKey] || 0
      )
    )

    if (unref(rowHeights)[rowKey] !== maximumHeight) {
      resetHeights(rowKey, maximumHeight, rowIndex)
      flushingRowHeights()
    }
  }

  return {
    expandedRowKeys,
    lastRenderedRowIndex,
    isDynamic,
    isResetting,
    rowHeights,

    resetAfterIndex,
    onRowExpanded,
    onRowHovered,
    onRowsRendered,
    onRowHeightChange,
  }
}

export type UseRowReturn = ReturnType<typeof useRow>
