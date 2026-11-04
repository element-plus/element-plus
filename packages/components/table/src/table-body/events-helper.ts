import { h, inject, ref } from 'vue'
import { debounce } from 'lodash-unified'
import {
  addClass,
  hasClass,
  isGreaterThan,
  removeClass,
} from '@element-plus/utils'
import {
  createTablePopper,
  getCell,
  getColumnByCell,
  removePopper,
} from '../util'
import { TABLE_INJECTION_KEY } from '../tokens'

import type { TableColumnCtx } from '../table-column/defaults'
import type { TableBodyProps } from './defaults'
import type { TableOverflowTooltipOptions } from '../util'
import type { DefaultRow, Table } from '../table/defaults'

interface HandleEvent<T> {
  (event: PointerEvent, row: T, name: 'click' | 'contextmenu'): void
  (event: MouseEvent, row: T, name: 'dblclick'): void
}

// Keep in sync with the default epsilon of isGreaterThan (@element-plus/utils).
const SIZE_EPSILON = 0.03

/**
 * Paddings read from getComputedStyle live in layout space, while
 * getBoundingClientRect results are affected by ancestor CSS transforms
 * (e.g. the scale() autofit.js applies to the page). Dividing the visual size
 * by the layout size yields the accumulated transform scale of a single axis,
 * allowing values from the two spaces to be compared. Width and height are
 * resolved separately because such tools can also scale non-uniformly. #25034
 *
 * offsetWidth/offsetHeight are rounded to whole pixels, so without any
 * transform the ratio is `1 ± 0.5px / offset size` instead of exactly 1,
 * which inflates a scaled padding below by up to `padding * maxScaleError`
 * (up to ~0.3px on narrow cells). The callers widen their comparison epsilon
 * by that bound so rounding alone never flips an overflow verdict.
 * getComputedStyle().width is deliberately not used here: its value follows
 * the element's box-sizing (border-box widths are returned as-is), which
 * would double-count paddings in the ratio.
 */
function getScaleFactor(el: HTMLElement, axis: 'width' | 'height') {
  const offsetSize = axis === 'width' ? el.offsetWidth : el.offsetHeight
  if (offsetSize <= 0) return { scale: 1, maxScaleError: 0 }
  const rect = el.getBoundingClientRect()
  const scale = (axis === 'width' ? rect.width : rect.height) / offsetSize
  return { scale, maxScaleError: 0.5 / offsetSize }
}

function useEvents<T extends DefaultRow>(props: Partial<TableBodyProps<T>>) {
  const parent = inject(TABLE_INJECTION_KEY) as Table<T>
  const tooltipContent = ref('')
  const tooltipTrigger = ref(h('div'))
  const handleEvent: HandleEvent<T> = (event, row, name) => {
    const table = parent
    const cell = getCell(event)
    let column: TableColumnCtx<T> | null = null
    const namespace = table?.vnode.el?.dataset.prefix
    if (cell) {
      column = getColumnByCell(
        {
          columns: props.store?.states.columns.value ?? [],
        },
        cell,
        namespace
      )
      if (column) {
        // @ts-expect-error
        table?.emit(`cell-${name}`, row, column, cell, event)
      }
    }
    // @ts-expect-error
    table?.emit(`row-${name}`, row, column, event)
  }
  const handleDoubleClick = (event: MouseEvent, row: T) => {
    handleEvent(event, row, 'dblclick')
  }
  const handleClick = (event: PointerEvent, row: T) => {
    props.store?.commit('setCurrentRow', row)
    handleEvent(event, row, 'click')
  }
  const handleContextMenu = (event: PointerEvent, row: T) => {
    handleEvent(event, row, 'contextmenu')
  }
  const handleMouseEnter = debounce((index: number) => {
    props.store?.commit('setHoverRow', index)
  }, 30)
  const handleMouseLeave = debounce(() => {
    props.store?.commit('setHoverRow', null)
  }, 30)
  const getPadding = (el: HTMLElement) => {
    const style = window.getComputedStyle(el, null)
    const paddingLeft = Number.parseInt(style.paddingLeft, 10) || 0
    const paddingRight = Number.parseInt(style.paddingRight, 10) || 0
    const paddingTop = Number.parseInt(style.paddingTop, 10) || 0
    const paddingBottom = Number.parseInt(style.paddingBottom, 10) || 0
    return {
      left: paddingLeft,
      right: paddingRight,
      top: paddingTop,
      bottom: paddingBottom,
    }
  }

  const toggleRowClassByCell = (
    rowSpan: number,
    event: MouseEvent,
    toggle: (el: Element, cls: string) => void
  ) => {
    let node: Node | null | undefined = (event?.target as Element | null)
      ?.parentNode
    while (rowSpan > 1) {
      node = node?.nextSibling
      if (!node || node.nodeName !== 'TR') break
      toggle(node as Element, 'hover-row hover-fixed-row')
      rowSpan--
    }
  }

  const handleCellMouseEnter = (
    event: MouseEvent,
    row: T,
    tooltipOptions: TableOverflowTooltipOptions
  ) => {
    if (!parent) return
    const table = parent
    const cell = getCell(event)
    const namespace = table?.vnode.el?.dataset.prefix
    let column: TableColumnCtx<T> | null = null
    if (cell) {
      column = getColumnByCell(
        {
          columns: props.store?.states.columns.value ?? [],
        },
        cell,
        namespace
      )
      if (!column) {
        return
      }
      if (cell.rowSpan > 1) {
        toggleRowClassByCell(cell.rowSpan, event, addClass)
      }
      const hoverState = (table.hoverState = {
        cell,
        column: column as any,
        row,
      })
      table?.emit(
        'cell-mouse-enter',
        hoverState.row,
        hoverState.column,
        hoverState.cell,
        event
      )
    }

    if (!tooltipOptions) {
      if (removePopper?.trigger === cell) {
        removePopper?.()
      }
      return
    }

    // 判断是否text-overflow, 如果是就显示tooltip
    const cellChild = (event.target as HTMLElement).querySelector(
      '.cell'
    ) as HTMLElement
    if (!(
      hasClass(cellChild, `${namespace}-tooltip`) &&
      cellChild.childNodes.length &&
      cellChild.textContent?.trim()
    )) {
      return
    }
    // use range width instead of scrollWidth to determine whether the text is overflowing
    // to address a potential FireFox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1074543#c3
    const range = document.createRange()
    range.setStart(cellChild, 0)
    range.setEnd(cellChild, cellChild.childNodes.length)
    /** detail: https://github.com/element-plus/element-plus/issues/10790
     *  What went wrong?
     *  UI > Browser > Zoom, In Blink/WebKit, getBoundingClientRect() sometimes returns inexact values, probably due to lost precision during internal calculations. In the example above:
     *    - Expected: 188
     *    - Actual: 188.00000762939453
     */
    const { width: rangeWidth, height: rangeHeight } =
      range.getBoundingClientRect()
    const { width: cellChildWidth, height: cellChildHeight } =
      cellChild.getBoundingClientRect()

    const { top, left, right, bottom } = getPadding(cellChild)
    const horizontalPadding = left + right
    const verticalPadding = top + bottom
    // The paddings above are layout-space values while the rect measurements
    // are affected by ancestor CSS transforms, so scale the paddings into the
    // same space before comparing. The extra epsilon term per check absorbs
    // the worst-case padding inflation caused by offset size rounding. #25034
    const { scale: horizontalScale, maxScaleError: horizontalScaleError } =
      getScaleFactor(cellChild, 'width')
    const { scale: verticalScale, maxScaleError: verticalScaleError } =
      getScaleFactor(cellChild, 'height')
    if (
      isGreaterThan(
        rangeWidth + horizontalPadding * horizontalScale,
        cellChildWidth,
        SIZE_EPSILON + horizontalPadding * horizontalScaleError
      ) ||
      isGreaterThan(
        rangeHeight + verticalPadding * verticalScale,
        cellChildHeight,
        SIZE_EPSILON + verticalPadding * verticalScaleError
      ) ||
      // scrollWidth and clientWidth are both layout measurements and, unlike
      // the rect-based cellChildWidth above, are unaffected by ancestor CSS
      // transforms, so they must be compared with each other instead of with
      // cellChildWidth. #25034 Both round to integers the same way, which also
      // avoids the sub-pixel mismatch seen in #16856 #16673
      isGreaterThan(cellChild.scrollWidth, cellChild.clientWidth)
    ) {
      createTablePopper(
        tooltipOptions,
        (cell?.innerText || cell?.textContent) ?? '',
        row,
        column,
        cell,
        table
      )
    } else if (removePopper?.trigger === cell) {
      removePopper?.()
    }
  }
  const handleCellMouseLeave = (event: MouseEvent) => {
    const cell = getCell(event)
    if (!cell) return
    if (cell.rowSpan > 1) {
      toggleRowClassByCell(cell.rowSpan, event, removeClass)
    }
    // From the normal user interaction flow, it should never be empty. However, to avoid potential runtime errors, we still keep this defensive optional handling.
    const oldHoverState = parent?.hoverState as NonNullable<Table['hoverState']>
    parent?.emit(
      'cell-mouse-leave',
      oldHoverState?.row,
      oldHoverState?.column,
      oldHoverState?.cell as HTMLTableCellElement,
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
