import sleep from './sleep'

const makeScroll = async (
  dom: Element,
  name: 'scrollTop' | 'scrollLeft',
  offset: number
) => {
  const eventTarget = dom === document.documentElement ? window : dom
  dom[name] = offset
  const evt = new CustomEvent('scroll', {
    detail: {
      target: {
        [name]: offset,
      },
    },
  })
  eventTarget.dispatchEvent(evt)
  // must use setTimeout instead of nextTick to wait dom change
  return await sleep()
}

export default makeScroll
