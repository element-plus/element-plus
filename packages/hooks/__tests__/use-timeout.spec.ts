import { mount } from '@vue/test-utils'
import useTimeout from '../use-timeout'

const _mount = (cb: () => void) => {
  return mount({
    setup() {
      const { cancelTimeout, registerTimeout } = useTimeout()
      registerTimeout(cb, 0)

      return {
        cancelTimeout,
      }
    },
    render() {
      return null
    },
  })
}

jest.useFakeTimers()

describe('use-timeout', () => {
  let wrapper
  const cb = jest.fn()
  beforeEach(() => {
    cb.mockClear()
    wrapper = _mount(cb)
  })

  it('should register timeout correctly', async () => {
    expect(cb).not.toHaveBeenCalled()
    jest.runOnlyPendingTimers()
    expect(cb).toHaveBeenCalled()
    wrapper.unmount()
  })

  it('should cancel the timeout correctly', async () => {
    wrapper.vm.cancelTimeout()

    jest.runOnlyPendingTimers()

    expect(cb).not.toHaveBeenCalled()
    wrapper.unmount()
  })

  it('should cancel timeout before unmount', () => {
    expect(cb).not.toHaveBeenCalled()

    wrapper.unmount()
    jest.runOnlyPendingTimers()

    expect(cb).not.toHaveBeenCalled()
  })
})
