import { createVNode, render } from 'vue'
import ElTooltip, {
  type ElTooltipProps,
} from '@element-plus/components/tooltip'
import type { Table } from '../table/defaults'

export type TableOverflowTooltipOptions = Partial<
  Pick<
    ElTooltipProps,
    | 'effect'
    | 'enterable'
    | 'hideAfter'
    | 'offset'
    | 'placement'
    | 'popperClass'
    | 'popperOptions'
    | 'showAfter'
    | 'showArrow'
    | 'transition'
  >
>
type RemovePopperFn = () => void

interface RemovePopperType extends RemovePopperFn {
  trigger?: HTMLElement
}

export let removePopper: RemovePopperType | null

export function createPopper(
  props: TableOverflowTooltipOptions,
  popperContent: string,
  trigger: HTMLElement,
  table: Table<[]>
) {
  if (removePopper?.trigger === trigger) {
    return
  }
  removePopper?.()
  const parentNode = table?.refs.tableWrapper
  const ns = parentNode?.dataset.prefix
  const popperClass = [`${ns}-table__popper`, props.popperClass]
  const vm = createVNode(ElTooltip, {
    content: popperContent,
    virtualTriggering: true,
    virtualRef: trigger,
    placement: 'top',
    transition: 'none', // Default does not require transition
    offset: 0,
    hideAfter: 0,
    ...props,
    popperClass,
    onHide: () => {
      removePopper?.()
    },
  })
  vm.appContext = table.appContext
  const container = document.createElement('div')
  render(vm, container)
  vm.component!.exposed!.onOpen()
  const scrollContainer = parentNode?.querySelector(`.${ns}-scrollbar__wrap`)
  removePopper = () => {
    render(null, container)
    scrollContainer?.removeEventListener('scroll', removePopper!)
    removePopper = null
  }
  removePopper.trigger = trigger
  scrollContainer?.addEventListener('scroll', removePopper)
}
