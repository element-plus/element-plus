import { mount } from '@vue/test-utils'
import { makeScroll, defineGetter } from '@element-plus/test-utils'
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

    defineGetter(scrollDom, 'clientHeight', outerHeight)
    defineGetter(scrollDom, 'scrollHeight', innerHeight)

    await makeScroll(scrollDom, 'scrollTop', 100)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain('height: 40%; transform: translateY(50%); webkit-transform: translateY(50%)')
    await makeScroll(scrollDom, 'scrollTop', 300)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain('height: 40%; transform: translateY(150%); webkit-transform: translateY(150%)')
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

    defineGetter(scrollDom, 'clientWidth', outerWidth)
    defineGetter(scrollDom, 'scrollWidth', innerWidth)

    await makeScroll(scrollDom, 'scrollLeft', 100)
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain('width: 40%; transform: translateX(50%); webkit-transform: translateX(50%)')
    await makeScroll(scrollDom, 'scrollLeft', 300)
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain('width: 40%; transform: translateX(150%); webkit-transform: translateX(150%)')
  })
})
