import { nextTick } from 'vue'
import triggerEvent from './trigger-event'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'


const triggerCompositeClick = async <T extends (VueWrapper<any> | DOMWrapper<Element>)>(wrapper: T) => {
  await wrapper.trigger('mousedown')
  await wrapper.trigger('mouseup')
  await wrapper.trigger('click')
}

export default triggerCompositeClick

export const triggerNativeCompositeClick = async (el: Element) => {
  triggerEvent(el, 'mousedown')
  await nextTick()
  triggerEvent(el, 'mouseup')
  await nextTick()
  triggerEvent(el, 'click')
  return nextTick()
}
