import isServer from './isServer'

let rAF = (fn: () => void) => setTimeout(fn, 16) as unknown as number
let cAF = (handle: number) => clearTimeout(handle)

if (!isServer) {
  rAF = (fn: () => void) => window.requestAnimationFrame(fn)
  cAF = (handle: number) => window.cancelAnimationFrame(handle)
}

export {
  rAF,
  cAF,
}
