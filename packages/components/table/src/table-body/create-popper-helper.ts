import { createVNode, render } from 'vue'
import ElTooltip from '@element-plus/components/tooltip'
import type { ElTooltipProps } from '@element-plus/components/tooltip'
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

export let removePopper: any

export function createPopper(
  props: TableOverflowTooltipOptions,
  popperContent: string,
  trigger: HTMLElement,
  table: Table<any>
) {
  if (removePopper?.trigger === trigger) {
    return
  }
  removePopper?.()
  const vm = createVNode(ElTooltip, {
    content: popperContent,
    virtualTriggering: true,
    virtualRef: trigger,
    placement: 'top',
    transition: 'none', // Default does not require transition
    offset: 0,
    hideAfter: 0,
    ...props,
    onHide: () => {
      removePopper()
    },
  })
  vm.appContext = table.appContext
  const container = document.createElement('div')
  render(vm, container)
  vm.component!.exposed!.onOpen()
  removePopper = () => {
    render(null, container)
    removePopper = null
  }
  removePopper.trigger = trigger
}
