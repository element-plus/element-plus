import {
  getCurrentInstance,
  onBeforeUpdate,
  onMounted,
  shallowRef,
  unref,
} from 'vue'
import type { TableColumnCtx } from '../table/defaults'
import type { TableBodyProps } from './defaults'

function isHTMLElement(h: HTMLElement | null): h is HTMLElement {
  return (h as HTMLElement).querySelector !== undefined
}

const LAYOUT_AUTO = 'auto'

export default function useLayoutAuto<T>(props: Partial<TableBodyProps<T>>) {
  const instance = getCurrentInstance()
  const columns = unref(props.store.states._columns)
  const observer = shallowRef<ResizeObserver>()
  const observerElList = shallowRef<HTMLElement[]>([])

  const getFirstTrEl = () => {
    const el = instance?.vnode.el as HTMLElement
    return el.querySelector('tr')
  }

  const resizeCallback = (firstTr: HTMLElement) => {
    const tdList = firstTr.querySelectorAll('td')
    columns.forEach((column: TableColumnCtx<T>, index: number) => {
      column.autoWidth = Number.parseInt(`${tdList[index].offsetWidth}`)
      console.log('width', tdList[index].offsetWidth)
    })
  }

  const initLayoutAuto = () => {
    const firstTr = getFirstTrEl()
    if (!isHTMLElement(firstTr)) return
    const callback = resizeCallback.bind(null, firstTr)
    observer.value = new ResizeObserver(callback)
    observer.value.observe(firstTr)
    observerElList.value.push(firstTr)
  }

  const updateLayoutAuto = () => {
    const firstTr = getFirstTrEl()
    if (!isHTMLElement(firstTr)) return
    const tdList = firstTr.querySelectorAll('td')
    const callback = resizeCallback.bind(null, firstTr)
    observer.value = new ResizeObserver(callback)

    for (const tdEl of tdList) {
      if (observerElList.value.includes(tdEl)) continue
      observer.value.observe(tdEl)
      observerElList.value.push(tdEl)
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
  }
}
