import { createVNode, render } from 'vue'
import ElTooltip from '@element-plus/components/tooltip'
import type { TableOverflowTooltipOptions } from '../util'
import type { Table } from '../table/defaults'

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
    transition: 'none',
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
