import { defineComponent, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import sleep from '@element-plus/test-utils/sleep'
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
  it('should throttle rendering when loading is true', async () => {
    const wrapper = mount(Comp)
    await nextTick()
    expect(wrapper.find('.test-dom').text()).toBe('false') // initially false
    await sleep(1000)
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
    await sleep(1000)
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
    expect(throttled.value).toBe(false) // should remain false until throttle time
    await sleep(250) // Here, the delay time cannot be set to 200, setTimeout is not so precise, you can set it a little larger.
    expect(throttled.value).toBe(true) // should be true after throttle time
    loading.value = false
    expect(throttled.value).toBe(true) // should remain true until throttle time
    await sleep(250) // Here, the delay time cannot be set to 200, setTimeout is not so precise, you can set it a little larger.
    expect(throttled.value).toBe(false) // should be false after throttle time
  })
})
