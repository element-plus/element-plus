import { nextTick } from 'vue'
import { enableAutoUnmount, flushPromises, mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import defineGetter from '@element-plus/test-utils/define-getter'
import Scrollbar from '../src/scrollbar.vue'

import type { ScrollbarProps } from '../src/scrollbar'

enableAutoUnmount(afterEach)
afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

const createScrollbar = (props: ScrollbarProps = {}) => {
  const wrapper = mount(Scrollbar, {
    props: { height: 200, mask: 'bottom', ...props },
    global: { stubs: { transition: true } },
  })
  const wrap = wrapper.find<HTMLDivElement>('.el-scrollbar__wrap')
  const dimensions = { height: 200, contentHeight: 500 }
  defineGetter(wrap.element, 'clientHeight', () => dimensions.height)
  defineGetter(wrap.element, 'clientWidth', 200)
  defineGetter(wrap.element, 'scrollHeight', () => dimensions.contentHeight)
  defineGetter(wrapper.element, 'clientHeight', 200)

  const scrollTo = async (top: number) => {
    wrap.element.scrollTop = top
    await wrap.trigger('scroll')
  }

  return { wrapper, wrap, dimensions, scrollTo }
}

describe('Scrollbar masks', () => {
  test('enables both masks with a bare mask attribute', async () => {
    const wrapper = mount(
      {
        components: { Scrollbar },
        template: '<Scrollbar mask />',
      },
      { global: { stubs: { transition: true } } }
    )
    const scrollbar = wrapper.findComponent(Scrollbar)
    const wrap = scrollbar.find<HTMLDivElement>('.el-scrollbar__wrap')
    defineGetter(wrap.element, 'clientHeight', 200)
    defineGetter(wrap.element, 'scrollHeight', 500)
    wrap.element.scrollTop = 150
    await wrap.trigger('scroll')

    expect(scrollbar.props('mask')).toBe(true)
    expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(true)
    expect(wrapper.find('.el-scrollbar__bottom-mask').isVisible()).toBe(true)
  })

  test('is disabled by default and can be toggled at runtime', async () => {
    const wrapper = mount(Scrollbar, {
      global: { stubs: { transition: true } },
    })
    const wrap = wrapper.find('.el-scrollbar__wrap')
    defineGetter(wrap.element, 'clientHeight', 200)
    defineGetter(wrap.element, 'scrollHeight', 500)
    await flushPromises()
    expect(wrapper.find('.el-scrollbar__top-mask').exists()).toBe(false)
    expect(wrapper.find('.el-scrollbar__bottom-mask').exists()).toBe(false)

    await wrapper.setProps({ mask: true })
    await nextTick()
    expect(wrapper.find('.el-scrollbar__bottom-mask').isVisible()).toBe(true)

    await wrapper.setProps({ mask: false })
    expect(wrapper.find('.el-scrollbar__bottom-mask').exists()).toBe(false)
  })

  test.each([false, true])(
    'supports a top mask independently with native=%s',
    async (native) => {
      const { wrapper, scrollTo } = createScrollbar({
        native,
        mask: 'top',
      })
      await flushPromises()
      const mask = wrapper.find('.el-scrollbar__top-mask')
      expect(mask.isVisible()).toBe(false)
      expect(mask.attributes('aria-hidden')).toBe('true')
      expect(wrapper.find('.el-scrollbar__bottom-mask').exists()).toBe(false)

      await scrollTo(100)
      expect(mask.isVisible()).toBe(true)
      await scrollTo(300)
      expect(mask.isVisible()).toBe(true)
      await scrollTo(0.5)
      expect(mask.isVisible()).toBe(false)
      await scrollTo(0)
      expect(mask.isVisible()).toBe(false)
      await scrollTo(-10)
      expect(mask.isVisible()).toBe(false)
    }
  )

  test('tracks both edges and switches between all mask modes', async () => {
    const { wrapper, scrollTo } = createScrollbar({ mask: true })
    await flushPromises()
    const top = wrapper.find('.el-scrollbar__top-mask')
    const bottom = wrapper.find('.el-scrollbar__bottom-mask')
    expect(top.isVisible()).toBe(false)
    expect(bottom.isVisible()).toBe(true)

    await scrollTo(150)
    expect(top.isVisible()).toBe(true)
    expect(bottom.isVisible()).toBe(true)
    await wrapper.setProps({ mask: 'bottom' })
    expect(wrapper.find('.el-scrollbar__top-mask').exists()).toBe(false)
    expect(bottom.isVisible()).toBe(true)
    await wrapper.setProps({ mask: 'top' })
    expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(true)
    expect(wrapper.find('.el-scrollbar__bottom-mask').exists()).toBe(false)
    await wrapper.setProps({ mask: false })
    expect(wrapper.find('.el-scrollbar__top-mask').exists()).toBe(false)
    expect(wrapper.find('.el-scrollbar__bottom-mask').exists()).toBe(false)

    await wrapper.setProps({ mask: true })
    await scrollTo(300)
    expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(true)
    expect(wrapper.find('.el-scrollbar__bottom-mask').isVisible()).toBe(false)
    await scrollTo(0)
    expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(false)
    expect(wrapper.find('.el-scrollbar__bottom-mask').isVisible()).toBe(true)
  })

  test.each([false, true])(
    'tracks scrolling and fractional bottom positions with native=%s',
    async (native) => {
      const { wrapper, scrollTo } = createScrollbar({ native })
      await flushPromises()
      const mask = wrapper.find('.el-scrollbar__bottom-mask')
      expect(mask.isVisible()).toBe(true)
      expect(mask.attributes('aria-hidden')).toBe('true')
      expect(wrapper.find('.el-scrollbar__top-mask').exists()).toBe(false)

      await scrollTo(150)
      expect(mask.isVisible()).toBe(true)
      await scrollTo(299.5)
      expect(mask.isVisible()).toBe(false)
      await scrollTo(300)
      expect(mask.isVisible()).toBe(false)
      await scrollTo(100)
      expect(mask.isVisible()).toBe(true)
      await scrollTo(-10)
      expect(mask.isVisible()).toBe(true)
    }
  )

  test.each([0, 100, 200])(
    'stays hidden without vertical overflow (scrollHeight=%s)',
    async (contentHeight) => {
      const { wrapper, dimensions, wrap, scrollTo } = createScrollbar({
        mask: true,
      })
      dimensions.contentHeight = contentHeight
      defineGetter(wrap.element, 'scrollWidth', 500)
      await flushPromises()
      expect(wrapper.find('.el-scrollbar__bottom-mask').isVisible()).toBe(false)
      expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(false)
      await scrollTo(10)
      expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(false)
    }
  )

  test('does not use distance or reset end-reached state when hiding', async () => {
    const { wrapper, scrollTo } = createScrollbar({ distance: 50 })
    await flushPromises()
    const mask = wrapper.find('.el-scrollbar__bottom-mask')

    await scrollTo(260)
    expect(mask.isVisible()).toBe(true)
    expect(wrapper.emitted('end-reached')).toEqual([['bottom']])
    await scrollTo(300)
    expect(mask.isVisible()).toBe(false)
    await scrollTo(299.5)
    await scrollTo(300)
    expect(wrapper.emitted('end-reached')).toEqual([['bottom']])
  })

  test('updates after view or wrap resizes', async () => {
    const observers = new Map<Element, () => void>()
    vi.stubGlobal(
      'ResizeObserver',
      class {
        constructor(private callback: () => void) {}
        observe(target: Element) {
          observers.set(target, this.callback)
        }
        unobserve() {}
        disconnect() {}
      }
    )
    const { wrapper, wrap, dimensions, scrollTo } = createScrollbar({
      mask: true,
    })
    await flushPromises()
    const mask = wrapper.find('.el-scrollbar__bottom-mask')

    await scrollTo(300)
    expect(mask.isVisible()).toBe(false)
    expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(true)
    dimensions.contentHeight = 700
    observers.get(wrapper.find('.el-scrollbar__view').element)!()
    await nextTick()
    expect(mask.isVisible()).toBe(true)

    dimensions.height = 700
    observers.get(wrap.element)!()
    await nextTick()
    expect(mask.isVisible()).toBe(false)
    expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(false)
  })

  test('does not reset end-reached state when the top mask hides', async () => {
    const { wrapper, scrollTo } = createScrollbar({
      mask: true,
      distance: 50,
    })
    await flushPromises()
    await scrollTo(150)
    await scrollTo(40)
    expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(true)
    expect(wrapper.emitted('end-reached')).toEqual([['top']])
    await scrollTo(1)
    expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(false)
    await scrollTo(0.5)
    await scrollTo(0)
    expect(wrapper.emitted('end-reached')).toEqual([['top']])
  })

  test('supports manual updates with noresize', async () => {
    const { wrapper, dimensions, scrollTo } = createScrollbar({
      noresize: true,
      mask: true,
    })
    await flushPromises()
    await scrollTo(100)
    const mask = wrapper.find('.el-scrollbar__bottom-mask')
    expect(mask.isVisible()).toBe(true)
    expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(true)

    dimensions.contentHeight = 100
    wrapper.vm.update()
    await nextTick()
    expect(mask.isVisible()).toBe(false)
    expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(false)
    dimensions.contentHeight = 500
    wrapper.vm.update()
    await nextTick()
    expect(mask.isVisible()).toBe(true)
    expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(true)
  })

  test.each(['transitionend', 'animationend'])(
    'updates after %s with noresize',
    async (event) => {
      let callback: FrameRequestCallback | undefined
      vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
        callback = cb
        return 1
      })
      const { wrapper, wrap, dimensions } = createScrollbar({ noresize: true })
      await flushPromises()
      dimensions.contentHeight = 100
      await wrap.trigger(event)
      callback!(0)
      await nextTick()
      expect(wrapper.find('.el-scrollbar__bottom-mask').isVisible()).toBe(false)
    }
  )

  test('aligns with the viewport when native scrollbars occupy space', async () => {
    const { wrapper, wrap, scrollTo } = createScrollbar({
      native: true,
      mask: true,
    })
    defineGetter(wrap.element, 'clientWidth', 185)
    defineGetter(wrap.element, 'clientHeight', 185)
    await flushPromises()
    const mask = wrapper.find<HTMLElement>('.el-scrollbar__bottom-mask')
    expect(mask.element.style.width).toBe('185px')
    expect(mask.element.style.bottom).toBe('15px')
    await scrollTo(100)
    const topMask = wrapper.find<HTMLElement>('.el-scrollbar__top-mask')
    expect(topMask.element.style.width).toBe('185px')
    expect(topMask.element.style.top).toBe('0px')
  })
})
