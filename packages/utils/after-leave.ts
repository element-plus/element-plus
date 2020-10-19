import { ComponentPublicInstance } from 'vue'
/**
 * Bind after-leave event for vue instance. Make sure after-leave is called in any browsers.
 */
export default function(instance: ComponentPublicInstance, callback: (...args: unknown[]) => unknown, speed = 300): void {
  if (!instance || !callback) throw new Error('instance & callback is required')
  let called = false
  const afterLeaveCallback = function(...args: unknown[]) {
    if (called) return
    called = true
    if (callback) {
      callback(args)
    }
  }
  // TODO: migrate to [mitt](https://github.com/developit/mitt)

  // TODO: Instead mitt:  ( https://github.com/element-plus/element-plus/issues/419 )
  // 1) We can use provide/inject, if we want to trigger parent function
  // 2) Just passing 'ref' with provide/inject end 'watch' it inside child. Because in Vue 3, provided data is reactive
  // 3) Or combine 'shallowRef' and 'triggerRef' if you need trigger effects manually
  //    For example, if we want notiy child component to do some stuff, like signaling event.

  // if (once) {
  //   instance.$once('after-leave', afterLeaveCallback)
  // } else {
  //   instance.$on('after-leave', afterLeaveCallback)
  // }
  setTimeout(() => {
    afterLeaveCallback()
  }, speed + 100)
}
