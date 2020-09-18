import { sleep } from '@element-plus/test-utils'

const makeScroll = async (dom: Element, name: 'scrollTop' | 'scrollLeft', offset: number) => {
  const eventTarget = dom === document.documentElement ? window : dom
  dom[name] = offset
  eventTarget.dispatchEvent(new CustomEvent('scroll'))
  // must use setTimeout instead of nextTick to wait dom change
  return await sleep()
}

export default makeScroll
