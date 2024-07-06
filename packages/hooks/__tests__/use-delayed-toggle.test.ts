import { ref } from 'vue'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useDelayedToggle } from '../use-delayed-toggle'

describe('use-delayed-toggle', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should can call open/close', () => {
    const cbOpen = vi.fn()
    const cbClose = vi.fn()
    const { onOpen, onClose } = useDelayedToggle({
      open: cbOpen,
      close: cbClose,
      showAfter: ref(0),
      hideAfter: ref(0),
      autoClose: ref(0),
    })

    expect(cbOpen).not.toHaveBeenCalled()
    expect(cbClose).not.toHaveBeenCalled()

    onOpen()

    vi.runAllTimers()
    expect(cbOpen).toHaveBeenCalled()
    expect(cbClose).not.toHaveBeenCalled()

    onClose()
    vi.runAllTimers()
    expect(cbOpen).toHaveBeenCalledTimes(1)
    expect(cbClose).toHaveBeenCalledTimes(1)
  })

  it('should delay of appearance', () => {
    const cbOpen = vi.fn()
    const cbClose = vi.fn()
    const { onOpen, onClose } = useDelayedToggle({
      open: cbOpen,
      close: cbClose,
      showAfter: ref(100),
      hideAfter: ref(0),
      autoClose: ref(0),
    })

    expect(cbOpen).not.toHaveBeenCalled()
    expect(cbClose).not.toHaveBeenCalled()

    onOpen()

    vi.advanceTimersByTime(50)
    expect(cbOpen).not.toHaveBeenCalled()

    vi.advanceTimersByTime(50)
    expect(cbOpen).toHaveBeenCalled()
    expect(cbClose).not.toHaveBeenCalled()

    onClose()
    vi.runAllTimers()
    expect(cbOpen).toHaveBeenCalledTimes(1)
    expect(cbClose).toHaveBeenCalledTimes(1)
  })

  it('should delay of disappear', () => {
    const cbOpen = vi.fn()
    const cbClose = vi.fn()
    const { onClose } = useDelayedToggle({
      open: cbOpen,
      close: cbClose,
      showAfter: ref(0),
      hideAfter: ref(100),
      autoClose: ref(0),
    })

    expect(cbOpen).not.toHaveBeenCalled()
    expect(cbClose).not.toHaveBeenCalled()

    onClose()
    vi.advanceTimersByTime(50)
    expect(cbClose).not.toHaveBeenCalled()
    vi.advanceTimersByTime(50)
    expect(cbClose).toHaveBeenCalled()

    vi.runAllTimers()
    expect(cbOpen).not.toHaveBeenCalled()
    expect(cbClose).toHaveBeenCalledTimes(1)
  })

  it('should disappear automatically', () => {
    const cbOpen = vi.fn()
    const cbClose = vi.fn()
    const { onOpen } = useDelayedToggle({
      open: cbOpen,
      close: cbClose,
      showAfter: ref(0),
      hideAfter: ref(0),
      autoClose: ref(100),
    })

    expect(cbOpen).not.toHaveBeenCalled()
    expect(cbClose).not.toHaveBeenCalled()

    onOpen()
    vi.advanceTimersByTime(0)
    expect(cbOpen).toHaveBeenCalled()
    vi.advanceTimersByTime(50)
    expect(cbClose).not.toHaveBeenCalled()
    vi.advanceTimersByTime(50)
    expect(cbClose).toHaveBeenCalled()

    vi.runAllTimers()
    expect(cbOpen).toHaveBeenCalledTimes(1)
    expect(cbClose).toHaveBeenCalledTimes(1)
  })

  it('apply all time', () => {
    const cbOpen = vi.fn()
    const cbClose = vi.fn()
    const { onOpen, onClose } = useDelayedToggle({
      open: cbOpen,
      close: cbClose,
      showAfter: ref(100),
      hideAfter: ref(100),
      autoClose: ref(100),
    })

    expect(cbOpen).not.toHaveBeenCalled()
    expect(cbClose).not.toHaveBeenCalled()

    onOpen()
    vi.advanceTimersByTime(0)
    expect(cbOpen).not.toHaveBeenCalled()
    vi.advanceTimersByTime(50)
    expect(cbOpen).not.toHaveBeenCalled()

    onClose()
    vi.advanceTimersByTime(50)
    expect(cbOpen).not.toHaveBeenCalled()
    expect(cbClose).not.toHaveBeenCalled()

    vi.runAllTimers()
    expect(cbOpen).not.toHaveBeenCalled()
    expect(cbClose).toHaveBeenCalledTimes(1)
  })

  it('the close function call once', () => {
    const cbOpen = vi.fn()
    const cbClose = vi.fn()
    const { onOpen, onClose } = useDelayedToggle({
      open: cbOpen,
      close: cbClose,
      showAfter: ref(0),
      hideAfter: ref(100),
      autoClose: ref(50),
    })

    expect(cbOpen).not.toHaveBeenCalled()
    expect(cbClose).not.toHaveBeenCalled()

    onOpen()
    vi.advanceTimersByTime(0)
    expect(cbOpen).toHaveBeenCalled()
    expect(cbClose).not.toHaveBeenCalled()

    onClose()

    vi.advanceTimersByTime(50)
    expect(cbClose).not.toHaveBeenCalled()

    vi.advanceTimersByTime(50)
    expect(cbOpen).toHaveBeenCalledTimes(1)
    expect(cbClose).toHaveBeenCalledTimes(1)

    vi.runAllTimers()
    expect(cbOpen).toHaveBeenCalledTimes(1)
    expect(cbClose).toHaveBeenCalledTimes(1)
  })
})
