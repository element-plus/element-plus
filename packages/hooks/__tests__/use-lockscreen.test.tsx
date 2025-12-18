import { computed, defineComponent, nextTick, onMounted, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { hasClass } from '@element-plus/utils'
import { useLockscreen } from '../use-lockscreen'
import { useNamespace } from '../use-namespace'

const kls = 'el-popup-parent--hidden'

const Comp = defineComponent({
  setup() {
    const flag = ref(false)
    useLockscreen(flag)
    onMounted(() => {
      flag.value = true
    })

    return () => undefined
  },
})

vi.mock('@element-plus/utils', async (importOriginal) => {
  return {
    ...((await importOriginal()) as Record<string, any>),
    getScrollBarWidth: vi.fn(() => 16),
  }
})

describe('useLockscreen', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should lock screen when trigger is true', async () => {
    const wrapper = mount({
      setup: () => () => <Comp />,
    })
    await nextTick()
    expect(hasClass(document.body, kls)).toBe(true)

    wrapper.unmount()
    await nextTick()

    vi.advanceTimersByTime(250)
    await nextTick()
    expect(hasClass(document.body, kls)).toBe(false)
  })

  it('should cleanup when unmounted', async () => {
    const shouldRender = ref(true)
    mount({
      setup: () => () => (shouldRender.value ? <Comp /> : undefined),
    })

    await nextTick()
    expect(hasClass(document.body, kls)).toBe(true)

    shouldRender.value = false
    await nextTick()

    vi.advanceTimersByTime(250)
    await nextTick()
    expect(hasClass(document.body, kls)).toBe(false)
  })

  it('should not cleanup when not all unmounted', async () => {
    const wrapper1 = mount({
      setup: () => () => <Comp />,
    })
    const wrapper2 = mount({
      setup: () => () => <Comp />,
    })
    await nextTick()
    expect(hasClass(document.body, kls)).toBe(true)

    wrapper2.unmount()
    vi.advanceTimersByTime(250)
    await nextTick()
    expect(hasClass(document.body, kls)).toBe(true)

    wrapper1.unmount()
    vi.advanceTimersByTime(250)
    await nextTick()
    expect(hasClass(document.body, kls)).toBe(false)
  })

  it('should render a different namespace than the given one', async () => {
    const namespace = 'test'
    const wrapper = mount({
      setup() {
        const ns = useNamespace(
          'lock',
          computed(() => namespace)
        )
        const trigger = ref(false)
        useLockscreen(trigger, { ns })
        onMounted(() => {
          trigger.value = true
        })
        return () => undefined
      },
    })

    await nextTick()
    expect(hasClass(document.body, `${namespace}-lock-parent--hidden`)).toBe(
      true
    )

    wrapper.unmount()
  })

  it('should not cleanup when newly created during the closing process', async () => {
    const wrapper1 = mount({
      setup: () => () => <Comp />,
    })

    await nextTick()
    expect(hasClass(document.body, kls)).toBe(true)

    wrapper1.unmount()
    const wrapper2 = mount({
      setup: () => () => <Comp />,
    })
    vi.advanceTimersByTime(250)
    await nextTick()
    expect(hasClass(document.body, kls)).toBe(true)

    wrapper2.unmount()
    vi.advanceTimersByTime(250)
    await nextTick()
    expect(hasClass(document.body, kls)).toBe(false)
  })

  it('should clean up body.width only once', async () => {
    const scrollHeightSpy = vi
      .spyOn(document.body, 'scrollHeight', 'get')
      .mockReturnValue(200)
    const clientHeightSpy = vi
      .spyOn(document.documentElement, 'clientHeight', 'get')
      .mockReturnValue(100)

    const parentTrigger = ref(false)
    const childTrigger = ref(false)

    mount({
      setup() {
        const ns = useNamespace(
          'lock',
          computed(() => 'test-kls-1')
        )
        useLockscreen(parentTrigger, { ns })
        onMounted(() => {
          parentTrigger.value = true
        })
        return () => undefined
      },
    })

    const childWrapper = mount({
      setup() {
        const ns = useNamespace(
          'lock',
          computed(() => 'test-kls-2')
        )
        useLockscreen(childTrigger, { ns })
        onMounted(() => {
          childTrigger.value = true
        })
        return () => undefined
      },
    })

    vi.advanceTimersByTime(250)
    await nextTick()
    expect(document.body.style.width).toBe('calc(100% - 16px)')

    childTrigger.value = false
    await nextTick()
    parentTrigger.value = false
    await nextTick()
    childWrapper.unmount()
    vi.advanceTimersByTime(250)
    expect(document.body.style.width).toBe('')

    scrollHeightSpy.mockRestore()
    clientHeightSpy.mockRestore()
    vi.useRealTimers()
  })
})
