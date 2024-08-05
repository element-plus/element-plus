import { isClient } from './browser'

export const rAF = (fn: () => void) =>
  isClient ? window.requestAnimationFrame(fn) : setTimeout(fn, 16)

export const cAF = (handle: number) =>
  isClient ? window.cancelAnimationFrame(handle) : clearTimeout(handle)
