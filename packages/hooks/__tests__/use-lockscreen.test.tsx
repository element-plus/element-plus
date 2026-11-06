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

describe('useLockscreen', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    document.body.className = ''
    document.body.removeAttribute('style')
  })

  afterEach(async () => {
    vi.advanceTimersByTime(250)
    await nextTick()
    vi.useRealTimers()
    vi.restoreAllMocks()
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
    vi.advanceTimersByTime(250)
    await nextTick()
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

  it('should not compensate padding twice across different namespaces', async () => {
    const utilsModule = await import('@element-plus/utils')
    vi.spyOn(utilsModule, 'getScrollBarWidth').mockReturnValue(16)
    const scrollHeightSpy = vi
      .spyOn(document.body, 'scrollHeight', 'get')
      .mockReturnValue(200)
    const clientHeightSpy = vi
      .spyOn(document.documentElement, 'clientHeight', 'get')
      .mockReturnValue(100)

    const parentTrigger = ref(false)
    const childTrigger = ref(false)
    const parentNs = 'ns-1'
    const childNs = 'ns-2'

    const parentWrapper = mount({
      setup() {
        const ns = useNamespace(
          'lock',
          computed(() => parentNs)
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
          computed(() => childNs)
        )
        useLockscreen(childTrigger, { ns })
        onMounted(() => {
          childTrigger.value = true
        })
        return () => undefined
      },
    })

    await nextTick()
    expect(document.body.style.paddingRight).toBe('16px')
    expect(hasClass(document.body, `${parentNs}-lock-parent--hidden`)).toBe(
      true
    )
    expect(hasClass(document.body, `${childNs}-lock-parent--hidden`)).toBe(true)

    childTrigger.value = false
    parentTrigger.value = false
    await nextTick()
    vi.advanceTimersByTime(250)
    await nextTick()
    expect(document.body.style.paddingRight).toBe('')

    parentWrapper.unmount()
    childWrapper.unmount()
    vi.advanceTimersByTime(250)
    await nextTick()

    scrollHeightSpy.mockRestore()
    clientHeightSpy.mockRestore()
  })

  it('should restore padding only after all locks released', async () => {
    const utilsModule = await import('@element-plus/utils')
    vi.spyOn(utilsModule, 'getScrollBarWidth').mockReturnValue(16)
    const scrollHeightSpy = vi
      .spyOn(document.body, 'scrollHeight', 'get')
      .mockReturnValue(200)
    const clientHeightSpy = vi
      .spyOn(document.documentElement, 'clientHeight', 'get')
      .mockReturnValue(100)

    const parentTrigger = ref(false)
    const childTrigger = ref(false)
    const parentNs = 'ns-1'
    const childNs = 'ns-2'

    const parentWrapper = mount({
      setup() {
        const ns = useNamespace(
          'lock',
          computed(() => parentNs)
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
          computed(() => childNs)
        )
        useLockscreen(childTrigger, { ns })
        onMounted(() => {
          childTrigger.value = true
        })
        return () => undefined
      },
    })

    await nextTick()
    expect(document.body.style.paddingRight).toBe('16px')

    parentTrigger.value = false
    await nextTick()
    vi.advanceTimersByTime(250)
    await nextTick()
    expect(document.body.style.paddingRight).toBe('16px')

    childTrigger.value = false
    await nextTick()
    vi.advanceTimersByTime(250)
    await nextTick()
    expect(document.body.style.paddingRight).toBe('')

    parentWrapper.unmount()
    childWrapper.unmount()
    vi.advanceTimersByTime(250)
    await nextTick()

    scrollHeightSpy.mockRestore()
    clientHeightSpy.mockRestore()
  })

  it('should not compensate padding twice when nested', async () => {
    const utilsModule = await import('@element-plus/utils')
    vi.spyOn(utilsModule, 'getScrollBarWidth').mockReturnValue(16)
    const scrollHeightSpy = vi
      .spyOn(document.body, 'scrollHeight', 'get')
      .mockReturnValue(200)
    const clientHeightSpy = vi
      .spyOn(document.documentElement, 'clientHeight', 'get')
      .mockReturnValue(100)

    const parentTrigger = ref(false)
    const childTrigger = ref(false)

    const parentWrapper = mount({
      setup() {
        useLockscreen(parentTrigger)
        onMounted(() => {
          parentTrigger.value = true
        })
        return () => undefined
      },
    })

    await nextTick()

    const childWrapper = mount({
      setup() {
        useLockscreen(childTrigger)
        onMounted(() => {
          childTrigger.value = true
        })
        return () => undefined
      },
    })

    await nextTick()
    expect(document.body.style.paddingRight).toBe('16px')

    childTrigger.value = false
    await nextTick()
    vi.advanceTimersByTime(250)
    await nextTick()
    expect(document.body.style.paddingRight).toBe('16px')

    parentTrigger.value = false
    await nextTick()
    vi.advanceTimersByTime(250)
    await nextTick()
    expect(document.body.style.paddingRight).toBe('')

    parentWrapper.unmount()
    childWrapper.unmount()
    vi.advanceTimersByTime(250)
    await nextTick()

    scrollHeightSpy.mockRestore()
    clientHeightSpy.mockRestore()
  })

  it('should compensate body padding when scrollbar exists', async () => {
    const utilsModule = await import('@element-plus/utils')
    vi.spyOn(utilsModule, 'getScrollBarWidth').mockReturnValue(16)
    const scrollHeightSpy = vi
      .spyOn(document.body, 'scrollHeight', 'get')
      .mockReturnValue(200)
    const clientHeightSpy = vi
      .spyOn(document.documentElement, 'clientHeight', 'get')
      .mockReturnValue(100)

    const trigger = ref(false)
    const wrapper = mount({
      setup() {
        useLockscreen(trigger)
        onMounted(() => {
          trigger.value = true
        })
        return () => undefined
      },
    })

    await nextTick()
    expect(document.body.style.paddingRight).toBe('16px')
    expect(document.body.style.width).toBe('')

    trigger.value = false
    await nextTick()
    wrapper.unmount()
    vi.advanceTimersByTime(250)
    await nextTick()
    expect(document.body.style.paddingRight).toBe('')

    scrollHeightSpy.mockRestore()
    clientHeightSpy.mockRestore()
  })

  it('should add scrollbar width to existing body padding-right', async () => {
    const utilsModule = await import('@element-plus/utils')
    vi.spyOn(utilsModule, 'getScrollBarWidth').mockReturnValue(16)
    const scrollHeightSpy = vi
      .spyOn(document.body, 'scrollHeight', 'get')
      .mockReturnValue(200)
    const clientHeightSpy = vi
      .spyOn(document.documentElement, 'clientHeight', 'get')
      .mockReturnValue(100)
    document.body.style.paddingRight = '10px'

    const trigger = ref(false)
    const wrapper = mount({
      setup() {
        useLockscreen(trigger)
        onMounted(() => {
          trigger.value = true
        })
        return () => undefined
      },
    })

    await nextTick()
    expect(document.body.style.paddingRight).toBe('26px')

    trigger.value = false
    await nextTick()
    wrapper.unmount()
    vi.advanceTimersByTime(250)
    await nextTick()
    expect(document.body.style.paddingRight).toBe('10px')

    scrollHeightSpy.mockRestore()
    clientHeightSpy.mockRestore()
  })

  it('should preserve fractional body padding-right when compensating', async () => {
    const utilsModule = await import('@element-plus/utils')
    vi.spyOn(utilsModule, 'getScrollBarWidth').mockReturnValue(16)
    const scrollHeightSpy = vi
      .spyOn(document.body, 'scrollHeight', 'get')
      .mockReturnValue(200)
    const clientHeightSpy = vi
      .spyOn(document.documentElement, 'clientHeight', 'get')
      .mockReturnValue(100)
    document.body.style.paddingRight = '10.5px'

    const trigger = ref(false)
    const wrapper = mount({
      setup() {
        useLockscreen(trigger)
        onMounted(() => {
          trigger.value = true
        })
        return () => undefined
      },
    })

    await nextTick()
    expect(document.body.style.paddingRight).toBe('26.5px')

    trigger.value = false
    await nextTick()
    wrapper.unmount()
    vi.advanceTimersByTime(250)
    await nextTick()
    expect(document.body.style.paddingRight).toBe('10.5px')

    scrollHeightSpy.mockRestore()
    clientHeightSpy.mockRestore()
  })

  it('should not modify body width when locked', async () => {
    const utilsModule = await import('@element-plus/utils')
    vi.spyOn(utilsModule, 'getScrollBarWidth').mockReturnValue(16)
    const scrollHeightSpy = vi
      .spyOn(document.body, 'scrollHeight', 'get')
      .mockReturnValue(200)
    const clientHeightSpy = vi
      .spyOn(document.documentElement, 'clientHeight', 'get')
      .mockReturnValue(100)

    const trigger = ref(false)
    const wrapper = mount({
      setup() {
        useLockscreen(trigger)
        onMounted(() => {
          trigger.value = true
        })
        return () => undefined
      },
    })

    await nextTick()
    expect(document.body.style.width).toBe('')

    trigger.value = false
    await nextTick()
    wrapper.unmount()
    vi.advanceTimersByTime(250)
    await nextTick()

    scrollHeightSpy.mockRestore()
    clientHeightSpy.mockRestore()
  })
})
