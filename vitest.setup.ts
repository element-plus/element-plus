import { config } from '@vue/test-utils'
import { vi } from 'vitest'
import ResizeObserver from 'resize-observer-polyfill'

vi.stubGlobal('ResizeObserver', ResizeObserver)

// Mock Vue 3 Composition API functions for testing
vi.mock('vue', async () => {
  const actual = await vi.importActual('vue')
  return {
    ...actual,
    useSlots: () => ({
      default: undefined,
      title: undefined,
      icon: undefined,
    }),
    useNamespace: () => ({
      b: (name: string) => `el-${name}`,
      e: (name: string) => `el-${name}`,
      m: (name: string) => `el-${name}`,
      is: (name: string, value?: boolean) => (value ? `is-${name}` : ''),
    }),
    useDelayedToggle: () => ({
      onOpen: vi.fn(),
      onClose: vi.fn(),
    }),
  }
})

// Mock Element Plus hooks
vi.mock('@element-plus/hooks', async () => {
  const actual = await vi.importActual('@element-plus/hooks')
  return {
    ...actual,
    useNamespace: () => ({
      b: (name: string) => `el-${name}`,
      e: (name: string) => `el-${name}`,
      m: (name: string) => `el-${name}`,
      is: (name: string, value?: boolean) => (value ? `is-${name}` : ''),
    }),
    useDelayedToggle: () => ({
      onOpen: vi.fn(),
      onClose: vi.fn(),
    }),
  }
})

config.global.stubs = {}
