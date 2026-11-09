import { onBeforeUnmount, shallowRef, unref } from 'vue'
import { isClient } from '@element-plus/utils'
import { placeholderSign } from '../private'

import type { Ref, ShallowRef } from 'vue'
import type { TableV2Props } from '../table'
import type { Column, KeyType } from '../types'
import type { UseColumnsReturn } from './use-columns'

type UseColumnResizeProps = {
  visibleColumns: UseColumnsReturn['visibleColumns']
  widthOverrides: ShallowRef<Record<KeyType, number>>
  rootRef: Ref<HTMLElement | undefined>
  resizeProxyRef: Ref<HTMLElement | undefined>
}

const DEFAULT_MIN_WIDTH = 30
const RESIZE_HANDLE_WIDTH = 8
const MIN_CELL_WIDTH = 12

export const useColumnResize = (
  props: TableV2Props,
  {
    visibleColumns,
    widthOverrides,
    rootRef,
    resizeProxyRef,
  }: UseColumnResizeProps
) => {
  const draggingColumn = shallowRef<Column<any> | null>(null)
  const dragging = shallowRef(false)
  const resizeProxyVisible = shallowRef(false)
  const dragState = shallowRef<{
    startMouseLeft: number
    startLeft: number
    startColumnLeft: number
  }>()

  let moveHandler: ((event: MouseEvent) => void) | null = null
  let upHandler: ((event: MouseEvent) => void) | null = null

  const setColumnWidth = (key: KeyType, width: number) => {
    widthOverrides.value = { ...unref(widthOverrides), [key]: width }
  }

  const isLastColumn = (column: Column<any>) => {
    const columns = unref(visibleColumns)
    return columns.length > 0 && columns[columns.length - 1].key === column.key
  }

  const detachEvents = () => {
    if (!isClient) return
    if (moveHandler) {
      document.removeEventListener('mousemove', moveHandler)
      moveHandler = null
    }
    if (upHandler) {
      document.removeEventListener('mouseup', upHandler)
      upHandler = null
    }
    document.onselectstart = null
    document.ondragstart = null
  }

  const handleHeaderCellMousemove = (
    event: MouseEvent,
    column: Column<any>
  ) => {
    if (!props.border || column.placeholderSign === placeholderSign) return
    if (column.resizable === false || unref(dragging)) {
      draggingColumn.value = null
      return
    }

    const target = event.currentTarget as HTMLElement
    if (!target) return

    const rect = target.getBoundingClientRect()
    const allowDrag = props.allowDragLastColumn || !isLastColumn(column)
    const isResizeHandleActive =
      rect.width > MIN_CELL_WIDTH &&
      rect.right - event.clientX < RESIZE_HANDLE_WIDTH &&
      allowDrag

    document.body.style.cursor = isResizeHandleActive ? 'col-resize' : ''
    draggingColumn.value = isResizeHandleActive ? column : null
  }

  const handleHeaderCellMouseout = () => {
    if (!isClient || unref(dragging)) return
    document.body.style.cursor = ''
  }

  const handleHeaderCellMousedown = (
    event: MouseEvent,
    column: Column<any>
  ) => {
    if (!isClient || event.button !== 0) return
    const currentColumn = unref(draggingColumn)
    if (!currentColumn || currentColumn.key !== column.key) {
      return
    }

    const rootEl = unref(rootRef)
    const proxyEl = unref(resizeProxyRef)
    const cellEl = event.currentTarget as HTMLElement
    if (!rootEl || !proxyEl || !cellEl) return

    dragging.value = true
    resizeProxyVisible.value = true

    const tableLeft = rootEl.getBoundingClientRect().left
    const columnRect = cellEl.getBoundingClientRect()
    const startColumnLeft = columnRect.left - tableLeft
    const startLeft = columnRect.right - tableLeft
    const minLeft = startColumnLeft + DEFAULT_MIN_WIDTH

    dragState.value = {
      startMouseLeft: event.clientX,
      startLeft,
      startColumnLeft,
    }

    proxyEl.style.left = `${startLeft}px`

    document.onselectstart = () => false
    document.ondragstart = () => false

    moveHandler = (moveEvent: MouseEvent) => {
      const state = unref(dragState)
      if (!state) return
      const deltaLeft = moveEvent.clientX - state.startMouseLeft
      const proxyLeft = state.startLeft + deltaLeft
      proxyEl.style.left = `${Math.max(minLeft, proxyLeft)}px`
    }

    upHandler = () => {
      if (unref(dragging)) {
        const state = unref(dragState)!
        const finalLeft = Number.parseInt(proxyEl.style.left, 10)
        let newWidth = finalLeft - state.startColumnLeft
        const minWidth = column.minWidth ?? DEFAULT_MIN_WIDTH
        const { maxWidth } = column
        if (newWidth < minWidth) newWidth = minWidth
        if (maxWidth && newWidth > maxWidth) newWidth = maxWidth

        const oldWidth = column.width
        if (column.key != null) {
          setColumnWidth(column.key, newWidth)
        }
        props.onColumnResize?.(column, newWidth, oldWidth)
      }

      detachEvents()
      document.body.style.cursor = ''
      dragging.value = false
      draggingColumn.value = null
      dragState.value = undefined
      resizeProxyVisible.value = false
    }

    document.addEventListener('mousemove', moveHandler)
    document.addEventListener('mouseup', upHandler)
  }

  onBeforeUnmount(() => {
    detachEvents()
  })

  return {
    resizeProxyVisible,
    setColumnWidth,
    handleHeaderCellMousemove,
    handleHeaderCellMouseout,
    handleHeaderCellMousedown,
  }
}

export type UseColumnResizeReturn = ReturnType<typeof useColumnResize>
