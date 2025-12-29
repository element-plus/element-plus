import { config } from '@vue/test-utils'
import { vi } from 'vitest'
import ResizeObserver from 'resize-observer-polyfill'

vi.stubGlobal('ResizeObserver', ResizeObserver)

// Mock HTMLCanvasElement.getContext for jsdom compatibility
Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
  value: () => {
    return {}
  },
})

config.global.stubs = {}
