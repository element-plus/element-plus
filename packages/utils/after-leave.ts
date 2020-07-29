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
  // if (once) {
  //   instance.$once('after-leave', afterLeaveCallback)
  // } else {
  //   instance.$on('after-leave', afterLeaveCallback)
  // }
  setTimeout(() => {
    afterLeaveCallback()
  }, speed + 100)
}
