import { ref } from 'vue'
import { vi } from 'vitest'

export const useElementSize = vi.fn(() => ({
  width: ref(400),
  height: ref(400),
}))

export const isClient = true

export const useResizeObserver = vi.fn((target, callback) => {
  callback([{ contentRect: { width: 400, height: 400 } }])
  return vi.fn()
})

export const useEventListener = vi.fn((target, event, handler) => {
  if (typeof target === 'object' && target !== null) {
    const el = target.value || target
    el.addEventListener(event, handler)
    return () => el.removeEventListener(event, handler)
  }
  return vi.fn()
})
