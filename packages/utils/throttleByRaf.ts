import { cAF, rAF } from './raf'

export function throttleByRaf(cb: (...args: any[]) => void) {
  let timer = 0

  const throttle = (...args: any[]): void => {
    if (timer) {
      cAF(timer)
    }
    timer = rAF(() => {
      cb(...args)
      timer = 0
    })
  }

  throttle.cancel = () => {
    cAF(timer)
    timer = 0
  }

  return throttle
}
