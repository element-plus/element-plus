import { defineComponent, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useThrottleRender } from '../use-throttle-render'

import type { Ref } from 'vue'
import type { ThrottleType } from '../use-throttle-render'

const mountThrottleRender = (loading: Ref<boolean>, throttle: ThrottleType) => {
  let throttled!: Ref<boolean>
  let initialValue!: boolean
  const wrapper = mount(
    defineComponent({
      setup() {
        throttled = useThrottleRender(loading, throttle)
        initialValue = throttled.value
        return () => null
      },
    })
  )

  return { initialValue, throttled, wrapper }
}

const Comp = defineComponent({
  setup() {
    const loading = ref(false)
    const throttled = useThrottleRender(loading, 1000)
    // Test the settimeout branch clearly: trigger the watch to record the settimeout first, and then record the settimeout again when mount.
    loading.value = true

    return () => <div class="test-dom">{throttled.value.toString()}</div>
  },
})

describe('useThrottleRender', () => {
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
    const { throttled, wrapper } = mountThrottleRender(loading, 1000)
    expect(throttled.value).toBe(false)
    wrapper.unmount()
  })

  it('should return the same value immediately when throttle is 0', () => {
    const loading = ref(true)
    const { throttled, wrapper } = mountThrottleRender(loading, 0)
    expect(throttled.value).toBe(true) // should be same as loading
    wrapper.unmount()
  })

  it('should throttle rendering and update when loading changes', async () => {
    const loading = ref(true)
    const { throttled, wrapper } = mountThrottleRender(loading, 1000)
    expect(throttled.value).toBe(false) // initially false
    loading.value = false
    expect(throttled.value).toBe(false) // should remain false immediately

    vi.advanceTimersByTime(250)
    await nextTick()

    loading.value = true
    expect(throttled.value).toBe(false) // should still be false after throttle time
    wrapper.unmount()
  })

  it('should use `initVal` as initial value when pass `{ initVal: true/false }`', () => {
    const loading = ref(false)
    const { initialValue, wrapper } = mountThrottleRender(loading, {
      initVal: true,
    })
    expect(initialValue).toBe(true)
    const { initialValue: initialValue2, wrapper: wrapper2 } =
      mountThrottleRender(loading, { initVal: false })
    expect(initialValue2).toBe(false)
    wrapper.unmount()
    wrapper2.unmount()
  })

  it('should throttle on display and disappear when pass `{ leading: xxx, trailing: xxx }`', async () => {
    const loading = ref(false)
    const { throttled, wrapper } = mountThrottleRender(loading, {
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
    wrapper.unmount()
  })
})
