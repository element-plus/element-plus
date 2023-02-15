import {
  getCurrentInstance,
  onBeforeUpdate,
  onMounted,
  shallowRef,
  unref,
} from 'vue'
import { debounce } from 'lodash-es'
import type { DefaultRow, Table, TableColumnCtx } from '../table/defaults'
import type { TableBodyProps } from './defaults'

function isHTMLElement(h: HTMLElement | null): h is HTMLElement {
  return (h as HTMLElement).querySelector !== undefined
}

const LAYOUT_AUTO = 'auto'

export default function useLayoutAuto<T>(
  props: Partial<TableBodyProps<T>>,
  table: Table<DefaultRow>
) {
  const instance = getCurrentInstance()
  const columns = unref(props.store.states._columns)
  const observer = shallowRef<ResizeObserver>()
  const observerElList = shallowRef<HTMLElement[]>([])
  let dragInfo: TableColumnCtx<T> | null = null

  const getFirstTrEl = () => {
    const el = instance?.vnode.el as HTMLElement
    return el.querySelector('tr')
  }

  const getTheadFirstTr = () => {
    const el = table.vnode.el as HTMLElement
    const thead = el.querySelector('thead')
    return thead!.querySelector('tr')
  }

  const getColgroup = () => {
    const el = table.vnode.el as HTMLElement
    return el.querySelector('colgroup')
  }

  const addObserver = (target: HTMLElement) => {
    observer.value?.observe(target)
    observerElList.value.push(target)
  }

  const resizeCallback = (firstTr: HTMLElement, resetColWidth?: () => void) => {
    const debounceReset = resetColWidth && debounce(resetColWidth, 30)
    return function callback() {
      const tdList = firstTr.querySelectorAll('td')
      columns.forEach((column: TableColumnCtx<T>, index: number) => {
        column.autoWidth = Number.parseInt(`${tdList[index]?.offsetWidth}`)
        // 如果初始化存在 width（用户传入），layout布局时亦需要将其同步为浏览器最终计算的宽度值
        if (column.width) {
          column.width = column.autoWidth
        }
      })
      debounceReset?.()
    }
  }

  const initLayoutAuto = () => {
    const firstTr = getFirstTrEl()
    if (!isHTMLElement(firstTr)) return
    const callback = resizeCallback(firstTr)
    observer.value = new ResizeObserver(callback)
    addObserver(firstTr)
  }

  const updateLayoutAuto = () => {
    const firstTr = getFirstTrEl()
    const firstHeadTr = getTheadFirstTr()
    if (!isHTMLElement(firstTr) || !isHTMLElement(firstHeadTr)) return
    /*
     * 1. 由于 table 是 auto，宽度随内容宽决定。当处于最小「内容宽度」时，再设置 col 的 width 将没任何作用（如用户拖拽）。
     * 2. 头部因为要跟随 tbody 的宽度变化，所以不能设置成 auto（为 fixed），不然有可能出现 head 跟 body 宽度不相等的情况（因为最小内容宽后将无法从 col 中控制）。
     * 3. 当 tbody 已处于最小内容宽，此时拖拽表头已经无法改变 tbody 的列宽，导致表头比表格小且无法监测到宽度变化，所以也需要监测表头变化。
     * */
    const tdList = firstTr.querySelectorAll('td')
    const thList = firstHeadTr.querySelectorAll('th')
    const callback = resizeCallback(firstTr, resetColWidth)
    observer.value = new ResizeObserver(callback)

    for (const cell of [...tdList, ...thList]) {
      if (observerElList.value.includes(cell)) continue
      addObserver(cell)
    }
  }

  const unLayoutAutoObserve = () => {
    for (const el of observerElList.value) {
      observer.value?.unobserve(el)
    }
    observerElList.value.length = 0
    columns.forEach((item: TableColumnCtx<T>) => {
      item.autoWidth = null
    })
  }

  // 处理「用户拖拽场景」表头列宽对齐表格列宽
  const resetColWidth = () => {
    const firstColgroup = getColgroup()
    const colList = firstColgroup!.querySelectorAll('col')
    columns.forEach((column: TableColumnCtx<T>, index: number) => {
      const col = colList[index]
      if (!col) return
      const name = col.getAttribute('name')
      // 仅处理用户拖拽过的列，其余保持初始
      if (
        name === dragInfo?.id &&
        Number.parseInt(col.style.width) !== column.autoWidth
      ) {
        column.width = column.autoWidth as number
        dragInfo = null
      }
    })
  }

  const getDragInfo = (info: TableColumnCtx<T>) => {
    dragInfo = info
  }

  onMounted(() => {
    if (props.tableLayout !== LAYOUT_AUTO) return
    initLayoutAuto()
  })

  onBeforeUpdate(() => {
    if (props.tableLayout !== LAYOUT_AUTO) {
      unLayoutAutoObserve()
      return
    }
    updateLayoutAuto()
  })

  return {
    unLayoutAutoObserve,
    getDragInfo,
  }
}
