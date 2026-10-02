import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { rAF } from '@element-plus/test-utils/tick'
import Text from '../src/text.vue'

const AXIOM = 'Rem is the best girl'
let resizeObserverCallback: ResizeObserverCallback | undefined

class MockResizeObserver implements ResizeObserver {
  constructor(callback: ResizeObserverCallback) {
    resizeObserverCallback = callback
  }

  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('Text.vue', () => {
  beforeEach(() => {
    resizeObserverCallback = undefined
    vi.stubGlobal('ResizeObserver', MockResizeObserver)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  test('create', () => {
    const wrapper = mount(() => <Text />)

    expect(wrapper.classes()).toContain('el-text')
  })

  test('type', () => {
    const wrapper = mount(() => <Text type="success" />)

    expect(wrapper.classes()).toContain('el-text--success')
  })

  test('size', () => {
    const wrapper = mount(() => <Text size="large" />)

    expect(wrapper.classes()).toContain('el-text--large')
  })

  test('truncated', () => {
    const wrapper = mount(() => <Text truncated />)

    expect(wrapper.classes()).toContain('is-truncated')
  })

  test('truncated title updates after resize', async () => {
    const wrapper = mount(Text, {
      props: { truncated: true },
      slots: { default: AXIOM },
    })
    const offsetWidthSpy = vi.spyOn(wrapper.element, 'offsetWidth', 'get')
    const scrollWidthSpy = vi.spyOn(wrapper.element, 'scrollWidth', 'get')

    offsetWidthSpy.mockReturnValue(0)
    scrollWidthSpy.mockReturnValue(100)
    await rAF()

    expect(wrapper.attributes('title')).toBeUndefined()
    expect(wrapper.vm.isTruncated).toBeFalsy()

    offsetWidthSpy.mockReturnValue(50)
    scrollWidthSpy.mockReturnValue(100)
    resizeObserverCallback?.(
      [
        {
          target: wrapper.element,
          contentRect: { width: 50, height: 50 },
        } as ResizeObserverEntry,
      ],
      {} as ResizeObserver
    )
    await rAF()

    expect(wrapper.attributes('title')).toBe(AXIOM)
    expect(wrapper.vm.isTruncated).toBe(true)

    offsetWidthSpy.mockRestore()
    scrollWidthSpy.mockRestore()
  })

  test('truncated title updates after prop changes', async () => {
    const truncated = ref(false)
    const lineClamp = ref<number>()
    const wrapper = mount(() => (
      <Text truncated={truncated.value} lineClamp={lineClamp.value}>
        {AXIOM}
      </Text>
    ))
    const TextComponent = wrapper.findComponent(Text)
    const offsetWidthSpy = vi
      .spyOn(wrapper.element, 'offsetWidth', 'get')
      .mockReturnValue(50)
    const scrollWidthSpy = vi
      .spyOn(wrapper.element, 'scrollWidth', 'get')
      .mockReturnValue(100)
    const offsetHeightSpy = vi
      .spyOn(wrapper.element, 'offsetHeight', 'get')
      .mockReturnValue(50)
    const scrollHeightSpy = vi
      .spyOn(wrapper.element, 'scrollHeight', 'get')
      .mockReturnValue(100)

    await rAF()
    expect(wrapper.attributes('title')).toBeUndefined()
    expect(TextComponent.vm.isTruncated).toBeFalsy()

    truncated.value = true
    await rAF()
    expect(wrapper.attributes('title')).toBe(AXIOM)
    expect(TextComponent.vm.isTruncated).toBeTruthy()

    truncated.value = false
    await rAF()
    expect(wrapper.attributes('title')).toBeUndefined()
    expect(TextComponent.vm.isTruncated).toBeFalsy()

    lineClamp.value = 2
    await rAF()
    expect(wrapper.attributes('title')).toBe(AXIOM)
    expect(TextComponent.vm.isTruncated).toBeTruthy()

    lineClamp.value = undefined
    await rAF()
    expect(wrapper.attributes('title')).toBeUndefined()
    expect(TextComponent.vm.isTruncated).toBeFalsy()

    offsetWidthSpy.mockRestore()
    scrollWidthSpy.mockRestore()
    offsetHeightSpy.mockRestore()
    scrollHeightSpy.mockRestore()
  })

  test('line-clamp', () => {
    const wrapper = mount(() => <Text line-clamp="2" />)

    expect(wrapper.classes()).toContain('is-line-clamp')
  })

  test('tag', () => {
    const wrapper = mount(() => <Text tag="del" />)

    expect(wrapper.vm.$el.tagName).toEqual('DEL')
  })

  test('default slot', () => {
    const wrapper = mount(() => (
      <Text
        v-slots={{
          default: () => AXIOM,
        }}
      />
    ))

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
