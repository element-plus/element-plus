import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import makeScroll from '@element-plus/test-utils/make-scroll'
import defineGetter from '@element-plus/test-utils/define-getter'
import Scrollbar from '../src/scrollbar.vue'

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
    const scrollHeightRestore = defineGetter(
      scrollDom,
      'scrollHeight',
      innerHeight
    )

    await makeScroll(scrollDom, 'scrollTop', 100)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'transform: translateY(50%); height: 80px;'
    )
    await makeScroll(scrollDom, 'scrollTop', 300)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'transform: translateY(150%); height: 80px;'
    )
    offsetHeightRestore()
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
    const scrollWidthRestore = defineGetter(
      scrollDom,
      'scrollWidth',
      innerWidth
    )

    await makeScroll(scrollDom, 'scrollLeft', 100)
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain(
      'transform: translateX(50%); width: 80px;'
    )
    await makeScroll(scrollDom, 'scrollLeft', 300)
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain(
      'transform: translateX(150%); width: 80px;'
    )
    offsetWidthRestore()
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

    await makeScroll(scrollDom, 'scrollTop', 100)
    await makeScroll(scrollDom, 'scrollLeft', 100)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'transform: translateY(50%); height: 80px;'
    )
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain(
      'transform: translateX(50%); width: 80px;'
    )
    await makeScroll(scrollDom, 'scrollTop', 300)
    await makeScroll(scrollDom, 'scrollLeft', 300)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'transform: translateY(150%); height: 80px;'
    )
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain(
      'transform: translateX(150%); width: 80px;'
    )

    offsetHeightRestore()
    scrollHeightRestore()
    offsetWidthRestore()
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

    scrollbar.setScrollTop(100)
    await nextTick()
    scrollbar.setScrollLeft(100)
    await nextTick()
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'transform: translateY(0%); height: 80px;'
    )
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain(
      'transform: translateX(0%); width: 80px;'
    )

    offsetHeightRestore()
    scrollHeightRestore()
    offsetWidthRestore()
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
    const scrollHeightRestore = defineGetter(
      scrollDom,
      'scrollHeight',
      innerHeight
    )

    await makeScroll(scrollDom, 'scrollTop', 0)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'transform: translateY(0%); height: 20px;'
    )
    offsetHeightRestore()
    scrollHeightRestore()
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
})
