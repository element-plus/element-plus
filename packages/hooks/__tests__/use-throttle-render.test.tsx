import { defineComponent, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useThrottleRender } from '../use-throttle-render'

const Comp = defineComponent({
  setup() {
    const loading = ref(false)
    const throttled = useThrottleRender(loading, 1000)
    // Test the settimeout branch clearly: trigger the watch to record the settimeout first, and then record the settimeout again when mount.
    loading.value = true

    return () => <div class="test-dom">{throttled.value.toString()}</div>
  },
})

describe.concurrent('useThrottleRender', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should throttle rendering when loading is true', async () => {
    const wrapper = mount(Comp)
    await nextTick()
    expect(wrapper.find('.test-dom').text()).toBe('false') // initially false

    vi.advanceTimersByTime(1000)
    await nextTick()

    expect(wrapper.find('.test-dom').text()).toBe('true') // after throttle time, should be true
    wrapper.unmount()
  })

  it('should return false immediately when loading is false', () => {
    const loading = ref(false)
    const throttled = useThrottleRender(loading, 1000)
    expect(throttled.value).toBe(false)
  })

  it('should return the same value immediately when throttle is 0', () => {
    const loading = ref(true)
    const throttled = useThrottleRender(loading, 0)
    expect(throttled.value).toBe(true) // should be same as loading
  })

  it('should throttle rendering and update when loading changes', async () => {
    const loading = ref(true)
    const throttled = useThrottleRender(loading, 1000)
    expect(throttled.value).toBe(false) // initially false
    loading.value = false
    expect(throttled.value).toBe(false) // should remain false immediately

    vi.advanceTimersByTime(250)
    await nextTick()

    loading.value = true
    expect(throttled.value).toBe(false) // should still be false after throttle time
  })

  it('should use `initVal` as initial value when pass `{ initVal: true/false }`', async () => {
    const loading = ref(false)
    const throttled = useThrottleRender(loading, { initVal: true })
    expect(throttled.value).toBe(true)
    const throttled2 = useThrottleRender(loading, { initVal: false })
    expect(throttled2.value).toBe(false)
  })

  it('should throttle on display and disappear when pass `{ leading: xxx, trailing: xxx }`', async () => {
    const loading = ref(false)
    const throttled = useThrottleRender(loading, {
      leading: 200,
      trailing: 200,
    })
    expect(throttled.value).toBe(false) // initially false when not pass initVal
    loading.value = true
    await nextTick()
    expect(throttled.value).toBe(false) // should remain false until throttle time

    vi.advanceTimersByTime(250)
    await nextTick()

    expect(throttled.value).toBe(true) // should be true after leading time
    loading.value = false
    await nextTick()
    expect(throttled.value).toBe(true) // should remain true until trailing time

    vi.advanceTimersByTime(250)
    await nextTick()

    expect(throttled.value).toBe(false) // should be false after trailing time
  })
})
