import { ref, h, inject } from 'vue'
import { debounce } from 'lodash-unified'
import { getStyle, hasClass } from '@element-plus/utils-v2'
import { createTablePopper, getCell, getColumnByCell } from '../util'
import { TABLE_INJECTION_KEY } from '../tokens'
import type { TableColumnCtx } from '../table-column/defaults'
import type { TableBodyProps } from './defaults'

function useEvents<T>(props: Partial<TableBodyProps<T>>) {
  const parent = inject(TABLE_INJECTION_KEY)
  const tooltipContent = ref('')
  const tooltipTrigger = ref(h('div'))
  const handleEvent = (event: Event, row: T, name: string) => {
    const table = parent
    const cell = getCell(event)
    let column: TableColumnCtx<T>
    const namespace = table?.vnode.el?.dataset.prefix
    if (cell) {
      column = getColumnByCell(
        {
          columns: props.store.states.columns.value,
        },
        cell,
        namespace
      )
      if (column) {
        table?.emit(`cell-${name}`, row, column, cell, event)
      }
    }
    table?.emit(`row-${name}`, row, column, event)
  }
  const handleDoubleClick = (event: Event, row: T) => {
    handleEvent(event, row, 'dblclick')
  }
  const handleClick = (event: Event, row: T) => {
    props.store.commit('setCurrentRow', row)
    handleEvent(event, row, 'click')
  }
  const handleContextMenu = (event: Event, row: T) => {
    handleEvent(event, row, 'contextmenu')
  }
  const handleMouseEnter = debounce(function (index: number) {
    props.store.commit('setHoverRow', index)
  }, 30)
  const handleMouseLeave = debounce(function () {
    props.store.commit('setHoverRow', null)
  }, 30)
  const handleCellMouseEnter = (
    event: MouseEvent,
    row: T & { tooltipEffect: string }
  ) => {
    const table = parent
    const cell = getCell(event)
    const namespace = table?.vnode.el?.dataset.prefix
    if (cell) {
      const column = getColumnByCell(
        {
          columns: props.store.states.columns.value,
        },
        cell,
        namespace
      )
      const hoverState = (table.hoverState = { cell, column, row })
      table?.emit(
        'cell-mouse-enter',
        hoverState.row,
        hoverState.column,
        hoverState.cell,
        event
      )
    }

    // 判断是否text-overflow, 如果是就显示tooltip
    const cellChild = (event.target as HTMLElement).querySelector(
      '.cell'
    ) as HTMLElement
    if (
      !(
        hasClass(cellChild, `${namespace}-tooltip`) &&
        cellChild.childNodes.length
      )
    ) {
      return
    }
    // use range width instead of scrollWidth to determine whether the text is overflowing
    // to address a potential FireFox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1074543#c3
    const range = document.createRange()
    range.setStart(cellChild, 0)
    range.setEnd(cellChild, cellChild.childNodes.length)
    const rangeWidth = range.getBoundingClientRect().width
    const padding =
      (parseInt(getStyle(cellChild, 'paddingLeft'), 10) || 0) +
      (parseInt(getStyle(cellChild, 'paddingRight'), 10) || 0)
    if (
      rangeWidth + padding > cellChild.offsetWidth ||
      cellChild.scrollWidth > cellChild.offsetWidth
    ) {
      createTablePopper(
        cell,
        cell.innerText || cell.textContent,
        {
          placement: 'top',
          strategy: 'fixed',
        },
        row.tooltipEffect
      )
    }
  }
  const handleCellMouseLeave = (event) => {
    const cell = getCell(event)
    if (!cell) return

    const oldHoverState = parent?.hoverState
    parent?.emit(
      'cell-mouse-leave',
      oldHoverState?.row,
      oldHoverState?.column,
      oldHoverState?.cell,
      event
    )
  }

  return {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipContent,
    tooltipTrigger,
  }
}

export default useEvents
