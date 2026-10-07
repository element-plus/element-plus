import { nextTick } from 'vue'
import { enableAutoUnmount, flushPromises, mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import * as scrollUtils from '@element-plus/utils/dom/scroll'
import defineGetter from '@element-plus/test-utils/define-getter'
import Scrollbar from '../src/scrollbar.vue'

import type { ScrollbarProps } from '../src/scrollbar'

enableAutoUnmount(afterEach)
beforeEach(() => {
  vi.spyOn(scrollUtils, 'getRTLOffsetType').mockReturnValue('negative')
})
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
  const dimensions = {
    height: 200,
    contentHeight: 500,
    width: 200,
    contentWidth: 200,
  }
  defineGetter(wrap.element, 'clientHeight', () => dimensions.height)
  defineGetter(wrap.element, 'clientWidth', () => dimensions.width)
  defineGetter(wrap.element, 'scrollWidth', () => dimensions.contentWidth)
  defineGetter(wrap.element, 'scrollHeight', () => dimensions.contentHeight)
  defineGetter(wrapper.element, 'clientHeight', 200)
  defineGetter(wrapper.element, 'clientWidth', 200)

  const scrollTo = async (top: number, left = wrap.element.scrollLeft) => {
    wrap.element.scrollTop = top
    wrap.element.scrollLeft = left
    await wrap.trigger('scroll')
  }

  return { wrapper, wrap, dimensions, scrollTo }
}

describe('Scrollbar masks', () => {
  test('enables all four masks with a bare mask attribute', async () => {
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
    defineGetter(wrap.element, 'clientWidth', 200)
    defineGetter(wrap.element, 'scrollWidth', 500)
    wrap.element.scrollTop = 150
    wrap.element.scrollLeft = 150
    await wrap.trigger('scroll')

    expect(scrollbar.props('mask')).toBe(true)
    expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(true)
    expect(wrapper.find('.el-scrollbar__bottom-mask').isVisible()).toBe(true)
    expect(wrapper.find('.el-scrollbar__left-mask').isVisible()).toBe(true)
    expect(wrapper.find('.el-scrollbar__right-mask').isVisible()).toBe(true)
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

  test('tracks vertical edges and switches between vertical mask modes', async () => {
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
    'tracks horizontal edges and switches mask modes with native=%s',
    async (native) => {
      const { wrapper, dimensions, scrollTo } = createScrollbar({
        native,
        mask: true,
      })
      dimensions.contentHeight = 200
      dimensions.contentWidth = 500
      await flushPromises()
      const left = wrapper.find('.el-scrollbar__left-mask')
      const right = wrapper.find('.el-scrollbar__right-mask')
      expect(left.isVisible()).toBe(false)
      expect(right.isVisible()).toBe(true)
      expect(right.attributes('aria-hidden')).toBe('true')
      expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(false)
      expect(wrapper.find('.el-scrollbar__bottom-mask').isVisible()).toBe(false)

      await scrollTo(0, 150)
      expect(left.isVisible()).toBe(true)
      expect(right.isVisible()).toBe(true)
      await wrapper.setProps({ mask: 'left' })
      expect(left.isVisible()).toBe(true)
      expect(wrapper.find('.el-scrollbar__right-mask').exists()).toBe(false)
      expect(wrapper.find('.el-scrollbar__top-mask').exists()).toBe(false)
      expect(wrapper.find('.el-scrollbar__bottom-mask').exists()).toBe(false)
      await wrapper.setProps({ mask: 'right' })
      expect(wrapper.find('.el-scrollbar__left-mask').exists()).toBe(false)
      expect(wrapper.find('.el-scrollbar__right-mask').isVisible()).toBe(true)
      await wrapper.setProps({ mask: false })
      expect(wrapper.find('.el-scrollbar__mask').exists()).toBe(false)
      await wrapper.setProps({ mask: true })
      await nextTick()
      const nextLeft = wrapper.find('.el-scrollbar__left-mask')
      const nextRight = wrapper.find('.el-scrollbar__right-mask')
      expect(nextLeft.isVisible()).toBe(true)
      expect(nextRight.isVisible()).toBe(true)

      for (const offset of [299.5, 300, 310]) {
        await scrollTo(0, offset)
        expect(nextLeft.isVisible()).toBe(true)
        expect(nextRight.isVisible()).toBe(false)
      }
      for (const offset of [0.5, 0, -10]) {
        await scrollTo(0, offset)
        expect(nextLeft.isVisible()).toBe(false)
        expect(nextRight.isVisible()).toBe(true)
      }
    }
  )

  test.each([false, true])(
    'supports RTL horizontal masks with native=%s',
    async (native) => {
      const { wrapper, dimensions, scrollTo } = createScrollbar({
        native,
        mask: true,
        wrapStyle: { direction: 'rtl' },
      })
      dimensions.contentWidth = 500
      await flushPromises()
      const left = wrapper.find('.el-scrollbar__left-mask')
      const right = wrapper.find('.el-scrollbar__right-mask')
      expect(left.isVisible()).toBe(true)
      expect(right.isVisible()).toBe(false)
      await scrollTo(0, -150)
      expect(left.isVisible()).toBe(true)
      expect(right.isVisible()).toBe(true)
      for (const offset of [-299.5, -300, -310]) {
        await scrollTo(0, offset)
        expect(left.isVisible()).toBe(false)
        expect(right.isVisible()).toBe(true)
      }
      for (const offset of [-0.5, 0, 10]) {
        await scrollTo(0, offset)
        expect(left.isVisible()).toBe(true)
        expect(right.isVisible()).toBe(false)
      }
    }
  )

  describe.each([false, true])(
    'positive RTL offsets with native=%s',
    (native) => {
      test.each(['positive-descending', 'positive-ascending'] as const)(
        'tracks physical edges with %s offsets',
        async (type) => {
          vi.mocked(scrollUtils.getRTLOffsetType).mockReturnValue(type)
          const { wrapper, wrap, dimensions, scrollTo } = createScrollbar({
            native,
            mask: true,
            wrapStyle: { direction: 'rtl' },
          })
          dimensions.contentWidth = 500
          wrap.element.scrollLeft = type === 'positive-descending' ? 300 : 0
          await flushPromises()
          const left = wrapper.find('.el-scrollbar__left-mask')
          const right = wrapper.find('.el-scrollbar__right-mask')
          expect(left.isVisible()).toBe(true)
          expect(right.isVisible()).toBe(false)

          await scrollTo(0, 150)
          expect(left.isVisible()).toBe(true)
          expect(right.isVisible()).toBe(true)
          const leftOffsets =
            type === 'positive-descending' ? [0.5, 0, -10] : [299.5, 300, 310]
          for (const offset of leftOffsets) {
            await scrollTo(0, offset)
            expect(left.isVisible()).toBe(false)
            expect(right.isVisible()).toBe(true)
          }
          const rightOffsets =
            type === 'positive-descending' ? [299.5, 300, 310] : [0.5, 0, -10]
          for (const offset of rightOffsets) {
            await scrollTo(0, offset)
            expect(left.isVisible()).toBe(true)
            expect(right.isVisible()).toBe(false)
          }
        }
      )
    }
  )

  test.each([0, 100, 200, 201])(
    'hides horizontal masks without overflow (scrollWidth=%s)',
    async (contentWidth) => {
      const { wrapper, dimensions, scrollTo } = createScrollbar({ mask: true })
      dimensions.contentWidth = contentWidth
      await flushPromises()
      await scrollTo(100, 10)
      expect(wrapper.find('.el-scrollbar__left-mask').isVisible()).toBe(false)
      expect(wrapper.find('.el-scrollbar__right-mask').isVisible()).toBe(false)
      expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(true)
      expect(wrapper.find('.el-scrollbar__bottom-mask').isVisible()).toBe(true)
    }
  )

  test('hides horizontal masks when the viewport has no width', async () => {
    const { wrapper, dimensions } = createScrollbar({ mask: true })
    dimensions.width = 0
    dimensions.contentWidth = 500
    await flushPromises()
    expect(wrapper.find('.el-scrollbar__left-mask').isVisible()).toBe(false)
    expect(wrapper.find('.el-scrollbar__right-mask').isVisible()).toBe(false)
  })

  test('does not reset horizontal end-reached state when masks hide', async () => {
    const { wrapper, dimensions, scrollTo } = createScrollbar({
      mask: true,
      distance: 50,
    })
    dimensions.contentWidth = 500
    await flushPromises()
    await scrollTo(0, 260)
    expect(wrapper.find('.el-scrollbar__right-mask').isVisible()).toBe(true)
    await scrollTo(0, 300)
    expect(wrapper.find('.el-scrollbar__right-mask').isVisible()).toBe(false)
    await scrollTo(0, 299.5)
    await scrollTo(0, 300)
    expect(wrapper.emitted('end-reached')).toEqual([['right']])
    await scrollTo(0, 40)
    expect(wrapper.find('.el-scrollbar__left-mask').isVisible()).toBe(true)
    await scrollTo(0, 0.5)
    await scrollTo(0, 0)
    expect(wrapper.find('.el-scrollbar__left-mask').isVisible()).toBe(false)
    expect(wrapper.emitted('end-reached')).toEqual([['right'], ['left']])
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
    dimensions.contentWidth = 500
    await flushPromises()
    const mask = wrapper.find('.el-scrollbar__bottom-mask')

    await scrollTo(300, 300)
    expect(wrapper.find('.el-scrollbar__right-mask').isVisible()).toBe(false)
    expect(mask.isVisible()).toBe(false)
    expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(true)
    dimensions.contentHeight = 700
    dimensions.contentWidth = 700
    observers.get(wrapper.find('.el-scrollbar__view').element)!()
    await nextTick()
    expect(mask.isVisible()).toBe(true)
    expect(wrapper.find('.el-scrollbar__right-mask').isVisible()).toBe(true)

    dimensions.height = 700
    dimensions.width = 700
    observers.get(wrap.element)!()
    await nextTick()
    expect(mask.isVisible()).toBe(false)
    expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(false)
    expect(wrapper.find('.el-scrollbar__left-mask').isVisible()).toBe(false)
    expect(wrapper.find('.el-scrollbar__right-mask').isVisible()).toBe(false)
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
    dimensions.contentWidth = 500
    await flushPromises()
    await scrollTo(100, 100)
    const mask = wrapper.find('.el-scrollbar__bottom-mask')
    expect(mask.isVisible()).toBe(true)
    expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(true)

    dimensions.contentHeight = 100
    dimensions.contentWidth = 100
    wrapper.vm.update()
    await nextTick()
    expect(mask.isVisible()).toBe(false)
    expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(false)
    expect(wrapper.find('.el-scrollbar__left-mask').isVisible()).toBe(false)
    expect(wrapper.find('.el-scrollbar__right-mask').isVisible()).toBe(false)
    dimensions.contentHeight = 500
    dimensions.contentWidth = 500
    wrapper.vm.update()
    await nextTick()
    expect(mask.isVisible()).toBe(true)
    expect(wrapper.find('.el-scrollbar__top-mask').isVisible()).toBe(true)
    expect(wrapper.find('.el-scrollbar__left-mask').isVisible()).toBe(true)
    expect(wrapper.find('.el-scrollbar__right-mask').isVisible()).toBe(true)
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
    const leftMask = wrapper.find<HTMLElement>('.el-scrollbar__left-mask')
    const rightMask = wrapper.find<HTMLElement>('.el-scrollbar__right-mask')
    expect(leftMask.element.style.height).toBe('185px')
    expect(leftMask.element.style.left).toBe('0px')
    expect(rightMask.element.style.height).toBe('185px')
    expect(rightMask.element.style.right).toBe('15px')

    // A native RTL scrollbar can occupy the left side; account for wrap borders too.
    defineGetter(wrap.element, 'clientLeft', 17)
    defineGetter(wrap.element, 'clientTop', 2)
    defineGetter(wrap.element, 'clientWidth', 181)
    defineGetter(wrap.element, 'clientHeight', 181)
    wrapper.vm.update()
    await nextTick()
    expect(leftMask.element.style.left).toBe('17px')
    expect(rightMask.element.style.right).toBe('2px')
    expect(leftMask.element.style.top).toBe('2px')
    expect(leftMask.element.style.height).toBe('181px')
    expect(topMask.element.style.left).toBe('17px')
    expect(topMask.element.style.width).toBe('181px')
  })
})
