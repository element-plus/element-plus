import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import makeScroll from '@element-plus/test-utils/make-scroll'
import defineGetter from '@element-plus/test-utils/define-getter'
import Scrollbar from '../src/scrollbar.vue'
import Thumb from '../src/thumb.vue'

import type { VueWrapper } from '@vue/test-utils'

// jsdom drops `max()` from inline styles, so read the size from the prop
const getThumbSize = (wrapper: VueWrapper, vertical: boolean) =>
  wrapper
    .findAllComponents(Thumb)
    .find((thumb) => thumb.props('vertical') === vertical)!
    .props('size')

describe('ScrollBar', () => {
  test('vertical', async () => {
    const outerHeight = 204
    const innerHeight = 500
    const wrapper = mount(() => (
      <Scrollbar style={`height: ${outerHeight}px;`}>
        <div style={`height: ${innerHeight}px;`}></div>
      </Scrollbar>
    ))

    const scrollDom = wrapper.find('.el-scrollbar__wrap').element

    const offsetHeightRestore = defineGetter(
      scrollDom,
      'offsetHeight',
      outerHeight
    )
    const clientHeightRestore = defineGetter(
      scrollDom,
      'clientHeight',
      outerHeight
    )
    const scrollHeightRestore = defineGetter(
      scrollDom,
      'scrollHeight',
      innerHeight
    )

    await makeScroll(scrollDom, 'scrollTop', 148)
    expect(getThumbSize(wrapper, true)).toBe('max(20px, 40.8%)')
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'top: 50%; transform: translateY(-50%);'
    )
    await makeScroll(scrollDom, 'scrollTop', 296)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'top: 100%; transform: translateY(-100%);'
    )
    offsetHeightRestore()
    clientHeightRestore()
    scrollHeightRestore()
  })

  test('horizontal', async () => {
    const outerWidth = 204
    const innerWidth = 500
    const wrapper = mount(() => (
      <Scrollbar style={`height: 100px; width: ${outerWidth}px;`}>
        <div style={`height: 100px; width: ${innerWidth}px;`}></div>
      </Scrollbar>
    ))

    const scrollDom = wrapper.find('.el-scrollbar__wrap').element

    const offsetWidthRestore = defineGetter(
      scrollDom,
      'offsetWidth',
      outerWidth
    )
    const clientWidthRestore = defineGetter(
      scrollDom,
      'clientWidth',
      outerWidth
    )
    const scrollWidthRestore = defineGetter(
      scrollDom,
      'scrollWidth',
      innerWidth
    )

    await makeScroll(scrollDom, 'scrollLeft', 148)
    expect(getThumbSize(wrapper, false)).toBe('max(20px, 40.8%)')
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain(
      'left: 50%; transform: translateX(-50%);'
    )
    await makeScroll(scrollDom, 'scrollLeft', 296)
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain(
      'left: 100%; transform: translateX(-100%);'
    )
    offsetWidthRestore()
    clientWidthRestore()
    scrollWidthRestore()
  })

  test('both vertical and horizontal', async () => {
    const outerHeight = 204
    const innerHeight = 500
    const outerWidth = 204
    const innerWidth = 500
    const wrapper = mount(() => (
      <Scrollbar style={`height: ${outerHeight}px; width: ${outerWidth}px;`}>
        <div style={`height: ${innerHeight}px; width: ${innerWidth}px;`}></div>
      </Scrollbar>
    ))

    const scrollDom = wrapper.find('.el-scrollbar__wrap').element

    const offsetHeightRestore = defineGetter(
      scrollDom,
      'offsetHeight',
      outerHeight
    )
    const clientHeightRestore = defineGetter(
      scrollDom,
      'clientHeight',
      outerHeight
    )
    const scrollHeightRestore = defineGetter(
      scrollDom,
      'scrollHeight',
      innerHeight
    )
    const offsetWidthRestore = defineGetter(
      scrollDom,
      'offsetWidth',
      outerWidth
    )
    const clientWidthRestore = defineGetter(
      scrollDom,
      'clientWidth',
      outerWidth
    )
    const scrollWidthRestore = defineGetter(
      scrollDom,
      'scrollWidth',
      innerWidth
    )

    await makeScroll(scrollDom, 'scrollTop', 148)
    await makeScroll(scrollDom, 'scrollLeft', 148)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'top: 50%; transform: translateY(-50%);'
    )
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain(
      'left: 50%; transform: translateX(-50%);'
    )
    await makeScroll(scrollDom, 'scrollTop', 296)
    await makeScroll(scrollDom, 'scrollLeft', 296)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'top: 100%; transform: translateY(-100%);'
    )
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain(
      'left: 100%; transform: translateX(-100%);'
    )

    offsetHeightRestore()
    clientHeightRestore()
    scrollHeightRestore()
    offsetWidthRestore()
    clientWidthRestore()
    scrollWidthRestore()
  })

  test('should render height props', async () => {
    const outerHeight = 204
    const innerHeight = 500
    const wrapper = mount(() => (
      <Scrollbar height={`${outerHeight}px`}>
        <div style={`height: ${innerHeight}px;`}></div>
      </Scrollbar>
    ))

    expect(wrapper.find('.el-scrollbar__wrap').attributes('style')).toContain(
      'height: 204px;'
    )
  })

  test('should render max-height props', async () => {
    const outerHeight = 204
    const innerHeight = 100
    const wrapper = mount(() => (
      <Scrollbar max-height={`${outerHeight}px`}>
        <div style={`height: ${innerHeight}px;`}></div>
      </Scrollbar>
    ))

    expect(wrapper.find('.el-scrollbar__wrap').attributes('style')).toContain(
      'max-height: 204px;'
    )
  })

  test('should render always props', async () => {
    const outerHeight = 204
    const innerHeight = 500
    const wrapper = mount(() => (
      <Scrollbar height={`${outerHeight}px`} always>
        <div style={`height: ${innerHeight}px;`}></div>
      </Scrollbar>
    ))

    expect(wrapper.find('.el-scrollbar__bar').attributes('style')).toBeFalsy()
  })

  test('set scrollTop & scrollLeft', async () => {
    const outerHeight = 204
    const innerHeight = 500
    const outerWidth = 204
    const innerWidth = 500
    const wrapper = mount({
      setup() {
        return () => (
          <Scrollbar
            ref="scrollbar"
            style={`height: ${outerHeight}px; width: ${outerWidth}px;`}
            always
          >
            <div
              style={`height: ${innerHeight}px; width: ${innerWidth}px;`}
            ></div>
          </Scrollbar>
        )
      },
    })

    const scrollbar = wrapper.findComponent({ ref: 'scrollbar' }).vm
    const scrollWrap = wrapper.find('.el-scrollbar__wrap')
    const scrollDom = scrollWrap.element

    const offsetHeightRestore = defineGetter(
      scrollDom,
      'offsetHeight',
      outerHeight
    )
    const clientHeightRestore = defineGetter(
      scrollDom,
      'clientHeight',
      outerHeight
    )
    const scrollHeightRestore = defineGetter(
      scrollDom,
      'scrollHeight',
      innerHeight
    )
    const offsetWidthRestore = defineGetter(
      scrollDom,
      'offsetWidth',
      outerWidth
    )
    const clientWidthRestore = defineGetter(
      scrollDom,
      'clientWidth',
      outerWidth
    )
    const scrollWidthRestore = defineGetter(
      scrollDom,
      'scrollWidth',
      innerWidth
    )

    scrollbar.setScrollTop(148)
    await nextTick()
    scrollWrap.trigger('scroll')
    await nextTick()
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'top: 50%; transform: translateY(-50%);'
    )

    scrollbar.setScrollLeft(148)
    await nextTick()
    scrollWrap.trigger('scroll')
    await nextTick()
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain(
      'left: 50%; transform: translateX(-50%);'
    )

    offsetHeightRestore()
    clientHeightRestore()
    scrollHeightRestore()
    offsetWidthRestore()
    clientWidthRestore()
    scrollWidthRestore()
  })

  test('should render min-size props', async () => {
    const outerHeight = 204
    const innerHeight = 10000
    const wrapper = mount(() => (
      <Scrollbar style={`height: ${outerHeight}px;`}>
        <div style={`height: ${innerHeight}px;`}></div>
      </Scrollbar>
    ))

    const scrollDom = wrapper.find('.el-scrollbar__wrap').element

    const offsetHeightRestore = defineGetter(
      scrollDom,
      'offsetHeight',
      outerHeight
    )
    const clientHeightRestore = defineGetter(
      scrollDom,
      'clientHeight',
      outerHeight
    )
    const scrollHeightRestore = defineGetter(
      scrollDom,
      'scrollHeight',
      innerHeight
    )

    await makeScroll(scrollDom, 'scrollTop', 0)
    expect(getThumbSize(wrapper, true)).toBe('max(20px, 2.04%)')
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'top: 0%; transform: translateY(0%);'
    )
    await makeScroll(scrollDom, 'scrollTop', innerHeight - outerHeight)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'top: 100%; transform: translateY(-100%);'
    )
    offsetHeightRestore()
    clientHeightRestore()
    scrollHeightRestore()
  })

  test('should hide the thumb without overflow', async () => {
    const outerHeight = 204
    const wrapper = mount(() => (
      <Scrollbar style={`height: ${outerHeight}px;`}>
        <div style="height: 100px;"></div>
      </Scrollbar>
    ))

    const scrollDom = wrapper.find('.el-scrollbar__wrap').element

    const offsetHeightRestore = defineGetter(
      scrollDom,
      'offsetHeight',
      outerHeight
    )
    const clientHeightRestore = defineGetter(
      scrollDom,
      'clientHeight',
      outerHeight
    )
    const scrollHeightRestore = defineGetter(
      scrollDom,
      'scrollHeight',
      outerHeight
    )

    await nextTick()
    expect(getThumbSize(wrapper, true)).toBe('')
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'top: 0%; transform: translateY(0%);'
    )
    offsetHeightRestore()
    clientHeightRestore()
    scrollHeightRestore()
  })

  describe('track shorter than the wrap', () => {
    const wrapSize = 500
    const scrollSize = 5000
    const trackStart = 100
    const trackSize = 400
    const thumbSize = 40

    const mountScrollbar = async (vertical: boolean) => {
      const wrapper = mount(
        () => (
          <Scrollbar style={`height: ${wrapSize}px; width: ${wrapSize}px;`}>
            <div style={`height: ${scrollSize}px; width: ${scrollSize}px;`} />
          </Scrollbar>
        ),
        { attachTo: document.body }
      )
      const size = vertical ? 'Height' : 'Width'
      const rect = { top: trackStart, left: trackStart } as DOMRect
      const wrap = wrapper.find('.el-scrollbar__wrap').element
      const track = wrapper.find(
        `.el-scrollbar__bar.is-${vertical ? 'vertical' : 'horizontal'}`
      )
      const thumb = track.find('.el-scrollbar__thumb')

      defineGetter(wrap, `offset${size}`, wrapSize)
      defineGetter(wrap, `client${size}`, wrapSize)
      defineGetter(wrap, `scroll${size}`, scrollSize)
      defineGetter(track.element, `client${size}`, trackSize)
      defineGetter(thumb.element, `offset${size}`, thumbSize)
      vi.spyOn(track.element, 'getBoundingClientRect').mockReturnValue(rect)
      vi.spyOn(thumb.element, 'getBoundingClientRect').mockReturnValue(rect)
      await nextTick()

      return { wrapper, wrap, track, thumb }
    }

    test('should keep the thumb under the cursor while dragging', async () => {
      const { wrapper, wrap, thumb } = await mountScrollbar(true)
      // max scroll is 4500 and the thumb travels 400 - 40 = 360px
      await thumb.trigger('mousedown', { clientY: trackStart + 10 })

      document.dispatchEvent(
        new MouseEvent('mousemove', { clientY: trackStart + 10 + 180 })
      )
      expect(wrap.scrollTop).toBe(2250)

      document.dispatchEvent(
        new MouseEvent('mousemove', { clientY: trackStart + 10 + 360 })
      )
      expect(wrap.scrollTop).toBe(4500)

      document.dispatchEvent(
        new MouseEvent('mousemove', { clientY: trackStart + 10 + 1000 })
      )
      expect(wrap.scrollTop).toBe(4500)

      document.dispatchEvent(new MouseEvent('mouseup'))
      wrapper.unmount()
    })

    test('should center the thumb on the clicked point of the track', async () => {
      const { wrapper, wrap, track } = await mountScrollbar(false)
      // the thumb is laid out in the content box of the track
      ;(track.element as HTMLElement).style.padding = '0 10px'

      // max scroll is 4500 and the thumb travels 400 - 20 - 40 = 340px
      await track.trigger('mousedown', {
        clientX: trackStart + 10 + 170 + thumbSize / 2,
      })
      expect(wrap.scrollLeft).toBe(2250)

      await track.trigger('mousedown', { clientX: trackStart })
      expect(wrap.scrollLeft).toBe(0)

      wrapper.unmount()
    })
  })

  test('should render tag props', async () => {
    const wrapper = mount(() => (
      <Scrollbar tag="ul">
        {[1, 2, 3].map((item) => (
          <li>{item}</li>
        ))}
      </Scrollbar>
    ))

    expect(
      wrapper.find('.el-scrollbar__view').element instanceof HTMLUListElement
    ).toBeTruthy()
  })

  test('should render wrap-style props', async () => {
    const wrapStyle = 'background: red;'
    const wrapper = mount(() => <Scrollbar wrap-style={wrapStyle} />)

    expect(wrapper.find('.el-scrollbar__wrap').attributes('style')).toContain(
      wrapStyle
    )
  })

  test('should render wrap-class props', async () => {
    const wrapClass = 'test-wrap-class'
    const wrapper = mount(() => <Scrollbar wrap-class={wrapClass} />)

    expect(wrapper.find('.el-scrollbar__wrap').classes()).toContain(wrapClass)
  })

  test('should render view-style props', async () => {
    const viewStyle = 'display: inline-block;'
    const wrapper = mount(() => <Scrollbar view-style={viewStyle} />)

    expect(wrapper.find('.el-scrollbar__view').attributes('style')).toContain(
      viewStyle
    )
  })

  test('should render view-class props', async () => {
    const viewClass = 'test-view-class'
    const wrapper = mount(() => <Scrollbar view-class={viewClass} />)

    expect(wrapper.find('.el-scrollbar__view').classes()).toContain(viewClass)
  })

  test('should not bubble up click event on click scrollbar', async () => {
    const parentClick = vi.fn()
    const wrapper = mount(() => (
      <div onClick={parentClick}>
        <Scrollbar style={{ width: '100px' }}>
          ILoveRemILoveRemILoveRem
        </Scrollbar>
      </div>
    ))
    const scrollbar = wrapper.findComponent(Thumb)
    await scrollbar.trigger('click')
    expect(parentClick).toHaveBeenCalledTimes(0)
  })

  test('should emit end-reached event foreach direction', async () => {
    const endReached = vi.fn()
    const outerHeight = 204
    const innerHeight = 500
    const outerWidth = 204
    const innerWidth = 500
    const wrapper = mount(() => (
      <Scrollbar
        style={`height: ${outerHeight}px; width: ${outerWidth}px;`}
        onEnd-reached={endReached}
      >
        <div style={`height: ${innerHeight}px; width: ${innerWidth}px;`}></div>
      </Scrollbar>
    ))

    const scrollDom = wrapper.find('.el-scrollbar__wrap').element

    const offsetHeightRestore = defineGetter(
      scrollDom,
      'offsetHeight',
      outerHeight
    )
    const scrollHeightRestore = defineGetter(
      scrollDom,
      'scrollHeight',
      innerHeight
    )
    const offsetWidthRestore = defineGetter(
      scrollDom,
      'offsetWidth',
      outerWidth
    )
    const scrollWidthRestore = defineGetter(
      scrollDom,
      'scrollWidth',
      innerWidth
    )

    await makeScroll(scrollDom, 'scrollTop', innerHeight)
    expect(endReached).toHaveBeenCalledWith('bottom')
    endReached.mockReset()
    await makeScroll(scrollDom, 'scrollTop', 0)
    expect(endReached).toHaveBeenCalledWith('top')
    endReached.mockReset()
    await makeScroll(scrollDom, 'scrollLeft', innerWidth)
    expect(endReached).toHaveBeenCalledWith('right')
    endReached.mockReset()
    await makeScroll(scrollDom, 'scrollLeft', 0)
    expect(endReached).toHaveBeenCalledWith('left')
    endReached.mockReset()
    await makeScroll(scrollDom, 'scrollLeft', innerWidth / 2)
    expect(endReached).not.toHaveBeenCalled()
    endReached.mockReset()
    await makeScroll(scrollDom, 'scrollTop', innerHeight / 2)
    expect(endReached).not.toHaveBeenCalled()

    offsetHeightRestore()
    scrollHeightRestore()
    offsetWidthRestore()
    scrollWidthRestore()
  })
})
