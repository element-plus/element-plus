import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { defineGetter, makeScroll } from '@element-plus/test-utils'
import Scrollbar from '../src/index.vue'

const _mount = (template: string) => mount({
  components: {
    'el-scrollbar': Scrollbar,
  },
  template,
})

describe('ScrollBar', () => {
  test('vertical', async () => {
    const outerHeight = 200
    const innerHeight = 500
    const wrapper = _mount(`
      <el-scrollbar style="height: ${outerHeight}px">
        <div style="height: ${innerHeight}px;"></div>
      </el-scrollbar>
    `)

    const scrollDom = wrapper.find('.el-scrollbar__wrap').element

    const clientHeightRestore = defineGetter(scrollDom, 'clientHeight', outerHeight)
    const scrollHeightRestore = defineGetter(scrollDom, 'scrollHeight', innerHeight)

    await makeScroll(scrollDom, 'scrollTop', 100)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain('height: 40%; transform: translateY(50%); webkit-transform: translateY(50%)')
    await makeScroll(scrollDom, 'scrollTop', 300)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain('height: 40%; transform: translateY(150%); webkit-transform: translateY(150%)')
    clientHeightRestore()
    scrollHeightRestore()
  })

  test('horizontal', async () => {
    const outerWidth = 200
    const innerWidth = 500
    const wrapper = _mount(`
      <el-scrollbar style="height: 100px; width: ${outerWidth}px">
        <div style="height:100px; width: ${innerWidth}px;"></div>
      </el-scrollbar>
    `)

    const scrollDom = wrapper.find('.el-scrollbar__wrap').element

    const clientWidthRestore = defineGetter(scrollDom, 'clientWidth', outerWidth)
    const scrollWidthRestore = defineGetter(scrollDom, 'scrollWidth', innerWidth)

    await makeScroll(scrollDom, 'scrollLeft', 100)
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain('width: 40%; transform: translateX(50%); webkit-transform: translateX(50%)')
    await makeScroll(scrollDom, 'scrollLeft', 300)
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain('width: 40%; transform: translateX(150%); webkit-transform: translateX(150%)')
    clientWidthRestore()
    scrollWidthRestore()
  })

  test('both vertical and horizontal', async () => {
    const outerHeight = 200
    const innerHeight = 500
    const outerWidth = 200
    const innerWidth = 500
    const wrapper = _mount(`
      <el-scrollbar style="height: ${outerHeight}px; width: ${outerWidth}px;">
        <div style="height: ${innerHeight}px; width: ${innerWidth}px;"></div>
      </el-scrollbar>
    `)

    const scrollDom = wrapper.find('.el-scrollbar__wrap').element

    const clientHeightRestore = defineGetter(scrollDom, 'clientHeight', outerHeight)
    const scrollHeightRestore = defineGetter(scrollDom, 'scrollHeight', innerHeight)
    const clientWidthRestore = defineGetter(scrollDom, 'clientWidth', outerWidth)
    const scrollWidthRestore = defineGetter(scrollDom, 'scrollWidth', innerWidth)

    await makeScroll(scrollDom, 'scrollTop', 100)
    await makeScroll(scrollDom, 'scrollLeft', 100)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain('height: 40%; transform: translateY(50%); webkit-transform: translateY(50%)')
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain('width: 40%; transform: translateX(50%); webkit-transform: translateX(50%)')
    await makeScroll(scrollDom, 'scrollTop', 300)
    await makeScroll(scrollDom, 'scrollLeft', 300)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain('height: 40%; transform: translateY(150%); webkit-transform: translateY(150%)')
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain('width: 40%; transform: translateX(150%); webkit-transform: translateX(150%)')

    clientHeightRestore()
    scrollHeightRestore()
    clientWidthRestore()
    scrollWidthRestore()
  })

  test('should render height props', async () => {
    const outerHeight = 200
    const innerHeight = 500
    const wrapper = _mount(`
      <el-scrollbar height="${outerHeight}px">
        <div style="height: ${innerHeight}px;"></div>
      </el-scrollbar>
    `)

    expect(wrapper.find('.el-scrollbar__wrap').attributes('style')).toContain('height: 200px;')
  })

  test('should render max-height props', async () => {
    const outerHeight = 200
    const innerHeight = 100
    const wrapper = _mount(`
      <el-scrollbar max-height="${outerHeight}px">
        <div style="height: ${innerHeight}px;"></div>
      </el-scrollbar>
    `)

    expect(wrapper.find('.el-scrollbar__wrap').attributes('style')).toContain('max-height: 200px;')
  })

  test('should render always props', async () => {
    const outerHeight = 200
    const innerHeight = 500
    const wrapper = _mount(`
      <el-scrollbar height="${outerHeight}px" always>
        <div style="height: ${innerHeight}px;"></div>
      </el-scrollbar>
    `)

    expect(wrapper.find('.el-scrollbar__bar').attributes('style')).toBeFalsy()
  })

  test('set scrollTop & scrollLeft', async () => {
    const outerHeight = 200
    const innerHeight = 500
    const outerWidth = 200
    const innerWidth = 500
    const wrapper = _mount(`
      <el-scrollbar ref="scrollbar" style="height: ${outerHeight}px; width: ${outerWidth}px;">
        <div style="height: ${innerHeight}px; width: ${innerWidth}px;"></div>
      </el-scrollbar>
    `)

    const scrollbar = wrapper.vm.$refs.scrollbar as any
    const scrollDom = wrapper.find('.el-scrollbar__wrap').element

    const clientHeightRestore = defineGetter(scrollDom, 'clientHeight', outerHeight)
    const scrollHeightRestore = defineGetter(scrollDom, 'scrollHeight', innerHeight)
    const clientWidthRestore = defineGetter(scrollDom, 'clientWidth', outerWidth)
    const scrollWidthRestore = defineGetter(scrollDom, 'scrollWidth', innerWidth)

    scrollbar.setScrollTop(100)
    await nextTick()
    scrollbar.setScrollLeft(100)
    await nextTick()

    expect(wrapper.find('.is-vertical div').attributes('style')).toContain('height: 40%; transform: translateY(0%); webkit-transform: translateY(0%);')
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain('width: 40%; transform: translateX(0%); webkit-transform: translateX(0%);')

    clientHeightRestore()
    scrollHeightRestore()
    clientWidthRestore()
    scrollWidthRestore()
  })
})
