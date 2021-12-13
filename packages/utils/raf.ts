import { isClient } from '@vueuse/core'

let rAF = (fn: () => void) => setTimeout(fn, 16) as unknown as number
let cAF = (handle: number) => clearTimeout(handle)

if (isClient) {
  rAF = (fn: () => void) => window.requestAnimationFrame(fn)
  cAF = (handle: number) => window.cancelAnimationFrame(handle)
}

export { rAF, cAF }
