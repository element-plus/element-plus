/**
 * Trigger event
 * mouseenter, mouseleave, mouseover, keyup, change, click
 * @param  {Element} elm
 * @param  {String} name
 * @param  {*} opts
 */
const triggerEvent = (elm, name, ...opts) => {
  let eventName

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents'
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent'
  } else {
    eventName = 'HTMLEvents'
  }
  const evt = document.createEvent(eventName)

  evt.initEvent(name, ...opts)

  if (name === 'keydown' && opts[0]) {
    // trigger event with keycode
    // triggerEvent(ele, 'keydown', 'ArrowDown')
    Object.defineProperty(evt, 'code', { value: opts[0] })
  }
  elm.dispatchEvent
    ? elm.dispatchEvent(evt)
    : elm.fireEvent('on' + name, evt)

  return elm
}
export default triggerEvent
