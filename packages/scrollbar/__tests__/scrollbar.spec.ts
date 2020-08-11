import { mount } from '@vue/test-utils'
import Scrollbar from '../src/index'
const wait = (ms = 0) => (new Promise(resolve => setTimeout(() => resolve(), ms)))
const makeScroll = async (dom, name, number ) => {
  dom[name] = number
  dom.dispatchEvent(new CustomEvent('scroll'))
  // must use setTimeout instead of nextTick to wait dom change
  return await wait()
}
const _mount = (template: string) => mount({
  components: {
    'el-scrollbar': Scrollbar,
  },
  template,
})

describe('ScrollBar', () => {
  test('vertical', async () => {
    const outterHeight = 200
    const innerHeight = 500
    const wrapper = _mount(`
      <el-scrollbar style="height: ${outterHeight}px">
        <div style="height: ${innerHeight}px;"></div>
      </el-scrollbar>
`)
    Object.defineProperties(window.HTMLElement.prototype, {
      clientHeight: {
        get () {
          return outterHeight
        },
      },
      scrollHeight:{
        get () {
          return innerHeight
        },
      },
    })
    const scrollDom = wrapper.find('.el-scrollbar__wrap').element
    await makeScroll(scrollDom, 'scrollTop', 100)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain('height: 40%; transform: translateY(50%); webkit-transform: translateY(50%)')
    await makeScroll(scrollDom, 'scrollTop', 300)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain('height: 40%; transform: translateY(150%); webkit-transform: translateY(150%)')
  })

  test('horizontal', async () => {
    const outterWidth = 200
    const innerWidth = 500
    const wrapper = _mount(`
      <el-scrollbar style="height: 100px; width: ${outterWidth}px">
        <div style="height:100px; width: ${innerWidth}px;"></div>
      </el-scrollbar>
`)
    Object.defineProperties(window.HTMLElement.prototype, {
      clientWidth: {
        get () {
          return outterWidth
        },
      },
      scrollWidth:{
        get () {
          return innerWidth
        },
      },
    })
    const scrollDom = wrapper.find('.el-scrollbar__wrap').element
    await makeScroll(scrollDom, 'scrollLeft', 100)
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain('width: 40%; transform: translateX(50%); webkit-transform: translateX(50%)')
    await makeScroll(scrollDom, 'scrollLeft', 300)
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain('width: 40%; transform: translateX(150%); webkit-transform: translateX(150%)')
  })
})
