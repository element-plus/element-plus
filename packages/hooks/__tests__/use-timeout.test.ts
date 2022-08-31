import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useTimeout } from '../use-timeout'

const _mount = (cb: () => void) => {
  return mount({
    setup() {
      const { cancelTimeout, registerTimeout } = useTimeout()
      registerTimeout(cb, 0)

      return { cancelTimeout }
    },
    render: () => undefined,
  })
}

describe('use-timeout', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    wrapper = _mount(cb)
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })

  let wrapper: ReturnType<typeof _mount>
  const cb = vi.fn()

  it('should register timeout correctly', async () => {
    expect(cb).not.toHaveBeenCalled()
    vi.runOnlyPendingTimers()
    expect(cb).toHaveBeenCalled()
    wrapper.unmount()
  })

  it('should cancel the timeout correctly', async () => {
    wrapper.vm.cancelTimeout()

    vi.runOnlyPendingTimers()

    expect(cb).not.toHaveBeenCalled()
    wrapper.unmount()
  })

  it('should cancel timeout before unmount', () => {
    expect(cb).not.toHaveBeenCalled()

    wrapper.unmount()
    vi.runOnlyPendingTimers()

    expect(cb).not.toHaveBeenCalled()
  })
})
