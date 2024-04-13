import { defineComponent, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useThrottleRender } from '../use-throttle-render'
import type { VueWrapper } from '@vue/test-utils'

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
  let wrapper: VueWrapper<InstanceType<typeof Comp>>

  beforeEach(() => {
    wrapper = mount(Comp)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should throttle rendering when loading is true', async () => {
    await nextTick()
    expect(wrapper.find('.test-dom').text()).toBe('false') // initially false
    await new Promise((resolve) => setTimeout(resolve, 1000))
    expect(wrapper.find('.test-dom').text()).toBe('true') // after throttle time, should be true
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
    await new Promise((resolve) => setTimeout(resolve, 1000))
    loading.value = true
    expect(throttled.value).toBe(false) // should still be false after throttle time
  })
})
