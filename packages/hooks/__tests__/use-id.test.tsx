import { config, mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ID_INJECTION_KEY, useId, useIdInjection } from '../use-id'

describe('no injection value', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('useIdInjection', () => {
    const wrapper = mount({
      setup() {
        const idInjection = useIdInjection()
        return idInjection
      },
      template: '<div></div>',
    })

    expect(String(wrapper.vm.prefix)).toMatch(/^\d{0,4}$/)
    expect(wrapper.vm.current).toBe(0)
  })

  it('useId', () => {
    const wrapper = mount({
      setup() {
        const id = useId()
        return { id }
      },
      render: () => undefined,
    })

    expect(wrapper.vm.id).toMatch(/^el-id-\d{0,4}-\d+$/)
  })
})

describe('with injection value', () => {
  beforeEach(() => {
    config.global.provide = {
      [ID_INJECTION_KEY as symbol]: {
        prefix: 1024,
        current: 0,
      },
    }
  })

  afterEach(() => {
    document.body.innerHTML = ''
    config.global.provide = {}
  })

  it('useIdInjection', () => {
    const wrapper = mount({
      setup() {
        const idInjection = useIdInjection()
        return idInjection
      },
      render: () => undefined,
    })

    expect(wrapper.vm.prefix).toBe(1024)
    expect(wrapper.vm.current).toBe(0)
  })

  it('useId', () => {
    const wrapper = mount({
      setup() {
        const id = useId()
        return { id }
      },
      render: () => undefined,
    })

    expect(wrapper.vm.id).toBe('el-id-1024-0')
  })
})

describe('useId warns in non-client environment with default idInjection', async () => {
  const mockGetCurrentInstance = vi.fn(() => false)
  const mockWarn = vi.fn()
  const mockIsClient = false

  beforeEach(() => {
    vi.resetModules()
    vi.doMock('vue', () => ({
      getCurrentInstance: mockGetCurrentInstance,
      ref: vi.fn(),
      computed: vi.fn(),
    }))
    vi.doMock('@vueuse/core', () => ({
      computedEager: vi.fn(),
    }))
    vi.doMock('@element-plus/utils', () => ({
      debugWarn: mockWarn,
      isClient: mockIsClient,
    }))
  })
  afterEach(() => {
    vi.doUnmock('@element-plus/utils')
    vi.doUnmock('vue')
  })

  it('should warn', async () => {
    const { useId: mockUseId } = await import('../use-id')
    mockUseId()
    expect(mockWarn).toHaveBeenCalled()
  })
})
